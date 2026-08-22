# Fanta Asta 2026/27 — Strategie Portieri V3

## 1. Scopo

Questo documento è la **source of truth** per ricostruire da zero la pagina:

```text
/strategie/portieri
```

della web app **Fanta Asta 2026/27**.

La pagina deve essere coerente con la nuova specifica:

```text
FANTA_ASTA_PORTIERI_SPEC_V3.md
```

e con il dataset applicativo aggiornato dei portieri.

La precedente pagina Strategie Portieri e la precedente specifica NON devono essere considerate source of truth.

La nuova pagina Strategie Portieri deve avere come elemento centrale la costruzione dei **3 slot portiere**, quindi non deve limitarsi a dire “prendi un Top” o “prendi un low cost”: deve mostrare concretamente **quali terzetti costruire, perché funzionano, quanto sono stabili e in quale tipo di lega sono adatti**.

Riferimento generale:

```text
Budget totale: 500 crediti
Slot portieri: 3
```

---

# 2. Principi generali

La scelta dei portieri deve bilanciare:

1. qualità assoluta del portiere;
2. solidità difensiva della squadra;
3. clean sheet;
4. modificatore;
5. rigori parati;
6. titolarità;
7. stabilità della gerarchia;
8. complementarità calendario;
9. alternanza casa/trasferta;
10. costo totale del pacchetto;
11. necessità o meno del vice;
12. rischio mercato;
13. rischio ballottaggio.

Messaggio chiave:

> La miglior porta non è sempre quella con il portiere più forte. Spesso è quella con il miglior equilibrio tra qualità, titolarità, alternanza e costo complessivo dei 3 slot.

---

# 3. Budget di riferimento

I budget sono **range strategici indicativi**, non quotazioni ufficiali.

| Tipo di costruzione | Budget /500 |
|---|---:|
| Ultra low cost | 10-18 |
| Terzetto low cost | 18-28 |
| Equilibrata | 28-40 |
| Top + copertura | 40-55 |
| Super Top | 50-65 |
| Premium estrema | 65+ |

Nota UI:

```text
Budget indicativi su 500 crediti.
Non sono quotazioni ufficiali dei singoli portieri.
```

---

# 4. Struttura generale dei 3 slot

La pagina deve spiegare che non esiste una sola struttura corretta.

## Struttura A — Top + vice + alternanza

- P1 = Top
- P2 = vice dello stesso Top
- P3 = titolare di un’altra squadra con buona alternanza

## Struttura B — Super Top + copertura

- P1 = Super Top
- P2 = vice o alternativa economica
- P3 = titolare complementare

## Struttura C — Tre titolari

- P1 = titolare
- P2 = titolare
- P3 = titolare

Nessun portiere costosissimo, ma grande flessibilità.

## Struttura D — Low cost

- 3 portieri economici
- almeno 2 titolari certi
- idealmente 3 titolari

## Regola fondamentale

> In un terzetto low cost voglio almeno 2 titolari certi su 3. Idealmente 3 su 3.

---

# 5. Piani A-E

La pagina deve avere in apertura 5 card confrontabili.

---

## PIANO A — TOP + ALTERNANZA

### Budget

```text
35-50 / 500
```

### Rischio

```text
BASSO
```

### Struttura

- 1 Top
- suo vice quando realmente necessario
- 1 provinciale titolare con buona alternanza

### Esempio principale

```text
Josep Martinez
Ivan Provedel
Skorupski
```

### Filosofia

Porta di una big + protezione interna + possibilità di evitare i matchup peggiori.

### Regola

> Il terzo portiere deve essere un titolare vero, non il terzo della stessa squadra.

---

## PIANO B — SUPER TOP

### Budget

```text
45-60 / 500
```

### Rischio

```text
BASSO
```

### Struttura

- Svilar
- copertura economica
- 1 titolare complementare

### Esempio

```text
Svilar
Gollini
Skorupski
```

### Filosofia

