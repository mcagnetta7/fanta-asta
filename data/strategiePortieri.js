// Riferimenti ai portieri tramite id di data/portieri.js — nessun dato anagrafico/statistico duplicato.
// Riferimenti "vice:<key>" puntano a VICE_ESTERNI: portieri NON presenti nei 30 record principali,
// mostrati solo come testo (mai cliccabili, mai aggiunti a /portieri).
// Slot con dualismo aperto sono rappresentati come array di id, es. ["demba-thiam", "pizzignacco"].

export const VICE_ESTERNI = {
  gollini: { nome: "Gollini", squadra: "Roma" },
  torriani: { nome: "Torriani", squadra: "Milan" },
  sportiello: { nome: "Sportiello", squadra: "Atalanta" },
  tornqvist: { nome: "Tornqvist", squadra: "Como" },
  terracciano: { nome: "Terracciano", squadra: "Milan" },
  pinsoglio: { nome: "Pinsoglio", squadra: "Juventus" },
};

export const CATEGORIE_STRATEGIE_PORTIERI = [
  "Tutte",
  "Premium",
  "Equilibrate",
  "Modificatore",
  "Clean Sheet",
  "Low Cost",
  "Value",
  "Coppie",
  "Alternanza",
  "Mercato",
];

export const CATEGORIE_TERZETTI = [
  "Tutti",
  "100/100",
  "99/100",
  "Modificatore",
  "Stabilità alta",
  "Rischio basso",
];

const CATEGORIA_TAG_MAP = {
  Premium: ["top", "super-top", "premium"],
  Equilibrate: ["equilibrata"],
  Modificatore: ["modificatore", "mod"],
  "Clean Sheet": ["clean-sheet"],
  "Low Cost": ["low-cost", "risparmio"],
  Value: ["value"],
  Coppie: ["coppie", "copertura"],
  Alternanza: ["alternanza", "stabilità"],
  Mercato: ["mercato"],
};

export const PIANI_PORTIERI = [
  {
    id: "piano-a",
    piano: "A",
    nome: "Top + Alternanza",
    descrizione: "Porta di una big + protezione interna + possibilità di evitare i matchup peggiori.",
    budgetMin: 35,
    budgetMax: 50,
    rischio: "basso",
    struttura: ["1 Top", "suo vice quando realmente necessario", "1 provinciale titolare con buona alternanza"],
    esempio: ["josep-martinez", "ivan-provedel", "lukasz-skorupski"],
    regola: "Il terzo portiere deve essere un titolare vero, non il terzo della stessa squadra.",
  },
  {
    id: "piano-b",
    piano: "B",
    nome: "Super Top",
    descrizione: "Massima sicurezza sul primo slot senza spendere troppo anche su P2/P3.",
    budgetMin: 45,
    budgetMax: 60,
    rischio: "basso",
    struttura: ["Svilar", "copertura economica", "1 titolare complementare"],
    esempio: ["mile-svilar", "vice:gollini", "lukasz-skorupski"],
    regola: "Se spendi 45-50 crediti sul Super Top, non devi spendere altri 15-20 sul terzo portiere.",
  },
  {
    id: "piano-c",
    piano: "C",
    nome: "Terzetto Modificatore",
    descrizione: "Tre titolari da voto, ottima alternanza e nessun costo da Super Top.",
    budgetMin: 25,
    budgetMax: 40,
    rischio: "basso",
    struttura: ["3 titolari da voto (tutti MOD)"],
    esempio: ["justin-bijlow", "maduka-okoye", "wladimiro-falcone"],
    regola: "Se usi il modificatore, il voto del portiere conta quanto il clean sheet.",
    badge: "CONSIGLIATO CON MODIFICATORE",
  },
  {
    id: "piano-d",
    piano: "D",
    nome: "Low Cost",
    descrizione: "Massimo risparmio senza rinunciare a tre portieri con reale possibilità di voto.",
    budgetMin: 15,
    budgetMax: 28,
    rischio: "medio",
    struttura: ["3 portieri economici"],
    esempio: ["justin-bijlow", "edoardo-corvi", "filip-stankovic"],
    regola: "Low cost non significa tre ballottaggi.",
  },
  {
    id: "piano-e",
    piano: "E",
    nome: "Value",
    descrizione: "Nessun nome obbligatorio. Si compra il miglior rapporto qualità/prezzo disponibile.",
    budgetMin: 20,
    budgetMax: 40,
    rischio: "basso/medio",
    struttura: ["Nessun nome obbligatorio"],
    profili: ["alex-meret", "wladimiro-falcone", "elia-caprile", "justin-bijlow", "edoardo-corvi", "filip-stankovic"],
  },
];

