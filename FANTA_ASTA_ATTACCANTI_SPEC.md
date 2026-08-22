# Fanta Asta 2026/27 — Specifica completa Attaccanti

## 1. Obiettivo

Questo documento è la **source of truth** per implementare esclusivamente la pagina `/attaccanti` della web app **Fanta Asta 2026/27**.

In questa fase NON deve essere creata la pagina delle strategie dell'attacco. La colonna `Strategia asta` contiene soltanto il consiglio individuale sul singolo attaccante.

La classificazione in fasce mantiene la struttura della guida SOS Fanta fornita dall'utente; titolarità, gerarchie, rigori e note operative includono il confronto con altre guide e probabili formazioni aggiornate al 22 agosto 2026.

## 2. Requisito bloccante di completezza

Il dataset deve contenere **esattamente 88 attaccanti** in **19 fasce/categorie**.

```js
attaccanti.length === 88
```

Un giocatore non va eliminato se ha meno statistiche. Nei campi strutturati usare `null` per dati sconosciuti e `—` solo in visualizzazione.

### Conteggio per fascia

| Fascia | N. |
|---|---:|
| SUPER TOP | 2 |
| TOP | 4 |
| SEMITOP | 4 |
| SOTTO AI SEMITOP | 3 |
| FASCIA ALTA | 5 |
| JOLLY 1ª FASCIA | 8 |
| POSSIBILI SORPRESE | 1 |
| FASCIA MEDIA | 4 |
| SCOMMESSE | 2 |
| SOPRA AI LOW COST | 1 |
| JOLLY 2ª FASCIA | 4 |
| LOW COST 1ª FASCIA | 8 |
| LOW COST 2ª FASCIA | 6 |
| LEGHE NUMEROSE | 6 |
| JOLLY 3ª FASCIA | 10 |
| JOLLY 4ª FASCIA | 4 |
| A RISCHIO | 6 |
| DA EVITARE | 5 |
| MERCATO | 5 |
| **TOTALE** | **88** |

## 3. Stati normalizzati

Usare nel dataset: `si`, `ballottaggio`, `no`, `infortunato`, `mercato`.

## 4. Campi dati consigliati

```js
{
  id,
  nome,
  nomeBreve,
  squadra,
  ruolo: "A",
  fascia,
  titolare,
  gerarchia,
  statistiche: {
    presenze,
    gol,
    assist,
    fantamedia,
    mediaVoto,
    ammonizioni,
    espulsioni,
    rigoriSegnati,
    rigoriSbagliati
  },
  rigori,
  valutazioni: {
    bonus,
    titolarita,
    rendimento
  },
  rischio,
  tags,
  strategia,
  note
}
```

Non inventare statistiche. Se un dato è sconosciuto usare `null`, non `0`.

## 5. Dataset completo — 88 attaccanti

### SUPER TOP — 2

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **Lautaro Martinez** | Inter | si | Capitano e riferimento offensivo; prima punta/seconda punta con Thuram | 30 P · 17 G · 6 A | Dietro Calhanoglu/Zielinski; possibile batterne qualcuno in loro assenza | bonus, titolare, top, rendimento | 1° slot assoluto; una delle scelte più sicure del listone | SOS Fanta lo considera Super Top. Non è il primo rigorista. |
| **Donyell Malen** | Roma | si | Prima punta titolare; Castro è la principale alternativa e può anche giocare insieme a lui | 18 P · 14 G · 2 A | Prima scelta con Dybala; 4/5 rigori alla Roma nella stagione precedente | bonus, rigorista, titolare, top | 1° slot assoluto; potenziale da capocannoniere + rigori | Champions = più turnover, ma resta il riferimento offensivo. |

