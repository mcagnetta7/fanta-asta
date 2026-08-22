"use client";

import { useState, useEffect, useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import Filters from "@/components/Filters";
import PlayerDetail from "@/components/PlayerDetail";
import { ATTACCANTI } from "@/data/attaccanti";
import { FASCE_ATTACCANTI, TITOLARITA_ATTACCANTI, TAGS_ATTACCANTI, FASCIA_COLORS_ATTACCANTI } from "@/data/constants";

export default function AttaccantiPage() {
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
    ATTACCANTI.forEach((a) => {
      const key = `favorite_attaccante_${a.id}`;
      if (localStorage.getItem(key)) {
        favoriteIds.add(a.id);
      }
    });
    setPreferiti(favoriteIds);
  }, []);

  // Filter and search
  const filteredAttaccanti = useMemo(() => {
    let result = ATTACCANTI;

    // Search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter((a) =>
        a.nome.toLowerCase().includes(term) ||
        (a.nomeBreve && a.nomeBreve.toLowerCase().includes(term)) ||
        a.squadra.toLowerCase().includes(term)
      );
    }

    // Fascia filter
    if (fasciaSelezionata) {
      result = result.filter((a) => a.fascia === fasciaSelezionata);
    }

    // Titolarità filter
    if (titolaritaSelezionata) {
      result = result.filter((a) => a.titolare === titolaritaSelezionata);
    }

    // Tags filter
    if (tagsSelezionati.length > 0) {
      result = result.filter((a) =>
        tagsSelezionati.some((tag) => a.tags && a.tags.includes(tag))
      );
    }

    // Solo preferiti
    if (soloPreferiti) {
      result = result.filter((a) => preferiti.has(a.id));
    }

    return result;
  }, [searchTerm, fasciaSelezionata, titolaritaSelezionata, tagsSelezionati, soloPreferiti, preferiti]);

  const selectedAttaccante = selectedPlayerId
    ? ATTACCANTI.find((a) => a.id === selectedPlayerId)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Attaccanti 2026/27
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Fasce, titolarità, rigori e consigli per l'asta
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {filteredAttaccanti.length} attaccant{filteredAttaccanti.length !== 1 ? "i" : "e"} trovat{filteredAttaccanti.length !== 1 ? "i" : "o"}
          </p>
        </div>

        {/* Search */}
        <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Cerca attaccante..." />

        {/* Filters */}
        <Filters
          fasce={FASCE_ATTACCANTI}
          fasciaSelezionata={fasciaSelezionata}
          onFasciaChange={setFasciaSelezionata}
          titolarita={TITOLARITA_ATTACCANTI}
          titolaritaSelezionata={titolaritaSelezionata}
          onTitolaritaChange={setTitolaritaSelezionata}
          tags={TAGS_ATTACCANTI}
          tagsSelezionati={tagsSelezionati}
          onTagsChange={setTagsSelezionati}
          soloPreferiti={soloPreferiti}
          onSoloPreferiti={setSoloPreferiti}
        />

        {/* Table */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
          {filteredAttaccanti.length > 0 ? (
            <AttaccantiTable
              attaccanti={filteredAttaccanti}
              onAttaccanteClick={setSelectedPlayerId}
              fasciaColors={FASCIA_COLORS_ATTACCANTI}
              titolaritaList={TITOLARITA_ATTACCANTI}
            />
          ) : (
            <div className="px-6 py-12 text-center text-gray-600 dark:text-gray-400">
              <p className="text-lg">Nessun attaccante trovato</p>
              <p className="text-sm mt-2">Prova a modificare i filtri</p>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedAttaccante && (
        <PlayerDetail
          portiere={selectedAttaccante}
          onClose={() => setSelectedPlayerId(null)}
          fasciaColors={FASCIA_COLORS_ATTACCANTI}
          titolaritaList={TITOLARITA_ATTACCANTI}
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
  if (statistiche.gol != null) parts.push(`${statistiche.gol} G`);
  if (statistiche.assist != null) parts.push(`${statistiche.assist} A`);
  if (statistiche.fantamedia != null) parts.push(`FM ${statistiche.fantamedia.toString().replace(".", ",")}`);
  if (statistiche.mediaVoto != null) parts.push(`MV ${statistiche.mediaVoto.toString().replace(".", ",")}`);
  if (parts.length === 0) return "—";
  return parts.join(" · ");
}

function AttaccantiTable({ attaccanti, onAttaccanteClick, fasciaColors, titolaritaList }) {
  const getTitolaritaEmoji = (titolarita) => {
    const tit = titolaritaList.find((t) => t.value === titolarita);
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
            <th className="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">Titolare</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Gerarchia</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Dati</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Rigori</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Strategia asta</th>
          </tr>
        </thead>
        <tbody>
          {attaccanti.map((a) => (
            <tr
              key={a.id}
              onClick={() => onAttaccanteClick(a.id)}
              className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer transition-colors"
            >
              <td className="px-4 py-3 text-center">
                <FavoriteAttaccante id={a.id} />
              </td>
              <td className="px-4 py-3">
                <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${fasciaColors?.[a.fascia] || "bg-gray-500 text-white"}`}>
                  {a.fascia}
                </span>
              </td>
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                <div className="flex flex-wrap items-center gap-1">
                  <span>{a.nome}</span>
                  {a.tags && a.tags.includes("Rigorista") && (
                    <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-violet-600 text-white">RIGORISTA</span>
                  )}
                </div>
              </td>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{a.squadra}</td>
              <td className="px-4 py-3 text-center text-lg">{getTitolaritaEmoji(a.titolare)}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{a.gerarchia || "—"}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs whitespace-nowrap">{formatDati(a.statistiche, a.statisticheTesto)}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{a.rigori || "—"}</td>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300 text-xs">{a.strategia || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FavoriteAttaccante({ id }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`favorite_attaccante_${id}`);
    setIsFavorite(!!saved);
  }, [id]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newState = !isFavorite;
    setIsFavorite(newState);

    if (newState) {
      localStorage.setItem(`favorite_attaccante_${id}`, "true");
    } else {
      localStorage.removeItem(`favorite_attaccante_${id}`);
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
