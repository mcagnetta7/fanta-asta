"use client";

import { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import {
  STRATEGIE_GENERALI_DIFENSORI,
  PIANI_DIFESA,
  VALUE_PICKS,
  COPPIE_BALLOTTAGGIO,
  INFORTUNATI_SALDO,
  BUDGET_DIFESA,
} from "@/data/strategieDifensori";
import { getDifensoreByNome } from "@/data/difensori";

export default function StrategieDifensoriPage() {
  const [pianoSelezionato, setPianoSelezionato] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Strategie Difensori 2026/27
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            14 strategie generali + 5 piani di costruzione della difesa
          </p>
        </div>

        {/* Budget Difesa */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            💰 Budget Difesa Consigliati
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Valori indicativi su 500 crediti
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BUDGET_DIFESA.map((item) => (
              <div
                key={item.strategia}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
              >
                <div className="font-medium text-gray-900 dark:text-white">
                  {item.strategia}
                </div>
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  {item.budget}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Piani A-E */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            📋 Piani A-E per l'Asta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {PIANI_DIFESA.map((piano) => (
              <div
                key={piano.id}
                onClick={() => setPianoSelezionato(pianoSelezionato === piano.id ? null : piano.id)}
                className="bg-white dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-800 p-5 cursor-pointer hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors"
              >
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  {piano.piano}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">
                  {piano.nome}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                  {piano.descrizione}
                </p>
                <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {piano.budgetIndicativo}
                </div>
                {piano.priortaModificatore && (
                  <div className="text-xs mt-2 text-green-600 dark:text-green-400 font-medium">
                    ✓ Con modificatore
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Strategie Generali */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🧠 14 Strategie Generali
          </h2>
          <div className="space-y-4">
            {STRATEGIE_GENERALI_DIFENSORI.map((strategia) => (
              <div
                key={strategia.id}
                className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      #{strategia.numero}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {strategia.nome}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {strategia.budgetIndicativo}
                    </span>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        strategia.rischio === "Basso"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : strategia.rischio === "Alto"
                          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                      }`}
                    >
                      {strategia.rischio}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {strategia.descrizione}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-gray-700 dark:text-gray-300">
                      Struttura
                    </div>
                    <div className="text-gray-900 dark:text-white">
                      {strategia.struttura}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700 dark:text-gray-300">
                      Ideale
                    </div>
                    <div className="text-gray-900 dark:text-white">
                      {strategia.ideale}
                    </div>
                  </div>
                  {strategia.profiliEsempio && (
                    <div className="md:col-span-3">
                      <div className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Profili esempio
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {strategia.profiliEsempio.slice(0, 4).map((profilo) => (
                          <span
                            key={profilo}
                            className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                          >
                            {profilo}
                          </span>
                        ))}
                        {strategia.profiliEsempio.length > 4 && (
                          <span className="text-xs text-gray-600 dark:text-gray-400 px-2 py-1">
                            +{strategia.profiliEsempio.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Picks */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            💎 Value Picks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {VALUE_PICKS.map((nome) => {
              const difensore = getDifensoreByNome(nome);
              if (!difensore) return null;
              return (
                <div
                  key={nome}
                  className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg border-2 border-amber-300 dark:border-amber-700 p-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {nome}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {difensore.squadra}
                      </div>
                    </div>
                    <div className="text-lg">
                      <FavoriteButton id={difensore.id} type="difensore" />
                    </div>
                  </div>
                  <div className="text-xs">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-2 ${
                      difensore.fascia === "FASCIA ALTA"
                        ? "bg-green-100 text-green-800 dark:bg-green-900"
                        : difensore.fascia === "SOPRA AI LOW COST"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-800"
                    }`}>
                      {difensore.fascia}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coppie Ballottaggio */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ⚖️ Coppie di Ballottaggio
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            In una rosa da 8 difensori è generalmente meglio non occupare troppi slot con coppie della stessa squadra.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COPPIE_BALLOTTAGGIO.map((coppia) => (
              <div
                key={coppia.giocatori[0]}
                className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4"
              >
                <div className="font-bold text-gray-900 dark:text-white mb-2">
                  {coppia.giocatori.join(" vs ")}
                </div>
                <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                  {coppia.squadra}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {coppia.nota}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infortunati a Saldo */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            ⚕️ Infortunati a Saldo
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Scommesse su rientri. Avere già 6/7 difensori affidabili prima di occupare uno slot con un infortunato.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {INFORTUNATI_SALDO.map((infortunato) => (
              <div
                key={infortunato.nome}
                className="bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 p-4"
              >
                <div className="font-bold text-gray-900 dark:text-white mb-1">
                  {infortunato.nome}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {infortunato.squadra}
                </div>
                <div className="text-xs mb-2">
                  <div className="font-medium text-gray-700 dark:text-gray-300">
                    Infortunio: {infortunato.infortunio}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Rientro: {infortunato.rientro}
                  </div>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 italic">
                  {infortunato.nota}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
