"use client";

import { useState, useMemo } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import PlayerDetail from "@/components/PlayerDetail";
import { getPortiereById } from "@/data/portieri";
import { FASCIA_COLORS, TITOLARITA } from "@/data/constants";
import {
  VICE_ESTERNI,
  CATEGORIE_STRATEGIE_PORTIERI,
  CATEGORIE_TERZETTI,
  PIANI_PORTIERI,
  PIANO_CONSIGLIATO_PORTIERI,
  BUDGET_PORTA,
  STRUTTURE_SLOT_PORTIERI,
  REGOLA_FONDAMENTALE_SLOT,
  STRATEGIE_GENERALI_PORTIERI,
  TERZETTI_GRIGLIA,
  RANKING_TERZETTI,
  TERZETTI_PER_LEGA,
  TERZETTI_MODIFICATORE,
  CLEAN_SHEET_PROFILI_PRINCIPALI,
  TERZETTI_CLEAN_SHEET,
  CLEAN_SHEET_DA_EVITARE,
  TERZETTI_DA_EVITARE,
  COPPIE_INTERNE_PORTIERI,
  REGOLA_COPPIE_INTERNE,
  ALTERNANZE_TOP,
  VALUE_PORTA,
  getStrategiePortieriByCategoria,
  getTerzettiGrigliaByCategoria,
  getTerzettoById,
} from "@/data/strategiePortieri";