### TOP — 4

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **Marcus Thuram** | Inter | si | Titolare accanto a Lautaro; Pio Esposito insidia minutaggio e rotazioni | 13 G · 6 A · FM 7,95 | Non prima scelta | bonus, titolare, top | 1° slot; profilo completo e ad alto rendimento | GOAL lo valuta addirittura insieme ai Super Top. |
| **Goncalo Ramos** | Milan | si | Centravanti titolare | PSG: 45 G · 10 A in 131 gare; record 19 G in 30 col Benfica | Candidato principale; 11/13 in carriera | rigorista, titolare, top, bonus | 1° slot; titolarità + rigori + buon profilo realizzativo | Acquisto molto oneroso del Milan; storico infortuni complessivamente buono. |
| **Rasmus Hojlund** | Napoli | si | Prima punta titolare; rotazioni Champions | 12 G · 5 A | Gerarchia aperta con De Bruyne | bonus, titolare, top | 1° slot; garanzia del reparto, con lieve rischio legato al sistema di gioco | Resta davanti nelle gerarchie dopo la partenza di Lukaku. |
| **Kolo Muani** | Juventus | si | Centravanti scelto da Spalletti; Jonathan David è il vice | Miglior annata: 15 G · 14 A; Tottenham 25/26: 1 G in 30 | Prima scelta potenziale; 6/6 in carriera | rigorista, titolare, top, upside | 1° slot ad alto upside; ruolo e rigori possono alzare molto il bottino | Non è storicamente un bomber puro, ma ha grandi motivazioni e centralità. |

### SEMITOP — 4

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **Moise Kean** | Fiorentina | si | Prima punta; Pellegrino alternativa | 8 G · 1 A | Dietro Gudmundsson nella gerarchia attuale | titolare, bonus, value | 1°/2° slot; possibile value dopo la stagione deludente | Mercato da monitorare, ma in caso di permanenza resta il riferimento. |
| **Douvikas** | Como | si | Centravanti titolare | 14 G · 1 A | Dietro Da Cunha | titolare, bonus, semitop | 1°/2° slot; status da big dopo l'exploit | Champions può aumentare le rotazioni. |
| **Yildiz** | Juventus | si | Titolare tra fascia e trequarti | 10 G · 6 A | Seconda opzione dopo Kolo Muani; 1/2 nella scorsa stagione | bonus, offensivo, titolare | 1°/2° slot; potenziale doppia-doppia | Giovane ancora in crescita. |
| **Keinan Davis** | Udinese | si | Prima punta titolare e riferimento fisico | 10 G · 4 A | Prima scelta; 4/4 | rigorista, titolare, bonus | 2° slot alto; titolare + rigori + doppia cifra potenziale | Rischio principale: infortuni. |

### SOTTO AI SEMITOP — 3

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **Berardi** | Sassuolo | si | Ala destra titolare e leader tecnico | 26 P · 8 G · 4 A | Prima scelta | rigorista, bonus, titolare, rischio-fisico | 2° slot; fortissimo al fanta quando è sano | Disponibilità fisica mai totale. |
| **Scamacca** | Atalanta | ballottaggio | Testa a testa con Krstovic per il ruolo di prima punta | 22 P · 10 G | Tra le prime opzioni | bonus, rigorista, rischio-fisico, ballottaggio | 2° slot ad alto rischio/upside | GOAL lo valuta più in alto; fisico resta il tema principale. |
| **Krstovic** | Atalanta | ballottaggio | Ballottaggio con Scamacca | 32 P · 10 G · 5 A | Dietro Scamacca nella gerarchia iniziale | bonus, ballottaggio, rendimento | 2°/3° slot; più integro e continuo, ma meno sicuro del posto | Coppia con Scamacca possibile solo a costo ragionevole. |

