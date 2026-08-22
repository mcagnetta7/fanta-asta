"use client";

import Link from "next/link";
import { TITOLARITA } from "@/data/constants";
import FavoriteButton from "./FavoriteButton";

export default function PlayerTable({ portieri, onPlayerClick, fasciaColors = {} }) {
  const getTitolaritaEmoji = (titolarita) => {
    const tit = TITOLARITA.find((t) => t.value === titolarita);
    return tit ? tit.emoji : "—";
  };

  const renderStars = (rating) => {
    if (!rating) return "—";
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
              ★
            </th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
              Fascia
            </th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
              Portiere
            </th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
              Squadra
            </th>
            <th className="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">
              Titolare
            </th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
              Gerarchia
            </th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
              Modif.
            </th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
              CS
            </th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
              Titol.
            </th>
          </tr>
        </thead>
        <tbody>
          {portieri.map((portiere) => (
            <tr
              key={portiere.id}
              onClick={() => onPlayerClick(portiere.id)}
              className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer transition-colors"
            >
              <td className="px-4 py-3 text-center">
                <FavoriteButton id={portiere.id} type="portiere" />
              </td>
              <td className="px-4 py-3">
                <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${fasciaColors?.[portiere.fascia] || "bg-gray-500 text-white"}`}>
                  {portiere.fascia}
                </span>
              </td>
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                {portiere.nome}
              </td>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                {portiere.squadra}
              </td>
              <td className="px-4 py-3 text-center text-lg">
                {getTitolaritaEmoji(portiere.titolare)}
              </td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">
                {portiere.gerarchia || "—"}
              </td>
              <td className="px-4 py-3 text-xs">
                {renderStars(portiere.valutazioni?.modificatore)}
              </td>
              <td className="px-4 py-3 text-xs">
                {renderStars(portiere.valutazioni?.cleanSheet)}
              </td>
              <td className="px-4 py-3 text-xs">
                {renderStars(portiere.valutazioni?.titolarita)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