export const PIANO_CONSIGLIATO_PORTIERI = {
  conModificatore: {
    piano: "Piano C — Terzetto MOD",
    esempio: ["justin-bijlow", "maduka-okoye", "wladimiro-falcone"],
    motivi: ["3 titolari", "nessun ballottaggio", "profili da modificatore", "ottima complementarità", "nessun prezzo da Super Top"],
  },
  senzaModificatore: {
    piani: ["Piano A — Top + Alternanza", "Piano B — Super Top (se il prezzo del Top resta corretto)"],
  },
};

export const BUDGET_PORTA = [
  { tipo: "Ultra low cost", budget: "10-18" },
  { tipo: "Terzetto low cost", budget: "18-28" },
  { tipo: "Equilibrata", budget: "28-40" },
  { tipo: "Top + copertura", budget: "40-55" },
  { tipo: "Super Top", budget: "50-65" },
  { tipo: "Premium estrema", budget: "65+" },
];

export const STRUTTURE_SLOT_PORTIERI = [
  { id: "A", nome: "Top + vice + alternanza", slots: ["P1 = Top", "P2 = vice dello stesso Top", "P3 = titolare di un'altra squadra con buona alternanza"] },
  { id: "B", nome: "Super Top + copertura", slots: ["P1 = Super Top", "P2 = vice o alternativa economica", "P3 = titolare complementare"] },
  { id: "C", nome: "Tre titolari", slots: ["P1 = titolare", "P2 = titolare", "P3 = titolare"], nota: "Nessun portiere costosissimo, ma grande flessibilità." },
  { id: "D", nome: "Low cost", slots: ["3 portieri economici", "almeno 2 titolari certi", "idealmente 3 titolari"] },
];

export const REGOLA_FONDAMENTALE_SLOT = "In un terzetto low cost voglio almeno 2 titolari certi su 3. Idealmente 3 su 3.";