### FASCIA ALTA — 5

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **Simeone** | Torino | si | Centravanti titolare di riferimento; può anche giocare con Zapata | 32 P · 11 G | Dietro Vlasic/Kulenovic | titolare, bonus, value | 2°/3° slot; ottimo rapporto titolarità-gol | GOAL lo valuta più in alto rispetto a SOS. |
| **Dybala** | Roma | ballottaggio | Titolare sulla trequarti quando sano; Castro/Malen aumentano le rotazioni | 21 P · 2 G · 7 A | Dietro Malen | rigorista, bonus, rischio-fisico, jolly | 3° slot premium; non pagare il talento senza scontare il rischio fisico | Rischio di giocare molte meno partite rispetto ai titolari più affidabili. |
| **Alisson Santos** | Napoli | si | Ala sinistra titolare/forte candidato nel 4-3-3 | 13 P · 4 G | Non prima scelta | offensivo, titolare, scommessa | 3° slot; buon potenziale ma il passaggio da C ad A lo penalizza | Profilo molto tecnico e imprevedibile. |
| **Dovbyk** | Bologna | ballottaggio | Favorito su Piccoli come prima punta | 13 P · 3 G · 1 A | Dietro Orsolini/Bernardeschi, ma candidato occasionale | bonus, ballottaggio, rischio-fisico, value | 3° slot ad upside; possibile rilancio e doppia cifra | GOAL lo valuta più in alto della fascia SOS. |
| **Pinamonti** | Sassuolo | ballottaggio | Bowie lo sta insidiando seriamente | 9 G · 3 A · MV 5,88 | Vice Berardi | bonus, ballottaggio, rischio | 3° slot solo se il prezzo recepisce il ballottaggio | Quando non segna porta diverse insufficienze. |

### JOLLY 1ª FASCIA — 8

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **Francesco Pio Esposito** | Inter | ballottaggio | Prima alternativa a Lautaro/Thuram; altissima probabilità di voto | 31 P · 7 G · 3 A | Non prima scelta | jolly, bonus, big, upside | 3°/4° slot di lusso; può crescere ancora | Non titolare, ma minutaggio elevato. |
| **Santiago Castro** | Roma | ballottaggio | Dietro Malen; può anche giocare con lui | 7 G | Dietro Malen e Dybala | jolly, bonus, big | 3° slot jolly; Champions e Gasperini garantiscono minuti | Possibile miglioramento rispetto alla stagione precedente. |
| **Rafael Leao** | Milan | mercato | In bilico tra permanenza e mercato; se resta non necessariamente titolare fisso | — | Da verificare | mercato, jolly, bonus, rischio | Jolly premium solo a prezzo controllato finché il mercato resta aperto | Situazione da rivalutare a mercato chiuso. |
| **Mati Soulè** | Roma | mercato | Futuro e gerarchie da definire; può essere importante se resta | — | Da verificare | mercato, jolly, offensivo | Non pagarlo prima di conoscere destinazione e gerarchia definitiva | Estate ricca di voci di mercato. |
| **David Neres** | Napoli | ballottaggio | Ballottaggio Politano; può incidere anche da subentrante | 16 P · 3 G · 3 A | Non prima scelta | jolly, offensivo, bonus, rischio-fisico | 3°/4° slot; può lasciare il segno anche con poco minutaggio | Reduce da grave infortunio. |
| **Jeremie Boga** | Juventus | no | Jolly offensivo dietro i titolari | 4 G · 1 A da gennaio | Non prima scelta | jolly, offensivo, bonus | 4° slot jolly; schierabile anche quando parte fuori | Concorrenza aumentata. |
| **Mateo Pellegrino** | Fiorentina | no | Prima alternativa a Kean | 9 G | Non prima scelta | jolly, bonus, upside | 3°/4° slot; sale molto se Kean parte o ha problemi | Fiorentina ha investito circa 20 milioni. |
| **Lorenzo Lucca** | Napoli | mercato | Alternativa a Hojlund; futuro da valutare fino alla fine del mercato | Buon precampionato | Da verificare | mercato, jolly, punta | Solo a prezzo da jolly; valore dipendente dal mercato | Lukaku è partito, ma ruolo ancora non definito. |

### POSSIBILI SORPRESE — 1

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **Akor Adams** | Venezia | si | Favorito nel tandem offensivo; concorrenza di Rrahmani/Adorante | Siviglia: 10 G · 3 A | Tra i principali candidati; 6/9 in carriera e 3/3 ultima stagione | sorpresa, titolare, rigori, bonus | 4°/5° slot ad altissimo upside; uno dei provinciali più intriganti | Acquisto più oneroso della storia del Venezia. |