Massima sicurezza sul primo slot senza spendere troppo anche su P2/P3.

### Regola

> Se spendi 45-50 crediti sul Super Top, non devi spendere altri 15-20 sul terzo portiere.

---

## PIANO C — TERZETTO MODIFICATORE

### Budget

```text
25-40 / 500
```

### Rischio

```text
BASSO
```

### Esempio principale

```text
Bijlow
Okoye
Falcone
```

### Filosofia

Tre titolari da voto, ottima alternanza e nessun costo da Super Top.

### Profilo

- Bijlow → MOD
- Okoye → MOD
- Falcone → MOD

### Regola

> Se usi il modificatore, il voto del portiere conta quanto il clean sheet.

---

## PIANO D — LOW COST

### Budget

```text
15-28 / 500
```

### Rischio

```text
MEDIO
```

### Esempio

```text
Bijlow
Corvi
Stankovic
```

### Filosofia

Massimo risparmio senza rinunciare a tre portieri con reale possibilità di voto.

### Regola

> Low cost non significa tre ballottaggi.

---

## PIANO E — VALUE

### Budget

```text
20-40 / 500
```

### Rischio

```text
BASSO / MEDIO
```

### Profili value principali

- Meret
- Falcone
- Caprile
- Bijlow
- Corvi
- Filip Stankovic

### Filosofia

Nessun nome obbligatorio. Si compra il miglior rapporto qualità/prezzo disponibile.

---

# 6. Piano consigliato

Mostrare una card:

```text
PIANO CONSIGLIATO
```

## Con modificatore

```text
Piano C — Terzetto MOD
```

Esempio:

```text
Bijlow + Okoye + Falcone
```

Motivazione:

- 3 titolari;
- nessun ballottaggio;
- profili da modificatore;
- ottima complementarità;
- nessun prezzo da Super Top.

## Senza modificatore

Partire da:

```text
Piano A — Top + Alternanza
```

oppure:

```text
Piano B — Super Top
```

se il prezzo del Top è corretto.

---

# 7. Strategia 1 — Top + vice + terzo titolare

## Concetto

Il Top garantisce una base di clean sheet.

Il vice protegge da turnover/infortunio solo quando la gerarchia lo richiede realmente.

Il terzo portiere serve per:
- matchup;
- calendario;
- modificatore;
- copertura alternativa.

## Esempi

### Inter

```text
Josep Martinez
Ivan Provedel
Skorupski
```

### Napoli

```text
Meret
Milinkovic-Savic
Falcone
```

### Lazio

```text
Mandas
Motta
Bijlow
```

### Juventus

```text
Vicario
Perin
Caprile
```

## Regola

> Non usare P3 come terzo portiere della stessa squadra salvo casi eccezionali.

---

# 8. Strategia 2 — Super Top + terzo titolare

## Concetto

Con Svilar il bisogno del vice è molto più basso rispetto alle porte con dualismo.

## Esempi

```text
Svilar + Gollini + Skorupski
```

oppure:

```text
Svilar + Skorupski + Stankovic
```

se l'architettura della lega consente di rinunciare al vice.

## Pro

- massimo clean sheet;
- gestione semplice;
- P3 può coprire matchup specifici.

## Contro

- investimento iniziale elevato.

## Regola

> Non trasformare una strategia Super Top in una strategia tre portieri premium.

---

# 9. Strategia 3 — Tre titolari equilibrati

## Concetto

Nessun Top costosissimo.

Tre portieri di squadre diverse.

Ogni giornata scegli il matchup migliore.

## Esempio principale

```text
Bijlow + Okoye + Falcone
```

## Perché funziona

- tutti titolari;
- tutti interessanti per modificatore;
- tre squadre diverse;
- ottima alternanza.

## Pro

- flessibilità;
- nessun rischio da singolo portiere;
- prezzo inferiore a una porta premium.

## Contro

- scelta settimanale più complessa;
- nessun portiere da 18-20 clean sheet garantiti.

---

