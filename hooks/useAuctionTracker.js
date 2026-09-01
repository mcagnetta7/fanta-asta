"use client";

import { useState, useEffect, useMemo, useCallback } from "react";

export const STORAGE_KEY = "fanta-asta-auction-v1";
export const INITIAL_BUDGET = 500;

export const ROLE_LIMITS = {
  portieri: 3,
  difensori: 8,
  centrocampisti: 8,
  attaccanti: 6,
};

export const ROLES = ["portieri", "difensori", "centrocampisti", "attaccanti"];

export const ROLE_LABELS = {
  portieri: "Portieri",
  difensori: "Difensori",
  centrocampisti: "Centrocampisti",
  attaccanti: "Attaccanti",
};

export const TOTAL_SLOTS = ROLES.reduce((sum, r) => sum + ROLE_LIMITS[r], 0); // 25

function emptyPurchases() {
  return { portieri: [], difensori: [], centrocampisti: [], attaccanti: [] };
}

function generateId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

// Legge il localStorage in modo difensivo: JSON corrotto o forma inattesa
// non devono rompere l'app, si torna semplicemente allo stato vuoto.
function loadPurchases() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyPurchases();

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return emptyPurchases();

    const result = emptyPurchases();
    ROLES.forEach((ruolo) => {
      if (!Array.isArray(parsed[ruolo])) return;
      result[ruolo] = parsed[ruolo]
        .filter((p) => p && typeof p === "object")
        .map((p) => ({
          id: typeof p.id === "string" && p.id ? p.id : generateId(),
          nome: typeof p.nome === "string" ? p.nome : "",
          crediti: Number.isFinite(Number(p.crediti)) ? Number(p.crediti) : 0,
        }))
        .filter((p) => p.nome !== "");
    });
    return result;
  } catch {
    return emptyPurchases();
  }
}

export function useAuctionTracker() {
  const [purchases, setPurchases] = useState(emptyPurchases);
  const [hydrated, setHydrated] = useState(false);

  // Caricamento solo dopo il mount: mai durante il server rendering.
  useEffect(() => {
    setPurchases(loadPurchases());
    setHydrated(true);
  }, []);

  // Salvataggio solo dopo l'idratazione, altrimenti il primo effect
  // sovrascriverebbe i dati salvati con lo stato vuoto iniziale.
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(purchases));
    } catch {
      // storage pieno o non disponibile: l'app continua a funzionare in memoria
    }
  }, [purchases, hydrated]);

  const addPurchase = useCallback((ruolo, nome, crediti) => {
    if (!ROLES.includes(ruolo)) return;
    const nomePulito = String(nome).trim();
    const creditiNum = Number(crediti);
    if (!nomePulito || !Number.isFinite(creditiNum) || creditiNum < 0) return;

    setPurchases((prev) => ({
      ...prev,
      [ruolo]: [...prev[ruolo], { id: generateId(), nome: nomePulito, crediti: creditiNum }],
    }));
  }, []);

  const updatePurchase = useCallback((ruolo, id, patch) => {
    if (!ROLES.includes(ruolo)) return;
    setPurchases((prev) => ({
      ...prev,
      [ruolo]: prev[ruolo].map((p) => {
        if (p.id !== id) return p;
        const next = { ...p };
        if (patch.nome !== undefined) {
          const nomePulito = String(patch.nome).trim();
          if (nomePulito) next.nome = nomePulito;
        }
        if (patch.crediti !== undefined) {
          const creditiNum = Number(patch.crediti);
          if (Number.isFinite(creditiNum) && creditiNum >= 0) next.crediti = creditiNum;
        }
        return next;
      }),
    }));
  }, []);

  const deletePurchase = useCallback((ruolo, id) => {
    if (!ROLES.includes(ruolo)) return;
    setPurchases((prev) => ({
      ...prev,
      [ruolo]: prev[ruolo].filter((p) => p.id !== id),
    }));
  }, []);

  const resetAuction = useCallback(() => {
    setPurchases(emptyPurchases());
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignorato: lo stato in memoria è comunque azzerato
    }
  }, []);

  // Tutti i totali sono derivati, mai persistiti: nessuna inconsistenza possibile.
  const roleTotals = useMemo(() => {
    const totals = {};
    ROLES.forEach((ruolo) => {
      const lista = purchases[ruolo] || [];
      const crediti = lista.reduce((sum, p) => sum + p.crediti, 0);
      totals[ruolo] = {
        count: lista.length,
        crediti,
        limite: ROLE_LIMITS[ruolo],
        over: lista.length > ROLE_LIMITS[ruolo],
      };
    });
    return totals;
  }, [purchases]);

  const totalSpent = useMemo(
    () => ROLES.reduce((sum, ruolo) => sum + roleTotals[ruolo].crediti, 0),
    [roleTotals]
  );

  const totalPlayers = useMemo(
    () => ROLES.reduce((sum, ruolo) => sum + roleTotals[ruolo].count, 0),
    [roleTotals]
  );

  const remainingCredits = INITIAL_BUDGET - totalSpent;
  const isOverBudget = remainingCredits < 0;

  return {
    purchases,
    hydrated,
    addPurchase,
    updatePurchase,
    deletePurchase,
    resetAuction,
    roleTotals,
    totalSpent,
    totalPlayers,
    remainingCredits,
    isOverBudget,
  };
}