### FASCIA MEDIA — 4

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **De Ketelaere** | Atalanta | si | Ala/trequartista nel tridente | 3 G · 5 A | Non prima scelta | bonus, rendimento, titolare | 3° slot; voto e assist con margini di crescita | Sarri può valorizzarlo. |
| **Laurientè** | Sassuolo | si | Ala sinistra titolarissima | 7 G · 9 A | Non prima scelta | bonus, assist, titolare | 3° slot alto; grande produzione assist | Mercato da monitorare, ma al Sassuolo è centrale. |
| **Raspadori** | Atalanta | ballottaggio | Ala sinistra/sottopunta/falso nove; Elmas alternativa | 3 G · 1 A nei primi mesi a Bergamo | Non prima scelta | jolly, offensivo, bonus | 3° slot; buon grado di titolarità e duttilità | Sarri può valorizzarlo. |
| **Assane Diao** | Como | ballottaggio | Favorito su Jesus Rodriguez quando al 100% | 16 P; ultimi mesi 2 G · 1 A | Non prima scelta | offensivo, rischio-fisico, upside | 3°/4° slot ad upside se la condizione fisica regge | Due stagioni fa 8 G in 15 appena arrivato. |

### SCOMMESSE — 2

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **David Romero** | Parma | ballottaggio | Si gioca un ruolo importante al centro dell'attacco con Elphege/Touré | Tigre 2026: 19 pres. complessive · 11 G · 2 A | Seconda opzione dietro Touré nella gerarchia iniziale | scommessa, bonus, adattamento | 5°/6° slot molto intrigante | Grande incognita: adattamento alla Serie A. |
| **Paul Mendy** | Cagliari | ballottaggio | Giovanissimo attaccante in crescita | 2 G in Serie A nella stagione precedente | Da verificare | scommessa, giovane, upside | 6° slot scommessa | Classe 2007, ancora acerbo. |

### SOPRA AI LOW COST — 1

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **Lorenzo Colombo** | Genoa | si | Centravanti titolare | 37 P a voto · 7 G · 1 A | Primo candidato; 1/2 nell'ultima stagione | titolare, rigori, value | 4°/5° slot eccellente; titolarità + possibile rigore | GOAL lo valuta più in alto della fascia SOS. |

### JOLLY 2ª FASCIA — 4

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **Bonny** | Inter | no | Quarto attaccante nelle gerarchie | 5 G in 4 gare nella fase iniziale, poi calo | Non prima scelta | jolly, big | 5°/6° slot solo come jolly di una big | Deve ritrovarsi. |
| **Jonathan David** | Juventus | no | Vice Kolo Muani | 6 G · 2 A | Dietro Kolo Muani/Yildiz | jolly, value, big | 4°/5° slot di lusso se il prezzo crolla | Grande flop nella prima stagione. |
| **Giovane** | Napoli | no | Jolly tra esterno, seconda punta e falso nove | — | Non prima scelta | jolly, duttilita, offensivo | Ultimi slot; interessante per duttilità | Non titolare. |
| **Roberto Piccoli** | Bologna | ballottaggio | Insegue Dovbyk, ma avrà occasioni | 4 G · FM 6,24 | Dietro Orsolini/Bernardeschi/Dovbyk | jolly, bonus, ballottaggio | 4°/5° slot; coppia con Dovbyk solo a costo ragionevole | Cerca rilancio dopo Firenze. |