export const STRATEGIE_GENERALI_PORTIERI = [
  {
    id: "top-vice-terzo-titolare",
    numero: 1,
    nome: "Top + vice + terzo titolare",
    categoria: "Premium",
    tags: ["top", "copertura", "alternanza"],
    descrizione: "Il Top garantisce una base di clean sheet. Il vice protegge solo quando la gerarchia lo richiede realmente. Il terzo serve per matchup, calendario, modificatore e copertura.",
    budgetMin: 35,
    budgetMax: 50,
    rischio: "basso",
    struttura: ["1 Top", "1 vice quando necessario", "1 titolare complementare"],
    terzettiEsempio: [
      ["josep-martinez", "ivan-provedel", "lukasz-skorupski"],
      ["alex-meret", "vanja-milinkovic-savic", "wladimiro-falcone"],
      ["christos-mandas", "edoardo-motta", "justin-bijlow"],
      ["guglielmo-vicario", "mattia-perin", "elia-caprile"],
    ],
    regola: "Non usare P3 come terzo portiere della stessa squadra salvo casi eccezionali.",
  },
  {
    id: "super-top-terzo-titolare",
    numero: 2,
    nome: "Super Top + terzo titolare",
    categoria: "Premium",
    tags: ["super-top", "clean-sheet", "premium"],
    descrizione: "Con Svilar il bisogno del vice è molto più basso rispetto alle porte con dualismo.",
    budgetMin: 45,
    budgetMax: 60,
    rischio: "basso",
    struttura: ["Super Top", "copertura economica o nessun vice", "1 titolare complementare"],
    terzettiEsempio: [
      ["mile-svilar", "vice:gollini", "lukasz-skorupski"],
      ["mile-svilar", "lukasz-skorupski", "filip-stankovic"],
    ],
    pro: ["Massimo clean sheet", "Gestione semplice", "P3 può coprire matchup specifici"],
    contro: ["Investimento iniziale elevato"],
    regola: "Non trasformare una strategia Super Top in una strategia con tre portieri premium.",
  },
  {
    id: "tre-titolari-equilibrati",
    numero: 3,
    nome: "Tre titolari equilibrati",
    categoria: "Equilibrate",
    tags: ["equilibrata", "alternanza", "modificatore"],
    descrizione: "Nessun Top costosissimo. Tre portieri di squadre diverse: ogni giornata scegli il matchup migliore.",
    budgetMin: 25,
    budgetMax: 40,
    rischio: "basso",
    struttura: ["3 titolari di squadre diverse"],
    terzettiEsempio: [["justin-bijlow", "maduka-okoye", "wladimiro-falcone"]],
    pro: ["Tutti titolari", "Tutti interessanti per modificatore", "Tre squadre diverse", "Ottima alternanza", "Flessibilità", "Nessun rischio da singolo portiere", "Prezzo inferiore a una porta premium"],
    contro: ["Scelta settimanale più complessa", "Nessun portiere da 18-20 clean sheet garantiti"],
  },
  {
    id: "terzetto-modificatore",
    numero: 4,
    nome: "Terzetto modificatore",
    categoria: "Modificatore",
    tags: ["modificatore", "mod"],
    descrizione: "Tre titolari selezionati per il rendimento con il modificatore, non soltanto sulla griglia di alternanza.",
    budgetMin: 25,
    budgetMax: 40,
    rischio: "basso",
    struttura: ["3 portieri con alto valore da modificatore"],
    profiliPrincipali: ["marco-carnesecchi", "david-de-gea", "christos-mandas", "maduka-okoye", "elia-caprile", "wladimiro-falcone", "justin-bijlow", "filip-stankovic"],
    terzettiEsempio: [
      ["justin-bijlow", "maduka-okoye", "wladimiro-falcone"],
      ["david-de-gea", "wladimiro-falcone", "filip-stankovic"],
      ["marco-carnesecchi", "filip-stankovic", ["arijanet-muric", "stefano-turati"]],
      ["elia-caprile", "wladimiro-falcone", "justin-bijlow"],
    ],
    regola: "Con modificatore non guardare soltanto i gol subiti.",
  },
  {
    id: "clean-sheet-premium",
    numero: 5,
    nome: "Clean sheet premium",
    categoria: "Clean Sheet",
    tags: ["clean-sheet", "premium"],
    descrizione: "Costruire attorno a un portiere premium per l'imbattibilità, evitando di accumulare troppi nomi costosi.",
    budgetMin: null,
    budgetMax: null,
    rischio: "basso",
    struttura: ["1 premium clean sheet", "1 provinciale", "1 low cost"],
    profiliPrincipali: ["mile-svilar", "jean-butez", "mike-maignan", "marco-carnesecchi"],
    terzettiEsempio: [
      ["jean-butez", "maduka-okoye", "filip-stankovic"],
      ["marco-carnesecchi", "wladimiro-falcone", "filip-stankovic"],
      ["mike-maignan", "wladimiro-falcone", "edoardo-corvi"],
    ],
    terzettoDaEvitare: ["jean-butez", "mike-maignan", "marco-carnesecchi"],
    regola: "Non costruire un terzetto con tre premium clean sheet insieme: il costo sarebbe inefficiente.",
  },
  {
    id: "coppia-interna-obbligata",
    numero: 6,
    nome: "Coppia interna obbligata",
    categoria: "Coppie",
    tags: ["coppie", "copertura"],
    descrizione: "Ci sono tre porte dove la coppia interna è particolarmente importante: Inter, Napoli, Lazio.",
    budgetMin: null,
    budgetMax: null,
    rischio: "medio",
    struttura: ["1 coppia interna (2 slot)", "1 titolare certo di un'altra squadra"],
    terzettiEsempio: [
      ["josep-martinez", "ivan-provedel", "lukasz-skorupski"],
      ["alex-meret", "vanja-milinkovic-savic", "wladimiro-falcone"],
      ["christos-mandas", "edoardo-motta", "justin-bijlow"],
    ],
    regola: "Se compri una coppia interna, il terzo portiere deve essere un titolare certo di un'altra squadra.",
  },
  {
    id: "terzetto-low-cost",
    numero: 7,
    nome: "Terzetto low cost",
    categoria: "Low Cost",
    tags: ["low-cost", "risparmio"],
    descrizione: "Tre portieri economici con complementarità.",
    budgetMin: 18,
    budgetMax: 30,
    rischio: "medio",
    struttura: ["3 portieri economici complementari"],
    terzettiEsempio: [
      ["justin-bijlow", "wladimiro-falcone", "filip-stankovic"],
      ["edoardo-corvi", "justin-bijlow", "filip-stankovic"],
      ["wladimiro-falcone", "filip-stankovic", "edoardo-corvi"],
    ],
    regola: "Il low cost deve essere costruito sulla titolarità, non sul prezzo minimo assoluto.",
  },
  {
    id: "value-porta",
    numero: 8,
    nome: "Value porta",
    categoria: "Value",
    tags: ["value"],
    descrizione: "Il value nasce dalla differenza tra prezzo percepito e valore reale, non dalla fascia nominale.",
    budgetMin: 20,
    budgetMax: 40,
    rischio: "basso/medio",
    struttura: ["Nessun nome obbligatorio; comprare il miglior rapporto qualità/prezzo"],
    profiliPrincipali: ["alex-meret", "wladimiro-falcone", "elia-caprile", "justin-bijlow", "edoardo-corvi", "filip-stankovic"],
    regola: "Il value nasce dalla differenza tra prezzo percepito e valore reale, non dalla fascia nominale.",
  },
  {
    id: "alternanza-top-provinciale",
    numero: 9,
    nome: "Alternanza Top + provinciale",
    categoria: "Alternanza",
    tags: ["alternanza", "top"],
    descrizione: "Gli abbinamenti più interessanti tra porta Top e squadra complementare per calendario (vedi sezione Alternanze).",
    budgetMin: null,
    budgetMax: null,
    rischio: "basso",
    struttura: ["1 Top", "1 provinciale con alta complementarità di calendario"],
  },
  {
    id: "opportunistica",
    numero: 10,
    nome: "Opportunistica",
    categoria: "Opportunistica",
    tags: ["opportunistica", "flessibile"],
    descrizione: "Non fissare un portiere obbligatorio: definire Piano A, tetto massimo, alternative, Piano B, Piano C.",
    budgetMin: null,
    budgetMax: null,
    rischio: "basso/medio",
    struttura: ["Target + tetto massimo + alternative per ogni slot"],
    logica: [
      "Svilar troppo caro → Butez / Maignan.",
      "Top troppo cari → Meret / De Gea / Carnesecchi.",
      "Anche fascia alta inflazionata → terzetto Bijlow + Okoye + Falcone.",
      "Value dimenticato → anticipa l'acquisto.",
    ],
    regola: "Devi arrivare all'asta con almeno tre costruzioni alternative.",
  },
  {
    id: "evitare-tre-ballottaggi",
    numero: 11,
    nome: "Evitare tre ballottaggi",
    categoria: "Equilibrate",
    tags: ["rischio", "ballottaggio"],
    descrizione: "Non costruire un terzetto interamente basato su gerarchie aperte.",
    budgetMin: null,
    budgetMax: null,
    rischio: "alto",
    struttura: ["Evitare 3 slot tutti in ballottaggio"],
    esempioDaEvitare: ["arijanet-muric", "lorenzo-palmisani", "demba-thiam"],
    motivoEvitare: "Muric ↔ Turati, Palmisani ↔ Desplanches, Thiam ↔ Pizzignacco: tre gerarchie aperte contemporaneamente.",
    regola: "Mai costruire un terzetto low cost composto interamente da gerarchie aperte.",
  },
  {
    id: "mercato-controllato",
    numero: 12,
    nome: "Mercato controllato",
    categoria: "Mercato",
    tags: ["mercato"],
    descrizione: "Monitorare le porte in evoluzione senza pagare oggi una titolarità che non esiste ancora.",
    budgetMin: null,
    budgetMax: null,
    rischio: "medio",
    struttura: ["Privilegiare titolari certi o coppie interne realmente sostenibili"],
    porteDaMonitorare: [
      { squadra: "Torino", portieri: ["diego-mascardi", "alberto-paleari", "lucas-perri"] },
      { squadra: "Monza", portieri: ["demba-thiam", "pizzignacco"] },
      { squadra: "Sassuolo", portieri: ["arijanet-muric", "stefano-turati"] },
      { squadra: "Frosinone", portieri: ["lorenzo-palmisani", "sebastiano-desplanches"] },
    ],
    regola: "Non spendere per una titolarità che oggi non esiste.",
  },
  {
    id: "non-tre-stessa-squadra",
    numero: 13,
    nome: "Non comprare tre portieri della stessa squadra",
    categoria: "Equilibrate",
    tags: ["rischio", "alternanza"],
    descrizione: "Occupare tutti e tre gli slot con portieri della stessa squadra è generalmente inefficiente.",
    budgetMin: null,
    budgetMax: null,
    rischio: "alto",
    struttura: ["Evitare P1/P2/P3 dalla stessa squadra"],
    esempiDaEvitare: [
      ["mike-maignan", "vice:torriani", "vice:terracciano"],
      ["guglielmo-vicario", "mattia-perin", "vice:pinsoglio"],
    ],
    eccezione: "Solo leghe con regole particolari o rose molto profonde.",
    regola: "Nessuna alternanza, nessun matchup alternativo: lo slot P3 è sprecato.",
  },
  {
    id: "griglia-piu-stabilita",
    numero: 14,
    nome: "Griglia + stabilità, non solo indice",
    categoria: "Alternanza",
    tags: ["alternanza", "stabilità"],
    descrizione: "L'indice di alternanza da solo non basta: ogni terzetto va valutato anche per stabilità della gerarchia, profilo e rischio.",
    budgetMin: null,
    budgetMax: null,
    rischio: "basso/medio",
    struttura: ["Alternanza + Stabilità gerarchie (+ Profilo e Rischio quando possibile)"],
    esempioIndicatori: { squadre: "Parma – Torino – Monza", alternanza: 99, stabilita: "bassa", rischio: "alto" },
    regola: "99/100 non significa automaticamente terzetto consigliato.",
  },
];