# 10. Strategia 4 — Terzetto modificatore

## Portieri principali

- Carnesecchi
- De Gea
- Mandas
- Okoye
- Caprile
- Falcone
- Bijlow
- Filip Stankovic

## Terzetti MOD consigliati

### 1. Bijlow + Okoye + Falcone

```text
Valutazione: ★★★★★
Rischio: basso
```

### 2. De Gea + Falcone + Stankovic

```text
Valutazione: ★★★★☆
```

### 3. Carnesecchi + Stankovic + portiere Sassuolo

```text
Valutazione: ★★★★☆
```

Solo se Muric/Turati viene chiarito.

### 4. Caprile + Falcone + Bijlow

```text
Valutazione: ★★★★☆
```

Questo terzetto è costruito specificamente sul voto/modificatore, non soltanto sulla griglia.

## Regola

> Con modificatore non guardare soltanto i gol subiti.

---

# 11. Strategia 5 — Clean sheet premium

## Profili principali

- Svilar
- Butez
- Maignan
- Carnesecchi

## Regola

NON costruire:

```text
Butez + Maignan + Carnesecchi
```

perché il costo sarebbe inefficiente.

Costruire:

```text
1 premium clean sheet
+
1 provinciale
+
1 low cost
```

## Esempi

```text
Butez + Okoye + Stankovic
```

```text
Carnesecchi + Falcone + Stankovic
```

```text
Maignan + Falcone + Corvi
```

---

# 12. Strategia 6 — Coppia interna obbligata

Ci sono tre porte dove la coppia è particolarmente importante.

## Inter

```text
Martinez + Provedel
```

## Napoli

```text
Meret + Milinkovic-Savic
```

## Lazio

```text
Mandas + Motta
```

## Regola

> Se compri una coppia interna, il terzo portiere deve essere un titolare certo di un'altra squadra.

Esempi:

```text
Martinez + Provedel + Skorupski
```

```text
Meret + Milinkovic-Savic + Falcone
```

```text
Mandas + Motta + Bijlow
```

NON:

```text
Meret + Milinkovic-Savic + Daffara
```

perché anche Daffara è in ballottaggio.

---

# 13. Strategia 7 — Terzetto low cost

## Concetto

Tre portieri economici con complementarità.

## Esempio 1

```text
Bijlow + Falcone + Stankovic
```

## Esempio 2

```text
Corvi + Bijlow + Stankovic
```

## Esempio 3

```text
Falcone + Stankovic + Corvi
```

## Budget

```text
18-30 / 500
```

## Regola

> Il low cost deve essere costruito sulla titolarità, non sul prezzo minimo assoluto.

---

# 14. Strategia 8 — Value porta

## Profili

### Meret
Semitop SOS, ma valore quasi da Top.

### Falcone
Provincia, ma:
- buon voto;
- rigori;
- clean sheet discreti.

### Caprile
Molto interessante col modificatore.

### Bijlow
Gerarchia sicura e prezzo contenuto.

### Corvi
Gerarchia attuale favorevole su Daffara.

### Stankovic
Titolare definito del Venezia.

## Regola

> Il value nasce dalla differenza tra prezzo percepito e valore reale, non dalla fascia nominale.

---

# 15. Strategia 9 — Alternanza Top + provinciale

La pagina deve mostrare anche gli abbinamenti più interessanti tra porta Top e squadra complementare.

## Inter

Abbinamenti:
- Bologna → 95
- Cagliari → 93
- Monza → 93
- Torino → 92
- Sassuolo → 91

Esempio consigliato:

```text
Martinez + Provedel + Skorupski
```

---

## Juventus

Abbinamenti:
- Bologna → 92
- Cagliari → 92
- Lazio → 92
- Torino → 92
- Parma → 91
- Fiorentina → 91

Esempi:

```text
Vicario + Perin + Skorupski
```

```text
Vicario + Perin + Caprile
```

---

## Atalanta

