# Fanta Asta 2026/27 — Strategie Difensori V3

## 1. Scopo

Questo documento è la **source of truth** per ricostruire da zero la pagina:

```text
/strategie/difensori
```

della web app **Fanta Asta 2026/27**.

La pagina deve essere coerente con:

```text
FANTA_ASTA_DIFENSORI_SPEC_V3.md
```

e con il nuovo dataset applicativo dei difensori.

La precedente pagina Strategie Difensori e le precedenti specifiche NON devono essere considerate source of truth.

La nuova pagina deve aiutare a costruire un reparto da **8 difensori** e deve distinguere chiaramente due scenari:

1. **lega con modificatore difesa**;
2. **lega senza modificatore difesa**.

Riferimento generale:

```text
Budget totale: 500 crediti
Slot difensori: 8
```

## 2. Principi generali

La costruzione della difesa deve bilanciare:

1. titolarità;
2. media voto;
3. modificatore;
4. bonus;
5. ruolo reale in campo;
6. piazzati;
7. probabilità di clean sheet della squadra;
8. rischio cartellini;
9. rischio turnover;
10. rischio infortuni;
11. concorrenza interna;
12. prezzo d'asta;
13. numero di jolly;
14. numero di scommesse;
15. profondità complessiva del reparto.

Messaggio chiave:

> Con modificatore si compra prima il voto e poi il bonus. Senza modificatore il peso relativo di bonus, ruolo offensivo e prezzo aumenta molto.

## 3. Budget di riferimento su 500

| Filosofia | Budget /500 | Scenario |
|---|---:|---|
| Ultra risparmio | 45-60 | No modificatore / attacco pesante |
| Risparmio | 60-75 | Difesa a 3 / bonus economici |
| Equilibrata | 75-90 | Titolarità + bonus |
| Modificatore Value | 85-100 | Modificatore senza rincorrere Dimarco |
| Modificatore Forte | 100-115 | 4-5 difensori molto affidabili |
| Premium | 115-130 | Top + grande profondità |
| Dimarco / Dominante | 125-145 | Scelta deliberatamente estrema |

Nota UI:

```text
Budget indicativi su 500 crediti.
Non sono quotazioni ufficiali dei singoli difensori.
```

## 4. Con o senza modificatore

### Con modificatore

Priorità:
1. media voto;
2. titolarità;
3. pochi malus;
4. solidità;
5. bonus come valore aggiunto.

Profili principali:
Bremer, Akanji, Bastoni, Mancini, Gila, Rrahmani, N'Dicka, Solet, Ostigard, Doekhi, Scalvini quando disponibile, Vásquez, Tiago Gabriel.

### Senza modificatore

Priorità:
1. bonus;
2. ruolo offensivo;
3. titolarità;
4. prezzo;
5. assist/piazzati.

Profili principali:
Dimarco, Wesley, Molina, Cambiaso, Spinazzola, Zappacosta, Yan Couto, Bartesaghi, Miranda, Valle, Kaiki, Obrador, Vojvoda, Norton-Cuffy, Valeri, Pedersen, Kamara, Antony Oyono.

Callout:

> Un 6,5 costante può valere più di un esterno discontinuo con qualche assist se il modificatore pesa molto. Senza modificatore, invece, il rapporto può invertirsi.

## 5. Struttura degli 8 slot — con modificatore

| Slot | Profilo |
|---|---|
| D1 | Top / quasi Top MOD |
| D2 | Grande regolarista |
| D3 | Bonus + buona media voto |
| D4 | Titolare da modificatore |
| D5 | Titolare / value |
| D6 | Titolare low cost |
| D7 | Low cost / bonus |
| D8 | Scommessa controllata |

Obiettivo:

> poter schierare 4 difensori forti praticamente ogni giornata.

## 6. Struttura degli 8 slot — senza modificatore

| Slot | Profilo |
|---|---|
| D1 | Bonus |
| D2 | Bonus |
| D3 | Esterno offensivo |
| D4 | Titolare affidabile |
| D5 | Low cost titolare |
| D6 | Low cost |
| D7 | Value |
| D8 | Scommessa |

## 7. Piani A-E

### PIANO A — MODIFICATORE EQUILIBRATO

