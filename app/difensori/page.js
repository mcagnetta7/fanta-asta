"use client";

import { useState, useEffect, useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import Filters from "@/components/Filters";
import PlayerDetail from "@/components/PlayerDetail";
import { DIFENSORI } from "@/data/difensori";
import { FASCE_DIFENSORI, TITOLARITA_DIFENSORI, TAGS_DIFENSORI, FASCIA_COLORS_DIFENSORI } from "@/data/constants";

export default function DifensoriPage() {
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
    DIFENSORI.forEach((d) => {
      const key = `favorite_difensore_${d.id}`;
      if (localStorage.getItem(key)) {
        favoriteIds.add(d.id);
      }
    });
    setPreferiti(favoriteIds);
  }, []);

  // Filter and search
  const filteredDifensori = useMemo(() => {
    let result = DIFENSORI;

    // Search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter((d) =>
        d.nome.toLowerCase().includes(term) ||
        (d.nomeBreve && d.nomeBreve.toLowerCase().includes(term)) ||
        d.squadra.toLowerCase().includes(term)
      );
    }

    // Fascia filter
    if (fasciaSelezionata) {
      result = result.filter((d) => d.fascia === fasciaSelezionata);
    }

    // Stato filter
    if (titolaritaSelezionata) {
      result = result.filter((d) => d.titolare === titolaritaSelezionata);
    }

    // Tags filter
    if (tagsSelezionati.length > 0) {
      result = result.filter((d) =>
        tagsSelezionati.some((tag) => d.tags && d.tags.includes(tag))
      );
    }

    // Solo preferiti
    if (soloPreferiti) {
      result = result.filter((d) => preferiti.has(d.id));
    }

    return result;
  }, [searchTerm, fasciaSelezionata, titolaritaSelezionata, tagsSelezionati, soloPreferiti, preferiti]);

  const selectedDifensore = selectedPlayerId
    ? DIFENSORI.find((d) => d.id === selectedPlayerId)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Difensori 2026/27
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Fasce, titolarità, bonus, modificatore e consigli per l'asta
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {filteredDifensori.length} difensor{filteredDifensori.length !== 1 ? "i" : "e"} trovat{filteredDifensori.length !== 1 ? "i" : "o"}
          </p>
        </div>

        {/* Search */}
        <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Cerca difensore..." />

        {/* Filters */}
        <Filters
          fasce={FASCE_DIFENSORI}
          fasciaSelezionata={fasciaSelezionata}
          onFasciaChange={setFasciaSelezionata}
          titolarita={TITOLARITA_DIFENSORI}
          titolaritaSelezionata={titolaritaSelezionata}
          onTitolaritaChange={setTitolaritaSelezionata}
          tags={TAGS_DIFENSORI}
          tagsSelezionati={tagsSelezionati}
          onTagsChange={setTagsSelezionati}
          soloPreferiti={soloPreferiti}
          onSoloPreferiti={setSoloPreferiti}
        />

        {/* Table */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
          {filteredDifensori.length > 0 ? (
            <DifensoriTable
              difensori={filteredDifensori}
              onDifensoreClick={setSelectedPlayerId}
              fasciaColors={FASCIA_COLORS_DIFENSORI}
              titolaritaList={TITOLARITA_DIFENSORI}
            />
          ) : (
            <div className="px-6 py-12 text-center text-gray-600 dark:text-gray-400">
              <p className="text-lg">Nessun difensore trovato</p>
              <p className="text-sm mt-2">Prova a modificare i filtri</p>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedDifensore && (
        <PlayerDetail
          portiere={selectedDifensore}
          onClose={() => setSelectedPlayerId(null)}
          fasciaColors={FASCIA_COLORS_DIFENSORI}
          titolaritaList={TITOLARITA_DIFENSORI}
        />
      )}
    </div>
  );
}

function formatDati(statistiche, statisticheTesto) {
  const parts = [];
  if (statistiche) {
    if (statistiche.presenze != null) parts.push(`${statistiche.presenze} P`);
    if (statistiche.gol != null) parts.push(`${statistiche.gol} G`);
    if (statistiche.assist != null) parts.push(`${statistiche.assist} A`);
    if (statistiche.fantamedia != null) parts.push(`FM ${statistiche.fantamedia.toString().replace(".", ",")}`);
    if (statistiche.mediaVoto != null) parts.push(`MV ${statistiche.mediaVoto.toString().replace(".", ",")}`);
  }
  if (parts.length > 0) return parts.join(" · ");
  if (statisticheTesto) return statisticheTesto;
  return "—";
}

function DifensoriTable({ difensori, onDifensoreClick, fasciaColors, titolaritaList }) {
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
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Giocatore</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Squadra</th>
            <th className="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">Stato</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Gerarchia</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Dati</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Profilo</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Strategia asta</th>
          </tr>
        </thead>
        <tbody>
          {difensori.map((d) => (
            <tr
              key={d.id}
              onClick={() => onDifensoreClick(d.id)}
              className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer transition-colors"
            >
              <td className="px-4 py-3 text-center">
                <FavoriteDifensore id={d.id} />
              </td>
              <td className="px-4 py-3">
                <span className={`inline-block px-2 py-1 rounded text-xs font-semibold whitespace-nowrap ${fasciaColors?.[d.fascia] || "bg-gray-500 text-white"}`}>
                  {d.fascia}
                </span>
              </td>
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                <div className="flex flex-wrap items-center gap-1">
                  <span>{d.nome}</span>
                  {d.tags && d.tags.includes("Value") && (
                    <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500 text-white">VALUE</span>
                  )}
                </div>
              </td>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                {d.squadra}
                {d.squadra.includes("*") && (
                  <div className="text-[10px] italic text-gray-500 dark:text-gray-500">non ufficiale</div>
                )}
              </td>
              <td className="px-4 py-3 text-center text-lg">{getTitolaritaEmoji(d.titolare)}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span>{d.gerarchia || "—"}</span>
                  {d.titolare === "ballottaggio" && (
                    <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-orange-500 text-white whitespace-nowrap">
                      APERTA
                    </span>
                  )}
                </div>
              </td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{formatDati(d.statistiche, d.statisticheTesto)}</td>
              <td className="px-4 py-3 text-xs">
                {d.profilo ? (
                  <span className="inline-block px-2 py-1 rounded text-[10px] font-bold bg-cyan-600 text-white whitespace-nowrap">
                    {d.profilo}
                  </span>
                ) : (
                  "—"
                )}
              </td>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300 text-xs">{d.strategia || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FavoriteDifensore({ id }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`favorite_difensore_${id}`);
    setIsFavorite(!!saved);
  }, [id]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newState = !isFavorite;
    setIsFavorite(newState);

    if (newState) {
      localStorage.setItem(`favorite_difensore_${id}`, "true");
    } else {
      localStorage.removeItem(`favorite_difensore_${id}`);
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