Abbinamenti:
- Sassuolo → 95
- Monza → 92
- Bologna → 91
- Udinese → 91

Esempio prudente:

```text
Carnesecchi + Sportiello + Okoye
```

Evitare Sassuolo se Muric/Turati non è chiarito.

---

## Como

Abbinamenti:
- Bologna → 93
- Udinese → 93
- Fiorentina → 92
- Sassuolo → 92
- Torino → 92

Esempi:

```text
Butez + Tornqvist + Skorupski
```

```text
Butez + Tornqvist + Okoye
```

---

## Milan

Abbinamenti:
- Fiorentina → 93
- Lecce → 93
- Parma → 93
- Sassuolo → 92
- Torino → 92

Esempio consigliato:

```text
Maignan + Torriani + Falcone
```

oppure:

```text
Maignan + Torriani + Corvi
```

---

## Napoli

Abbinamenti:
- Lecce → 93
- Torino → 93
- Frosinone → 91
- Fiorentina → 89

Esempio:

```text
Meret + Milinkovic-Savic + Falcone
```

---

## Roma

Abbinamenti:
- Bologna → 95
- Monza → 93
- Venezia → 92
- Genoa → 89

Esempio premium:

```text
Svilar + Gollini + Skorupski
```

---

# 16. Strategia 10 — Opportunistica

## Concetto

Non fissare un portiere obbligatorio.

Definire:

- Piano A;
- tetto massimo;
- alternative;
- Piano B;
- Piano C.

## Logica

```text
Svilar troppo caro
→ Butez / Maignan

Top troppo cari
→ Meret / De Gea / Carnesecchi

Anche fascia alta inflazionata
→ terzetto Bijlow + Okoye + Falcone

Value dimenticato
→ anticipa l'acquisto
```

## Regola

> Devi arrivare all'asta con almeno tre costruzioni alternative.

---

# 17. Strategia 11 — Evitare tre ballottaggi

## Esempio da evitare

```text
Muric
Palmisani
Thiam
```

Perché:

- Muric ↔ Turati
- Palmisani ↔ Desplanches
- Thiam ↔ Pizzignacco

Rischio:

```text
ALTO
```

## Regola

> Mai costruire un terzetto low cost composto interamente da gerarchie aperte.

---

# 18. Strategia 12 — Mercato controllato

## Porte da monitorare

### Torino
- Mascardi
- Paleari
- Lucas Perri

### Monza
- Thiam
- Pizzignacco

### Sassuolo
- Muric
- Turati

### Frosinone
- Palmisani
- Desplanches

## Regola

> Non spendere per una titolarità che oggi non esiste.

La strategia deve privilegiare:
- titolari certi;
- oppure coppie interne realmente sostenibili.

---

# 19. Strategia 13 — Non comprare tre portieri della stessa squadra

## Concetto

In genere è inefficiente occupare:

```text
P1
P2
P3
```

con i tre portieri della stessa squadra.

Esempio da evitare:

```text
Maignan
Torriani
Terracciano
```

oppure:

```text
Vicario
Perin
Pinsoglio
```

## Perché

- nessuna alternanza;
- nessun matchup alternativo;
- slot P3 sprecato.

## Eccezione

Solo leghe con regole particolari o rose molto profonde.

---

# 20. Strategia 14 — Griglia + stabilità, non solo indice

## Concetto

L'indice di alternanza NON basta.

Ogni terzetto deve avere almeno due indicatori:

```text
ALTERNANZA
STABILITÀ GERARCHIE
```

Possibilmente anche:

```text
PROFILO
RISCHIO
```

## Esempio

```text
Parma – Torino – Monza

Alternanza: 99/100
Stabilità: BASSA
Rischio: ALTO
```

Quindi:

> 99/100 non significa automaticamente "terzetto consigliato".

---

# 21. Migliori terzetti della griglia

La pagina deve avere una sezione centrale:

```text
MIGLIORI TERZETTI
```

I dieci terzetti da mostrare:

| # | Squadre | Indice |
|---:|---|---:|
| 1 | Genoa – Udinese – Lecce | 100 |
| 2 | Atalanta – Sassuolo – Venezia | 100 |
| 3 | Atalanta – Fiorentina – Monza | 100 |
| 4 | Parma – Torino – Monza | 99 |
| 5 | Genoa – Parma – Monza | 99 |
| 6 | Frosinone – Genoa – Parma | 99 |
| 7 | Frosinone – Genoa – Venezia | 99 |
| 8 | Frosinone – Genoa – Lecce | 99 |
| 9 | Atalanta – Torino – Monza | 99 |
| 10 | Frosinone – Venezia – Bologna | 99 |

---

# 22. Traduzione dei terzetti in portieri attuali

## 1. Genoa – Udinese – Lecce

```text
Bijlow + Okoye + Falcone
```

Alternanza:

```text
100/100
```

Stabilità:

```text
ALTA
```

Profilo:

```text
MODIFICATORE
```

Rischio:

```text
BASSO
```

Valutazione:

```text
★★★★★
```

Commento:

> Il miglior terzetto operativo attuale per modificatore e stabilità.

---

## 2. Atalanta – Sassuolo – Venezia

```text
Carnesecchi + Muric/Turati + Stankovic
```

Alternanza:

```text
100/100
```

Stabilità:

```text
MEDIA
```

Rischio:

```text
MEDIO
```

Problema:

```text
Gerarchia Sassuolo aperta.
```

Commento:

> Ottima griglia, ma perde valore se Muric/Turati non viene chiarito.

---

## 3. Atalanta – Fiorentina – Monza

```text
Carnesecchi + De Gea + Thiam/Pizzignacco
```

Alternanza:

```text
100/100
```

Stabilità:

```text
MEDIA / BASSA
```

Rischio:

```text
MEDIO
```

Commento:

> Fortissimo sulla carta, ma costoso e con porta Monza incerta.

---

## 4. Parma – Torino – Monza

```text
Corvi + Mascardi/Perri? + Thiam/Pizzignacco
```

Alternanza:

```text
99/100
```

Stabilità:

```text
BASSA
```

Rischio:

```text
ALTO
```

Commento:

> Oggi non consigliato nonostante l'indice 99.

---

## 5. Genoa – Parma – Monza

```text
Bijlow + Corvi + Thiam/Pizzignacco
```

Alternanza:

```text
99/100
```

Stabilità:

```text
MEDIA
```

Rischio:

```text
MEDIO
```

Commento:

> Molto interessante se Monza chiarisce la gerarchia.

---

## 6. Frosinone – Genoa – Parma

```text
Palmisani/Desplanches + Bijlow + Corvi
```

Alternanza:

```text
99/100
```

Stabilità:

```text
MEDIA
```

Rischio:

```text
MEDIO
```

Commento:

> Buon terzetto low cost, ma Frosinone è ancora aperto.

---

## 7. Frosinone – Genoa – Venezia

```text
Palmisani/Desplanches + Bijlow + Stankovic
```

Alternanza:

```text
99/100
```

Stabilità:

```text
MEDIA
```

Rischio:

```text
MEDIO
```

Commento:

> Molto interessante per spendere poco.

---

## 8. Frosinone – Genoa – Lecce

```text
Palmisani/Desplanches + Bijlow + Falcone
```

Alternanza:

```text
99/100
```

Stabilità:

```text
MEDIA / ALTA
```

Rischio:

```text
BASSO / MEDIO
```

Profilo:

```text
MODIFICATORE
```

Commento:

> Buon terzetto MOD se emerge il titolare del Frosinone.

---

## 9. Atalanta – Torino – Monza

```text
Carnesecchi + Mascardi/Perri? + Thiam/Pizzignacco
```

Alternanza:

```text
99/100
```

Stabilità:

```text
BASSA
```

Rischio:

```text
ALTO
```

Commento:

> Da evitare oggi nonostante il 99.

---

