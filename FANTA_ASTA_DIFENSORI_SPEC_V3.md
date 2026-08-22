# Fanta Asta 2026/27 — Difensori V3

## 1. Scopo

Questo documento è la **nuova source of truth** per ricostruire da zero la pagina `/difensori` della web app **Fanta Asta 2026/27**.

**Ignorare la precedente specifica Difensori.** Questa V3 sostituisce integralmente il vecchio dataset della pagina Difensori.

In questa fase NON va ricostruita `/strategie/difensori`: le strategie verranno rifatte successivamente da zero.

La base delle fasce è la guida SOS Fanta aggiornata fornita dall'utente il 22 agosto 2026. La base contiene **181 difensori in 20 categorie**. La V3 aggiunge inoltre una sezione separata per gli aggiornamenti di mercato successivi alla guida, senza assegnare arbitrariamente una fascia SOS a chi non è ancora presente nella guida.

Data di congelamento della specifica: **23 agosto 2026, ore 00:08 circa (Europa/Roma)**.

## 2. Completezza e conteggi

### Base SOS

```js
difensoriBase.length === 181
```

| Fascia | N. |
|---|---:|
| SUPER TOP | 1 |
| TOP | 6 |
| SEMITOP | 6 |
| SOTTO AI SEMITOP | 5 |
| FASCIA ALTA | 4 |
| JOLLY 1ª FASCIA | 2 |
| POSSIBILI SORPRESE | 6 |
| FASCIA MEDIA | 9 |
| INFORTUNATI | 2 |
| SCOMMESSE | 5 |
| SOPRA AI LOW COST | 10 |
| JOLLY 2ª FASCIA | 5 |
| LOW COST 1ª FASCIA | 11 |
| LOW COST 2ª FASCIA | 13 |
| LEGHE NUMEROSE | 19 |
| JOLLY 3ª FASCIA | 18 |
| JOLLY 4ª FASCIA | 20 |
| A RISCHIO | 13 |
| DA EVITARE | 19 |
| MERCATO | 7 |
| **TOTALE BASE SOS** | **181** |

### Extra successivi alla guida

| Categoria | N. |
|---|---:|
| EXTRA AGGIORNAMENTI | 2 |
| EXTRA MERCATO | 2 |
| **TOTALE EXTRA** | **4** |

### Totale operativo V3

```js
difensori.length === 185
```

Il filtro `Tutti` deve mostrare **185 profili operativi**.

Importantissimo: i 4 extra NON devono essere spostati arbitrariamente dentro una delle 20 fasce SOS. Restano separati finché una successiva guida/listone non li assorbe.

## 3. Extra V3

### EXTRA AGGIORNAMENTI — trasferimenti ufficiali successivi alla guida

- Josip Sutalo — Lazio
- Benoit Badiashile — Napoli

### EXTRA MERCATO — operazioni avanzate ma non da trattare come ufficialità consolidata nella specifica

- Willy Kambwala — Como*
- Jayden Oosterwolde — Roma*

L'asterisco indica una destinazione di mercato ancora da trattare con prudenza nella UI.

## 4. Stati normalizzati

Usare nel dataset:

```text
si
ballottaggio
no
infortunato
mercato
```

UI:

- `si` → TITOLARE
- `ballottaggio` → BALLOTTAGGIO / ROTAZIONE
- `no` → RISERVA
- `infortunato` → INFORTUNATO
- `mercato` → MERCATO

Nota fondamentale: le categorie `DA EVITARE` e `A RISCHIO` sono valutazioni fantacalcistiche, NON sinonimi automatici di `no`. Un giocatore può essere titolare o andare spesso a voto e restare comunque poco appetibile al fantacalcio.

## 5. Struttura dati consigliata

```js
{
  id,
  nome,
  nomeBreve,
  squadra,
  ruolo: "D",
  fascia,
  stato,
  gerarchia,
  statistiche: {
    presenze,
    gol,
    assist,
    fantamedia,
    mediaVoto,
    ammonizioni,
    espulsioni
  },
  profilo,
  valutazioni: {
    bonus,
    modificatore,
    titolarita
  },
  rischio,
  tags,
  strategia,
  letturaIncrociata,
  note
}
```

Se un dato è sconosciuto usare `null`. NON usare `0` per dati non disponibili.

## 6. Dataset completo — 185 profili

### SUPER TOP — 1

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Dimarco** | Inter | si | Esterno sinistro titolare; specialista dei piazzati; ruolo estremamente offensivo | 7 G · 17 A | BONUS + MOD | 1° slot assoluto; investimento separato dal resto della difesa | SUPER TOP indiscusso; quotazione nettamente superiore agli altri difensori | — |

### TOP — 6

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Wesley** | Roma | si | Esterno sinistro titolare nella Roma di Gasperini; grande spinta e inserimenti | 30 P · 5 G · FM 6,47 | BONUS | 1° slot; tra i migliori difensori da bonus | Confermato Top anche dalle altre guide | — |
| **Spence** | Inter | ballottaggio | Prima scelta teorica a destra nell'Inter, ma Chivu può ruotare molto | Miglior annata: 2 G · 5 A | MOD + TITOLARITÀ DA MONITORARE | 1°/2° slot; non pagarlo come un nuovo Dumfries | Leggero downgrade operativo: altre guide lo tengono in prima fascia, ma la rotazione Inter è reale | — |
| **Bremer** | Juventus | si | Pilastro Juventus; minaccia principale sui piazzati | 4 G · 3 A · FM 6,81 | MOD + BONUS | 1° slot; eccellente col modificatore | Top confermato | — |
| **Bastoni** | Inter | si | Braccetto sinistro titolare; costruzione e inserimenti offensivi | 28 P · 1 G · 4 A · 6 gialli | MOD + ASSIST | 1°/2° slot; floor molto alto | Prima fascia nelle altre guide | — |
| **Pavlovic** | Milan | si | Braccetto sinistro titolare Milan; forte sui piazzati | 34 P · 5 G · FM 6,62 | BONUS + MOD | 1°/2° slot | Top confermato | — |
| **Solet** | Udinese | si | Leader Udinese; pericolo principale sui piazzati | 3 G · 1 A; 2 gialli + 1 rosso in 54 gare | MOD + BONUS | 1°/2° slot; ottimo rapporto prezzo/rendimento | Top sostanzialmente confermato | — |

