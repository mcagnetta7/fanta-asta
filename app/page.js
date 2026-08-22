import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Fanta Asta 2026/27
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            La mia guida personale all'asta
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portieri Card */}
          <Link href="/portieri">
            <div className="group bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-lg transition-all cursor-pointer">
              <div className="mb-4 text-5xl">🧤</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Portieri
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Tabella completa dei portieri con fasce, titolarità, gerarchie,
                statistiche e consigli per l'asta.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ Ricerca per nome
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ Filtri fascia e titolarità
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ Dettaglio giocatore
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ Preferiti
                </div>
              </div>
              <button className="inline-block px-6 py-2 bg-indigo-900 text-white rounded-lg font-medium group-hover:bg-indigo-800 transition-colors">
                Vai ai Portieri →
              </button>
            </div>
          </Link>

          {/* Difensori Card */}
          <Link href="/difensori">
            <div className="group bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-lg transition-all cursor-pointer">
              <div className="mb-4 text-5xl">🛡️</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Difensori
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Completa analisi dei difensori con focus su modificatore, bonus e strategie di costruzione.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ 150+ giocatori analizzati
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ Filtri avanzati e tag
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ Valutazioni modificatore/bonus
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ Preferiti e dettagli
                </div>
              </div>
              <button className="inline-block px-6 py-2 bg-indigo-900 text-white rounded-lg font-medium group-hover:bg-indigo-800 transition-colors">
                Vai ai Difensori →
              </button>
            </div>
          </Link>

          {/* Centrocampisti Card */}
          <Link href="/centrocampisti">
            <div className="group bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-lg transition-all cursor-pointer">
              <div className="mb-4 text-5xl">⚙️</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Centrocampisti
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Database completo dei centrocampisti con fasce, bonus, rigoristi e piazzati per l'asta.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ 186 giocatori analizzati
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ Filtri avanzati e tag
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ Rigoristi, punizioni e corner
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ Preferiti e dettagli
                </div>
              </div>
              <button className="inline-block px-6 py-2 bg-indigo-900 text-white rounded-lg font-medium group-hover:bg-indigo-800 transition-colors">
                Vai ai Centrocampisti →
              </button>
            </div>
          </Link>

          {/* Attaccanti Card */}
          <Link href="/attaccanti">
            <div className="group bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-lg transition-all cursor-pointer">
              <div className="mb-4 text-5xl">⚽</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Attaccanti
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Database completo degli attaccanti con fasce, rigori, gerarchie e consigli per l'asta.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ 88 giocatori analizzati
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ Filtri avanzati e tag
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ Gerarchie rigori dettagliate
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ Preferiti e dettagli
                </div>
              </div>
              <button className="inline-block px-6 py-2 bg-indigo-900 text-white rounded-lg font-medium group-hover:bg-indigo-800 transition-colors">
                Vai agli Attaccanti →
              </button>
            </div>
          </Link>

          {/* Strategie Portieri Card */}
          <Link href="/strategie/portieri">
            <div className="group bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-lg transition-all cursor-pointer">
              <div className="mb-4 text-5xl">🧠</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Strategie Portieri
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                30 terzetti consigliati con budget, rischio e valutazione.
                Strategie generali per scegliere l'approccio giusto.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ 5 terzetti top consigliati
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ Premium, Equilibrate, Low Cost, Scommesse
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ Budget massimo e profilo rischio
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ Strategie generali
                </div>
              </div>
              <button className="inline-block px-6 py-2 bg-indigo-900 text-white rounded-lg font-medium group-hover:bg-indigo-800 transition-colors">
                Vedi Strategie →
              </button>
            </div>
          </Link>

          {/* Strategie Difensori Card */}
          <Link href="/strategie/difensori">
            <div className="group bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-lg transition-all cursor-pointer">
              <div className="mb-4 text-5xl">📋</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Strategie Difensori
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                14 strategie di costruzione + 5 piani A-E.
                Budget, value picks, coppie ballottaggio e infortunati.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ 5 piani A-E per l'asta
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ 14 strategie generali
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ 10 value picks
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ✓ Coppie ballottaggio
                </div>
              </div>
              <button className="inline-block px-6 py-2 bg-indigo-900 text-white rounded-lg font-medium group-hover:bg-indigo-800 transition-colors">
                Vedi Strategie →
              </button>
            </div>
          </Link>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center text-gray-600 dark:text-gray-400">
          <p className="text-sm">
            App di consultazione veloce. Guida personale per la preparazione
            all'asta del fantacalcio.
          </p>
        </div>
      </div>
    </div>
  );
}