Budget: `90-105 / 500`
Rischio: `BASSO`

Struttura:
- 1 quasi Top
- 3 profili MOD
- 2 value
- 2 low cost

Esempio:
Mancini, Akanji, Ostigard, Doekhi, Valeri, Delprato, Pedersen, Gallo.

Badge: `CONSIGLIATO CON MODIFICATORE`

### PIANO B — DIMARCO PREMIUM

Budget: `115-135 / 500`
Rischio: `MEDIO`

Struttura:
- Dimarco
- 2 MOD
- 3 value
- 2 low cost

Esempio:
Dimarco, Ostigard, Doekhi, Valeri, Delprato, Norton-Cuffy, Gallo, Bella-Kotchap.

### PIANO C — ZERO TOP VALUE

Budget: `75-95 / 500`
Rischio: `BASSO`

Struttura:
- 4 ottimi intermedi
- 4 value / titolari

Esempio:
Mancini, Ostigard, Doekhi, N'Dicka, Valeri, Delprato, Norton-Cuffy, Pedersen.

### PIANO D — BONUS / NO MODIFICATORE

Budget: `65-85 / 500`
Rischio: `MEDIO`

Struttura:
- 3-4 offensivi
- 4-5 titolari economici

Esempio:
Wesley, Mancini, Yan Couto, Norton-Cuffy, Valeri, Pedersen, Gallo, Idzes.

Badge: `CONSIGLIATO SENZA MODIFICATORE`

### PIANO E — LOW COST

Budget: `50-70 / 500`
Rischio: `MEDIO`

Esempio:
Doekhi, Delprato, Valeri, Pedersen, Idzes, Gallo, Bella-Kotchap, Kamara.

## 8. Piano consigliato

Con modificatore:
- partire da Piano A;
- passare a Piano C se i top vengono strapagati.

Senza modificatore:
- partire da Piano D.

## 9. Le 15 strategie

1. Modificatore Premium
2. Dimarco + Value
3. Modificatore Equilibrato
4. Modificatore Value
5. Bonus Pesante
6. Esterni Offensivi
7. Centrali da Modificatore
8. Zero Top
9. Un Top + Profondità
10. Titolarità Assoluta
11. Low Cost
12. Scommesse Controllate
13. Jolly di Big
14. Infortunati a Saldo
15. Opportunistica / Value

In aggiunta:
`CENTRALI + ESTERNI`

## 10. Strategia 1 — Modificatore Premium

Budget: `105-125`
Rischio: `BASSO`

Profili:
Bremer, Akanji, Bastoni, Mancini, Rrahmani, N'Dicka, Gila, Solet, Ostigard, Doekhi, Scalvini.

Esempio:
Bremer, Akanji, Mancini, Ostigard, Doekhi, Delprato, Valeri, Pedersen.

Regola:

> Non servono quattro Top: servono quattro difensori da voto alto.

## 11. Strategia 2 — Dimarco + Value

Budget: `115-140`
Rischio: `MEDIO`

Struttura:
Dimarco + 2 regolaristi + 3 titolari/value + 2 low cost.

Esempio:
Dimarco, Ostigard, Doekhi, Delprato, Valeri, Norton-Cuffy, Gallo, Bella-Kotchap.

Regola:

> Dopo Dimarco, costruire il resto della difesa sul value.

## 12. Strategia 3 — Modificatore Equilibrato

Budget: `90-105`
Rischio: `BASSO`

Esempio:
Mancini, Akanji, Ostigard, Doekhi, Delprato, Valeri, Pedersen, Gallo.

Regola:

> Preferire profondità e media voto a un secondo nome premium.

## 13. Strategia 4 — Modificatore Value

Budget: `75-95`
Rischio: `BASSO`

Profili:
Mancini, Ostigard, Bisseck, Doekhi, N'Dicka, Delprato, Vásquez, Valeri.

Esempio:
Mancini, Ostigard, Doekhi, N'Dicka, Delprato, Vasquez, Gallo, Pedersen.

Regola:

> Non comprare la fascia: compra il valore reale rispetto al prezzo d'asta.

## 14. Strategia 5 — Bonus Pesante

Budget: `80-105`
Rischio: `MEDIO`