### SEMITOP — 6

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Akanji** | Inter | si | Titolare Inter tra centro e centro-destra; molto affidabile | 32 P · 2 G · FM 6,41 · 4 gialli | MOD | 1°/2° slot da modificatore | Da alzare quasi a Top: quotazione e affidabilità molto alte | — |
| **Stones** | Inter | ballottaggio | Rotazione di lusso Inter; gestione fisica importante | 9 P Premier + 4 Champions | MOD / ROTAZIONE | 2°/3° slot; non comprarlo se serve voto fisso | Downgrade: alcune guide lo mettono molto più in basso per minutaggio e fisico | — |
| **Molina N.** | Roma | si | Esterno destro titolare Roma; ruolo ideale con Gasperini | Liga: 26 P · 2 G · 2 A | BONUS | 2° slot ad alto potenziale assist | Altre guide lo alzano in prima fascia | — |
| **Di Lorenzo** | Napoli | si | Capitano e titolare fisso Napoli a destra | 26 P · 2 G · 1 A · FM 6,33 | MOD + BONUS | 2° slot | Prima fascia per altre guide | — |
| **Gila** | Milan | si | Centrale titolare Milan; affidabile nei voti | 31 titolarità · 0 bonus · 3 gialli · 1 rosso | MOD | 2°/3° slot da modificatore | Lettura concorde | — |
| **Rrahmani** | Napoli | si | Leader della retroguardia Napoli; forte sui piazzati | 21 P · 2 G · FM 6,48 · 2 gialli | MOD + BONUS | 2° slot MOD | Altre guide lo alzano in prima fascia | — |

### SOTTO AI SEMITOP — 5

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Mancini** | Roma | si | Titolarissimo Roma; leadership e palle inattive | 36 P · 4 G · 2 A · FM 6,51 · 9 gialli | BONUS + MOD | 1°/2° slot; uno dei value principali | Forte upgrade: GOAL lo considera Top e la quotazione ufficiale è da fascia altissima | — |
| **Kalulu** | Juventus | si | Titolare Juventus; terzino/centrale molto duttile | 37 P · 2 G · 4 A · FM 6,36 | MOD + ASSIST | 2° slot | Prima fascia nelle altre guide | — |
| **Cambiaso** | Juventus | si | Titolare Juventus sulla fascia; alto potenziale offensivo | 36 P · 3 G · 4 A · FM 5,99 · 2 autogol | BONUS | 2°/3° slot; upside bonus ma rendimento da migliorare | Altre guide lo alzano in prima fascia | — |
| **Zappacosta** | Atalanta | ballottaggio | Favorito a destra Atalanta, ma ruolo più basso nel 4-3-3 | 35 voti · 3 G · 1 A | BONUS | 2°/3° slot senza pagare i bonus del vecchio quinto | Piccolo downgrade per arretramento tattico | — |
| **Spinazzola** | Napoli | ballottaggio | Davanti a Olivera; minutaggio spesso gestito | 30 P · 3 G · 3 A · FM 6,55 · 1 giallo | BONUS + MOD | 2°/3° slot ad alto rendimento | Altre guide lo alzano in prima fascia | — |

### FASCIA ALTA — 4

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **N'Dicka** | Roma | si | Colonna Roma; molto affidabile e forte sui piazzati | 31 P · 3 G · FM 6,32 · 5 gialli | MOD + BONUS | 2°/3° slot molto sicuro | Prima fascia nelle altre guide | — |
| **Lucumì** | Juventus | si | Favorito accanto a Bremer alla Juventus | 28 P · 1 G · FM 5,90 · 5 gialli | MOD | 3° slot | Altre guide lo collocano più in alto | — |
| **Bisseck** | Inter | ballottaggio | Rotazione molto importante Inter; non titolare fisso ma bonus elevati | 23 P · 3 G · 2 A · FM 6,65 · 2 gialli | MOD + BONUS | 2° slot se si accettano rotazioni | Forte upgrade: GOAL lo mette Top e ha iniziato titolare la prima giornata | — |
| **Ramon** | Como | si | Centrale titolare Como; partecipa molto alla costruzione e all'attacco | 2 G · 1,22 tiri/gara · FM 6,14 · 11 gialli + 1 rosso | MOD + BONUS | 2°/3° slot | Prima fascia in altre guide | — |

### JOLLY 1ª FASCIA — 2

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Carlos Augusto** | Inter | ballottaggio | Vice Dimarco/Bastoni ma quasi sempre nelle rotazioni | 28 voti · 1 G · 1 A | MOD | 4°/5° slot di lusso | Lettura concorde | — |
| **Celik** | Juventus | ballottaggio | Alternativa di Kalulu a destra nella Juventus | 1 G · 2 A nella Roma 25/26 | MOD | 5°/6° slot | Non più titolarissimo | — |

### POSSIBILI SORPRESE — 6

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Chalobah T.** | Como | si | Titolare Como; investimento da 30+6 milioni | Chelsea: 151 P · 8 G; 3 G nell'ultima Premier | MOD + BONUS | 3° slot forte | Forte upgrade: prima fascia GOAL e titolare | — |
| **Koulierakis** | Roma | ballottaggio | Ballottaggio con Hermoso; Ndicka e Mancini punti fermi | Ottimo rendimento Wolfsburg; forte di testa | BONUS + UPSIDE | 4° slot upside | Possibile sorpresa reale | — |
| **Vojvoda** | Udinese | si | Prima opzione Udinese a destra, con concorrenza al rientro di Zanoli | Ultima A col Como: 2 G · 1 A | BONUS | 4°/5° slot offensivo | Upgrade: partito titolare alla prima | — |
| **Kaiki** | Como | ballottaggio | Ballottaggio con Alex Valle a sinistra nel Como | 5 assist nel 2025 + 4 nella prima metà 2026 | ASSIST | 4°/5° slot; coppia con Valle possibile | Valle ha vinto il primo round alla 1ª giornata | — |
| **Obrador** | Sassuolo | ballottaggio | Ballottaggio con Doig sulla sinistra Sassuolo | Torino: 16 P · 1 G · 3 A | ASSIST | 4°/5° slot ad alto upside assist | Lettura concorde | — |
| **Mitaj** | Genoa | ballottaggio | Si gioca la fascia sinistra Genoa; non titolare blindato | 1 G · 2 A in Arabia | MOD + PIAZZATI | 5° slot | Downgrade: non titolare alla prima | — |