### LOW COST 1ª FASCIA — 8

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **Patrick Cutrone** | Monza | si | Centravanti titolare/favorito | Serie B: 20 P · 6 G · 3 A | Dietro Pessina | low-cost, titolare, bonus | 5° slot; uno dei low cost più sicuri | Impatto importante dal mercato invernale. |
| **Che Adams** | Torino | no | Prima alternativa a Simeone | 32 P · 6 G · 3 A | Non prima scelta | low-cost, jolly, rendimento | 5°/6° slot; voto frequente anche da subentrante | Utile per completare il reparto. |
| **Daniel Maldini** | Cagliari | si | Titolare/forte candidato nel reparto offensivo | — | Tra i candidati con Fazzini/Mina; non specialista | low-cost, titolare, offensivo | 5° slot interessante; posizione offensiva e minutaggio | Da capire se prenderà rigori. |
| **El Bilal Touré** | Parma | ballottaggio | Tra i favoriti nel tridente/attacco | Besiktas: 26 pres. · 7 G tutte le competizioni | Prima scelta iniziale nella gerarchia rigori | low-cost, bonus, rigorista | 5° slot molto interessante | Può diventare titolare, ma reparto Parma affollato. |
| **Vitinha** | Genoa | si | Supporta Colombo; voto molto frequente | 31 P · 5 G · 1 A | Alternativa | low-cost, titolare, rendimento | 5° slot; non bomber ma voto quasi garantito | Molto apprezzato da De Rossi. |
| **Kevin Carlos** | Cagliari | ballottaggio | Favorito/ballottaggio al centro con Borrelli e Mendy | Nizza: 23 P · 0 G · 0 A | Tra i candidati principali | low-cost, titolare, scommessa | 5°/6° slot; titolarità interessante, realizzazione da verificare | In Svizzera era stato capocannoniere con 14 G. |
| **Willem Geubbels** | Lecce | ballottaggio | Testa a testa con Stulic | Paris FC: 5 G in 12 da titolare | Prima opzione; 7/7 in carriera | low-cost, rigorista, bonus | 5°/6° slot molto intrigante | Storico infortuni da monitorare. |
| **Fares Ghedjemis** | Frosinone | si | Ala destra titolare | Serie B: 15 G | Da verificare | low-cost, bonus, titolare, hype | 5° slot ad alto upside | Attenzione all'hype per il salto B→A. |

### LOW COST 2ª FASCIA — 6

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **Duvan Zapata** | Torino | no | Dietro Simeone; rotazioni | 23 P · 3 G · 1 A | Da verificare | low-cost, rischio-fisico, jolly | 6° slot; età e crociato precedente riducono le garanzie | A 35 anni non è più profilo da investimento alto. |
| **Kevin Bowie** | Sassuolo | ballottaggio | Ballottaggio vero con Pinamonti | 4 G nella precedente Serie A | Dietro Berardi | low-cost, ballottaggio, bonus | 5°/6° slot molto intrigante | Può ribaltare la gerarchia. |
| **Neste Elphege** | Parma | ballottaggio | Si gioca il posto con Romero/Touré | 2 G · 1 A da gennaio | Da verificare | low-cost, scommessa, fisico | 6° slot; molto forte nel gioco aereo | Alto 1,96 m. |
| **Albion Rrahmani** | Venezia | ballottaggio | Lotta con Adams/Yeboah/Adorante | Sparta Praga: 26 G in 83 pres. | Tra i candidati | low-cost, bonus, scommessa | 5°/6° slot scommessa | Profilo internazionale e buon fiuto del gol. |
| **John Yeboah** | Venezia | si | Favorito nel tandem offensivo | Serie B: 10 G · 10 A | Tra i candidati | low-cost, titolare, bonus | 5° slot molto interessante | Salto B→A da valutare. |
| **Antonio Raimondo** | Frosinone | si | Centravanti titolare/favorito | Serie B: 11 G | Da verificare | low-cost, titolare, giovane | 5°/6° slot; giovane con margine | Deve adattarsi alla Serie A. |

### LEGHE NUMEROSE — 6

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **Nikola Stulic** | Lecce | ballottaggio | Ballottaggio con Geubbels | 4 G nella scorsa Serie A | Seconda opzione | leghe-numerose, ballottaggio | 6° slot; voto possibile ma gol non garantiti | Geubbels può partire davanti. |
| **Andrea Adorante** | Venezia | no | Dietro Adams/Yeboah/Rrahmani | Serie B: 17 G · MVP | Da verificare | leghe-numerose, bonus | Ultimissimo slot con upside | Grande stagione in B, ma posto non fisso. |
| **Dany Mota** | Monza | ballottaggio | Va spesso a voto tra trequarti e attacco | Storicamente 4-5 G a stagione | Da verificare | leghe-numerose, rendimento | 6° slot da voto | Discontinuo. |
| **Elias Havel** | Genoa | no | Dietro Colombo/Vitinha | Austria: 13 G | Da verificare | leghe-numerose, scommessa | Ultimo slot; scommessa da campionato straniero | Jolly offensivo per De Rossi. |
| **Giorgi Kvernadze** | Frosinone | ballottaggio | Dietro al tridente tipo ma con minutaggio | Ultime due stagioni: 8 G · 10 A | Da verificare | leghe-numerose, assist, tecnica | Ultimi slot; interessante per tecnica | Profilo più da trequartista/esterno. |
| **Gustavo Varela** | Monza | ballottaggio | Si gioca il posto ma non parte titolare fisso | Gil Vicente: 6 G · 3 A | Da verificare | leghe-numerose, scommessa | Scommessa da 6° slot | Prima punta classe 2005. |