Profili:
Dimarco, Wesley, Pavlovic, Mancini, Molina, Cambiaso, Spinazzola, Ramon, Bisseck, Yan Couto, Bartesaghi, Miranda, Valeri, Norton-Cuffy, Pedersen.

Esempio:
Wesley, Mancini, Yan Couto, Norton-Cuffy, Valeri, Pedersen, Gallo, Delprato.

Regola:

> Bonus pesante non significa otto esterni: mantenere almeno 3-4 difensori dal voto affidabile.

## 15. Strategia 6 — Esterni Offensivi

Budget: `75-100`
Rischio: `MEDIO`

Profili:
Dimarco, Wesley, Molina, Cambiaso, Spinazzola, Yan Couto, Bartesaghi, Miranda, Valle, Kaiki, Obrador, Vojvoda, Norton-Cuffy, Valeri, Pedersen, Kamara, Antony Oyono.

Struttura:
- 3 esterni offensivi
- 3 titolari da voto
- 2 low cost

## 16. Strategia 7 — Centrali da Modificatore

Budget: `75-95`
Rischio: `BASSO`

Profili:
Bremer, Akanji, Bastoni, Gila, Rrahmani, N'Dicka, Solet, Mancini, Ostigard, Doekhi, Vásquez.

Regola:

> In una lega con modificatore il 6,5 senza bonus può valere più del 5,5 con un assist occasionale.

## 17. Strategia 8 — Zero Top

Budget: `70-90`
Rischio: `BASSO`

Esempio:
Mancini, Ostigard, Doekhi, Delprato, Valeri, Norton-Cuffy, Gallo, Pedersen.

## 18. Strategia 9 — Un Top + Profondità

Budget: `80-100`
Rischio: `BASSO`

Top possibili:
Wesley, Bremer, Bastoni, Pavlovic, Solet, Mancini se il prezzo è da quasi Top.

Esempio:
Bremer, Ostigard, Doekhi, Delprato, Valeri, Pedersen, Gallo, Bella-Kotchap.

## 19. Strategia 10 — Titolarità Assoluta

Budget: `65-85`
Rischio: `BASSO`

Profili:
Mancini, Kalulu, Di Lorenzo, N'Dicka, Ostigard, Delprato, Valeri, Doekhi, Idzes, Gallo, Pedersen, Coco, Kamara, Antony Oyono.

Obiettivo:
7-8 difensori con alta probabilità di voto.

## 20. Strategia 11 — Low Cost

Budget: `50-70`
Rischio: `MEDIO`

Profili:
Doekhi, Delprato, Valeri, Pedersen, Idzes, Gallo, Bella-Kotchap, Coco, Kamara, Antony Oyono, Kabasele.

Esempio:
Doekhi, Delprato, Valeri, Pedersen, Idzes, Gallo, Bella-Kotchap, Kamara.

## 21. Strategia 12 — Scommesse Controllate

Budget: `60-85`
Rischio: `MEDIO`

Profili:
Yan Couto, Koulierakis, Viery, Kaiki, Obrador, Mitaj, Ahanor, Valdepenas.

Regola:

```text
MASSIMO 2 VERE SCOMMESSE SU 8 DIFENSORI
```

Yan Couto non deve essere mostrato come una normale scommessa da 1 credito.

## 22. Strategia 13 — Jolly di Big

Budget: `70-90`
Rischio: `MEDIO`

Profili:
Bisseck, Carlos Augusto, Stones, Celik, Bellanova, Joao Mario, Beukema, Rensch, De Winter, Olivera.

Regola:

```text
MASSIMO 2 VERI JOLLY / ROTAZIONI SU 8
```

## 23. Strategia 14 — Infortunati a Saldo

Rischio: `MEDIO`

Stop lunghi:
- Buongiorno
- Parisi
- Zanoli

Da monitorare:
- Hien
- Beukema
- Scalvini

Regola:

> Un infortunato lungo si compra soltanto dopo aver costruito almeno 6 difensori utilizzabili.

## 24. Strategia 15 — Opportunistica / Value

Tetti strategici indicativi:

| Slot | Range |
|---|---:|
| D1 | 20-35 |
| D2 | 15-25 |
| D3 | 10-20 |
| D4 | 7-15 |
| D5 | 4-10 |
| D6 | 2-7 |
| D7 | 1-5 |
| D8 | 1-4 |

