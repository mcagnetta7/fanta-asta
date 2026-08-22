"use client";

import { useState, useMemo } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import PlayerDetail from "@/components/PlayerDetail";
import { getCentrocampistaById } from "@/data/centrocampisti";
import { FASCIA_COLORS_CENTROCAMPISTI, TITOLARITA_CENTROCAMPISTI } from "@/data/constants";
import {
  CATEGORIE_STRATEGIE_CENTROCAMPISTI,
  STRATEGIE_GENERALI_CENTROCAMPISTI,
  PIANI_CENTROCAMPISTI,
  PIANO_CONSIGLIATO_CENTROCAMPISTI,
  BUDGET_CENTROCAMPO,
  STRUTTURA_SLOT_CENTROCAMPISTI,
  VALUE_PICKS_CENTROCAMPISTI,
  OFFENSIVI_CENTROCAMPISTI,
  RIGORISTI_CENTROCAMPISTI,
  JOLLY_CENTROCAMPISTI,
  SCOMMESSE_CENTROCAMPISTI,
  INFORTUNATI_CENTROCAMPISTI,
  getStrategieCentrocampistiByCategoria,
} from "@/data/strategieCentrocampisti";

const RISCHIO_CLASSES = {
  basso: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "basso/medio": "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200",
  medio: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  "medio/alto": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  alto: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

function RischioBadge({ rischio }) {
  if (!rischio) return null;
  const classes = RISCHIO_CLASSES[rischio] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase ${classes}`}>
      {rischio}
    </span>
  );
}

function BudgetBadge({ min, max }) {
  if (min == null || max == null) return (
    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      Variabile
    </span>
  );
  return (
    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
      {min}-{max} crediti
    </span>
  );
}

const SPECIALTY_TAG_BADGES = [
  { tag: "Rigorista", label: "RIGORISTA", classes: "bg-violet-600 text-white" },
  { tag: "Punizioni", label: "PUNIZIONI", classes: "bg-fuchsia-600 text-white" },
  { tag: "Corner", label: "CORNER", classes: "bg-purple-600 text-white" },
];

function GiocatoreChip({ id, onSelect }) {
  const player = getCentrocampistaById(id);
  if (!player) return null;
  const badges = SPECIALTY_TAG_BADGES.filter((b) => player.tags && player.tags.includes(b.tag));

  return (
    <button
      onClick={() => onSelect(id)}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 text-sm text-gray-900 dark:text-white transition-colors border border-gray-200 dark:border-gray-700"
    >
      <span className="font-medium">{player.nomeBreve || player.nome}</span>
      {badges.map((b) => (
        <span key={b.tag} className={`px-1 py-0.5 rounded text-[9px] font-bold ${b.classes}`}>
          {b.label}
        </span>
      ))}
    </button>
  );
}

function GiocatoreChipList({ ids, onSelect }) {
  if (!ids || ids.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {ids.map((id) => (
        <GiocatoreChip key={id} id={id} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default function StrategieCentrocampistiPage() {
  const [categoriaSelezionata, setCategoriaSelezionata] = useState("Tutte");
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  const filteredStrategie = useMemo(
    () => getStrategieCentrocampistiByCategoria(categoriaSelezionata),
    [categoriaSelezionata]
  );

  const selectedPlayer = selectedPlayerId ? getCentrocampistaById(selectedPlayerId) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Strategie Centrocampisti
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            Come costruire il centrocampo per l'asta 2026/27
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Confronta strategie, budget e profili per costruire un centrocampo equilibrato, offensivo o orientato al value.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              Budget di riferimento: 500 crediti
            </span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              Rosa di riferimento: 8 centrocampisti
            </span>
          </div>
        </div>

        {/* Piani A-E */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            📋 Piani per l'asta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {PIANI_CENTROCAMPISTI.map((piano) => (
              <div
                key={piano.id}
                className={`bg-white dark:bg-gray-900 rounded-lg border-2 p-5 transition-colors ${
                  piano.consigliato
                    ? "border-indigo-500 dark:border-indigo-500"
                    : "border-gray-200 dark:border-gray-800 hover:border-indigo-400 dark:hover:border-indigo-600"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                    {piano.piano}
                  </div>
                  {piano.consigliato && (
                    <span className="inline-block px-2 py-1 rounded text-[10px] font-bold bg-indigo-600 text-white">
                      CONSIGLIATO
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">
                  {piano.nome}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                  {piano.descrizione}
                </p>
                <div className="mb-3">
                  <BudgetBadge min={piano.budgetMin} max={piano.budgetMax} />
                </div>
                <div className="mb-3">
                  <RischioBadge rischio={piano.rischio} />
                </div>
                <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                  {piano.struttura.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
                {piano.profili && (
                  <GiocatoreChipList ids={piano.profili} onSelect={setSelectedPlayerId} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Piano consigliato */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 dark:from-indigo-800 dark:to-indigo-950 rounded-lg p-6 text-white shadow-lg">
            <div className="text-xs font-semibold uppercase tracking-wide text-indigo-200 mb-1">
              Piano consigliato
            </div>
            <h2 className="text-3xl font-bold mb-4">{PIANO_CONSIGLIATO_CENTROCAMPISTI.titolo}</h2>
            <ol className="space-y-2 mb-4 text-indigo-50">
              {PIANO_CONSIGLIATO_CENTROCAMPISTI.passaggi.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="font-bold">{i + 1}.</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
            <div className="bg-white/10 rounded-lg p-4 mb-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-indigo-200 mb-2">
                Esempio Zero Top
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                {PIANO_CONSIGLIATO_CENTROCAMPISTI.esempioZeroTop.map((id) => (
                  <button
                    key={id}
                    onClick={() => setSelectedPlayerId(id)}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-sm font-medium transition-colors"
                  >
                    {getCentrocampistaById(id)?.nomeBreve || id}
                  </button>
                ))}
                <span className="text-sm text-indigo-200 italic">
                  {PIANO_CONSIGLIATO_CENTROCAMPISTI.esempioNota}
                </span>
              </div>
            </div>
            <p className="text-sm italic text-indigo-100">
              💡 {PIANO_CONSIGLIATO_CENTROCAMPISTI.messaggio}
            </p>
          </div>
        </div>

        {/* Budget */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            💰 Quanto spendere a centrocampo
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Budget indicativi su 500 crediti
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mb-6 italic">
            Non sono quotazioni ufficiali dei singoli giocatori.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <th className="px-3 py-2 text-left font-semibold text-gray-900 dark:text-white">Tipo</th>
                  <th className="px-3 py-2 text-right font-semibold text-gray-900 dark:text-white">Budget /500</th>
                  <th className="px-3 py-2 text-left font-semibold text-gray-900 dark:text-white">Filosofia</th>
                </tr>
              </thead>
              <tbody>
                {BUDGET_CENTROCAMPO.map((row) => (
                  <tr key={row.tipo} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="px-3 py-2 font-medium text-gray-900 dark:text-white">{row.tipo}</td>
                    <td className="px-3 py-2 text-right text-indigo-600 dark:text-indigo-400 font-semibold">{row.budget}</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-400">{row.filosofia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Struttura 8 slot */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            🎯 Struttura degli 8 slot
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {STRUTTURA_SLOT_CENTROCAMPISTI.map((row) => (
              <div key={row.slot} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{row.slot}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300">{row.profilo}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500 italic">
            È una struttura di riferimento, non una regola rigida.
          </p>
        </div>

        {/* Filtro categorie + 14 Strategie */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🧠 Le 14 Strategie
          </h2>

          <div className="flex gap-2 flex-wrap mb-6">
            {CATEGORIE_STRATEGIE_CENTROCAMPISTI.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaSelezionata(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                  categoriaSelezionata === cat
                    ? "bg-indigo-900 text-white dark:bg-indigo-600"
                    : "bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 hover:border-indigo-400 dark:hover:border-indigo-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredStrategie.map((s) => (
              <div
                key={s.id}
                className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6"
              >
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      #{s.numero}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {s.nome}
                    </h3>
                  </div>
                  <div className="flex gap-2 items-center flex-wrap">
                    <BudgetBadge min={s.budgetMin} max={s.budgetMax} />
                    <RischioBadge rischio={s.rischio} />
                    <FavoriteButton id={s.id} type="strategia-centrocampista" />
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {s.descrizione}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-1">
                      Struttura
                    </div>
                    <ul className="text-sm text-gray-900 dark:text-white space-y-0.5">
                      {s.struttura.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  {(s.pro || s.contro) && (
                    <div className="grid grid-cols-1 gap-2">
                      {s.pro && (
                        <div>
                          <div className="font-medium text-green-700 dark:text-green-400 text-sm mb-1">Pro</div>
                          <ul className="text-sm text-gray-900 dark:text-white space-y-0.5">
                            {s.pro.map((item, i) => (
                              <li key={i}>✓ {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {s.contro && (
                        <div>
                          <div className="font-medium text-red-700 dark:text-red-400 text-sm mb-1">Contro</div>
                          <ul className="text-sm text-gray-900 dark:text-white space-y-0.5">
                            {s.contro.map((item, i) => (
                              <li key={i}>× {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Combinazioni (strategia 2) */}
                {s.combinazioni && (
                  <div className="mb-4">
                    <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">
                      Combinazioni concettuali
                    </div>
                    <div className="space-y-2">
                      {s.combinazioni.map((pair, i) => (
                        <div key={i} className="flex items-center gap-2 flex-wrap">
                          <GiocatoreChip id={pair[0]} onSelect={setSelectedPlayerId} />
                          <span className="text-gray-400">+</span>
                          <GiocatoreChip id={pair[1]} onSelect={setSelectedPlayerId} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Rigoristi e piazzati (strategia 5) */}
                {s.rigoristiPrincipali && (
                  <div className="mb-4 space-y-3">
                    <div>
                      <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">Rigoristi principali</div>
                      <GiocatoreChipList ids={s.rigoristiPrincipali} onSelect={setSelectedPlayerId} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">Gerarchie da monitorare</div>
                      <GiocatoreChipList ids={s.gerarchieDaMonitorare} onSelect={setSelectedPlayerId} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">Punizioni / Corner</div>
                      <GiocatoreChipList ids={s.puntizioniCorner} onSelect={setSelectedPlayerId} />
                    </div>
                  </div>
                )}

                {/* Slot breakdown (strategia 8 - Value) */}
                {s.slotBreakdown && (
                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {s.slotBreakdown.map((sb) => (
                      <div key={sb.slot}>
                        <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">{sb.slot}</div>
                        <GiocatoreChipList ids={sb.ids} onSelect={setSelectedPlayerId} />
                      </div>
                    ))}
                  </div>
                )}

                {/* Logica / Principio (strategia 8) */}
                {s.logica && (
                  <div className="mb-4">
                    <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">Logica</div>
                    <ol className="text-sm text-gray-900 dark:text-white space-y-0.5 list-decimal list-inside">
                      {s.logica.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ol>
                  </div>
                )}
                {s.principio && (
                  <div className="mb-4 bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 px-4 py-2 rounded">
                    <p className="text-sm text-gray-900 dark:text-white italic">💡 {s.principio}</p>
                  </div>
                )}

                {/* Tetti per slot (strategia 14 - Opportunistica) */}
                {s.tettiSlot && (
                  <div className="mb-4">
                    <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">Tetti indicativi per slot</div>
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                      {s.tettiSlot.map((row) => (
                        <div key={row.slot} className="bg-gray-50 dark:bg-gray-800 rounded p-2 text-center border border-gray-200 dark:border-gray-700">
                          <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{row.slot}</div>
                          <div className="text-xs text-gray-700 dark:text-gray-300">{row.range}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 italic mt-2">
                      Sono tetti strategici indicativi, non quotazioni ufficiali.
                    </p>
                  </div>
                )}

                {/* Profili ideali (pool ampio, se distinto da giocatoriIdeali) */}
                {s.profiliIdeali && (
                  <div className="mb-4">
                    <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">Profili</div>
                    <GiocatoreChipList ids={s.profiliIdeali} onSelect={setSelectedPlayerId} />
                  </div>
                )}

                {/* Rischio fisico / errore da evitare (strategia 13) */}
                {s.rischioFisico && (
                  <div className="mb-4">
                    <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">Rischio fisico (meno estremo)</div>
                    <GiocatoreChipList ids={s.rischioFisico} onSelect={setSelectedPlayerId} />
                  </div>
                )}

                {/* Profili ideali (esempio principale) */}
                {s.giocatoriIdeali && s.giocatoriIdeali.length > 0 && (
                  <div className="mb-4">
                    <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">Profili ideali</div>
                    <GiocatoreChipList ids={s.giocatoriIdeali} onSelect={setSelectedPlayerId} />
                  </div>
                )}

                {s.quandoUsarla && (
                  <div className="mb-2 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 px-4 py-2 rounded">
                    <p className="text-sm text-gray-900 dark:text-white">
                      <span className="font-semibold">Quando usarla:</span> {s.quandoUsarla}
                    </p>
                  </div>
                )}

                {s.regola && (
                  <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 px-4 py-2 rounded">
                    <p className="text-sm text-gray-900 dark:text-white">
                      <span className="font-semibold">Regola:</span> {s.regola}
                    </p>
                  </div>
                )}
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
            {VALUE_PICKS_CENTROCAMPISTI.map((id) => {
              const player = getCentrocampistaById(id);
              if (!player) return null;
              return (
                <div
                  key={id}
                  onClick={() => setSelectedPlayerId(id)}
                  className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg border-2 border-amber-300 dark:border-amber-700 p-4 cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {player.nome}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {player.squadra}
                      </div>
                    </div>
                    <div className="text-lg">
                      <FavoriteButton id={player.id} type="centrocampista" />
                    </div>
                  </div>
                  <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${FASCIA_COLORS_CENTROCAMPISTI[player.fascia] || "bg-gray-500 text-white"}`}>
                    {player.fascia}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Centrocampisti offensivi */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            ⚡ Centrocampisti che giocano alti
          </h2>
          <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Nome</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Squadra</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Fascia</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">Titolarità</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Strategia asta</th>
                </tr>
              </thead>
              <tbody>
                {OFFENSIVI_CENTROCAMPISTI.map((id) => {
                  const player = getCentrocampistaById(id);
                  if (!player) return null;
                  const tit = TITOLARITA_CENTROCAMPISTI.find((t) => t.value === player.titolare);
                  return (
                    <tr
                      key={id}
                      onClick={() => setSelectedPlayerId(id)}
                      className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                    >
                      <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{player.nome}</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{player.squadra}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${FASCIA_COLORS_CENTROCAMPISTI[player.fascia] || "bg-gray-500 text-white"}`}>
                          {player.fascia}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center text-lg">{tit ? tit.emoji : "—"}</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{player.strategia || "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Rigoristi e piazzati */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🎯 Rigoristi e piazzati
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Rigoristi principali</h3>
              <GiocatoreChipList ids={RIGORISTI_CENTROCAMPISTI.principali} onSelect={setSelectedPlayerId} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Gerarchie da monitorare</h3>
              <GiocatoreChipList ids={RIGORISTI_CENTROCAMPISTI.daMonitorare} onSelect={setSelectedPlayerId} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Punizioni e corner</h3>
              <GiocatoreChipList ids={RIGORISTI_CENTROCAMPISTI.puntizioniCorner} onSelect={setSelectedPlayerId} />
            </div>
          </div>
        </div>

        {/* Jolly */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            🃏 Jolly da gestire
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 px-4 py-3 rounded mb-4">
            <p className="text-sm text-gray-900 dark:text-white">
              In una rosa da 8 centrocampisti è generalmente meglio non avere più di 2 veri jolly/non titolari.
            </p>
          </div>
          <GiocatoreChipList ids={JOLLY_CENTROCAMPISTI} onSelect={setSelectedPlayerId} />
        </div>

        {/* Scommesse */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            🎲 Scommesse ad upside
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 px-4 py-3 rounded mb-4">
            <p className="text-sm text-gray-900 dark:text-white">
              Le scommesse devono essere inserite in un reparto già coperto.
            </p>
          </div>
          <GiocatoreChipList ids={SCOMMESSE_CENTROCAMPISTI} onSelect={setSelectedPlayerId} />
        </div>

        {/* Infortunati */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ⚕️ Infortunati a saldo
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 px-4 py-3 rounded mb-4">
            <p className="text-sm text-gray-900 dark:text-white">
              Prima di occupare uno slot con un infortunato, assicurati di avere almeno 6 centrocampisti utilizzabili.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Principali</h3>
              <GiocatoreChipList ids={INFORTUNATI_CENTROCAMPISTI.principali} onSelect={setSelectedPlayerId} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Rischio fisico</h3>
              <GiocatoreChipList ids={INFORTUNATI_CENTROCAMPISTI.rischioFisico} onSelect={setSelectedPlayerId} />
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedPlayer && (
        <PlayerDetail
          portiere={selectedPlayer}
          onClose={() => setSelectedPlayerId(null)}
          fasciaColors={FASCIA_COLORS_CENTROCAMPISTI}
          titolaritaList={TITOLARITA_CENTROCAMPISTI}
        />
      )}
    </div>
  );
}