### JOLLY 3ª FASCIA — 10

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **Ratkov** | Lazio | ballottaggio | Si gioca il posto con Dia; parte leggermente dietro | — | Da verificare | jolly, ballottaggio, fisico | 6° slot; grande struttura e gioco aereo | Situazione da monitorare. |
| **Kamaldeen Sulemana** | Atalanta | no | Rotazione nel tridente | — | Non prima scelta | jolly, offensivo | Jolly offensivo da leghe numerose | Concorrenza elevata. |
| **Ekhator** | Juventus | no | Dietro Kolo Muani, David, Boga e gli altri offensivi | — | Non prima scelta | jolly, giovane, upside | 6° slot scommessa; non titolare | Talento interessante ma spazio iniziale scarso. |
| **Dia** | Lazio | ballottaggio | Oggi leggermente avanti a Ratkov per il posto centrale | — | Da verificare | jolly, value, ballottaggio | Value rispetto alla fascia SOS; 5°/6° slot | Gerarchia attuale più favorevole della fascia originaria. |
| **Noslin** | Lazio | no | Rotazione offensiva | — | Da verificare | jolly, offensivo | Solo a prezzo molto basso | Non titolare. |
| **Borrelli** | Cagliari | ballottaggio | Nel gruppo che si gioca il ruolo di punta | — | Da verificare | jolly, fisico | 6° slot fisico e da voto | Concorrenza Kevin Carlos/Mendy. |
| **Kulenovic** | Torino | no | Dietro Simeone/Adams/Zapata | — | Tra le alternative | jolly, rischio | Ultimi slot | Curiosamente presente anche nella gerarchia rigori. |
| **Kuhn** | Como | no | Dietro Douvikas/Diao e altri offensivi | — | Da verificare | jolly, offensivo | Ultimo slot ad upside | Poco minutaggio iniziale. |
| **Buksa** | Udinese | no | Prima alternativa a Davis / rotazione | — | Da verificare | jolly, fisico | Ultimo slot in leghe numerose | Minutaggio dipende da Davis. |
| **Robinio Vaz** | Roma | no | Molto dietro a Malen/Castro/Dybala | — | Da verificare | jolly, giovane, prospetto | Slot prevalentemente prospettico | Giovane interessante. |

### JOLLY 4ª FASCIA — 4

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **Camarda** | Milan | no | Dietro Goncalo Ramos; occasioni soprattutto da subentrante | — | Da verificare | jolly, giovane, upside | 6° slot upside | Talento enorme, minuti da verificare. |
| **Frigan** | Parma | ballottaggio | In corsa concreta per partire titolare; ballottaggio con Diallo/Touré/Romero | — | Da verificare | jolly, value, ballottaggio | Value rispetto alla fascia SOS; da monitorare molto | Gerarchia più alta rispetto alla classificazione originaria. |
| **Idrissa Gueye** | Udinese | no | Dietro Davis e nelle rotazioni offensive | — | Da verificare | jolly, leghe-numerose | Ultimo slot in leghe molto numerose | Poco spazio iniziale. |
| **N'Dri** | Lecce | si | Parte titolare/favorito da esterno offensivo | — | Da verificare | jolly, titolare, value | Value rispetto alla fascia SOS; titolarità alta, bonus da verificare | Situazione attuale più positiva della fascia originaria. |