export const TERZETTI_GRIGLIA = [
  { id: "genoa-udinese-lecce", squadre: ["Genoa", "Udinese", "Lecce"], portieri: ["justin-bijlow", "maduka-okoye", "wladimiro-falcone"], alternanza: 100, stabilita: "alta", rischio: "basso", profilo: ["MOD"], valutazione: 5, consigliato: true, note: "Il miglior terzetto operativo attuale per modificatore e stabilità." },
  { id: "atalanta-sassuolo-venezia", squadre: ["Atalanta", "Sassuolo", "Venezia"], portieri: ["marco-carnesecchi", ["arijanet-muric", "stefano-turati"], "filip-stankovic"], alternanza: 100, stabilita: "media", rischio: "medio", profilo: [], valutazione: 4, consigliato: false, problema: "Gerarchia Sassuolo aperta.", note: "Ottima griglia, ma perde valore se Muric/Turati non viene chiarito." },
  { id: "atalanta-fiorentina-monza", squadre: ["Atalanta", "Fiorentina", "Monza"], portieri: ["marco-carnesecchi", "david-de-gea", ["demba-thiam", "pizzignacco"]], alternanza: 100, stabilita: "media/bassa", rischio: "medio", profilo: [], valutazione: 4, consigliato: false, note: "Fortissimo sulla carta, ma costoso e con porta Monza incerta." },
  { id: "parma-torino-monza", squadre: ["Parma", "Torino", "Monza"], portieri: ["edoardo-corvi", ["diego-mascardi", "lucas-perri"], ["demba-thiam", "pizzignacco"]], alternanza: 99, stabilita: "bassa", rischio: "alto", profilo: [], valutazione: null, consigliato: false, note: "Oggi non consigliato nonostante l'indice 99." },
  { id: "genoa-parma-monza", squadre: ["Genoa", "Parma", "Monza"], portieri: ["justin-bijlow", "edoardo-corvi", ["demba-thiam", "pizzignacco"]], alternanza: 99, stabilita: "media", rischio: "medio", profilo: [], valutazione: null, consigliato: false, note: "Molto interessante se Monza chiarisce la gerarchia." },
  { id: "frosinone-genoa-parma", squadre: ["Frosinone", "Genoa", "Parma"], portieri: [["lorenzo-palmisani", "sebastiano-desplanches"], "justin-bijlow", "edoardo-corvi"], alternanza: 99, stabilita: "media", rischio: "medio", profilo: [], valutazione: null, consigliato: false, note: "Buon terzetto low cost, ma Frosinone è ancora aperto." },
  { id: "frosinone-genoa-venezia", squadre: ["Frosinone", "Genoa", "Venezia"], portieri: [["lorenzo-palmisani", "sebastiano-desplanches"], "justin-bijlow", "filip-stankovic"], alternanza: 99, stabilita: "media", rischio: "medio", profilo: [], valutazione: null, consigliato: false, note: "Molto interessante per spendere poco." },
  { id: "frosinone-genoa-lecce", squadre: ["Frosinone", "Genoa", "Lecce"], portieri: [["lorenzo-palmisani", "sebastiano-desplanches"], "justin-bijlow", "wladimiro-falcone"], alternanza: 99, stabilita: "media/alta", rischio: "basso/medio", profilo: ["MOD"], valutazione: null, consigliato: false, note: "Buon terzetto MOD se emerge il titolare del Frosinone." },
  { id: "atalanta-torino-monza", squadre: ["Atalanta", "Torino", "Monza"], portieri: ["marco-carnesecchi", ["diego-mascardi", "lucas-perri"], ["demba-thiam", "pizzignacco"]], alternanza: 99, stabilita: "bassa", rischio: "alto", profilo: [], valutazione: null, consigliato: false, note: "Da evitare oggi nonostante il 99." },
  { id: "frosinone-venezia-bologna", squadre: ["Frosinone", "Venezia", "Bologna"], portieri: [["lorenzo-palmisani", "sebastiano-desplanches"], "filip-stankovic", "lukasz-skorupski"], alternanza: 99, stabilita: "media/alta", rischio: "basso/medio", profilo: [], valutazione: null, consigliato: false, note: "Uno dei migliori terzetti economici una volta chiarito Frosinone." },
];