### FASCIA MEDIA — 9

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Ostigard** | Genoa | si | Perno difesa Genoa; fortissimo sui piazzati | 5 G · 7 gialli | MOD + BONUS | 3° slot; pezzo pregiato delle provinciali | Forte upgrade: GOAL prima fascia | — |
| **Kristensen T.** | Atalanta | si | Favorito titolare Atalanta; investimento circa 25 milioni | 3 G nella scorsa stagione | MOD + BONUS | 3°/4° slot MOD | Altre guide lo alzano | — |
| **Hermoso** | Roma | ballottaggio | Ballottaggio Koulierakis; rotazioni Champions | 27 P · 3 G · 2 A · FM 6,41 · 9 gialli | BONUS + MOD | 4° slot | Lettura concorde | — |
| **Bartesaghi** | Milan | si | Titolare/forte favorito a sinistra Milan, posizione molto alta | 2 G · 0 A | BONUS | 3°/4° slot | Interessante per ruolo offensivo | — |
| **Delprato** | Parma | si | Capitano Parma; titolarissimo | 35 P · 2 G · FM 6,01 | TITOLARITÀ + MOD | 4° slot sicuro | Value da provinciali | — |
| **Miranda J.** | Bologna | si | Titolare Bologna a sinistra, Alhassane insidia | 31 P · 1 G · 3 A · FM 6,10 | MOD + ASSIST | 3°/4° slot | Altre guide lo alzano in seconda fascia | — |
| **Valle** | Como | si | Partito titolare alla 1ª; ballottaggio Kaiki | 26 P · 1 G · 3 A | ASSIST | 4° slot | Segnale positivo dal campo | — |
| **Kempf** | Como | ballottaggio | Rotazione Como dopo l'arrivo di Chalobah; non più titolare fisso | 4 G · 1 A | BONUS | 4°/5° slot; non pagarlo sui numeri vecchi | Downgrade gerarchico rispetto alla valutazione di alcune guide | — |
| **Bernasconi** | Atalanta | ballottaggio | Ballottaggio con Ahanor a sinistra Atalanta | 22 P · 3 A · FM 6,16 | MOD + ASSIST | 4°/5° slot | Lettura concorde | — |

### INFORTUNATI — 2

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Buongiorno** | Napoli | infortunato | Titolare Napoli quando recuperato | Rientro indicativo novembre dopo operazione al menisco | MOD | Acquisto in saldo solo con reparto già coperto | Potenziale big al rientro | — |
| **Parisi** | Fiorentina | infortunato | Fiorentina, gerarchia da rivalutare al rientro | Crociato; rientro novembre-dicembre | MOD | Più da asta di riparazione | Rischio tempi di recupero | — |

### SCOMMESSE — 5

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Couto** | Como | si | Titolare/forte favorito a destra Como | Dortmund: 27 P · 3 G · 3 A tutte le competizioni | BONUS + ASSIST | 3°/4° slot ad upside | Forte upgrade: prima fascia GOAL + titolare alla 1ª | — |
| **Jimenez A.** | Fiorentina | ballottaggio | Ballottaggio con Joao Mario alla Fiorentina | Bournemouth: 26 titolarità · 1 G | BONUS | 4° slot upside | Più di una semplice scommessa se vince il posto | — |
| **Viery** | Fiorentina | ballottaggio | Parte avanti nella nuova difesa Fiorentina | 16 presenze tra i professionisti | UPSIDE | 5° slot scommessa vera | Impatto Serie A da verificare | — |
| **Ahanor** | Atalanta | ballottaggio | Ballottaggio serrato Bernasconi | FM 5,69 · 0 bonus | UPSIDE | 5° slot | Talento alto ma ancora da tradurre in rendimento | — |
| **Valdepenas** | Fiorentina | ballottaggio | Può conquistare il posto a sinistra Fiorentina | Castilla: 30 P · 2 G · 1 A | UPSIDE | 5° slot upside | Giovane da monitorare | — |

### SOPRA AI LOW COST — 10

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Vasquez** | Genoa | si | Titolarissimo Genoa | 36 P · 1 G · FM 6,14 | MOD | 4° slot solidissimo | Confermato titolare | — |
| **Dragusin** | Fiorentina | si | Titolare Fiorentina | Ultima A Genoa: 19 P · 2 G · 1 A; reduce da crociato | MOD + BONUS | 3°/4° slot | Buon upside, attenzione alla tenuta fisica | — |
| **Valeri** | Parma | si | Titolare Parma; piazzati e candidato ai rigori | 34 P · FM 6,09 · 2 A | BONUS + MOD | 4° slot value | Uno dei migliori value low-cost | — |
| **Gabbia** | Milan | ballottaggio | Titolare/rotazione importante Milan | 29 P · FM 5,84 · 4 gialli | MOD | 4°/5° slot di big | Niente spese folli | — |
| **Scalvini** | Atalanta | infortunato | Pilastro potenziale Atalanta ma momentaneamente fermo per caviglia | 24 P · 3 G · 1 A · FM 6,44 | MOD + BONUS | 3° slot in saldo se lo stop resta breve | Upgrade per qualità, alert infortunio | — |
| **Hien** | Atalanta | infortunato | Infortunato; al rientro concorrenza Scalvini/Kossounou/Kristensen | 28 P · 1 G · FM 5,86 | MOD | Ultimi slot solo se si accetta l'attesa | Rischio fisico e gerarchico | — |
| **Mina** | Cagliari | ballottaggio | Titolare teorico Cagliari ma panchina alla prima | 28 P · 2 G · 1 A · FM 6,17 | MOD + BONUS | 4° slot MOD | Piccolo alert dal primo turno, non bocciatura stagionale | — |
| **Norton-Cuffy** | Genoa | si | Titolare destro Genoa | 2 G · FM 6,10 | BONUS + MOD | 4° slot offensivo; tra i migliori provinciali | Titolare confermato | — |
| **Tiago Gabriel** | Lecce | mercato | Titolare Lecce se resta; mercato da vigilare | 36 P · 2 G · FM 6,01 · 7 gialli | MOD | 4° slot MOD | Garanzia di voto se rimane | — |
| **Pedraza** | Lazio | ballottaggio | Favorito/ballottaggio a sinistra Lazio con Pellegrini | Miglior annata Villarreal: 4 G · 5 A | BONUS | 4°/5° slot | Rischio fisico storico da considerare | — |