### A RISCHIO — 6

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **Milik** | Juventus | infortunato | Problemi fisici cronici e concorrenza enorme | 2 partite a voto nella stagione precedente | Da verificare | rischio, infortunato | Evitabile salvo prezzo minimo in leghe profondissime | Profilo fortemente condizionato dagli infortuni. |
| **Jay Robinson** | Monza | no | Giovane, nessuna titolarità garantita | — | Da verificare | rischio, giovane | Ultimissimo slot | — |
| **Azon** | Como | no | Molto dietro nelle gerarchie offensive | — | Da verificare | rischio | Evitare nelle leghe standard | — |
| **Vakoun Bayo** | Udinese | no | Dietro Davis e le alternative | — | Da verificare | rischio | Evitare salvo leghe molto numerose | — |
| **Lauberbach** | Venezia | no | Dietro Adams/Yeboah/Rrahmani | — | Da verificare | rischio | Ultimissimo slot | — |
| **Trepy** | Cagliari | infortunato | Situazione personale/medica prioritaria; non valutare oggi come normale profilo fantasy | — | — | rischio, infortunato | Non considerarlo per l'asta iniziale | Non trasformare una situazione medica seria in una normale nota di rendimento. |

### DA EVITARE — 5

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **Mutandwa** | Cagliari | no | Tanta concorrenza | — | Da verificare | da-evitare | Da evitare | — |
| **Albarracin** | Cagliari | no | Giovane esterno, parte dietro | — | Da verificare | da-evitare, giovane | Interessante in prospettiva, non per l'asta standard | — |
| **Thomas De Martis** | Parma | no | Classe 2008, progetto futuro | — | Da verificare | da-evitare, giovane | Non slot utile oggi | — |
| **Kornel Lisman** | Venezia | no | Fondo delle gerarchie offensive | — | Da verificare | da-evitare | Evitare nelle leghe standard | — |
| **Simone Lontani** | Parma | no | Giovane, forte concorrenza | — | Da verificare | da-evitare, giovane | Evitare salvo leghe profondissime | — |

### MERCATO — 5

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Rigori | Tags | Strategia asta | Note incrociate |
|---|---|---|---|---|---|---|---|---|
| **Nkunku** | Milan | mercato | Fuori dalle prime scelte / possibile uscita | — | Da verificare | mercato, bonus | Aspettare il mercato; grande upside se trova titolarità altrove | — |
| **Sebastiano Esposito** | Cagliari | mercato | Situazione interna/mercato da chiarire | — | Da verificare | mercato, value | Molto interessante se resta e torna centrale; non comprare senza chiarimento | Fonti non perfettamente allineate. |
| **Santiago Gimenez** | Milan | mercato | Nettamente dietro Ramos | — | Da verificare | mercato | Da rivalutare solo dopo eventuale trasferimento | — |
| **Morata** | Como | mercato | Dietro Douvikas/Diao; possibile uscita | — | Da verificare | mercato | Evitare finché la situazione non cambia | — |
| **Noa Lang** | Napoli | mercato | Dietro Alisson/Neres nelle gerarchie iniziali | — | Da verificare | mercato, offensivo | Solo dopo il mercato; una cessione può rilanciarlo | — |

## 6. Giocatori da evidenziare perché la lettura incrociata cambia la fascia percepita

| Giocatore | Fascia SOS | Lettura operativa |
|---|---|---|
| **Marcus Thuram** | TOP | Altre guide lo trattano come top assoluto insieme a Lautaro/Malen. |
| **Dovbyk** | FASCIA ALTA | Altre guide lo alzano di fascia; potenziale rilancio importante. |
| **Dybala** | FASCIA ALTA | Potenziale da fascia superiore quando sano; rischio fisico enorme. |
| **Simeone** | FASCIA ALTA | Titolarità + 11 gol lo rendono molto interessante. |
| **Scamacca** | SOTTO AI SEMITOP | Altre guide lo valutano da prima fascia, ma il fisico abbassa la sicurezza. |
| **Lorenzo Colombo** | SOPRA AI LOW COST | Titolare + candidato ai rigori: value evidente. |
| **Frigan** | JOLLY 4ª FASCIA | Gerarchia attuale più alta; può giocarsi una maglia. |
| **N'Dri** | JOLLY 4ª FASCIA | Oggi parte titolare/favorito da esterno. |
| **Dia** | JOLLY 3ª FASCIA | Gerarchia attuale migliore; può partire davanti a Ratkov. |
| **Pinamonti** | FASCIA ALTA | Bowie lo insidia seriamente: rischio più alto. |
| **Rafael Leao** | JOLLY 1ª FASCIA | Mercato decisivo: valore da aggiornare a finestra chiusa. |
| **Sebastiano Esposito** | MERCATO | Potenziale value se la situazione Cagliari si chiarisce. |

