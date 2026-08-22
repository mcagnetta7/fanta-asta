"use client";

import { useState } from "react";

export default function Filters({
  fasce = [],
  fasciaSelezionata,
  onFasciaChange,
  titolarita = [],
  titolaritaSelezionata,
  onTitolaritaChange,
  tags = [],
  tagsSelezionati = [],
  onTagsChange,
  soloPreferiti,
  onSoloPreferiti,
}) {
  const [mostrareFiltriAvanzati, setMostrareFiltriAvanzati] = useState(false);

  const toggleTag = (tag) => {
    const nuoviTags = tagsSelezionati.includes(tag)
      ? tagsSelezionati.filter((t) => t !== tag)
      : [...tagsSelezionati, tag];
    onTagsChange?.(nuoviTags);
  };

  return (
    <div className="mb-6">
      {/* Filtri principali */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {/* Fascia Filter */}
        {fasce.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Fascia
            </label>
            <select
              value={fasciaSelezionata}
              onChange={(e) => onFasciaChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Tutti</option>
              {fasce.map((fascia) => (
                <option key={fascia} value={fascia}>
                  {fascia}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Titolarità Filter */}
        {titolarita.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Titolarità
            </label>
            <select
              value={titolaritaSelezionata}
              onChange={(e) => onTitolaritaChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Tutti</option>
              {titolarita.map((tit) => (
                <option key={tit.value} value={tit.value}>
                  {tit.emoji} {tit.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Solo Preferiti */}
        <div className="flex items-end">
          <label className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 w-full">
            <input
              type="checkbox"
              checked={soloPreferiti}
              onChange={(e) => onSoloPreferiti(e.target.checked)}
              className="w-4 h-4 rounded cursor-pointer"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              ★ Solo preferiti
            </span>
          </label>
        </div>
      </div>

      {/* Filtri avanzati (Tags) */}
      {tags.length > 0 && (
        <div>
          <button
            onClick={() => setMostrareFiltriAvanzati(!mostrareFiltriAvanzati)}
            className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline mb-3"
          >
            {mostrareFiltriAvanzati ? "▼ Nascondi filtri avanzati" : "▶ Filtri avanzati"}
          </button>

          {mostrareFiltriAvanzati && (
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Tags
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {tags.map((tag) => (
                  <label
                    key={tag}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={tagsSelezionati.includes(tag)}
                      onChange={() => toggleTag(tag)}
                      className="w-4 h-4 rounded"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {tag}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