## 10. Frosinone – Venezia – Bologna

```text
Palmisani/Desplanches + Stankovic + Skorupski
```

Alternanza:

```text
99/100
```

Stabilità:

```text
MEDIA / ALTA
```

Rischio:

```text
BASSO / MEDIO
```

Commento:

> Uno dei migliori terzetti economici una volta chiarito Frosinone.

---

# 23. Ranking operativo — 5 terzetti consigliati oggi

La pagina deve avere anche una sezione:

```text
I NOSTRI 5 TERZETTI
```

---

## 1. Bijlow + Okoye + Falcone

```text
Genoa + Udinese + Lecce
Alternanza: 100/100
Stabilità: ALTA
Rischio: BASSO
Profilo: MOD
Valutazione: ★★★★★
```

Motivi:
- 3 titolari;
- nessun ballottaggio importante;
- costo inferiore a un pacchetto premium;
- ottimi voti;
- Falcone ha valore anche sui rigori.

---

## 2. Carnesecchi + Stankovic + Muric/Turati

```text
Atalanta + Venezia + Sassuolo
Alternanza: 100/100
Stabilità: MEDIA
Rischio: MEDIO
Valutazione: ★★★★☆
```

Condizione:

> Consigliare pienamente soltanto quando viene chiarita la porta Sassuolo.

---

## 3. Bijlow + Corvi + vincitore Monza

```text
Genoa + Parma + Monza
Alternanza: 99/100
Stabilità: MEDIA
Rischio: MEDIO
```

Portiere Monza:

```text
Thiam oppure Pizzignacco
```

solo quando emerge il titolare.

---

## 4. Falcone + Bijlow + titolare Frosinone

```text
Lecce + Genoa + Frosinone
Alternanza: 99/100
Profilo: MOD
Rischio: BASSO / MEDIO
```

Portiere Frosinone:

```text
Palmisani oppure Desplanches
```

---

## 5. Skorupski + Stankovic + titolare Frosinone

```text
Bologna + Venezia + Frosinone
Alternanza: 99/100
Rischio: BASSO / MEDIO
```

Profilo:

> Soluzione economica ma con un P1 più solido.

---

# 24. Terzetti personalizzati consigliati

Oltre ai terzetti ufficiali della griglia, mostrare una sezione:

```text
TERZETTI PER TIPO DI LEGA
```

---

## Modificatore premium

```text
Bijlow + Okoye + Falcone
```

## Modificatore equilibrato

```text
Caprile + Falcone + Bijlow
```

## Premium clean sheet

```text
Svilar + Gollini + Skorupski
```

## Top + modificatore

```text
Maignan + Torriani + Falcone
```

## Napoli protetta

```text
Meret + Milinkovic-Savic + Falcone
```

## Inter protetta

```text
Martinez + Provedel + Skorupski
```

## Lazio protetta

```text
Mandas + Motta + Bijlow
```

## Low cost

```text
Bijlow + Corvi + Stankovic
```

## Ultra value

```text
Falcone + Stankovic + Corvi
```

---

# 25. Terzetti da evitare oggi

Creare sezione:

```text
TERZETTI DA EVITARE
```

## Muric + Palmisani + Thiam

Motivo:

```text
3 gerarchie aperte.
```

## Corvi + Mascardi + Pizzignacco

Motivo:

```text
Troppo dipendente da mercato e gerarchie ancora instabili.
```

## Tre portieri della stessa squadra

Esempio:

```text
Maignan + Torriani + Terracciano
```

Motivo:

```text
Nessuna alternanza e P3 sprecato.
```

## Atalanta + Torino + Monza

Nonostante:

```text
Alternanza 99/100
```

oggi:

```text
Stabilità gerarchie = bassa
```

---

# 26. Indicatori dei terzetti

Ogni terzetto deve poter avere:

```js
{
  alternanza: 100,
  stabilita: "alta",
  rischio: "basso",
  profilo: "MOD",
  costo: "equilibrato",
  consigliato: true
}
```

