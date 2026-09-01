"use client";

import { useState, useMemo } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import PlayerDetail from "@/components/PlayerDetail";
import { getDifensoreById } from "@/data/difensori";
import { FASCIA_COLORS_DIFENSORI, TITOLARITA_DIFENSORI } from "@/data/constants";
import {
  CATEGORIE_STRATEGIE_DIFENSORI,
  REGOLAMENTI,
  CALLOUT_REGOLAMENTO,
  BUDGET_DIFESA,
  STRUTTURA_SLOT_CON_MOD,
  STRUTTURA_SLOT_SENZA_MOD,
  OBIETTIVO_SLOT_CON_MOD,
  PIANI_DIFENSORI,
  PIANO_CONSIGLIATO_DIFENSORI,
  STRATEGIE_GENERALI_DIFENSORI,
  CENTRALI_ESTERNI,
  VALUE_PICKS_DIFENSORI,
  MODIFICATORE_PICKS,
  BONUS_PICKS,
  JOLLY_DIFENSORI,
  SCOMMESSE_DIFENSORI,
  INFORTUNATI_DIFENSORI,
  NUOVI_ARRIVI,
  MERCATO_DIFENSORI,
  TITOLARITA_PRIMA_DEL_NOME,
  SETTE_REGOLE,
  getStrategieDifensoriByCategoria,
} from "@/data/strategieDifensori";

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
  if (min == null || max == null)
    return (
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

// Chip giocatore: dati sempre risolti a runtime dal dataset V3, mai duplicati
function GiocatoreChip({ id, onSelect }) {
  const p = getDifensoreById(id);
  if (!p) return null;
  const isValue = p.tags && p.tags.includes("Value");

  return (
    <button
      onClick={() => onSelect(id)}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 text-sm text-gray-900 dark:text-white transition-colors border border-gray-200 dark:border-gray-700"
    >
      <span className="font-medium">{p.nomeBreve || p.nome}</span>
      {isValue && <span className="px-1 py-0.5 rounded text-[9px] font-bold bg-amber-500 text-white">VALUE</span>}
      {p.titolare === "ballottaggio" && (
        <span className="px-1 py-0.5 rounded text-[9px] font-bold bg-orange-500 text-white">ROT</span>
      )}
      {p.titolare === "infortunato" && (
        <span className="px-1 py-0.5 rounded text-[9px] font-bold bg-red-600 text-white">INF</span>
      )}
      {p.titolare === "mercato" && (
        <span className="px-1 py-0.5 rounded text-[9px] font-bold bg-gray-600 text-white">MERCATO</span>
      )}
    </button>
  );
}

function ChipList({ ids, onSelect }) {
  if (!ids || ids.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {ids.map((id) => (
        <GiocatoreChip key={id} id={id} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default function StrategieDifensoriPage() {
  const [regolamento, setRegolamento] = useState("con");
  const [categoria, setCategoria] = useState("Tutte");
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  const filteredStrategie = useMemo(() => getStrategieDifensoriByCategoria(categoria), [categoria]);
  const selectedPlayer = selectedPlayerId ? getDifensoreById(selectedPlayerId) : null;

  const reg = REGOLAMENTI[regolamento];
  const strutturaSlot = regolamento === "con" ? STRUTTURA_SLOT_CON_MOD : STRUTTURA_SLOT_SENZA_MOD;
  const consigliato = PIANO_CONSIGLIATO_DIFENSORI[regolamento];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Strategie Difensori</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            Come costruire la difesa per l'asta 2026/27
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Confronta strategie, budget e profili per costruire una difesa da modificatore, bonus, value o low cost.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              Budget riferimento: 500 crediti
            </span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              Slot difensori: 8
            </span>
          </div>
        </div>

        {/* Toggle regolamento */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border-2 border-indigo-300 dark:border-indigo-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">⚖️ Il tuo regolamento</h2>
          <div className="inline-flex rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden mb-6">
            {Object.values(REGOLAMENTI).map((r) => (
              <button
                key={r.id}
                onClick={() => setRegolamento(r.id)}
                className={`px-6 py-3 font-semibold text-sm transition-colors ${
                  regolamento === r.id
                    ? "bg-indigo-900 text-white dark:bg-indigo-600"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {r.label.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 px-4 py-3 rounded mb-6">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Con modificatore si compra prima il voto e poi il bonus.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{CALLOUT_REGOLAMENTO}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Priorità</h3>
              <ol className="space-y-1 text-sm text-gray-700 dark:text-gray-300 list-decimal list-inside">
                {reg.priorita.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ol>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Profili principali</h3>
              <ChipList ids={reg.profili} onSelect={setSelectedPlayerId} />
            </div>
          </div>
        </div>

        {/* Piani A-E */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📋 Piani per l'asta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {PIANI_DIFENSORI.map((piano) => {
              const isConsigliato = piano.consigliatoPer === regolamento;
              return (
                <div
                  key={piano.id}
                  className={`bg-white dark:bg-gray-900 rounded-lg border-2 p-5 transition-colors ${
                    isConsigliato
                      ? "border-indigo-500 dark:border-indigo-500 shadow-md"
                      : "border-gray-200 dark:border-gray-800 hover:border-indigo-400 dark:hover:border-indigo-600"
                  }`}
                >
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{piano.piano}</div>
                  {isConsigliato && (
                    <span className="inline-block px-2 py-1 rounded text-[9px] font-bold bg-indigo-600 text-white mb-2">
                      {piano.badge}
                    </span>
                  )}
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">{piano.nome}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">{piano.descrizione}</p>
                  <div className="mb-2">
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
                  <ChipList ids={piano.esempio} onSelect={setSelectedPlayerId} />
                  {piano.regola && (
                    <p className="text-xs text-amber-700 dark:text-amber-400 mt-3 italic">💡 {piano.regola}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Piano consigliato */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 dark:from-indigo-800 dark:to-indigo-950 rounded-lg p-6 text-white shadow-lg">
            <div className="text-xs font-semibold uppercase tracking-wide text-indigo-200 mb-1">
              Piano consigliato — {reg.label}
            </div>
            <h2 className="text-3xl font-bold mb-4">{consigliato.titolo}</h2>
            <ol className="space-y-2 mb-4 text-indigo-50">
              {consigliato.passaggi.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="font-bold">{i + 1}.</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
            <p className="text-sm italic text-indigo-100">💡 {consigliato.messaggio}</p>
          </div>
        </div>

        {/* Budget */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">💰 Quanto spendere in difesa</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Budget indicativi su 500 crediti</p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mb-6 italic">
            Non sono quotazioni ufficiali dei singoli difensori.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <th className="px-3 py-2 text-left font-semibold text-gray-900 dark:text-white">Filosofia</th>
                  <th className="px-3 py-2 text-right font-semibold text-gray-900 dark:text-white">Budget /500</th>
                  <th className="px-3 py-2 text-left font-semibold text-gray-900 dark:text-white">Scenario</th>
                </tr>
              </thead>
              <tbody>
                {BUDGET_DIFESA.map((row) => (
                  <tr key={row.tipo} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="px-3 py-2 font-medium text-gray-900 dark:text-white">{row.tipo}</td>
                    <td className="px-3 py-2 text-right text-indigo-600 dark:text-indigo-400 font-semibold whitespace-nowrap">
                      {row.budget}
                    </td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-400">{row.scenario}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Struttura 8 slot */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">🎯 Struttura degli 8 slot</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{reg.label}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {strutturaSlot.map((row) => (
              <div
                key={row.slot}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{row.slot}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300">{row.profilo}</div>
              </div>
            ))}
          </div>
          {regolamento === "con" && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 px-4 py-3 rounded">
              <p className="text-sm text-gray-900 dark:text-white font-medium">{OBIETTIVO_SLOT_CON_MOD}</p>
            </div>
          )}
        </div>

        {/* 15 strategie */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🧠 Le 15 Strategie</h2>

          <div className="flex gap-2 flex-wrap mb-6">
            {CATEGORIE_STRATEGIE_DIFENSORI.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoria(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                  categoria === cat
                    ? "bg-indigo-900 text-white dark:bg-indigo-600"
                    : "bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 hover:border-indigo-400 dark:hover:border-indigo-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredStrategie.map((s) => {
              const adatta =
                s.conModificatore === null ||
                (regolamento === "con" && s.conModificatore === true) ||
                (regolamento === "senza" && s.conModificatore === false);
              const specifica = s.conModificatore !== null;

              return (
                <div
                  key={s.id}
                  className={`bg-white dark:bg-gray-900 rounded-lg border-2 p-6 ${
                    adatta && specifica ? "border-indigo-400 dark:border-indigo-700" : "border-gray-200 dark:border-gray-800"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">#{s.numero}</div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{s.nome}</h3>
                    </div>
                    <div className="flex gap-2 items-center flex-wrap">
                      {adatta && specifica && (
                        <span className="inline-block px-2 py-1 rounded text-[10px] font-bold bg-indigo-600 text-white">
                          ADATTA A QUESTO REGOLAMENTO
                        </span>
                      )}
                      <BudgetBadge min={s.budgetMin} max={s.budgetMax} />
                      <RischioBadge rischio={s.rischio} />
                      <FavoriteButton id={s.id} type="strategia-difensore" />
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{s.descrizione}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-1">Struttura</div>
                      <ul className="text-sm text-gray-900 dark:text-white space-y-0.5">
                        {s.struttura.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                      {s.obiettivo && (
                        <p className="text-sm text-indigo-700 dark:text-indigo-400 mt-2 font-medium">
                          Obiettivo: {s.obiettivo}
                        </p>
                      )}
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

                  {s.topPossibili && (
                    <div className="mb-4">
                      <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">Top possibili</div>
                      <ChipList ids={s.topPossibili} onSelect={setSelectedPlayerId} />
                    </div>
                  )}

                  {s.profili && (
                    <div className="mb-4">
                      <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">Profili</div>
                      <ChipList ids={s.profili} onSelect={setSelectedPlayerId} />
                    </div>
                  )}

                  {s.stopLunghi && (
                    <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">Stop lunghi</div>
                        <ChipList ids={s.stopLunghi} onSelect={setSelectedPlayerId} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">Da monitorare</div>
                        <ChipList ids={s.daMonitorare} onSelect={setSelectedPlayerId} />
                      </div>
                    </div>
                  )}

                  {s.giocatoriEsempio && (
                    <div className="mb-4">
                      <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">Esempio di reparto</div>
                      <ChipList ids={s.giocatoriEsempio} onSelect={setSelectedPlayerId} />
                    </div>
                  )}

                  {s.tettiSlot && (
                    <div className="mb-4">
                      <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">
                        Tetti strategici indicativi
                      </div>
                      <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                        {s.tettiSlot.map((row) => (
                          <div
                            key={row.slot}
                            className="bg-gray-50 dark:bg-gray-800 rounded p-2 text-center border border-gray-200 dark:border-gray-700"
                          >
                            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{row.slot}</div>
                            <div className="text-xs text-gray-700 dark:text-gray-300">{row.range}</div>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-500 italic mt-2">
                        Sono tetti strategici, non quotazioni ufficiali. {s.eccezione}
                      </p>
                    </div>
                  )}

                  {s.logica && (
                    <div className="mb-4">
                      <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">Logica</div>
                      <ul className="text-sm text-gray-900 dark:text-white space-y-0.5">
                        {s.logica.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {s.quandoUsarla && (
                    <div className="mb-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 px-4 py-2 rounded">
                      <p className="text-sm text-gray-900 dark:text-white">
                        <span className="font-semibold">Quando usarla:</span> {s.quandoUsarla}
                      </p>
                    </div>
                  )}

                  {s.nota && (
                    <div className="mb-3 bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 px-4 py-2 rounded">
                      <p className="text-sm text-gray-900 dark:text-white">⚠️ {s.nota}</p>
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
              );
            })}
          </div>
        </div>

        {/* Centrali + Esterni */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border-2 border-indigo-300 dark:border-indigo-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">⚖️ Centrali + Esterni</h2>
          <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-6">{CENTRALI_ESTERNI.formula}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            <div>
              <div className="font-semibold text-gray-900 dark:text-white mb-2">4 Rendimento</div>
              <ChipList ids={CENTRALI_ESTERNI.rendimento} onSelect={setSelectedPlayerId} />
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white mb-2">2 Bonus</div>
              <ChipList ids={CENTRALI_ESTERNI.bonus} onSelect={setSelectedPlayerId} />
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white mb-2">2 Coperture</div>
              <ChipList ids={CENTRALI_ESTERNI.coperture} onSelect={setSelectedPlayerId} />
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 px-4 py-3 rounded">
            <p className="text-sm text-gray-900 dark:text-white">{CENTRALI_ESTERNI.callout}</p>
          </div>
        </div>

        {/* Value Picks */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">💎 Value Picks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUE_PICKS_DIFENSORI.map((id) => {
              const p = getDifensoreById(id);
              if (!p) return null;
              return (
                <div
                  key={id}
                  onClick={() => setSelectedPlayerId(id)}
                  className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg border-2 border-amber-300 dark:border-amber-700 p-4 cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{p.nome}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{p.squadra}</div>
                    </div>
                    <div className="text-lg">
                      <FavoriteButton id={p.id} type="difensore" />
                    </div>
                  </div>
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-2 ${
                      FASCIA_COLORS_DIFENSORI[p.fascia] || "bg-gray-500 text-white"
                    }`}
                  >
                    {p.fascia}
                  </span>
                  {p.letturaIncrociata && (
                    <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{p.letturaIncrociata}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Modificatore Picks */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">📊 Modificatore Picks</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 px-4 py-3 rounded mb-4">
            <p className="text-sm text-gray-900 dark:text-white font-medium">Prima titolarità e voto, poi bonus.</p>
          </div>
          <ChipList ids={MODIFICATORE_PICKS} onSelect={setSelectedPlayerId} />
        </div>

        {/* Bonus Picks */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">⚡ Bonus Picks / Esterni offensivi</h2>
          <ChipList ids={BONUS_PICKS} onSelect={setSelectedPlayerId} />
        </div>

        {/* Jolly */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🃏 Jolly / Rotazioni</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 px-4 py-3 rounded mb-4">
            <p className="text-sm text-gray-900 dark:text-white font-semibold">
              Massimo 2 veri jolly / rotazioni su 8.
            </p>
          </div>
          <ChipList ids={JOLLY_DIFENSORI} onSelect={setSelectedPlayerId} />
        </div>

        {/* Scommesse */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🎲 Scommesse</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 px-4 py-3 rounded mb-4">
            <p className="text-sm text-gray-900 dark:text-white font-semibold">Massimo 2 vere scommesse su 8.</p>
          </div>
          <ChipList ids={SCOMMESSE_DIFENSORI} onSelect={setSelectedPlayerId} />
        </div>

        {/* Infortunati */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">⚕️ Infortunati / Saldo</h2>
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 px-4 py-3 rounded mb-6">
            <p className="text-sm text-gray-900 dark:text-white">
              Un infortunato lungo si compra soltanto dopo aver costruito almeno 6 difensori utilizzabili.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Stop lunghi</h3>
              <ChipList ids={INFORTUNATI_DIFENSORI.stopLunghi} onSelect={setSelectedPlayerId} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Da monitorare</h3>
              <ChipList ids={INFORTUNATI_DIFENSORI.daMonitorare} onSelect={setSelectedPlayerId} />
            </div>
          </div>
        </div>

        {/* Titolarità prima del nome */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border-2 border-orange-300 dark:border-orange-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            🚩 {TITOLARITA_PRIMA_DEL_NOME.callout}
          </h2>
          <div className="space-y-3">
            {TITOLARITA_PRIMA_DEL_NOME.confronti.map((c, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <GiocatoreChip id={c.a} onSelect={setSelectedPlayerId} />
                  {c.b && (
                    <>
                      <span className="text-gray-400 text-sm">vs</span>
                      <GiocatoreChip id={c.b} onSelect={setSelectedPlayerId} />
                    </>
                  )}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{c.nota}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nuovi arrivi / Mercato */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🔄 Nuovi arrivi / Mercato</h2>
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 px-4 py-3 rounded mb-6">
            <p className="text-sm text-gray-900 dark:text-white">
              Non costruire le strategie principali attorno a giocatori con stato mercato. Sutalo e Badiashile restano
              Extra Aggiornamenti: non usarli ancora come pilastri dei Piani A-E.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Nuovi arrivi da monitorare</h3>
              <ChipList ids={NUOVI_ARRIVI} onSelect={setSelectedPlayerId} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Situazioni di mercato</h3>
              <ChipList ids={MERCATO_DIFENSORI} onSelect={setSelectedPlayerId} />
            </div>
          </div>
        </div>

        {/* 7 Regole */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-gray-950 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-6">📐 7 Regole per la Difesa</h2>
          <ol className="space-y-3">
            {SETTE_REGOLE.map((r, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-gray-200 pt-0.5">{r}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedPlayer && (
        <PlayerDetail
          portiere={selectedPlayer}
          onClose={() => setSelectedPlayerId(null)}
          fasciaColors={FASCIA_COLORS_DIFENSORI}
          titolaritaList={TITOLARITA_DIFENSORI}
        />
      )}
    </div>
  );
}