## 7. Ordine delle fasce

1. SUPER TOP
2. TOP
3. SEMITOP
4. SOTTO AI SEMITOP
5. FASCIA ALTA
6. JOLLY 1ª FASCIA
7. POSSIBILI SORPRESE
8. FASCIA MEDIA
9. SCOMMESSE
10. SOPRA AI LOW COST
11. JOLLY 2ª FASCIA
12. LOW COST 1ª FASCIA
13. LOW COST 2ª FASCIA
14. LEGHE NUMEROSE
15. JOLLY 3ª FASCIA
16. JOLLY 4ª FASCIA
17. A RISCHIO
18. DA EVITARE
19. MERCATO

Con filtro `Tutti` mantenere questo ordine. All'interno della fascia mantenere l'ordine del dataset.

## 8. Requisiti pagina `/attaccanti`

La pagina deve seguire design e comportamento di `/portieri`, `/difensori`, `/centrocampisti`.

### Ricerca
Campo `Cerca attaccante...`, case-insensitive su nome, nome breve e squadra.

### Filtri
- fascia: tutte le 19 categorie
- stato: Tutti, Titolare, Ballottaggio, Riserva, Infortunato, Mercato
- Solo preferiti
- tag opzionali: Bonus, Rigorista, Titolare, Jolly, Low Cost, Scommessa, Offensivo, Rischio fisico, Mercato, Value

### Contatore
Default: `88 attaccanti`, dinamico dopo filtri/ricerca.

## 9. Tabella

| Fascia | Giocatore | Squadra | Titolare | Gerarchia | Dati | Rigori | Strategia asta |
|---|---|---|---|---|---|---|---|

Mostrare solo dati disponibili; in assenza mostrare `—`.

## 10. Dettaglio giocatore

Riutilizzare il dettaglio già esistente. Mostrare nome, squadra, fascia, stato, gerarchia, statistiche, rigori, strategia, tags e note incrociate.

Valutazioni opzionali solo se già supportate: Bonus, Titolarità, Rendimento. Non inventare valori.

## 11. Rigori

Distinguere chiaramente: prima scelta, seconda scelta, gerarchia aperta, non specialista, da verificare. Non trasformare candidature in certezze.

## 12. Preferiti

Riutilizzare il sistema generico esistente e aggiungere `forwards`/attaccanti senza introdurre un secondo sistema.

## 13. Home e Navbar

Attivare la card `Attaccanti` verso `/attaccanti` e aggiungere `Attaccanti` alla navbar. NON aggiungere ancora `Strategie Attaccanti`.

## 14. Coerenza architetturale

Non creare componenti specifici duplicati (`ForwardTable`, `ForwardCard`) se esistono componenti generici (`PlayerTable`, `PlayerCard`, `PlayerDetail`, `Filters`, `SearchBar`, `FavoriteButton`).

## 15. Validazione obbligatoria

```js
const expectedCount = 88;

if (attaccanti.length !== expectedCount) {
  console.error(
    `Dataset attaccanti incompleto: ${attaccanti.length}/${expectedCount}`
  );
}

const ids = attaccanti.map((player) => player.id);
if (new Set(ids).size !== ids.length) {
  console.error("Sono presenti ID duplicati nel dataset attaccanti");
}
```

Verificare: 88 giocatori, 19 fasce, nessun duplicato, nessun record senza squadra/fascia, ricerca/filtri/preferiti/dettaglio funzionanti, responsive, nessuna regressione, build pulita.

## 16. Cosa NON implementare ora

- `/strategie/attaccanti`
- strategie di costruzione dell'attacco
- budget reparto
- combinazioni/piani
- asta live/backend/database/login/API

Questa fase è solo: **DATABASE COMPLETO + TABELLA + RICERCA + FILTRI + PREFERITI + DETTAGLIO**.