## Stabilità

Valori:

```text
ALTA
MEDIA / ALTA
MEDIA
MEDIA / BASSA
BASSA
```

## Rischio

Valori:

```text
BASSO
BASSO / MEDIO
MEDIO
MEDIO / ALTO
ALTO
```

## Profilo

Valori possibili:

```text
MOD
INV
MOD + INV
LOW COST
PREMIUM
VALUE
```

---

# 27. Struttura dati strategie

Creare preferibilmente:

```text
data/strategiePortieri.js
```

Esempio:

```js
{
  id: "top-vice-alternanza",
  nome: "Top + vice + terzo titolare",
  categoria: "Premium",
  tags: ["top", "copertura", "alternanza"],

  descrizione:
    "Un Top, la sua copertura quando necessaria e un titolare complementare.",

  budgetMin: 35,
  budgetMax: 50,
  rischio: "basso",

  struttura: [
    "1 Top",
    "1 vice quando necessario",
    "1 titolare complementare"
  ],

  terzettiEsempio: [
    ["josep-martinez", "ivan-provedel", "lukasz-skorupski"],
    ["alex-meret", "vanja-milinkovic-savic", "wladimiro-falcone"]
  ],

  pro: [
    "Porta di una big",
    "Copertura interna",
    "Alternanza disponibile"
  ],

  contro: [
    "Può costare più di un terzetto equilibrato"
  ],

  regola:
    "Il terzo portiere deve essere un titolare reale di un'altra squadra."
}
```

---

# 28. Struttura dati terzetti

Creare un dataset separato o una sezione nello stesso file.

Esempio:

```js
{
  id: "genoa-udinese-lecce",

  squadre: [
    "Genoa",
    "Udinese",
    "Lecce"
  ],

  portieri: [
    "justin-bijlow",
    "maduka-okoye",
    "wladimiro-falcone"
  ],

  alternanza: 100,

  stabilita: "alta",

  rischio: "basso",

  profilo: ["MOD", "VALUE"],

  valutazione: 5,

  consigliato: true,

  note:
    "Tre titolari certi, grande valore con modificatore e costo inferiore alle porte premium."
}
```

Gli ID devono corrispondere agli ID reali del dataset Portieri V3.

---

# 29. Importante: portieri fuori dal dataset V3

Alcuni esempi delle strategie citano vice come:

```text
Gollini
Torriani
Sportiello
Tornqvist
```

Se questi giocatori NON sono presenti nei 30 record principali di `portieri.js`:

NON aggiungerli al dataset V3 soltanto per la pagina strategie.

Gestirli come:

```js
{
  nome: "Gollini",
  ruolo: "vice",
  squadra: "Roma"
}
```

all'interno di una struttura minima dedicata alle coperture, oppure come stringa display.

NON farli comparire come nuovi record della pagina `/portieri`.

Il vincolo della pagina Portieri rimane:

```text
30 profili
```

---

# 30. Pagina `/strategie/portieri`

Ordine consigliato:

1. Header
2. Piani A-E
3. Piano consigliato
4. Budget
5. Strutture dei 3 slot
6. Strategie
7. Migliori terzetti della griglia
8. I nostri 5 terzetti
9. Terzetti per tipo di lega
10. Coppie interne
11. Value
12. Modificatore
13. Clean sheet
14. Terzetti da evitare
15. Regole operative

---

# 31. Header

Titolo:

```text
Strategie Portieri
```

Sottotitolo:

```text
Come costruire i 3 slot della porta per l'asta 2026/27
```

Descrizione:

> Confronta Top, coppie, terzetti, alternanze e strategie per scegliere la porta più adatta alla tua lega.

Badge:

```text
Budget riferimento: 500
Slot: 3 portieri
```

---

# 32. Blocco TERZETTI come elemento principale

I terzetti NON devono essere una piccola sezione secondaria.

Devono avere grande evidenza visuale.

Ogni card terzetto dovrebbe mostrare:

