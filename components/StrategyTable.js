"use client";

import FavoriteButton from "./FavoriteButton";

export default function StrategyTable({ terzetti, onTerzetto }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
              ★
            </th>
            <th className="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white w-12">
              #
            </th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
              Categoria
            </th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
              Portieri
            </th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
              Tipo
            </th>
            <th className="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">
              Max /500
            </th>
            <th className="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">
              Rischio
            </th>
            <th className="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">
              Voto
            </th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
              Perché
            </th>
          </tr>
        </thead>
        <tbody>
          {terzetti.map((terzetto) => (
            <tr
              key={terzetto.id}
              onClick={() => onTerzetto?.(terzetto.id)}
              className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer transition-colors"
            >
              <td className="px-4 py-3 text-center">
                <FavoriteButton id={terzetto.id} type="strategia" />
              </td>
              <td className="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">
                {terzetto.numero}
              </td>
              <td className="px-4 py-3">
                <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                  {terzetto.categoria}
                </span>
              </td>
              <td className="px-4 py-3 text-gray-900 dark:text-white">
                <div className="text-xs space-y-0.5">
                  {terzetto.portieri.map((p) => (
                    <div key={p} className="font-medium">
                      • {p}
                    </div>
                  ))}
                </div>
              </td>
              <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">
                {terzetto.tipo}
              </td>
              <td className="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">
                {terzetto.maxBudget}
              </td>
              <td className="px-4 py-3 text-center">
                <span
                  className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                    terzetto.rischio.includes("Basso")
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : terzetto.rischio.includes("Alto")
                      ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                  }`}
                >
                  {terzetto.rischio}
                </span>
              </td>
              <td className="px-4 py-3 text-center font-bold text-yellow-500">
                {"★".repeat(Math.round(terzetto.valutazione))}
                {"☆".repeat(5 - Math.round(terzetto.valutazione))}
              </td>
              <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">
                {terzetto.perche}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