export const RANKING_TERZETTI = [
  { posizione: 1, terzettoId: "genoa-udinese-lecce", badge: "CONSIGLIATO", motivi: ["3 titolari", "nessun ballottaggio importante", "costo inferiore a un pacchetto premium", "ottimi voti", "Falcone ha valore anche sui rigori"] },
  { posizione: 2, terzettoId: "atalanta-sassuolo-venezia", condizione: "Consigliare pienamente soltanto quando viene chiarita la porta Sassuolo." },
  { posizione: 3, terzettoId: "genoa-parma-monza", nota: "Portiere Monza: Thiam oppure Pizzignacco, solo quando emerge il titolare.", regola: "Usare il vincitore reale del ballottaggio Monza." },
  { posizione: 4, terzettoId: "frosinone-genoa-lecce", nota: "Portiere Frosinone: Palmisani oppure Desplanches." },
  { posizione: 5, terzettoId: "frosinone-venezia-bologna", nota: "Soluzione economica ma con un P1 più solido." },
];

export const TERZETTI_PER_LEGA = [
  { id: "modificatore-premium", nome: "Modificatore premium", portieri: ["justin-bijlow", "maduka-okoye", "wladimiro-falcone"] },
  { id: "modificatore-equilibrato", nome: "Modificatore equilibrato", portieri: ["elia-caprile", "wladimiro-falcone", "justin-bijlow"] },
  { id: "premium-clean-sheet", nome: "Premium clean sheet", portieri: ["mile-svilar", "vice:gollini", "lukasz-skorupski"] },
  { id: "top-modificatore", nome: "Top + modificatore", portieri: ["mike-maignan", "vice:torriani", "wladimiro-falcone"] },
  { id: "napoli-protetta", nome: "Napoli protetta", portieri: ["alex-meret", "vanja-milinkovic-savic", "wladimiro-falcone"] },
  { id: "inter-protetta", nome: "Inter protetta", portieri: ["josep-martinez", "ivan-provedel", "lukasz-skorupski"] },
  { id: "lazio-protetta", nome: "Lazio protetta", portieri: ["christos-mandas", "edoardo-motta", "justin-bijlow"] },
  { id: "low-cost", nome: "Low cost", portieri: ["justin-bijlow", "edoardo-corvi", "filip-stankovic"] },
  { id: "ultra-value", nome: "Ultra value", portieri: ["wladimiro-falcone", "filip-stankovic", "edoardo-corvi"] },
];

