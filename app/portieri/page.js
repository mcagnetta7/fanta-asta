"use client";

import { useState, useEffect, useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import Filters from "@/components/Filters";
import PlayerDetail from "@/components/PlayerDetail";
import { PORTIERI } from "@/data/portieri";
import { FASCE, TITOLARITA, FASCIA_COLORS, TAGS_PORTIERI } from "@/data/constants";

// Rimuove i segni diacritici per una ricerca insensibile agli accenti
function normalizza(testo) {
  return testo
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function PortieriPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [fasciaSelezionata, setFasciaSelezionata] = useState("");
  const [titolaritaSelezionata, setTitolaritaSelezionata] = useState("");
  const [tagsSelezionati, setTagsSelezionati] = useState([]);
  const [soloPreferiti, setSoloPreferiti] = useState(false);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [preferiti, setPreferiti] = useState(new Set());

  // Load preferiti from localStorage
  useEffect(() => {
    const favoriteIds = new Set();
    PORTIERI.forEach((p) => {
      const key = `favorite_portiere_${p.id}`;
      if (localStorage.getItem(key)) {
        favoriteIds.add(p.id);
      }
    });
    setPreferiti(favoriteIds);
  }, []);

  // Filter and search
  const filteredPortieri = useMemo(() => {
    let result = PORTIERI;

    // Search (accenti normalizzati: "tornqvist" trova "Törnqvist")
    if (searchTerm) {
      const term = normalizza(searchTerm);
      result = result.filter((p) =>
        normalizza(p.nome).includes(term) ||
        (p.nomeBreve && normalizza(p.nomeBreve).includes(term)) ||
        normalizza(p.squadra).includes(term)
      );
    }

    // Fascia filter
    if (fasciaSelezionata) {
      result = result.filter((p) => p.fascia === fasciaSelezionata);
    }

    // Titolarità filter
    if (titolaritaSelezionata) {
      result = result.filter((p) => p.titolare === titolaritaSelezionata);
    }

    // Tags filter
    if (tagsSelezionati.length > 0) {
      result = result.filter((p) =>
        tagsSelezionati.some((tag) => p.tags && p.tags.includes(tag))
      );
    }

    // Solo preferiti
    if (soloPreferiti) {
      result = result.filter((p) => preferiti.has(p.id));
    }

    return result;
  }, [searchTerm, fasciaSelezionata, titolaritaSelezionata, tagsSelezionati, soloPreferiti, preferiti]);

  const selectedPlayer = selectedPlayerId
    ? PORTIERI.find((p) => p.id === selectedPlayerId)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Portieri 2026/27
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Fasce, gerarchie, clean sheet e consigli per l'asta
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {filteredPortieri.length} portier{filteredPortieri.length !== 1 ? "i" : "e"} trovat{filteredPortieri.length !== 1 ? "i" : "o"}
          </p>
        </div>

        {/* Search */}
        <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Cerca portiere..." />

        {/* Filters */}
        <Filters
          fasce={FASCE}
          fasciaSelezionata={fasciaSelezionata}
          onFasciaChange={setFasciaSelezionata}
          titolarita={TITOLARITA}
          titolaritaSelezionata={titolaritaSelezionata}
          onTitolaritaChange={setTitolaritaSelezionata}
          tags={TAGS_PORTIERI}
          tagsSelezionati={tagsSelezionati}
          onTagsChange={setTagsSelezionati}
          soloPreferiti={soloPreferiti}
          onSoloPreferiti={setSoloPreferiti}
        />

        {/* Table */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
          {filteredPortieri.length > 0 ? (
            <PortieriTable
              portieri={filteredPortieri}
              onPortiereClick={setSelectedPlayerId}
              fasciaColors={FASCIA_COLORS}
              titolaritaList={TITOLARITA}
            />
          ) : (
            <div className="px-6 py-12 text-center text-gray-600 dark:text-gray-400">
              <p className="text-lg">Nessun portiere trovato</p>
              <p className="text-sm mt-2">Prova a modificare i filtri</p>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedPlayer && (
        <PlayerDetail
          portiere={selectedPlayer}
          onClose={() => setSelectedPlayerId(null)}
          fasciaColors={FASCIA_COLORS}
          titolaritaList={TITOLARITA}
        />
      )}
    </div>
  );
}

function formatDati(statistiche, statisticheTesto) {
  if (statisticheTesto) return statisticheTesto;
  if (!statistiche) return "—";
  const parts = [];
  if (statistiche.presenze != null) parts.push(`${statistiche.presenze} P`);
  if (statistiche.golSubiti != null) parts.push(`${statistiche.golSubiti} GS`);
  if (statistiche.cleanSheet != null) parts.push(`${statistiche.cleanSheet} CS`);
  if (statistiche.rigoriParati != null) parts.push(`${statistiche.rigoriParati} RP`);
  if (statistiche.assist != null) parts.push(`${statistiche.assist} A`);
  if (parts.length === 0) return "—";
  return parts.join(" · ");
}

function PortieriTable({ portieri, onPortiereClick, fasciaColors, titolaritaList }) {
  const getTitolaritaEmoji = (titolare) => {
    const tit = titolaritaList.find((t) => t.value === titolare);
    return tit ? tit.emoji : "—";
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">★</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Fascia</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Portiere</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Squadra</th>
            <th className="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">Stato</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Gerarchia</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Dati</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Profilo</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Strategia asta</th>
          </tr>
        </thead>
        <tbody>
          {portieri.map((p) => (
            <tr
              key={p.id}
              onClick={() => onPortiereClick(p.id)}
              className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer transition-colors"
            >
              <td className="px-4 py-3 text-center">
                <FavoritePortiere id={p.id} />
              </td>
              <td className="px-4 py-3">
                <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${fasciaColors?.[p.fascia] || "bg-gray-500 text-white"}`}>
                  {p.fascia}
                </span>
              </td>
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                {p.nome}
              </td>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                {p.squadra}
                {p.squadra.includes("*") && (
                  <div className="text-[10px] italic text-gray-500 dark:text-gray-500">non ufficiale</div>
                )}
              </td>
              <td className="px-4 py-3 text-center text-lg">{getTitolaritaEmoji(p.titolare)}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span>{p.gerarchia || "—"}</span>
                  {p.titolare === "ballottaggio" && (
                    <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-orange-500 text-white whitespace-nowrap">
                      APERTA
                    </span>
                  )}
                </div>
              </td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs whitespace-nowrap">{formatDati(p.statistiche, p.statisticheTesto)}</td>
              <td className="px-4 py-3 text-xs">
                {p.profilo ? (
                  <span className="inline-block px-2 py-1 rounded text-[10px] font-bold bg-cyan-600 text-white whitespace-nowrap">
                    {p.profilo}
                  </span>
                ) : (
                  "—"
                )}
              </td>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300 text-xs">{p.strategia || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FavoritePortiere({ id }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`favorite_portiere_${id}`);
    setIsFavorite(!!saved);
  }, [id]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newState = !isFavorite;
    setIsFavorite(newState);

    if (newState) {
      localStorage.setItem(`favorite_portiere_${id}`, "true");
    } else {
      localStorage.removeItem(`favorite_portiere_${id}`);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className="text-xl hover:scale-110 transition-transform"
      title={isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
    >
      {isFavorite ? "★" : "☆"}
    </button>
  );
}
