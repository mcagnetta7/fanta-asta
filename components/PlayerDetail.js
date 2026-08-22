"use client";

import { FASCIA_COLORS, TITOLARITA } from "@/data/constants";
import FavoriteButton from "./FavoriteButton";

const STAT_FIELDS = [
  { key: "presenze", label: "Presenze", color: "blue" },
  { key: "cleanSheet", label: "Clean Sheet", color: "green" },
  { key: "golSubiti", label: "Gol Subiti", color: "red" },
  { key: "rigoriParati", label: "Rigori Parati", color: "amber" },
  { key: "gol", label: "Gol", color: "green" },
  { key: "assist", label: "Assist", color: "blue" },
  { key: "fantamedia", label: "Fantamedia", color: "indigo" },
  { key: "mediaVoto", label: "Media Voto", color: "indigo" },
  { key: "ammonizioni", label: "Ammonizioni", color: "amber" },
  { key: "espulsioni", label: "Espulsioni", color: "red" },
  { key: "rigoriSegnati", label: "Rigori Segnati", color: "green" },
  { key: "rigoriSbagliati", label: "Rigori Sbagliati", color: "red" },
];

const STAT_COLOR_CLASSES = {
  blue: { bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-400" },
  green: { bg: "bg-green-50 dark:bg-green-900/20", text: "text-green-700 dark:text-green-400" },
  red: { bg: "bg-red-50 dark:bg-red-900/20", text: "text-red-700 dark:text-red-400" },
  amber: { bg: "bg-amber-50 dark:bg-amber-900/20", text: "text-amber-700 dark:text-amber-400" },
  indigo: { bg: "bg-indigo-50 dark:bg-indigo-900/20", text: "text-indigo-700 dark:text-indigo-400" },
};

const VALUTAZIONI_FIELDS = [
  { key: "modificatore", label: "Modificatore" },
  { key: "cleanSheet", label: "Clean Sheet" },
  { key: "bonus", label: "Bonus" },
  { key: "titolarita", label: "Titolarità" },
  { key: "rendimento", label: "Rendimento" },
];

const SPECIALTY_BADGES = [
  { tag: "Rigorista", label: "RIGORISTA", classes: "bg-violet-600 text-white" },
  { tag: "Punizioni", label: "PUNIZIONI", classes: "bg-fuchsia-600 text-white" },
  { tag: "Corner", label: "CORNER", classes: "bg-purple-600 text-white" },
];

export default function PlayerDetail({
  portiere,
  onClose,
  fasciaColors = FASCIA_COLORS,
  titolaritaList = TITOLARITA,
}) {
  if (!portiere) return null;

  const getTitolaritaLabel = (titolare) => {
    const tit = titolaritaList.find((t) => t.value === titolare);
    return tit ? `${tit.emoji} ${tit.label}` : "—";
  };

  const renderStars = (rating) => {
    if (!rating) return "—";
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const statistiche = portiere.statistiche || {};
  const visibleStats = STAT_FIELDS.filter(
    (f) => statistiche[f.key] !== undefined && statistiche[f.key] !== null
  );

  const valutazioni = portiere.valutazioni || {};
  const visibleValutazioni = VALUTAZIONI_FIELDS.filter(
    (f) => valutazioni[f.key] !== undefined && valutazioni[f.key] !== null
  );

  const consiglioTesto = portiere.strategia || portiere.consiglio;
  const consiglioLabel = portiere.strategia ? "Strategia asta" : "Consiglio";

  const specialtyBadges = SPECIALTY_BADGES.filter(
    (b) => portiere.tags && portiere.tags.includes(b.tag)
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-900 to-indigo-700 dark:from-indigo-950 dark:to-indigo-900 px-6 py-6 text-white flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">{portiere.nome}</h2>
            <p className="text-indigo-100">{portiere.squadra}</p>
          </div>
          <button
            onClick={onClose}
            className="text-2xl hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Badge */}
          <div className="flex gap-2 flex-wrap items-center">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${fasciaColors?.[portiere.fascia] || "bg-gray-500 text-white"}`}>
              {portiere.fascia}
            </span>
            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {getTitolaritaLabel(portiere.titolare)}
            </span>
            {portiere.titolare === "ballottaggio" && (
              <span className="inline-block px-2 py-1 rounded text-xs font-bold bg-orange-500 text-white">
                GERARCHIA APERTA
              </span>
            )}
            {portiere.titolare === "mercato" && (
              <span className="inline-block px-2 py-1 rounded text-xs font-bold bg-gray-600 text-white">
                MERCATO
              </span>
            )}
            {portiere.profilo && (
              <span className="inline-block px-2 py-1 rounded text-xs font-bold bg-cyan-600 text-white">
                {portiere.profilo}
              </span>
            )}
            {specialtyBadges.map((b) => (
              <span key={b.tag} className={`inline-block px-2 py-1 rounded text-xs font-bold ${b.classes}`}>
                {b.label}
              </span>
            ))}
            <div className="text-2xl">
              <FavoriteButton id={portiere.id} type="portiere" />
            </div>
          </div>

          {/* Gerarchia */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
              Gerarchia
            </h3>
            <p className="text-gray-900 dark:text-white font-medium">
              {portiere.gerarchia || "—"}
            </p>
          </div>

          {/* Statistiche */}
          {(visibleStats.length > 0 || portiere.statisticheTesto) && (
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                Statistiche
              </h3>
              {visibleStats.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {visibleStats.map((f) => {
                    const classes = STAT_COLOR_CLASSES[f.color] || STAT_COLOR_CLASSES.blue;
                    return (
                      <div key={f.key} className={`${classes.bg} px-3 py-2 rounded`}>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {f.label}
                        </p>
                        <p className={`text-lg font-bold ${classes.text}`}>
                          {statistiche[f.key]}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {portiere.statisticheTesto}
                </p>
              )}
            </div>
          )}

          {/* Rigori (gerarchia descrittiva) */}
          {portiere.rigori && (
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                Rigori
              </h3>
              <p className="text-gray-900 dark:text-white">
                {portiere.rigori}
              </p>
            </div>
          )}

          {/* Valutazioni */}
          {visibleValutazioni.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                Valutazione
              </h3>
              <div className="space-y-2">
                {visibleValutazioni.map((f) => (
                  <div key={f.key} className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      {f.label}
                    </span>
                    <span className="text-yellow-500">
                      {renderStars(valutazioni[f.key])}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rischio */}
          {portiere.rischio && (
            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 px-4 py-3 rounded">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                ⚠️ Rischio: <span className="font-bold">{portiere.rischio}</span>
              </p>
            </div>
          )}

          {/* Consiglio / Strategia asta */}
          {consiglioTesto && (
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 px-4 py-3 rounded">
              <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-400 mb-1 uppercase tracking-wide">
                {consiglioLabel}
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                💡 {consiglioTesto}
              </p>
            </div>
          )}

          {/* Lettura incrociata */}
          {portiere.letturaIncrociata && (
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                Lettura incrociata
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {portiere.letturaIncrociata}
              </p>
            </div>
          )}

          {/* Tags */}
          {portiere.tags && portiere.tags.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {portiere.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Note */}
          {portiere.note && (
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded text-sm text-gray-700 dark:text-gray-300 italic">
              📌 {portiere.note}
            </div>
          )}

          {/* Strategie (terzetti Portieri) */}
        </div>
      </div>
    </div>
  );
}