export const TERZETTI_MODIFICATORE = [
  { portieri: ["justin-bijlow", "maduka-okoye", "wladimiro-falcone"], valutazione: 5, rischio: "basso" },
  { portieri: ["david-de-gea", "wladimiro-falcone", "filip-stankovic"], valutazione: 4 },
  { portieri: ["marco-carnesecchi", "filip-stankovic", ["arijanet-muric", "stefano-turati"]], valutazione: 4, condizione: "Solo se Muric/Turati viene chiarito." },
  { portieri: ["elia-caprile", "wladimiro-falcone", "justin-bijlow"], valutazione: 4, nota: "Costruito specificamente sul voto/modificatore, non soltanto sulla griglia." },
];

export const CLEAN_SHEET_PROFILI_PRINCIPALI = ["mile-svilar", "jean-butez", "mike-maignan", "marco-carnesecchi"];

export const TERZETTI_CLEAN_SHEET = [
  ["jean-butez", "maduka-okoye", "filip-stankovic"],
  ["marco-carnesecchi", "wladimiro-falcone", "filip-stankovic"],
  ["mike-maignan", "wladimiro-falcone", "edoardo-corvi"],
];

export const CLEAN_SHEET_DA_EVITARE = {
  portieri: ["jean-butez", "mike-maignan", "marco-carnesecchi"],
  motivo: "Il costo sarebbe inefficiente: tre premium clean sheet insieme.",
};