```text
BIJLOW + OKOYE + FALCONE

Genoa · Udinese · Lecce

ALTERNANZA
100 / 100

STABILITÀ
ALTA

RISCHIO
BASSO

PROFILO
MOD

★★★★★

3 titolari certi
Ottimo per modificatore
Costo inferiore ai Top
```

---

# 33. Filtri terzetti

Aggiungere filtri se compatibili:

```text
Tutti
100/100
99/100
Modificatore
Premium
Low Cost
Value
Stabilità alta
Rischio basso
```

---

# 34. Filtri strategie

Possibili:

```text
Tutte
Premium
Equilibrate
Modificatore
Clean Sheet
Low Cost
Value
Coppie
Alternanza
Mercato
```

---

# 35. Collegamento ai portieri

Quando un portiere fa parte dei 30 della V3:

- recuperarlo da `portieri.js`;
- nome cliccabile;
- aprire dettaglio già presente in `/portieri`;
- non duplicare squadra/fascia/dati.

Per i vice esterni ai 30:
- visualizzazione semplice;
- non aprire dettagli inesistenti.

---

# 36. Gerarchie dinamiche

La pagina deve leggere lo stato dal dataset V3.

Esempio:

```text
Thiam
```

non deve essere rappresentato come titolare certo dentro un terzetto se `portieri.js` dice `ballottaggio`.

Quando il terzetto coinvolge una porta incerta:

```text
Thiam/Pizzignacco
```

visualizzare:

```text
GERARCHIA APERTA
```

---

# 37. Lucas Perri e Torino

NON usare Lucas Perri come titolare certo in un terzetto.

Finché è `MERCATO`:

```text
Mascardi/Perri?
```

oppure:

```text
Portiere Torino da definire
```

Non inventare una certezza futura.

---

# 38. Modificatore vs clean sheet

La pagina deve spiegare chiaramente:

## MODIFICATORE

Preferire:
- portieri chiamati a molte parate;
- buoni voti;
- rigori parati;
- titolarità.

## CLEAN SHEET

Preferire:
- difese forti;
- squadre da alta classifica;
- portieri Top.

Un terzetto può essere eccellente per MOD ma non il migliore per clean sheet.

---

# 39. Cosa NON fare

NON:
- modificare il dataset dei 30 Portieri V3 salvo necessità tecnica;
- reinserire Di Gregorio;
- rendere Lucas Perri ufficiale;
- mostrare Thiam come titolare sicuro;
- mostrare Muric come titolare sicuro;
- mostrare Palmisani come titolare sicuro;
- mostrare Mandas come titolare sicuro;
- mostrare Martinez come titolare blindato;
- usare soltanto l'indice della griglia per definire un terzetto “migliore”;
- aggiungere backend;
- database;
- login;
- API;
- nuove librerie pesanti;
- modificare Git;
- commit;
- push.

---

# 40. Definition of Done

La pagina è completa quando:

- `/strategie/portieri` è stata ricostruita da zero;
- usa `FANTA_ASTA_PORTIERI_SPEC_V3.md`;
- usa questa specifica strategie V3;
- Piani A-E presenti;
- Piano consigliato presente;
- budget presente;
- strutture P1/P2/P3 presenti;
- tutte le strategie principali presenti;
- blocco Terzetti molto evidente;
- 10 migliori terzetti della griglia presenti;
- 5 terzetti operativi consigliati presenti;
- terzetti MOD presenti;
- terzetti premium presenti;
- terzetti low cost presenti;
- coppie Inter/Napoli/Lazio presenti;
- sezione terzetti da evitare presente;
- alternanza e stabilità mostrate separatamente;
- rischio presente;
- MOD/INV presente;
- portieri principali recuperati dal dataset V3;
- vice esterni ai 30 non vengono aggiunti alla pagina Portieri;
- nessun dato duplicato inutilmente;
- nessuna regressione sugli altri ruoli;
- responsive;
- `npm run build` termina senza errori.