const RISCHIO_CLASSES = {
  basso: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "basso/medio": "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200",
  medio: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  "medio/alto": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  alto: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

const STABILITA_CLASSES = {
  alta: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "media/alta": "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200",
  media: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  "media/bassa": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  bassa: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
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

function StabilitaBadge({ stabilita }) {
  if (!stabilita) return null;
  const classes = STABILITA_CLASSES[stabilita] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase ${classes}`}>
      {stabilita}
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

function Stelle({ valutazione }) {
  if (!valutazione) return null;
  return (
    <span className="text-yellow-500 text-lg">
      {"★".repeat(valutazione)}
      {"☆".repeat(5 - valutazione)}
    </span>
  );
}

// Renderizza un singolo slot: id reale (cliccabile), chiave "vice:*" (testo semplice),
// o array di id (gerarchia aperta -> badge + entrambe le opzioni)
function SlotChip({ ref, onSelect }) {
  if (Array.isArray(ref)) {
    return (
      <span className="inline-flex items-center gap-1.5 flex-wrap">
        {ref.map((r, i) => (
          <span key={r} className="inline-flex items-center gap-1.5">
            {i > 0 && <span className="text-gray-400 text-xs">/</span>}
            <SlotChip ref={r} onSelect={onSelect} />
          </span>
        ))}
        <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-orange-500 text-white whitespace-nowrap">
          GERARCHIA APERTA
        </span>
      </span>
    );
  }

  if (typeof ref === "string" && ref.startsWith("vice:")) {
    const key = ref.slice(5);
    const vice = VICE_ESTERNI[key];
    if (!vice) return null;
    return (
      <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm text-gray-500 dark:text-gray-500 italic border border-dashed border-gray-300 dark:border-gray-700">
        {vice.nome}
      </span>
    );
  }

  const player = getPortiereById(ref);
  if (!player) return null;
  const badgeTags = ["Mercato", "Extra aggiornamento", "MOD", "INV"].filter(
    (t) => player.tags && player.tags.includes(t)
  );

  return (
    <button
      onClick={() => onSelect(ref)}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 text-sm text-gray-900 dark:text-white transition-colors border border-gray-200 dark:border-gray-700"
    >
      <span className="font-medium">{player.nomeBreve || player.nome}</span>
      {badgeTags.map((t) => (
        <span key={t} className="px-1 py-0.5 rounded text-[9px] font-bold bg-cyan-600 text-white">
          {t}
        </span>
      ))}
    </button>
  );
}

function TerzettoRow({ portieri, onSelect }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {portieri.map((ref, i) => (
        <span key={i} className="inline-flex items-center gap-2">
          {i > 0 && <span className="text-gray-400">+</span>}
          <SlotChip ref={ref} onSelect={onSelect} />
        </span>
      ))}
    </div>
  );
}

function TerzettoCard({ terzetto, onSelect, highlight = false }) {
  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-lg border-2 p-5 ${
        highlight || terzetto.consigliato ? "border-indigo-500" : "border-gray-200 dark:border-gray-800"
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
        <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
          {terzetto.squadre.join(" · ")}
        </div>
        {terzetto.consigliato && (
          <span className="inline-block px-2 py-1 rounded text-[10px] font-bold bg-indigo-600 text-white">
            CONSIGLIATO
          </span>
        )}
      </div>

      <div className="mb-4">
        <TerzettoRow portieri={terzetto.portieri} onSelect={onSelect} />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
        <div>
          <div className="text-gray-500 dark:text-gray-500 mb-1">Alternanza</div>
          <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{terzetto.alternanza}/100</div>
        </div>
        <div>
          <div className="text-gray-500 dark:text-gray-500 mb-1">Stabilità</div>
          <StabilitaBadge stabilita={terzetto.stabilita} />
        </div>
        <div>
          <div className="text-gray-500 dark:text-gray-500 mb-1">Rischio</div>
          <RischioBadge rischio={terzetto.rischio} />
        </div>
        <div>
          <div className="text-gray-500 dark:text-gray-500 mb-1">Profilo</div>
          <div className="text-sm font-semibold text-gray-900 dark:text-white">
            {terzetto.profilo && terzetto.profilo.length > 0 ? terzetto.profilo.join(" + ") : "—"}
          </div>
        </div>
      </div>

      {terzetto.valutazione && (
        <div className="mb-2">
          <Stelle valutazione={terzetto.valutazione} />
        </div>
      )}

      {terzetto.problema && (
        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 px-3 py-2 rounded mb-2">
          <p className="text-xs text-gray-900 dark:text-white font-medium">⚠️ {terzetto.problema}</p>
        </div>
      )}

      {terzetto.note && (
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">{terzetto.note}</p>
      )}
    </div>
  );
}

export default function StrategiePortieriPage() {
  const [categoriaStrategia, setCategoriaStrategia] = useState("Tutte");
  const [categoriaTerzetto, setCategoriaTerzetto] = useState("Tutti");
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  const filteredStrategie = useMemo(
    () => getStrategiePortieriByCategoria(categoriaStrategia),
    [categoriaStrategia]
  );

  const filteredTerzetti = useMemo(
    () => getTerzettiGrigliaByCategoria(categoriaTerzetto),
    [categoriaTerzetto]
  );

  const selectedPlayer = selectedPlayerId ? getPortiereById(selectedPlayerId) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Strategie Portieri
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            Come costruire i 3 slot della porta per l'asta 2026/27
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Confronta Top, coppie, terzetti, alternanze e strategie per scegliere la porta più adatta alla tua lega.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              Budget riferimento: 500 crediti
            </span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              Slot: 3 portieri
            </span>
          </div>
        </div>

        {/* Piani A-E */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            📋 Piani per l'asta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {PIANI_PORTIERI.map((piano) => (
              <div
                key={piano.id}
                className={`bg-white dark:bg-gray-900 rounded-lg border-2 p-5 transition-colors ${
                  piano.badge ? "border-indigo-500" : "border-gray-200 dark:border-gray-800 hover:border-indigo-400 dark:hover:border-indigo-600"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{piano.piano}</div>
                </div>
                {piano.badge && (
                  <span className="inline-block px-2 py-1 rounded text-[9px] font-bold bg-indigo-600 text-white mb-2">
                    {piano.badge}
                  </span>
                )}
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">{piano.nome}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">{piano.descrizione}</p>
                <div className="mb-3">
                  <BudgetBadge min={piano.budgetMin} max={piano.budgetMax} />
                </div>
                <div className="mb-3">
                  <RischioBadge rischio={piano.rischio} />
                </div>
                {piano.struttura && (
                  <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                    {piano.struttura.map((s, i) => (
                      <li key={i}>• {s}</li>
                    ))}
                  </ul>
                )}
                {piano.esempio && (
                  <div className="mb-2">
                    <TerzettoRow portieri={piano.esempio} onSelect={setSelectedPlayerId} />
                  </div>
                )}
                {piano.profili && (
                  <TerzettoRow portieri={piano.profili} onSelect={setSelectedPlayerId} />
                )}
                {piano.regola && (
                  <p className="text-xs text-amber-700 dark:text-amber-400 mt-2 italic">💡 {piano.regola}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Piano consigliato */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 dark:from-indigo-800 dark:to-indigo-950 rounded-lg p-6 text-white shadow-lg">
            <div className="text-xs font-semibold uppercase tracking-wide text-indigo-200 mb-4">
              Piano consigliato
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-indigo-200 mb-2">
                  Se la lega usa il modificatore
                </div>
                <h3 className="text-xl font-bold mb-3">{PIANO_CONSIGLIATO_PORTIERI.conModificatore.piano}</h3>
                <div className="mb-3">
                  <TerzettoRow portieri={PIANO_CONSIGLIATO_PORTIERI.conModificatore.esempio} onSelect={setSelectedPlayerId} />
                </div>
                <ul className="text-sm text-indigo-50 space-y-1">
                  {PIANO_CONSIGLIATO_PORTIERI.conModificatore.motivi.map((m, i) => (
                    <li key={i}>✓ {m}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-indigo-200 mb-2">
                  Se la lega NON usa il modificatore
                </div>
                <ul className="text-sm text-indigo-50 space-y-2">
                  {PIANO_CONSIGLIATO_PORTIERI.senzaModificatore.piani.map((p, i) => (
                    <li key={i} className="font-medium">→ {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Budget */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            💰 Quanto spendere in porta
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Budget indicativi su 500 crediti</p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mb-6 italic">
            Non sono quotazioni ufficiali dei singoli portieri.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <th className="px-3 py-2 text-left font-semibold text-gray-900 dark:text-white">Tipo di costruzione</th>
                  <th className="px-3 py-2 text-right font-semibold text-gray-900 dark:text-white">Budget /500</th>
                </tr>
              </thead>
              <tbody>
                {BUDGET_PORTA.map((row) => (
                  <tr key={row.tipo} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="px-3 py-2 font-medium text-gray-900 dark:text-white">{row.tipo}</td>
                    <td className="px-3 py-2 text-right text-indigo-600 dark:text-indigo-400 font-semibold">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Strutture P1/P2/P3 */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            🎯 Strutture dei 3 slot
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {STRUTTURE_SLOT_PORTIERI.map((s) => (
              <div key={s.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-1">Struttura {s.id}</div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{s.nome}</div>
                <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                  {s.slots.map((slot, i) => (
                    <li key={i}>• {slot}</li>
                  ))}
                </ul>
                {s.nota && <p className="text-xs text-gray-500 dark:text-gray-500 italic mt-2">{s.nota}</p>}
              </div>
            ))}
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 px-4 py-3 rounded">
            <p className="text-sm text-gray-900 dark:text-white font-medium">{REGOLA_FONDAMENTALE_SLOT}</p>
          </div>
        </div>

        {/* Filtro categorie + 14 Strategie */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🧠 Le 14 Strategie
          </h2>

          <div className="flex gap-2 flex-wrap mb-6">
            {CATEGORIE_STRATEGIE_PORTIERI.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaStrategia(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                  categoriaStrategia === cat
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
              <div key={s.id} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">#{s.numero}</div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{s.nome}</h3>
                  </div>
                  <div className="flex gap-2 items-center flex-wrap">
                    <BudgetBadge min={s.budgetMin} max={s.budgetMax} />
                    <RischioBadge rischio={s.rischio} />
                    <FavoriteButton id={s.id} type="strategia-portiere" />
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

                {s.profiliPrincipali && (
                  <div className="mb-4">
                    <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">Profili principali</div>
                    <TerzettoRow portieri={s.profiliPrincipali} onSelect={setSelectedPlayerId} />
                  </div>
                )}

                {s.terzettiEsempio && (
                  <div className="mb-4">
                    <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-2">Terzetti esempio</div>
                    <div className="space-y-2">
                      {s.terzettiEsempio.map((t, i) => (
                        <TerzettoRow key={i} portieri={t} onSelect={setSelectedPlayerId} />
                      ))}
                    </div>
                  </div>
                )}

                {s.terzettoDaEvitare && (
                  <div className="mb-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 px-4 py-2 rounded">
                    <div className="text-xs font-semibold text-red-700 dark:text-red-400 mb-2">Da evitare</div>
                    <TerzettoRow portieri={s.terzettoDaEvitare} onSelect={setSelectedPlayerId} />
                  </div>
                )}

                {s.esempioDaEvitare && (
                  <div className="mb-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 px-4 py-2 rounded">
                    <div className="text-xs font-semibold text-red-700 dark:text-red-400 mb-2">Da evitare</div>
                    <TerzettoRow portieri={s.esempioDaEvitare} onSelect={setSelectedPlayerId} />
                    {s.motivoEvitare && <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">{s.motivoEvitare}</p>}
                  </div>
                )}

                {s.esempiDaEvitare && (
                  <div className="mb-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 px-4 py-2 rounded space-y-2">
                    <div className="text-xs font-semibold text-red-700 dark:text-red-400">Da evitare</div>
                    {s.esempiDaEvitare.map((t, i) => (
                      <TerzettoRow key={i} portieri={t} onSelect={setSelectedPlayerId} />
                    ))}
                  </div>
                )}

                {s.porteDaMonitorare && (
                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {s.porteDaMonitorare.map((p) => (
                      <div key={p.squadra} className="bg-gray-50 dark:bg-gray-800 rounded p-3 border border-gray-200 dark:border-gray-700">
                        <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">{p.squadra}</div>
                        <TerzettoRow portieri={p.portieri} onSelect={setSelectedPlayerId} />
                      </div>
                    ))}
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

                {s.esempioIndicatori && (
                  <div className="mb-4 grid grid-cols-3 gap-3 max-w-md">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded p-2 text-center border border-gray-200 dark:border-gray-700">
                      <div className="text-[10px] text-gray-500">{s.esempioIndicatori.squadre}</div>
                      <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{s.esempioIndicatori.alternanza}/100</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded p-2 text-center border border-gray-200 dark:border-gray-700">
                      <StabilitaBadge stabilita={s.esempioIndicatori.stabilita} />
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded p-2 text-center border border-gray-200 dark:border-gray-700">
                      <RischioBadge rischio={s.esempioIndicatori.rischio} />
                    </div>
                  </div>
                )}

                {s.eccezione && (
                  <p className="text-xs text-gray-500 dark:text-gray-500 italic mb-2">Eccezione: {s.eccezione}</p>
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

        {/* MIGLIORI TERZETTI - sezione centrale */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 rounded-lg p-6 mb-6 border-2 border-indigo-300 dark:border-indigo-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              ⭐ Migliori Terzetti
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              La sezione più importante della pagina: quali tre portieri comprare insieme e perché.
            </p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 px-4 py-3 rounded mb-6">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              ⚠️ Un indice 100/100 non significa automaticamente terzetto perfetto.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              La griglia misura solo la complementarità del calendario. NON misura titolarità, mercato, ballottaggio, valore del portiere, modificatore o affidabilità difensiva.
              Per questo ogni terzetto mostra sempre <strong>Alternanza</strong> e <strong>Stabilità gerarchie</strong> separati.
            </p>
          </div>

          <div className="flex gap-2 flex-wrap mb-6">
            {CATEGORIE_TERZETTI.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaTerzetto(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                  categoriaTerzetto === cat
                    ? "bg-indigo-900 text-white dark:bg-indigo-600"
                    : "bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 hover:border-indigo-400 dark:hover:border-indigo-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            I 10 migliori terzetti della griglia
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {filteredTerzetti.map((t, i) => (
              <div key={t.id} className="relative">
                <div className="absolute -top-2 -left-2 z-10 w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shadow">
                  {TERZETTI_GRIGLIA.findIndex((x) => x.id === t.id) + 1}
                </div>
                <TerzettoCard terzetto={t} onSelect={setSelectedPlayerId} />
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            I nostri 5 terzetti
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {RANKING_TERZETTI.map((r) => {
              const t = getTerzettoById(r.terzettoId);
              if (!t) return null;
              return (
                <div key={r.posizione} className="relative">
                  <div className="absolute -top-2 -left-2 z-10 w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center shadow">
                    #{r.posizione}
                  </div>
                  <TerzettoCard terzetto={t} onSelect={setSelectedPlayerId} highlight={r.posizione === 1} />
                  {(r.motivi || r.condizione || r.nota || r.regola) && (
                    <div className="mt-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-3 text-xs space-y-1">
                      {r.motivi && r.motivi.map((m, i) => <div key={i} className="text-green-700 dark:text-green-400">✓ {m}</div>)}
                      {r.condizione && <div className="text-orange-700 dark:text-orange-400">⚠️ {r.condizione}</div>}
                      {r.nota && <div className="text-gray-600 dark:text-gray-400 italic">{r.nota}</div>}
                      {r.regola && <div className="text-amber-700 dark:text-amber-400 font-medium">Regola: {r.regola}</div>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Terzetti per tipo di lega */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🏆 Terzetti per tipo di lega
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TERZETTI_PER_LEGA.map((t) => (
              <div key={t.id} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                <div className="font-bold text-gray-900 dark:text-white text-sm mb-3">{t.nome}</div>
                <TerzettoRow portieri={t.portieri} onSelect={setSelectedPlayerId} />
              </div>
            ))}
          </div>
        </div>

        {/* Coppie interne */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ⚖️ Coppie interne
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 px-4 py-3 rounded mb-6">
            <p className="text-sm text-gray-900 dark:text-white">{REGOLA_COPPIE_INTERNE}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {COPPIE_INTERNE_PORTIERI.map((c) => (
              <div key={c.squadra} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-3">{c.squadra}</div>
                <div className="mb-3">
                  <div className="text-xs text-gray-500 dark:text-gray-500 mb-1">Coppia</div>
                  <TerzettoRow portieri={c.coppia} onSelect={setSelectedPlayerId} />
                </div>
                <div className="mb-3">
                  <div className="text-xs text-gray-500 dark:text-gray-500 mb-1">Terzetto consigliato</div>
                  <TerzettoRow portieri={c.terzettoConsigliato} onSelect={setSelectedPlayerId} />
                </div>
                {c.terzettoDaEvitare && (
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 px-3 py-2 rounded">
                    <div className="text-xs text-red-700 dark:text-red-400 font-semibold mb-1">Da evitare</div>
                    <TerzettoRow portieri={c.terzettoDaEvitare} onSelect={setSelectedPlayerId} />
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{c.motivoEvitare}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Alternanze Top */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            📅 Alternanza Top + provinciale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ALTERNANZE_TOP.map((a) => (
              <div key={a.squadra} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-3">{a.squadra}</div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {a.abbinamenti.map((ab) => (
                    <span key={ab.squadra} className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-xs">
                      <span className="text-gray-700 dark:text-gray-300">{ab.squadra}</span>
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">{ab.indice}</span>
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  {a.esempi.map((e, i) => (
                    <TerzettoRow key={i} portieri={e} onSelect={setSelectedPlayerId} />
                  ))}
                </div>
                {a.nota && <p className="text-xs text-gray-500 dark:text-gray-500 italic mt-2">{a.nota}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Value */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            💎 Value Porta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {VALUE_PORTA.map((v) => {
              const player = getPortiereById(v.id);
              if (!player) return null;
              return (
                <div
                  key={v.id}
                  onClick={() => setSelectedPlayerId(v.id)}
                  className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg border-2 border-amber-300 dark:border-amber-700 p-4 cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{player.nome}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{player.squadra}</div>
                    </div>
                    <div className="text-lg">
                      <FavoriteButton id={player.id} type="portiere" />
                    </div>
                  </div>
                  <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-2 ${FASCIA_COLORS[player.fascia] || "bg-gray-500 text-white"}`}>
                    {player.fascia}
                  </span>
                  <p className="text-xs text-gray-700 dark:text-gray-300">{v.nota}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modificatore */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            🎯 Terzetti Modificatore
          </h2>
          <div className="space-y-4">
            {TERZETTI_MODIFICATORE.map((t, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <TerzettoRow portieri={t.portieri} onSelect={setSelectedPlayerId} />
                <div className="flex items-center gap-2 md:ml-auto">
                  <Stelle valutazione={t.valutazione} />
                </div>
                {t.condizione && <p className="text-xs text-orange-700 dark:text-orange-400 md:basis-full">⚠️ {t.condizione}</p>}
                {t.nota && <p className="text-xs text-gray-600 dark:text-gray-400 md:basis-full italic">{t.nota}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Clean Sheet */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            🧤 Clean Sheet Premium
          </h2>
          <div className="mb-4">
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Profili principali</div>
            <TerzettoRow portieri={CLEAN_SHEET_PROFILI_PRINCIPALI} onSelect={setSelectedPlayerId} />
          </div>
          <div className="mb-4 space-y-2">
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Terzetti consigliati (1 premium + 1 provinciale + 1 low cost)</div>
            {TERZETTI_CLEAN_SHEET.map((t, i) => (
              <TerzettoRow key={i} portieri={t} onSelect={setSelectedPlayerId} />
            ))}
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 px-4 py-3 rounded">
            <div className="text-xs font-semibold text-red-700 dark:text-red-400 mb-2">Da evitare</div>
            <TerzettoRow portieri={CLEAN_SHEET_DA_EVITARE.portieri} onSelect={setSelectedPlayerId} />
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">{CLEAN_SHEET_DA_EVITARE.motivo}</p>
          </div>
        </div>

        {/* Terzetti da evitare */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🚫 Terzetti da evitare
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TERZETTI_DA_EVITARE.map((t, i) => {
              if (t.terzettoId) {
                const terzetto = getTerzettoById(t.terzettoId);
                if (!terzetto) return null;
                return (
                  <div key={i} className="bg-white dark:bg-gray-900 rounded-lg border-2 border-red-300 dark:border-red-800 p-4">
                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">{terzetto.squadre.join(" · ")}</div>
                    <TerzettoRow portieri={terzetto.portieri} onSelect={setSelectedPlayerId} />
                    <div className="flex gap-3 mt-3 text-xs">
                      <span>Alternanza: <strong className="text-indigo-600 dark:text-indigo-400">{terzetto.alternanza}/100</strong></span>
                      <StabilitaBadge stabilita={terzetto.stabilita} />
                    </div>
                    <p className="text-sm text-red-700 dark:text-red-400 mt-2">{t.motivo}</p>
                  </div>
                );
              }
              return (
                <div key={i} className="bg-white dark:bg-gray-900 rounded-lg border-2 border-red-300 dark:border-red-800 p-4">
                  <TerzettoRow portieri={t.portieri} onSelect={setSelectedPlayerId} />
                  <p className="text-sm text-red-700 dark:text-red-400 mt-3">{t.motivo}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Regola finale */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-gray-950 rounded-lg p-6 text-white">
          <h2 className="text-xl font-bold mb-2">📐 Alternanza ≠ Stabilità</h2>
          <p className="text-gray-300">
            Un indice di alternanza alto misura solo la complementarità del calendario. Non misura titolarità, mercato, ballottaggio, valore del portiere, modificatore o affidabilità difensiva.
            Non inseguire il numero della griglia senza guardare le gerarchie reali.
          </p>
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