export const TERZETTI_DA_EVITARE = [
  { portieri: ["arijanet-muric", "lorenzo-palmisani", "demba-thiam"], motivo: "3 gerarchie aperte contemporaneamente (Muric↔Turati, Palmisani↔Desplanches, Thiam↔Pizzignacco)." },
  { portieri: ["edoardo-corvi", "diego-mascardi", "pizzignacco"], motivo: "Troppo dipendente da mercato e gerarchie ancora instabili." },
  { portieri: ["mike-maignan", "vice:torriani", "vice:terracciano"], motivo: "Tre portieri della stessa squadra: nessuna alternanza e P3 sprecato." },
  { terzettoId: "atalanta-torino-monza", motivo: "Alternanza 99/100 ma stabilità gerarchie bassa: non basta l'indice." },
];

export const COPPIE_INTERNE_PORTIERI = [
  { squadra: "Inter", coppia: ["josep-martinez", "ivan-provedel"], terzettoConsigliato: ["josep-martinez", "ivan-provedel", "lukasz-skorupski"] },
  { squadra: "Napoli", coppia: ["alex-meret", "vanja-milinkovic-savic"], terzettoConsigliato: ["alex-meret", "vanja-milinkovic-savic", "wladimiro-falcone"], terzettoDaEvitare: ["alex-meret", "vanja-milinkovic-savic", "giovanni-daffara"], motivoEvitare: "Anche Daffara è in ballottaggio." },
  { squadra: "Lazio", coppia: ["christos-mandas", "edoardo-motta"], terzettoConsigliato: ["christos-mandas", "edoardo-motta", "justin-bijlow"] },
];

export const REGOLA_COPPIE_INTERNE = "Se compri una coppia interna, il terzo portiere deve essere un titolare certo di un'altra squadra.";

