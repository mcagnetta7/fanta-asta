"use client";

import { useState, useEffect, useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import Filters from "@/components/Filters";
import PlayerDetail from "@/components/PlayerDetail";
import { CENTROCAMPISTI } from "@/data/centrocampisti";
import { FASCE_CENTROCAMPISTI, TITOLARITA_CENTROCAMPISTI, TAGS_CENTROCAMPISTI, FASCIA_COLORS_CENTROCAMPISTI } from "@/data/constants";

export default function CentrocampistiPage() {
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
    CENTROCAMPISTI.forEach((c) => {
      const key = `favorite_centrocampista_${c.id}`;
      if (localStorage.getItem(key)) {
        favoriteIds.add(c.id);
      }
    });
    setPreferiti(favoriteIds);
  }, []);

  // Filter and search
  const filteredCentrocampisti = useMemo(() => {
    let result = CENTROCAMPISTI;

    // Search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter((c) =>
        c.nome.toLowerCase().includes(term) ||
        (c.nomeBreve && c.nomeBreve.toLowerCase().includes(term)) ||
        c.squadra.toLowerCase().includes(term)
      );
    }

    // Fascia filter
    if (fasciaSelezionata) {
      result = result.filter((c) => c.fascia === fasciaSelezionata);
    }

    // Titolarità filter
    if (titolaritaSelezionata) {
      result = result.filter((c) => c.titolare === titolaritaSelezionata);
    }

    // Tags filter
    if (tagsSelezionati.length > 0) {
      result = result.filter((c) =>
        tagsSelezionati.some((tag) => c.tags && c.tags.includes(tag))
      );
    }

    // Solo preferiti
    if (soloPreferiti) {
      result = result.filter((c) => preferiti.has(c.id));
    }

    return result;
  }, [searchTerm, fasciaSelezionata, titolaritaSelezionata, tagsSelezionati, soloPreferiti, preferiti]);

  const selectedCentrocampista = selectedPlayerId
    ? CENTROCAMPISTI.find((c) => c.id === selectedPlayerId)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Centrocampisti 2026/27
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Fasce, titolarità, bonus e consigli per l'asta
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {filteredCentrocampisti.length} centrocampist{filteredCentrocampisti.length !== 1 ? "i" : "a"} trovat{filteredCentrocampisti.length !== 1 ? "i" : "o"}
          </p>
        </div>

        {/* Search */}
        <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Cerca centrocampista..." />

        {/* Filters */}
        <Filters
          fasce={FASCE_CENTROCAMPISTI}
          fasciaSelezionata={fasciaSelezionata}
          onFasciaChange={setFasciaSelezionata}
          titolarita={TITOLARITA_CENTROCAMPISTI}
          titolaritaSelezionata={titolaritaSelezionata}
          onTitolaritaChange={setTitolaritaSelezionata}
          tags={TAGS_CENTROCAMPISTI}
          tagsSelezionati={tagsSelezionati}
          onTagsChange={setTagsSelezionati}
          soloPreferiti={soloPreferiti}
          onSoloPreferiti={setSoloPreferiti}
        />

        {/* Table */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
          {filteredCentrocampisti.length > 0 ? (
            <CentrocampistiTable
              centrocampisti={filteredCentrocampisti}
              onCentrocampistaClick={setSelectedPlayerId}
              fasciaColors={FASCIA_COLORS_CENTROCAMPISTI}
              titolaritaList={TITOLARITA_CENTROCAMPISTI}
            />
          ) : (
            <div className="px-6 py-12 text-center text-gray-600 dark:text-gray-400">
              <p className="text-lg">Nessun centrocampista trovato</p>
              <p className="text-sm mt-2">Prova a modificare i filtri</p>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedCentrocampista && (
        <PlayerDetail
          portiere={selectedCentrocampista}
          onClose={() => setSelectedPlayerId(null)}
          fasciaColors={FASCIA_COLORS_CENTROCAMPISTI}
          titolaritaList={TITOLARITA_CENTROCAMPISTI}
        />
      )}
    </div>
  );
}

function formatDati(statistiche) {
  if (!statistiche) return "—";
  const parts = [];
  if (statistiche.presenze != null) parts.push(`${statistiche.presenze} P`);
  if (statistiche.gol != null) parts.push(`${statistiche.gol} G`);
  if (statistiche.assist != null) parts.push(`${statistiche.assist} A`);
  if (statistiche.fantamedia != null) parts.push(`FM ${statistiche.fantamedia.toString().replace(".", ",")}`);
  if (parts.length === 0) return "—";
  return parts.join(" · ");
}

function CentrocampistiTable({ centrocampisti, onCentrocampistaClick, fasciaColors, titolaritaList }) {
  const getTitolaritaEmoji = (titolarita) => {
    const tit = titolaritaList.find((t) => t.value === titolarita);
    return tit ? tit.emoji : "—";
  };

  const hasSpecialtyTag = (tags, tag) => tags && tags.includes(tag);

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
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Strategia asta</th>
          </tr>
        </thead>
        <tbody>
          {centrocampisti.map((c) => (
            <tr
              key={c.id}
              onClick={() => onCentrocampistaClick(c.id)}
              className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer transition-colors"
            >
              <td className="px-4 py-3 text-center">
                <FavoriteCentrocampista id={c.id} />
              </td>
              <td className="px-4 py-3">
                <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${fasciaColors?.[c.fascia] || "bg-gray-500 text-white"}`}>
                  {c.fascia}
                </span>
              </td>
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                <div className="flex flex-wrap items-center gap-1">
                  <span>{c.nome}</span>
                  {hasSpecialtyTag(c.tags, "Rigorista") && (
                    <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-violet-600 text-white">RIGORISTA</span>
                  )}
                  {hasSpecialtyTag(c.tags, "Punizioni") && (
                    <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-fuchsia-600 text-white">PUNIZIONI</span>
                  )}
                  {hasSpecialtyTag(c.tags, "Corner") && (
                    <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-purple-600 text-white">CORNER</span>
                  )}
                  {hasSpecialtyTag(c.tags, "Offensivo") && (
                    <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white">OFFENSIVO</span>
                  )}
                </div>
              </td>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{c.squadra}</td>
              <td className="px-4 py-3 text-center text-lg">{getTitolaritaEmoji(c.titolare)}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{c.gerarchia || "—"}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs whitespace-nowrap">{formatDati(c.statistiche)}</td>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300 text-xs">{c.strategia || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FavoriteCentrocampista({ id }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`favorite_centrocampista_${id}`);
    setIsFavorite(!!saved);
  }, [id]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newState = !isFavorite;
    setIsFavorite(newState);

    if (newState) {
      localStorage.setItem(`favorite_centrocampista_${id}`, "true");
    } else {
      localStorage.removeItem(`favorite_centrocampista_${id}`);
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