### JOLLY 2ª FASCIA — 5

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Bellanova** | Atalanta | ballottaggio | Dietro Zappacosta a destra Atalanta | 22 P · 1 A · FM 5,82 | BONUS | 5° slot; possibile coppia con Zappacosta | Deve rilanciarsi | — |
| **Joao Mario** | Fiorentina | ballottaggio | Insegue Jimenez alla Fiorentina | 1 G · 1 A complessivi | MOD | 5°/6° slot | Minutaggio possibile ma non titolare | — |
| **Beukema** | Napoli | infortunato | Problema al tendine; può sfruttare assenza Buongiorno al rientro | 22 P · 2 G | MOD + BONUS | 4°/5° slot se il fisico dà garanzie | Jolly interessante nel breve | — |
| **Holm** | Bologna | ballottaggio | Ballottaggio con Zortea/De Silvestri a Bologna | 16 P · 1 G · 4 A | ASSIST | 5° slot ad upside | Forte rischio fisico | — |
| **Rensch** | Roma | ballottaggio | Rotazione Roma sulle fasce; spazio tra campionato e Champions | 19 P · 1 G · 4 A · FM 6,50 | BONUS | 4°/5° slot | Rendimento ottimo quando impiegato | — |

### LOW COST 1ª FASCIA — 11

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Zortea** | Bologna | ballottaggio | Ballottaggio Holm/De Silvestri a Bologna | 28 P · 2 A · FM 5,90 | BONUS | 5° slot offensivo | Staffette frequenti | — |
| **Kelly L.** | Juventus | ballottaggio | Prima alternativa ai centrali Juventus dopo l'arrivo di Lucumì | 35 P · FM 6,07 | MOD | 5°/6° slot di big | Downgrade titolarità | — |
| **Gatti** | Juventus | mercato | Futuro Juventus in bilico; gerarchia da chiarire | 16 P · 2 G · FM 6,22 | MOD + BONUS | Solo a pochi crediti finché il mercato è aperto | Mercato decisivo | — |
| **Doekhi** | Lazio | si | Titolare/forte favorito Lazio | 68 partite Bundesliga consecutive da 90' · 5 G · 1 A nell'ultima | MOD + BONUS | 3°/4° slot value | Uno dei value più interessanti | — |
| **Idzes** | Sassuolo | si | Titolare Sassuolo; guida del reparto | 35 P · FM 5,91 | TITOLARITÀ | 5° slot titolare | Altre guide lo valutano più in alto | — |
| **Bella-Kotchap** | Venezia | si | Titolare/favorito nella difesa Venezia | Titolare Venezia; storico recente di problemi muscolari | MOD | 5°/6° slot | Titolarità buona, bonus limitati | — |
| **Comuzzo** | Torino | si | Titolare/forte favorito Torino nella difesa a tre | 24 P · 1 G · 1 autogol | MOD | 4°/5° slot | Profilo da copertura affidabile | — |
| **Gallo** | Lecce | si | Titolare sinistro Lecce | 37 P · 3 A · FM 5,99 | ASSIST | 5° slot affidabile | Titolarità elevata | — |
| **Gaspar K.** | Lecce | si | Titolare Lecce dopo recupero dal grave infortunio al ginocchio | 21 P · 6 gialli · 1 rosso | MOD | 5°/6° slot | Tenuta fisica da monitorare | — |
| **Pedersen** | Torino | si | Titolare destro Torino | 28 P · 1 G · 2 A · FM 5,97 | BONUS | 5° slot con upside | Possibile sorpresa | — |
| **Troilo** | Parma | si | In corsa per titolarità Parma; partito titolare alla prima | 21 gare precedenti · 2 rossi · 5 gialli; primo gol in A | BONUS / MALUS | 6° slot; attenzione ai cartellini | Upgrade dal campo | — |

### LOW COST 2ª FASCIA — 13

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Coco** | Torino | si | Perno centrale Torino | 35 P · 1 G · 1 A · FM 5,91 | TITOLARITÀ | 5°/6° slot titolare | Profilo semplice da copertura | — |
| **Ismajli** | Torino | ballottaggio | Concorrenza con Comert/Comuzzo; Coco più avanti | 24 P · 2 A · FM 5,90 | MOD | 6° slot | Ballottaggio | — |
| **Heggem** | Bologna | ballottaggio | Candidato titolare Bologna con Vitik | — | MOD | 6° slot | Low cost | — |
| **Kamara H.** | Udinese | si | Titolare sinistro Udinese nel 3-5-2 | 26 P · 2 A · FM 5,86 | ASSIST | 5° slot offensivo | Ruolo alto interessante | — |
| **Mangas** | Monza | ballottaggio | Ballottaggio Azzi al Monza | 15 presenze ultima stagione; storico con diversi gol | BONUS | 5° slot scommessa | Juric può valorizzarlo | — |
| **Kolasinac** | Atalanta | ballottaggio | Rotazione Atalanta tra centro e sinistra | 17 P · FM 5,94 | MOD | 6° slot da voto | Minutaggio non fisso | — |
| **Oyono A.** | Frosinone | si | Titolare destro Frosinone | 34 P · 1 G · 4 A · 8 gialli | BONUS | 5° slot offensivo | Buon low cost da bonus | — |
| **Veiga D.** | Lecce | si | Titolare destro Lecce | 36 P · 9 gialli · 0 bonus | TITOLARITÀ | 6° slot | Titolare ma pochi bonus | — |
| **Vitik** | Bologna | ballottaggio | Candidato titolare Bologna con Heggem | — | MOD | 6° slot | Low cost | — |
| **Comert** | Torino | ballottaggio | Può insidiare Ismajli/Comuzzo al Torino | Esperienza Valencia/Nantes/Basilea; 2 gol in alcune stagioni | MOD | Ultimi slot | Gerarchia da definire | — |
| **Kabasele** | Udinese | ballottaggio | Rotazione Udinese; concorrenza Bertola/Mlacic | 28 P · 3 G · FM 6,18 | BONUS + MOD | 5°/6° slot interessante sui piazzati | Non titolare inamovibile | — |
| **Walukiewicz** | Sassuolo | si | Titolare/forte candidato Sassuolo | 34 P · 1 A · MV 5,74 | TITOLARITÀ | 6° slot | Copertura economica | — |
| **Favasuli** | Napoli | ballottaggio | Vice designato di Di Lorenzo al Napoli | — | HANDCUFF | Solo a 1-2 crediti, soprattutto in coppia con Di Lorenzo | Nessuna prospettiva di titolarità stabile | — |