Eccezione:
Dimarco può uscire da questi range.

## 25. Strategia trasversale — Centrali + Esterni

Formula consigliata con modificatore:

```text
4 rendimento
+
2 bonus
+
2 titolari/value
```

Esempio:

Rendimento:
Akanji, Mancini, Ostigard, Doekhi

Bonus:
Wesley, Norton-Cuffy

Coperture:
Delprato, Gallo

## 26. Value Picks

Profili:
Mancini, Akanji, Bisseck, Ostigard, Chalobah, Yan Couto, Doekhi, Valeri, Delprato, Norton-Cuffy, Pedersen, N'Dicka.

## 27. Modificatore Picks

Bremer, Bastoni, Akanji, Mancini, Gila, Rrahmani, N'Dicka, Bisseck, Ostigard, Doekhi, Scalvini, Mina, Vásquez, Tiago Gabriel, Chalobah, Kristensen.

## 28. Bonus Picks

Dimarco, Wesley, Molina, Cambiaso, Spinazzola, Zappacosta, Yan Couto, Bartesaghi, Miranda, Valle, Kaiki, Obrador, Vojvoda, Norton-Cuffy, Valeri, Pedersen, Kamara, Antony Oyono.

## 29. Jolly da gestire

Bisseck, Stones, Carlos Augusto, Celik, Bellanova, Joao Mario, Beukema, Rensch, De Winter, Olivera.

Callout:
`Massimo 2 veri jolly/rotazioni su 8.`

## 30. Scommesse

Yan Couto, Koulierakis, Viery, Kaiki, Obrador, Mitaj, Ahanor, Valdepenas.

Callout:
`Massimo 2 vere scommesse su 8.`

## 31. Infortunati

Stop lunghi:
Buongiorno, Parisi, Zanoli.

Stop/condizione da monitorare:
Scalvini, Hien, Beukema.

## 32. Titolarità prima del nome

Callout:

> La squadra forte non garantisce il voto.

Esempi:
- Stones può essere meno utile di Doekhi se serve voto;
- Carlos Augusto può essere meno utile di Delprato;
- Bisseck ha enorme upside ma rotazioni;
- Bellanova non è automaticamente superiore a Pedersen solo perché gioca nell'Atalanta.

## 33. Fascia SOS vs lettura incrociata

Non spostare automaticamente:
Mancini, Bisseck, Ostigard, Yan Couto, Chalobah.

La strategia può però sfruttare tag:
`VALUE`, `UPGRADE`.

## 34. Casi speciali

### Mancini
Quasi Top / value, mantenendo la fascia SOS.

### Bisseck
Alto upside, non titolare blindato.

### Stones
Rotazione + rischio fisico.

### Yan Couto
Upside molto più alto della semplice etichetta Scommessa.

### Ostigard
Uno dei principali value.

### Scalvini
Qualità alta, disponibilità fisica da monitorare.

### Mina
Non trasformare la panchina iniziale in bocciatura stagionale.

### Mitaj
Non titolare certo.

## 35. Mercato ed Extra

Non costruire strategie principali attorno ai giocatori con stato `mercato`.

Sutalo e Badiashile:
- Extra Aggiornamenti
- possono comparire in `Nuovi arrivi da monitorare`
- non devono ricevere una fascia SOS inventata.

## 36. Le 7 regole

1. Con modificatore costruisci almeno 5 difensori realmente affidabili.
2. Senza modificatore non pagare troppo la sola media voto.
3. Massimo 2 vere scommesse su 8.
4. Massimo 2 jolly/rotazioni pesanti su 8.
5. Squadra forte non significa automaticamente titolarità.
6. Compra il rapporto qualità/prezzo, non la fascia nominale.
7. Conserva crediti per chiudere con low cost che giocano davvero.

## 37. Struttura dati strategie

Creare preferibilmente:

```text
data/strategieDifensori.js
```

Esempio:

