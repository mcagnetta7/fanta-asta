"use client";

import { useState, useEffect } from "react";
import {
  useAuctionTracker,
  INITIAL_BUDGET,
  ROLES,
  ROLE_LABELS,
  TOTAL_SLOTS,
} from "@/hooks/useAuctionTracker";

const INPUT_CLASS =
  "w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent";

function RoleSection({ ruolo, lista, totals, onAdd, onUpdate, onDelete }) {
  const [aperta, setAperta] = useState(true);
  const [nome, setNome] = useState("");
  const [crediti, setCrediti] = useState("");
  const [errore, setErrore] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editNome, setEditNome] = useState("");
  const [editCrediti, setEditCrediti] = useState("");
  const [confermaDelete, setConfermaDelete] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    const nomePulito = nome.trim();
    if (!nomePulito) {
      setErrore("Inserisci il nome del giocatore");
      return;
    }
    if (crediti === "") {
      setErrore("Inserisci i crediti spesi");
      return;
    }
    const creditiNum = Number(crediti);
    if (!Number.isFinite(creditiNum) || creditiNum < 0) {
      setErrore("I crediti devono essere un numero valido");
      return;
    }
    onAdd(ruolo, nomePulito, creditiNum);
    setNome("");
    setCrediti("");
    setErrore("");
  };

  const startEdit = (p) => {
    setEditingId(p.id);
    setEditNome(p.nome);
    setEditCrediti(String(p.crediti));
    setConfermaDelete(null);
  };

  const saveEdit = (id) => {
    const nomePulito = editNome.trim();
    const creditiNum = Number(editCrediti);
    if (!nomePulito || !Number.isFinite(creditiNum) || creditiNum < 0) return;
    onUpdate(ruolo, id, { nome: nomePulito, crediti: creditiNum });
    setEditingId(null);
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-800">
      <button
        onClick={() => setAperta(!aperta)}
        aria-expanded={aperta}
        aria-label={`${aperta ? "Comprimi" : "Espandi"} sezione ${ROLE_LABELS[ruolo]}`}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="flex items-center gap-2">
          <span className="text-gray-400 text-xs">{aperta ? "▼" : "▶"}</span>
          <span className="font-bold text-gray-900 dark:text-white text-sm uppercase">
            {ROLE_LABELS[ruolo]}
          </span>
        </span>
        <span className="flex items-center gap-2 text-xs">
          <span
            className={`font-semibold ${
              totals.over ? "text-red-600 dark:text-red-400" : "text-gray-600 dark:text-gray-400"
            }`}
          >
            {totals.count}/{totals.limite}
          </span>
          <span className="text-gray-400">·</span>
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            {totals.crediti} cr
          </span>
        </span>
      </button>

      {aperta && (
        <div className="px-4 pb-4">
          {totals.over && (
            <p className="text-xs text-red-600 dark:text-red-400 mb-2">
              ⚠️ Hai superato i {totals.limite} slot previsti per questo ruolo
            </p>
          )}

          {lista.length > 0 && (
            <ul className="space-y-1 mb-3">
              {lista.map((p) => (
                <li
                  key={p.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-700"
                >
                  {editingId === p.id ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={editNome}
                        onChange={(e) => setEditNome(e.target.value)}
                        aria-label="Modifica nome giocatore"
                        className={INPUT_CLASS}
                      />
                      <div className="flex gap-2">
                        <input
                          type="number"
                          min="0"
                          step="1"
                          value={editCrediti}
                          onChange={(e) => setEditCrediti(e.target.value)}
                          aria-label="Modifica crediti"
                          className={`${INPUT_CLASS} w-24`}
                        />
                        <button
                          onClick={() => saveEdit(p.id)}
                          className="px-3 py-2 bg-indigo-900 dark:bg-indigo-600 text-white rounded-lg text-xs font-medium hover:bg-indigo-800 dark:hover:bg-indigo-500 transition-colors"
                        >
                          Salva
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-3 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          Annulla
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm text-gray-900 dark:text-white truncate flex-1">
                        {p.nome}
                      </span>
                      <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                        {p.crediti} cr
                      </span>
                      {confermaDelete === p.id ? (
                        <span className="flex gap-1">
                          <button
                            onClick={() => {
                              onDelete(ruolo, p.id);
                              setConfermaDelete(null);
                            }}
                            aria-label={`Conferma eliminazione di ${p.nome}`}
                            className="px-2 py-1 bg-red-600 text-white rounded text-[10px] font-bold hover:bg-red-700 transition-colors"
                          >
                            Confermi?
                          </button>
                          <button
                            onClick={() => setConfermaDelete(null)}
                            aria-label="Annulla eliminazione"
                            className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded text-[10px] text-gray-600 dark:text-gray-400"
                          >
                            No
                          </button>
                        </span>
                      ) : (
                        <span className="flex gap-1">
                          <button
                            onClick={() => startEdit(p)}
                            aria-label={`Modifica ${p.nome}`}
                            title="Modifica"
                            className="p-1 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                          >
                            ✎
                          </button>
                          <button
                            onClick={() => setConfermaDelete(p.id)}
                            aria-label={`Elimina ${p.nome}`}
                            title="Elimina"
                            className="p-1 text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                          >
                            🗑
                          </button>
                        </span>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}

          <form onSubmit={handleAdd} className="space-y-2">
            <input
              type="text"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
                if (errore) setErrore("");
              }}
              placeholder="Nome giocatore"
              aria-label={`Nome giocatore da aggiungere in ${ROLE_LABELS[ruolo]}`}
              className={INPUT_CLASS}
            />
            <div className="flex gap-2">
              <input
                type="number"
                min="0"
                step="1"
                value={crediti}
                onChange={(e) => {
                  setCrediti(e.target.value);
                  if (errore) setErrore("");
                }}
                placeholder="Crediti"
                aria-label={`Crediti spesi in ${ROLE_LABELS[ruolo]}`}
                className={`${INPUT_CLASS} w-28`}
              />
              <button
                type="submit"
                className="flex-1 px-3 py-2 bg-indigo-900 dark:bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-800 dark:hover:bg-indigo-500 transition-colors"
              >
                + Aggiungi
              </button>
            </div>
            {errore && <p className="text-xs text-red-600 dark:text-red-400">{errore}</p>}
          </form>
        </div>
      )}
    </div>
  );
}

export default function AstaSidebar() {
  const [aperta, setAperta] = useState(false);
  const [confermaReset, setConfermaReset] = useState(false);
  const {
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
  } = useAuctionTracker();

  // Escape chiude la sidebar (senza perdere alcun dato)
  useEffect(() => {
    if (!aperta) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setAperta(false);
        setConfermaReset(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [aperta]);

  // Finché non è idratato non renderizziamo nulla: evita ogni mismatch
  // tra markup server e client sul badge dei crediti.
  if (!hydrated) return null;

  return (
    <>
      {/* Floating button */}
      {!aperta && (
        <button
          onClick={() => setAperta(true)}
          aria-label="Apri La mia asta"
          className="fixed bottom-6 right-6 z-40 flex flex-col items-center px-5 py-3 bg-indigo-900 dark:bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-800 dark:hover:bg-indigo-500 transition-colors"
        >
          <span className="text-xs font-bold uppercase tracking-wide">La mia asta</span>
          <span
            className={`text-lg font-bold leading-tight ${
              isOverBudget ? "text-red-300" : "text-indigo-100"
            }`}
          >
            {remainingCredits} cr
          </span>
        </button>
      )}

      {/* Backdrop */}
      {aperta && (
        <div
          onClick={() => {
            setAperta(false);
            setConfermaReset(false);
          }}
          aria-hidden="true"
          className="fixed inset-0 z-[60] bg-black/50"
        />
      )}

      {/* Pannello */}
      {aperta && (
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="La mia asta"
          className="fixed top-0 right-0 z-[60] h-full w-full sm:w-[380px] bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 dark:from-indigo-950 dark:to-indigo-900 px-4 py-4 text-white flex-shrink-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="text-xl font-bold">La mia asta</h2>
                <p className="text-xs text-indigo-200">Rosa acquistata</p>
              </div>
              <button
                onClick={() => {
                  setAperta(false);
                  setConfermaReset(false);
                }}
                aria-label="Chiudi La mia asta"
                className="text-2xl hover:bg-white/20 rounded-full w-9 h-9 flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-white/10 rounded-lg py-2">
                <div className="text-[10px] uppercase text-indigo-200">Budget</div>
                <div className="text-lg font-bold">{INITIAL_BUDGET}</div>
              </div>
              <div className="bg-white/10 rounded-lg py-2">
                <div className="text-[10px] uppercase text-indigo-200">Spesi</div>
                <div className="text-lg font-bold">{totalSpent}</div>
              </div>
              <div className={`rounded-lg py-2 ${isOverBudget ? "bg-red-500/40" : "bg-white/20"}`}>
                <div className="text-[10px] uppercase text-indigo-100">Rimasti</div>
                <div className="text-2xl font-bold">{remainingCredits}</div>
              </div>
            </div>
            <div className="mt-3 text-center text-xs text-indigo-200">
              Rosa: <span className="font-bold text-white">{totalPlayers}/{TOTAL_SLOTS}</span>
            </div>
          </div>

          {/* Sezioni ruolo */}
          <div className="flex-1 overflow-y-auto">
            {isOverBudget && (
              <div className="m-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 px-4 py-3 rounded">
                <p className="text-sm font-semibold text-red-800 dark:text-red-300">
                  Budget superato di {Math.abs(remainingCredits)} crediti
                </p>
              </div>
            )}

            {ROLES.map((ruolo) => (
              <RoleSection
                key={ruolo}
                ruolo={ruolo}
                lista={purchases[ruolo]}
                totals={roleTotals[ruolo]}
                onAdd={addPurchase}
                onUpdate={updatePurchase}
                onDelete={deletePurchase}
              />
            ))}

            {/* Riepilogo */}
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase mb-3">
                Riepilogo asta
              </h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 space-y-2">
                {ROLES.map((ruolo) => (
                  <div key={ruolo} className="flex justify-between text-sm">
                    <span className="text-gray-700 dark:text-gray-300">{ROLE_LABELS[ruolo]}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {roleTotals[ruolo].crediti} cr
                    </span>
                  </div>
                ))}
                <div className="border-t border-gray-300 dark:border-gray-600 pt-2 flex justify-between text-sm">
                  <span className="font-semibold text-gray-900 dark:text-white">Totale speso</span>
                  <span className="font-bold text-gray-900 dark:text-white">{totalSpent} cr</span>
                </div>
              </div>

              <div
                className={`mt-3 rounded-lg p-4 text-center border-2 ${
                  isOverBudget
                    ? "bg-red-50 dark:bg-red-900/20 border-red-400 dark:border-red-700"
                    : "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-400 dark:border-indigo-700"
                }`}
              >
                <div className="text-xs uppercase font-semibold text-gray-600 dark:text-gray-400 mb-1">
                  Crediti rimanenti
                </div>
                <div
                  className={`text-4xl font-bold ${
                    isOverBudget
                      ? "text-red-600 dark:text-red-400"
                      : "text-indigo-700 dark:text-indigo-400"
                  }`}
                >
                  {remainingCredits}
                </div>
              </div>

              {/* Reset */}
              <div className="mt-6">
                {confermaReset ? (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-800 rounded-lg p-3">
                    <p className="text-sm text-gray-900 dark:text-white mb-3">
                      Vuoi davvero cancellare tutti gli acquisti registrati?
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setConfermaReset(false)}
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        Annulla
                      </button>
                      <button
                        onClick={() => {
                          resetAuction();
                          setConfermaReset(false);
                        }}
                        aria-label="Conferma azzeramento asta"
                        className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                      >
                        Azzera asta
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfermaReset(true)}
                    aria-label="Azzera asta"
                    className="w-full px-4 py-2 border border-red-300 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg text-sm font-medium hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    Azzera asta
                  </button>
                )}
              </div>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