### LEGHE NUMEROSE — 19

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Obert** | Cagliari | ballottaggio | Ballottaggio / rotazione | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Segnale positivo dal primo turno | — |
| **Marcandalli** | Genoa | si | Titolare / alta probabilità di voto | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Upgrade dal campo: titolare all'esordio Genoa | — |
| **Marusic** | Lazio | ballottaggio | Ballottaggio / rotazione | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Monterisi** | Frosinone | ballottaggio | Ballottaggio / rotazione | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Bracaglia** | Frosinone | ballottaggio | Ballottaggio / rotazione | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Haps** | Venezia | ballottaggio | Ballottaggio / rotazione | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Moreno M.** | Venezia | ballottaggio | Ballottaggio / rotazione | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Zè Pedro** | Cagliari | si | Titolare / alta probabilità di voto | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Upgrade dal campo: titolare alla prima col Cagliari | — |
| **Correia T.** | Venezia | ballottaggio | Ballottaggio / rotazione | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Halhal** | Venezia | ballottaggio | Ballottaggio / rotazione | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Siebert** | Lecce | ballottaggio | Ballottaggio / rotazione | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Smolcic I.** | Como | ballottaggio | Ballottaggio / rotazione | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Carboni A.** | Monza | ballottaggio | Ballottaggio / rotazione | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Hainaut** | Venezia | ballottaggio | Ballottaggio / rotazione | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Kossounou** | Atalanta | ballottaggio | Ballottaggio / rotazione | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Rodriguez Ju.** | Cagliari | si | Titolare / alta probabilità di voto | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Upgrade dal campo: titolare alla prima col Cagliari | — |
| **Pellegrini Lu.** | Lazio | ballottaggio | Ballottaggio / rotazione | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Leysen F.** | Sassuolo | ballottaggio | Ballottaggio / rotazione | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Nuovo nome nella guida aggiornata; minuti possibili | — |
| **Terzic** | Frosinone | ballottaggio | Ballottaggio / rotazione | — | COPERTURA | Ultimi slot, soprattutto leghe numerose | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |

### JOLLY 3ª FASCIA — 18

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Pavard** | Inter | mercato | Situazione di mercato / gerarchia non definitiva | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Mercato e gerarchia Inter da chiarire | — |
| **Fortini** | Fiorentina | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Giovane interessante ma minutaggio da definire | — |
| **Olivera** | Napoli | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Bertola** | Udinese | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Doig** | Sassuolo | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Ghilardi** | Roma | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Valenti** | Parma | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Zanoli** | Udinese | infortunato | Infortunato; rientro da monitorare | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Infortunio grave; rientro da monitorare | — |
| **De Winter** | Milan | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Idrissi R.** | Cagliari | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Provstgaard** | Lazio | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Ranieri L.** | Fiorentina | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Biraghi** | Torino | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Helland** | Bologna | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Puczka** | Genoa | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Van Der Brempt** | Como | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Cabal** | Juventus | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Ziolkowski** | Roma | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimi slot / rotazioni | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |

### JOLLY 4ª FASCIA — 20

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Kofler** | Cagliari | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimissimi slot | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Arizala** | Udinese | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimissimi slot | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Birindelli** | Monza | si | Titolare / alta probabilità di voto | — | JOLLY PROFONDO | Ultimissimi slot | Segnale positivo: titolare alla prima Monza | — |
| **Zappa** | Cagliari | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimissimi slot | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Britschgi** | Parma | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimissimi slot | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Casale** | Bologna | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimissimi slot | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Alhassane** | Bologna | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimissimi slot | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Ebosse** | Udinese | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimissimi slot | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Lazzari** | Lazio | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimissimi slot | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Otoa** | Genoa | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimissimi slot | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Palma** | Udinese | si | Titolare / alta probabilità di voto | — | JOLLY PROFONDO | Ultimissimi slot | Upgrade: titolare alla prima Udinese | — |
| **Sabelli** | Genoa | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimissimi slot | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Carboni F.** | Parma | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimissimi slot | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **De Silvestri** | Bologna | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimissimi slot | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Mazzocchi** | Napoli | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimissimi slot | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Mlacic** | Udinese | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimissimi slot | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Ndiaye** | Parma | si | Titolare / alta probabilità di voto | — | JOLLY PROFONDO | Ultimissimi slot | Upgrade: titolare alla prima Parma | — |
| **Oyono J.** | Frosinone | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimissimi slot | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Odenthal** | Sassuolo | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimissimi slot | Nuovo nome nella guida aggiornata; gerarchia da monitorare | — |
| **Omar Fayed** | Frosinone | ballottaggio | Ballottaggio / rotazione | — | JOLLY PROFONDO | Ultimissimi slot | Nuovo nome nella guida aggiornata; ultimo slot | — |

### A RISCHIO — 13

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Calvani** | Frosinone | no | Prevalentemente riserva | — | RISCHIO | Solo forte sconto / leghe profonde | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Pongracic** | Fiorentina | ballottaggio | Ballottaggio / rotazione | — | RISCHIO | Solo forte sconto / leghe profonde | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Akpoguma** | Frosinone | ballottaggio | Ballottaggio / rotazione | — | RISCHIO | Solo forte sconto / leghe profonde | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Candè** | Sassuolo | ballottaggio | Ballottaggio / rotazione | — | RISCHIO | Solo forte sconto / leghe profonde | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Cittadini** | Frosinone | ballottaggio | Ballottaggio / rotazione | — | RISCHIO | Solo forte sconto / leghe profonde | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Diawara S.** | Milan | no | Prevalentemente riserva | — | RISCHIO | Solo forte sconto / leghe profonde | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Marin R.** | Napoli | ballottaggio | Ballottaggio / rotazione | — | RISCHIO | Solo forte sconto / leghe profonde | Ha iniziato la prima giornata, ma prospettiva stagionale e condizione restano da monitorare | — |
| **Terracciano F.** | Milan | mercato | Situazione di mercato / gerarchia non definitiva | — | RISCHIO | Solo forte sconto / leghe profonde | Mercato/poco spazio | — |
| **Corrado** | Frosinone | ballottaggio | Ballottaggio / rotazione | — | RISCHIO | Solo forte sconto / leghe profonde | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Marianucci** | Napoli | no | Prevalentemente riserva | — | RISCHIO | Solo forte sconto / leghe profonde | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Missori** | Sassuolo | no | Prevalentemente riserva | — | RISCHIO | Solo forte sconto / leghe profonde | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Ndaba** | Lecce | no | Prevalentemente riserva | — | RISCHIO | Solo forte sconto / leghe profonde | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Rugani** | Juventus | no | Prevalentemente riserva | — | RISCHIO | Solo forte sconto / leghe profonde | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |

### DA EVITARE — 19

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Delli Carri** | Monza | no | Prevalentemente riserva | — | BASSO APPEAL | Evitare in leghe standard | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Lucchesi** | Monza | ballottaggio | Ballottaggio / rotazione | — | BASSO APPEAL | Evitare in leghe standard | Titolarità possibile (ha iniziato la prima), ma categoria resta 'Da evitare' per rendimento/appeal | — |
| **Kouadio** | Monza | ballottaggio | Ballottaggio / rotazione | — | BASSO APPEAL | Evitare in leghe standard | Titolarità possibile (ha iniziato la prima), ma categoria resta 'Da evitare' per rendimento/appeal | — |
| **Schingtienne** | Venezia | no | Prevalentemente riserva | — | BASSO APPEAL | Evitare in leghe standard | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Sverko** | Venezia | no | Prevalentemente riserva | — | BASSO APPEAL | Evitare in leghe standard | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Aurelio** | Cagliari | no | Prevalentemente riserva | — | BASSO APPEAL | Evitare in leghe standard | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Franjic** | Venezia | no | Prevalentemente riserva | — | BASSO APPEAL | Evitare in leghe standard | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Jean** | Lecce | no | Prevalentemente riserva | — | BASSO APPEAL | Evitare in leghe standard | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Sagrado** | Venezia | no | Prevalentemente riserva | — | BASSO APPEAL | Evitare in leghe standard | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Abankwah** | Udinese | ballottaggio | Ballottaggio / rotazione | — | BASSO APPEAL | Evitare in leghe standard | Titolarità possibile (ha iniziato la prima), ma basso appeal fantasy | — |
| **Amey** | Frosinone | no | Prevalentemente riserva | — | BASSO APPEAL | Evitare in leghe standard | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Antov** | Monza | no | Prevalentemente riserva | — | BASSO APPEAL | Evitare in leghe standard | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Bakoune** | Monza | no | Prevalentemente riserva | — | BASSO APPEAL | Evitare in leghe standard | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Cinquegrano** | Sassuolo | no | Prevalentemente riserva | — | BASSO APPEAL | Evitare in leghe standard | Nuovo inserimento nella fascia Da evitare | — |
| **Goldaniga** | Como | no | Prevalentemente riserva | — | BASSO APPEAL | Evitare in leghe standard | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Gomes** | Venezia | no | Prevalentemente riserva | — | BASSO APPEAL | Evitare in leghe standard | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Matturro** | Genoa | no | Prevalentemente riserva | — | BASSO APPEAL | Evitare in leghe standard | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Patric** | Lazio | no | Prevalentemente riserva | — | BASSO APPEAL | Evitare in leghe standard | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Pieragnolo** | Sassuolo | no | Prevalentemente riserva | — | BASSO APPEAL | Evitare in leghe standard | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |

### MERCATO — 7

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Dodò** | Fiorentina | mercato | Situazione di mercato / gerarchia non definitiva | — | MERCATO | Aspettare mercato/destinazione prima di investire | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Romagnoli** | Lazio | mercato | Situazione di mercato / gerarchia non definitiva | — | MERCATO | Aspettare mercato/destinazione prima di investire | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Tavares N.** | Lazio | mercato | Situazione di mercato / gerarchia non definitiva | — | MERCATO | Aspettare mercato/destinazione prima di investire | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Tomori** | Milan | mercato | Situazione di mercato / gerarchia non definitiva | — | MERCATO | Aspettare mercato/destinazione prima di investire | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Martin** | Genoa | mercato | Situazione di mercato / gerarchia non definitiva | — | MERCATO | Aspettare mercato/destinazione prima di investire | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Estupinan** | Milan | mercato | Situazione di mercato / gerarchia non definitiva | — | MERCATO | Aspettare mercato/destinazione prima di investire | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |
| **Floriani Mussolini** | Lazio | mercato | Situazione di mercato / gerarchia non definitiva | — | MERCATO | Aspettare mercato/destinazione prima di investire | Lettura SOS mantenuta; aggiornare solo con fonte certa | — |

### EXTRA AGGIORNAMENTI — 2

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Josip Sutalo** | Lazio | ballottaggio | Nuovo centrale ufficiale della Lazio; gerarchia iniziale da definire dopo l'arrivo dall'Ajax | — | MOD | 4°/5° slot iniziale; non pagarlo da Top prima di chiarire la gerarchia | UFFICIALE Lazio dal 22 agosto 2026; non appartiene ancora a una fascia SOS della guida base | Prestito con opzione per l'acquisto definitivo. |
| **Benoit Badiashile** | Napoli | ballottaggio | Nuovo centrale ufficiale Napoli; può trovare spazio subito con Buongiorno fuori, poi concorrenza alta | Monaco: 135 presenze · 6 gol; esperienza Chelsea | MOD | 4°/5° slot iniziale; possibile value se conquista continuità | UFFICIALE Napoli dal 23 agosto 2026; non appartiene ancora alle fasce SOS della guida base | Prestito iniziale con opzione di acquisto. |

### EXTRA MERCATO — 2

| Giocatore | Squadra | Stato | Gerarchia / ruolo | Dati disponibili | Profilo | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|
| **Willy Kambwala** | Como* | mercato | Accordo di massima Como-Villarreal; non ancora trattato come trasferimento ufficiale nella specifica | — | MERCATO | Aspettare ufficialità e gerarchie Como prima di investire | HERE WE GO / accordo di massima: aggiunge ulteriore concorrenza a una difesa Como già molto profonda | Prestito con diritto di riscatto a 10 milioni secondo gli ultimi aggiornamenti. |
| **Jayden Oosterwolde** | Roma* | mercato | Trattativa avanzata Roma-Fenerbahce; accordo col giocatore, ma trasferimento non ancora ufficiale | — | MERCATO + DUTTILE | Aspettare ufficialità, ruolo e recupero fisico | Operazione in fase finale ma non ufficiale; non assegnare una fascia SOS | Può giocare braccetto o esterno sinistro; condizione fisica da monitorare. |

## 7. Letture incrociate da evidenziare