export const ALTERNANZE_TOP = [
  { squadra: "Inter", abbinamenti: [{ squadra: "Bologna", indice: 95 }, { squadra: "Cagliari", indice: 93 }, { squadra: "Monza", indice: 93 }, { squadra: "Torino", indice: 92 }, { squadra: "Sassuolo", indice: 91 }], esempi: [["josep-martinez", "ivan-provedel", "lukasz-skorupski"]] },
  { squadra: "Juventus", abbinamenti: [{ squadra: "Bologna", indice: 92 }, { squadra: "Cagliari", indice: 92 }, { squadra: "Lazio", indice: 92 }, { squadra: "Torino", indice: 92 }, { squadra: "Parma", indice: 91 }, { squadra: "Fiorentina", indice: 91 }], esempi: [["guglielmo-vicario", "mattia-perin", "lukasz-skorupski"], ["guglielmo-vicario", "mattia-perin", "elia-caprile"]] },
  { squadra: "Atalanta", abbinamenti: [{ squadra: "Sassuolo", indice: 95 }, { squadra: "Monza", indice: 92 }, { squadra: "Bologna", indice: 91 }, { squadra: "Udinese", indice: 91 }], esempi: [["marco-carnesecchi", "vice:sportiello", "maduka-okoye"]], nota: "Evitare Sassuolo se Muric/Turati non è chiarito." },
  { squadra: "Como", abbinamenti: [{ squadra: "Bologna", indice: 93 }, { squadra: "Udinese", indice: 93 }, { squadra: "Fiorentina", indice: 92 }, { squadra: "Sassuolo", indice: 92 }, { squadra: "Torino", indice: 92 }], esempi: [["jean-butez", "vice:tornqvist", "lukasz-skorupski"], ["jean-butez", "vice:tornqvist", "maduka-okoye"]] },
  { squadra: "Milan", abbinamenti: [{ squadra: "Fiorentina", indice: 93 }, { squadra: "Lecce", indice: 93 }, { squadra: "Parma", indice: 93 }, { squadra: "Sassuolo", indice: 92 }, { squadra: "Torino", indice: 92 }], esempi: [["mike-maignan", "vice:torriani", "wladimiro-falcone"], ["mike-maignan", "vice:torriani", "edoardo-corvi"]] },
  { squadra: "Napoli", abbinamenti: [{ squadra: "Lecce", indice: 93 }, { squadra: "Torino", indice: 93 }, { squadra: "Frosinone", indice: 91 }, { squadra: "Fiorentina", indice: 89 }], esempi: [["alex-meret", "vanja-milinkovic-savic", "wladimiro-falcone"]] },
  { squadra: "Roma", abbinamenti: [{ squadra: "Bologna", indice: 95 }, { squadra: "Monza", indice: 93 }, { squadra: "Venezia", indice: 92 }, { squadra: "Genoa", indice: 89 }], esempi: [["mile-svilar", "vice:gollini", "lukasz-skorupski"]] },
];

export const VALUE_PORTA = [
  { id: "alex-meret", nota: "Semitop SOS, ma valore quasi da Top." },
  { id: "wladimiro-falcone", nota: "Provincia, ma buon voto, rigori e clean sheet discreti." },
  { id: "elia-caprile", nota: "Molto interessante col modificatore." },
  { id: "justin-bijlow", nota: "Gerarchia sicura e prezzo contenuto." },
  { id: "edoardo-corvi", nota: "Gerarchia attuale favorevole su Daffara." },
  { id: "filip-stankovic", nota: "Titolare definito del Venezia." },
];

export function getStrategiePortieriByCategoria(categoria) {
  if (!categoria || categoria === "Tutte") return STRATEGIE_GENERALI_PORTIERI;
  const tagsAmmessi = CATEGORIA_TAG_MAP[categoria] || [];
  return STRATEGIE_GENERALI_PORTIERI.filter((s) =>
    s.tags.some((t) => tagsAmmessi.includes(t)) || s.categoria === categoria
  );
}

export function getTerzettiGrigliaByCategoria(categoria) {
  if (!categoria || categoria === "Tutti") return TERZETTI_GRIGLIA;
  if (categoria === "100/100") return TERZETTI_GRIGLIA.filter((t) => t.alternanza === 100);
  if (categoria === "99/100") return TERZETTI_GRIGLIA.filter((t) => t.alternanza === 99);
  if (categoria === "Modificatore") return TERZETTI_GRIGLIA.filter((t) => t.profilo && t.profilo.includes("MOD"));
  if (categoria === "Stabilità alta") return TERZETTI_GRIGLIA.filter((t) => t.stabilita === "alta");
  if (categoria === "Rischio basso") return TERZETTI_GRIGLIA.filter((t) => t.rischio === "basso");
  return TERZETTI_GRIGLIA;
}

export function getTerzettoById(id) {
  return TERZETTI_GRIGLIA.find((t) => t.id === id);
}