```js
{
  id: "modificatore-equilibrato",
  nome: "Modificatore Equilibrato",
  categoria: "Modificatore",
  tags: ["modificatore", "equilibrata", "value"],
  descrizione:
    "Una difesa profonda con almeno quattro profili da voto alto senza inseguire necessariamente Dimarco.",
  budgetMin: 90,
  budgetMax: 105,
  rischio: "basso",
  conModificatore: true,
  struttura: [
    "1 quasi Top",
    "3 profili MOD",
    "2 value",
    "2 low cost"
  ],
  giocatoriEsempio: [
    "gianluca-mancini",
    "manuel-akanji",
    "leo-ostigard",
    "danilho-doekhi",
    "emanuele-valeri",
    "enrico-delprato",
    "marcus-pedersen",
    "antonino-gallo"
  ],
  pro: [
    "Grande profondità",
    "Molti titolari",
    "Buona media voto"
  ],
  contro: [
    "Nessun Super Top offensivo"
  ],
  regola:
    "Preferire profondità e media voto a un secondo nome premium."
}
```

## 38. Pagina `/strategie/difensori`

Ordine consigliato:

1. Header
2. Con Modificatore / Senza Modificatore
3. Piani A-E
4. Piano consigliato
5. Budget
6. Struttura 8 slot
7. 15 strategie
8. Centrali + Esterni
9. Value Picks
10. Modificatore Picks
11. Bonus / Esterni Offensivi
12. Jolly
13. Scommesse
14. Infortunati
15. Nuovi arrivi / Mercato
16. 7 regole finali

## 39. Header

Titolo:

```text
Strategie Difensori
```

Sottotitolo:

```text
Come costruire la difesa per l'asta 2026/27
```

Descrizione:

> Confronta strategie, budget e profili per costruire una difesa da modificatore, bonus, value o low cost.

Badge:

```text
Budget riferimento: 500
Slot difensori: 8
```

## 40. Toggle regolamento

Se compatibile:

```text
CON MODIFICATORE
SENZA MODIFICATORE
```

Con modificatore:
Piano A consigliato.

Senza modificatore:
Piano D consigliato.

## 41. Filtri strategie

Possibili:

```text
Tutte
Modificatore
Premium
Equilibrate
Bonus
Esterni
Value
Low Cost
Jolly
Scommesse
Infortunati
```

## 42. Giocatori cliccabili

Recuperare dal dataset `data/difensori.js`.

Non creare un nuovo dettaglio specifico per Strategie.

## 43. Non duplicare dati

Non duplicare:
- squadra
- fascia
- statistiche
- stato
- gerarchia
- lettura incrociata

Usare ID del dataset V3.

## 44. Responsive

Desktop:
- Piani A-E
- budget
- 15 strategy card
- sezioni value/mod/bonus
- pro/contro

Mobile:
- card verticali
- budget, rischio, struttura, giocatori principali

## 45. Rischio

Usare:
BASSO, BASSO / MEDIO, MEDIO, MEDIO / ALTO, ALTO.

## 46. Cosa NON fare

NON:
- modificare le fasce V3;
- spostare Mancini/Bisseck/Ostigard/Couto di fascia;
- duplicare il dataset;
- inventare prezzi individuali;
- aggiungere asta live;
- backend;
- database;
- login;
- API esterne;
- nuove librerie pesanti;
- modificare Git;
- commit;
- push.

## 47. Definition of Done

La pagina è completa quando:

- `/strategie/difensori` è stata ricostruita da zero;
- usa `FANTA_ASTA_DIFENSORI_SPEC_V3.md`;
- usa questa specifica Strategie Difensori V3;
- Piani A-E presenti;
- Piano A consigliato con modificatore;
- Piano D consigliato senza modificatore;
- budget presenti;
- struttura 8 slot presente;
- tutte le 15 strategie presenti;
- sezione Centrali + Esterni presente;
- Value Picks presenti;
- Modificatore Picks presenti;
- Bonus Picks presenti;
- Jolly presenti;
- Scommesse presenti;
- Infortunati presenti;
- regola massimo 2 scommesse presente;
- regola massimo 2 jolly presente;
- almeno 5 affidabili con modificatore evidenziato;
- giocatori recuperati dal dataset V3;
- nessuna duplicazione inutile;
- dettaglio giocatore riutilizzato;
- fasce SOS non alterate;
- lettura incrociata rispettata;
- mercato gestito senza inventare certezze;
- responsive;
- nessuna regressione;
- `npm run build` termina senza errori.