| Giocatore | Fascia SOS | Lettura operativa V3 |
|---|---|---|
| **Dimarco** | SUPER TOP | Conferma assoluta: resta separato dal resto del reparto. |
| **Mancini** | SOTTO AI SEMITOP | **Upgrade forte**: altre guide lo trattano da Top; 4 G + 2 A e titolarità altissima. |
| **Bisseck** | FASCIA ALTA | **Upgrade forte**: altre guide Top; FM 6,65 e partenza da titolare alla 1ª giornata. |
| **Akanji** | SEMITOP | Quasi Top da modificatore e affidabilità. |
| **Ostigard** | FASCIA MEDIA | **Upgrade forte**: 5 gol, titolarissimo Genoa, prima fascia in altre guide. |
| **Chalobah** | POSSIBILI SORPRESE | **Upgrade**: investimento importante Como, titolare, altre guide prima fascia. |
| **Yan Couto** | SCOMMESSE | **Upgrade molto forte**: altre guide prima fascia + titolare alla 1ª. |
| **N'Dicka** | FASCIA ALTA | Altre guide lo alzano in prima fascia. |
| **Ramon** | FASCIA ALTA | Altre guide lo alzano in prima fascia. |
| **Molina** | SEMITOP | Altre guide lo alzano in prima fascia. |
| **Spence** | TOP | Piccolo downgrade operativo: forte, ma la rotazione Inter è maggiore di una lettura 'titolare blindato'. |
| **Stones** | SEMITOP | Downgrade per minutaggio e storico fisico. |
| **Kempf** | FASCIA MEDIA | Downgrade gerarchico dopo l'arrivo di Chalobah e la maggiore profondità Como. |
| **Mitaj** | POSSIBILI SORPRESE | Downgrade: non partito titolare alla 1ª. |
| **Marcandalli** | LEGHE NUMEROSE | Upgrade dal campo: titolare all'esordio Genoa. |
| **Troilo** | LOW COST 1ª FASCIA | Upgrade: partito titolare col Parma. |
| **Ndiaye** | JOLLY 4ª FASCIA | Upgrade: titolare alla 1ª giornata Parma. |
| **Obert / Zè Pedro / Rodriguez Ju.** | LEGHE NUMEROSE | Segnali positivi: partiti nel blocco difensivo Cagliari. |
| **Mina** | SOPRA AI LOW COST | Piccolo alert: panchina alla prima; non è una bocciatura stagionale. |
| **Abankwah** | DA EVITARE | Può anche partire titolare, ma resta basso appeal fantasy: distinguere titolarità e convenienza. |

## 8. Value Picks V3

Da evidenziare con tag `VALUE` senza cambiare la fascia SOS:

- Mancini
- Akanji
- Bisseck
- Ostigard
- Chalobah
- Yan Couto
- N'Dicka
- Ramon
- Doekhi
- Valeri
- Norton-Cuffy
- Delprato

## 9. Modificatore

Profili particolarmente interessanti:

- Bremer
- Bastoni
- Akanji
- Mancini
- Gila
- Rrahmani
- N'Dicka
- Bisseck
- Ostigard
- Doekhi
- Scalvini quando recupera
- Mina
- Vasquez
- Tiago Gabriel
- Chalobah
- Kristensen

Questa lista è strategica e non deve cambiare automaticamente la fascia SOS.

## 10. Difensori da bonus / esterni offensivi

Profili da evidenziare:

- Dimarco
- Wesley
- Molina
- Cambiaso
- Spinazzola
- Zappacosta
- Yan Couto
- Bartesaghi
- Miranda
- Valle
- Kaiki
- Obrador
- Vojvoda
- Norton-Cuffy
- Valeri
- Pedersen
- Kamara
- Antony Oyono

## 11. Infortunati / rischio fisico

Separare chiaramente `infortunato` da `rischio fisico`.

### Infortunati espliciti

- Buongiorno
- Parisi
- Hien
- Scalvini (stop da valutare; non equipararlo a un lungo infortunio se il recupero resta breve)
- Zanoli
- Beukema (problema al tendine, rientro vicino secondo la guida)

### Storico fisico/rischio ma non necessariamente infortunati

- Bremer
- Stones
- Spinazzola
- Dragusin
- Pedraza
- Bella-Kotchap
- Holm

## 12. Mercato

### Fascia MERCATO della guida base

- Dodò — Fiorentina
- Romagnoli — Lazio
- Nuno Tavares — Lazio
- Tomori — Milan
- Martin — Genoa
- Estupinan — Milan
- Floriani Mussolini — Lazio

### Extra mercato V3

- Kambwala — Como* — accordo di massima, non assegnare fascia SOS
- Oosterwolde — Roma* — trattativa avanzata, non assegnare fascia SOS

### Trasferimenti ufficiali successivi alla guida

- Sutalo — Lazio — EXTRA AGGIORNAMENTI
- Badiashile — Napoli — EXTRA AGGIORNAMENTI

## 13. Casi speciali

### Como

La difesa è molto profonda. Non trattare contemporaneamente Chalobah, Ramon, Kempf, Couto, Valle, Kaiki, Van der Brempt, Smolcic e Kambwala come titolari certi. La pagina deve mostrare gli stati reali del dataset e distinguere i titolari dalle rotazioni.

### Inter

Spence, Stones e Bisseck richiedono gestione delle rotazioni. Dimarco/Bastoni/Akanji sono più stabili. Non trasformare la fascia SOS in una previsione automatica di 38 titolarità.

### Roma

Wesley, Mancini e N'Dicka hanno gerarchie alte; Koulierakis/Hermoso/Ghilardi/Ziolkowski e l'eventuale Oosterwolde aumentano la profondità. Molina è un profilo alto a destra.

### Atalanta

Nuovo sistema a quattro: l'arretramento di Zappacosta/Bellanova e i ballottaggi Bernasconi-Ahanor incidono sul valore. Scalvini/Hien hanno alert fisici.

### Fiorentina

Difesa fortemente rinnovata: Dragusin, Viery, Jimenez, Joao Mario, Valdepenas e i giocatori mercato rendono alcune gerarchie ancora scrivibili.

### Napoli

Buongiorno è infortunato; Rrahmani è il leader. Beukema e il nuovo Badiashile possono avere spazio, poi la concorrenza crescerà al rientro di Buongiorno.

## 14. Pagina `/difensori`

Titolo:

```text
Difensori 2026/27
```

Sottotitolo indicativo:

```text
Fasce, titolarità, bonus, modificatore e consigli per l'asta
```

La pagina deve seguire il linguaggio visivo già usato da `/centrocampisti` e `/attaccanti`.

## 15. Ricerca

Campo:

```text
Cerca difensore...
```

Ricerca case-insensitive almeno su:

- nome;
- nome breve;
- squadra.

## 16. Filtri

### Fascia/categoria

Mostrare tutte le 22 categorie operative:

- SUPER TOP
- TOP
- SEMITOP
- SOTTO AI SEMITOP
- FASCIA ALTA
- JOLLY 1ª FASCIA
- POSSIBILI SORPRESE
- FASCIA MEDIA
- INFORTUNATI
- SCOMMESSE
- SOPRA AI LOW COST
- JOLLY 2ª FASCIA
- LOW COST 1ª FASCIA
- LOW COST 2ª FASCIA
- LEGHE NUMEROSE
- JOLLY 3ª FASCIA
- JOLLY 4ª FASCIA
- A RISCHIO
- DA EVITARE
- MERCATO
- EXTRA AGGIORNAMENTI
- EXTRA MERCATO

### Stato

- Tutti
- Titolare
- Ballottaggio
- Riserva
- Infortunato
- Mercato

### Profilo/tag, se supportato dall'architettura

- Bonus
- Modificatore
- Titolare
- Value
- Low Cost
- Jolly
- Scommessa
- Infortunato
- Mercato
- Extra aggiornamento

### Preferiti

`Solo preferiti` usando il sistema generico già presente.

## 17. Contatore

Default:

```text
185 difensori
```

Il contatore deve aggiornarsi con ricerca e filtri.

## 18. Tabella desktop

| Fascia | Giocatore | Squadra | Stato | Gerarchia | Dati | Profilo | Strategia asta |
|---|---|---|---|---|---|---|---|

La `letturaIncrociata` e le note più lunghe possono essere mostrate soprattutto nel dettaglio per evitare una tabella illeggibile.

## 19. Dettaglio difensore

Mostrare:

- nome;
- squadra;
- fascia/categoria;
- stato;
- gerarchia;
- statistiche disponibili;
- profilo;
- strategia individuale;
- lettura incrociata;
- note;
- tag;
- eventuale alert `GERARCHIA APERTA`, `INFORTUNATO`, `MERCATO`, `EXTRA AGGIORNAMENTO`.

## 20. Dati mancanti

Non inventare.

Se una statistica non è disponibile:

```js
null
```

UI:

```text
—
```

## 21. Preferiti

Riutilizzare il sistema già esistente. Non creare un localStorage parallelo.

## 22. Home e Navbar

La route `/difensori` esiste già. Mantenere il collegamento e sostituire soltanto i dati/parti necessarie.

## 23. Strategie Difensori

**NON modificare `/strategie/difensori` in questa fase.**

La vecchia pagina strategie verrà rifatta successivamente da zero.

## 24. Validazioni obbligatorie

```js
const expectedBaseCount = 181;
const expectedTotalCount = 185;

const base = difensori.filter(
  (d) => d.fascia !== "EXTRA AGGIORNAMENTI" &&
         d.fascia !== "EXTRA MERCATO"
);

if (base.length !== expectedBaseCount) {
  console.error(
    `Base SOS difensori incompleta: ${base.length}/${expectedBaseCount}`
  );
}

if (difensori.length !== expectedTotalCount) {
  console.error(
    `Dataset Difensori V3 incompleto: ${difensori.length}/${expectedTotalCount}`
  );
}

const ids = difensori.map((d) => d.id);

if (new Set(ids).size !== ids.length) {
  console.error("Sono presenti ID duplicati nei Difensori V3");
}
```

## 25. Validazione conteggi fasce base

- `SUPER TOP` = 1
- `TOP` = 6
- `SEMITOP` = 6
- `SOTTO AI SEMITOP` = 5
- `FASCIA ALTA` = 4
- `JOLLY 1ª FASCIA` = 2
- `POSSIBILI SORPRESE` = 6
- `FASCIA MEDIA` = 9
- `INFORTUNATI` = 2
- `SCOMMESSE` = 5
- `SOPRA AI LOW COST` = 10
- `JOLLY 2ª FASCIA` = 5
- `LOW COST 1ª FASCIA` = 11
- `LOW COST 2ª FASCIA` = 13
- `LEGHE NUMEROSE` = 19
- `JOLLY 3ª FASCIA` = 18
- `JOLLY 4ª FASCIA` = 20
- `A RISCHIO` = 13
- `DA EVITARE` = 19
- `MERCATO` = 7

Extra:

- `EXTRA AGGIORNAMENTI` = 2
- `EXTRA MERCATO` = 2

## 26. Controlli critici

Prima del build verificare esplicitamente:

- Dimarco presente e unico SUPER TOP;
- Top = 6;
- base SOS = 181;
- totale operativo = 185;
- Leysen presente;
- Fortini presente;
- Odenthal presente;
- Omar Fayed presente;
- Terracciano F. presente;
- Cinquegrano presente;
- Gelli J. NON presente;
- Sutalo presente come EXTRA AGGIORNAMENTI;
- Badiashile presente come EXTRA AGGIORNAMENTI;
- Kambwala presente solo come EXTRA MERCATO;
- Oosterwolde presente solo come EXTRA MERCATO;
- Mancini non spostato arbitrariamente di fascia;
- Bisseck non spostato arbitrariamente di fascia;
- Couto non spostato arbitrariamente di fascia;
- Da Evitare non equivale automaticamente a Riserva;
- A Rischio non equivale automaticamente a Riserva.

## 27. Cosa NON fare

- non usare il vecchio dataset Difensori come source of truth;
- non riportare il vecchio vincolo `176`;
- non omettere i giocatori con statistiche incomplete;
- non inventare statistiche;
- non cambiare autonomamente le fasce SOS in base alla lettura incrociata;
- non inserire Sutalo/Badiashile in una fascia SOS tradizionale;
- non rendere Kambwala/Oosterwolde ufficiali;
- non ricostruire ancora Strategie Difensori;
- non aggiungere backend/database/login/API;
- non fare commit/push/modifiche Git.

## 28. Definition of Done

La fase è completa soltanto quando:

- `/difensori` usa esclusivamente la V3;
- base SOS = 181;
- totale operativo = 185;
- tutte le 22 categorie operative sono presenti;
- filtro Tutti mostra 185;
- nessun duplicato;
- nessun ID duplicato;
- ricerca funziona;
- filtro fascia funziona;
- filtro stato funziona;
- preferiti persistono;
- dettaglio funziona;
- lettura incrociata è disponibile;
- Value e Modificatore sono evidenziabili;
- dati mancanti sono `null`/`—`;
- Extra Aggiornamenti ed Extra Mercato sono distinguibili;
- gli altri ruoli non subiscono regressioni;
- `/strategie/difensori` non viene modificata;
- `npm run build` termina senza errori.