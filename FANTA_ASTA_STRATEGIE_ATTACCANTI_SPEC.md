# Fanta Asta 2026/27 — Strategie Attaccanti

## 1. Scopo

Questo documento è la **source of truth** per implementare la pagina:

```text
/strategie/attaccanti
```

della web app **Fanta Asta 2026/27**.

La pagina deve descrivere e confrontare le principali strategie di costruzione dell'attacco per una rosa con **6 attaccanti** e un budget totale di riferimento di **500 crediti**.

Questo documento NON modifica il dataset individuale degli attaccanti già presente in:

```text
FANTA_ASTA_ATTACCANTI_SPEC.md
```

e nell'app in:

```text
data/attaccanti.js
```

La pagina strategie deve usare quel dataset per:
- recuperare i giocatori citati;
- mostrare squadra, fascia, titolarità e dati aggiornati;
- aprire il dettaglio giocatore già esistente;
- evitare duplicazioni;
- mantenere coerenti eventuali futuri aggiornamenti.

---

# 2. Principi generali per costruire l'attacco

L'attacco è il reparto in cui si concentra normalmente la quota più alta del budget.

Con soli 6 slot, gli errori pesano molto più che negli altri reparti.

I fattori principali da considerare sono:

1. capacità realizzativa;
2. titolarità;
3. rigori;
4. continuità fisica;
5. qualità della squadra;
6. concorrenza interna;
7. posizione reale;
8. potenziale assist;
9. costo d'asta;
10. numero di jolly/non titolari;
11. copertura degli slot;
12. mercato;
13. rischio di rotazione;
14. rapporto gol/credito.

Messaggio chiave da evidenziare:

> In attacco non devi necessariamente comprare il nome più forte: devi comprare il maggior numero possibile di gol, assist e voti per credito speso.

---

# 3. Budget di riferimento su 500

I seguenti budget sono **tetti strategici indicativi**, non quotazioni ufficiali.

| Filosofia | Budget /500 | Obiettivo |
|---|---:|---|
| Ultra risparmio | 145-170 | Spostare budget su centrocampo/difesa |
| Risparmio | 170-190 | Attacco economico ma con titolari |
| Equilibrato | 190-215 | Miglior compromesso |
| Forte | 215-235 | 1-2 investimenti importanti |
| Premium | 235-255 | Due stelle e completamento value |
| Dominante | 255-280 | Attacco come reparto principale |

Nota UI:

```text
Budget indicativi su 500 crediti
```

e:

```text
Non sono quotazioni ufficiali dei singoli giocatori.
```

---

# 4. Struttura generale dei 6 slot

| Slot | Profilo |
|---|---|
| A1 | Super Top / Top |
| A2 | Semitop / secondo slot forte |
| A3 | Terzo slot da bonus |
| A4 | Titolare / value |
| A5 | Low cost titolare |
| A6 | Scommessa / jolly |

Regola fondamentale:

> Almeno 4 dei 6 attaccanti dovrebbero avere un'alta probabilità di voto.

Questa struttura serve a evitare:
- troppi jolly;
- troppi non titolari;
- troppe scommesse;
- troppi infortunati;
- attacco eccessivamente dipendente dal solo A1;
- quattro slot marginali dopo aver speso tutto sui primi due.

---

# 5. STRATEGIA 1 — SUPER TOP + PROFONDITÀ

## Concetto

Acquistare un solo Super Top e costruire dietro un reparto profondo.

Profili Super Top:
- Lautaro Martinez
- Donyell Malen

## Struttura

- A1: Super Top
- A2: Semitop / fascia alta
- A3: terzo slot da bonus
- A4: titolare di provincia
- A5: low cost titolare
- A6: scommessa / jolly

## Budget

```text
210-235 / 500
```

## Rischio

```text
BASSO
```

## Esempio

- Lautaro Martinez
- Keinan Davis
- Laurientè
- Lorenzo Colombo
- Ghedjemis
- Geubbels

## Pro

- un trascinatore assoluto;
- 5 slot ancora utilizzabili;
- buona copertura;
- meno rischio di rimanere senza voto;
- puoi ruotare A3-A6 in base alle partite.

## Contro

- se il Super Top viene strapagato perdi equilibrio;
- rischi di sacrificare troppo centrocampo/difesa.

## Regola

> Il Super Top vale l'investimento solo se riesci comunque a costruire almeno altri 3-4 attaccanti realmente schierabili.

## Tag

```text
premium
super-top
profondità
equilibrata
```

---

# 6. STRATEGIA 2 — SUPER TOP + SEMITOP

## Concetto

Un Super Top e un secondo attaccante molto forte.

Combinazioni concettuali:
- Malen + Douvikas
- Lautaro + Davis
- Lautaro + Yildiz
- Malen + Berardi
- Lautaro + Dovbyk

## Struttura

- A1: Super Top
- A2: Semitop
- A3: value
- A4: low cost
- A5: low cost
- A6: scommessa

## Budget

```text
225-250 / 500
```

## Rischio

```text
MEDIO
```

## Esempio

- Malen
- Douvikas
- Lorenzo Colombo
- Cutrone
- Ghedjemis
- Bowie

## Pro

- due fonti fortissime di bonus;
- grande potenziale di gol;
- possibilità di dominare il reparto.

## Contro

- gli ultimi 4 slot diventano fondamentali;
- rischio di pagare troppo A1+A2;
- forte impatto sul resto della rosa.

## Regola

> Se A1+A2 assorbono troppo budget, interrompere immediatamente gli acquisti costosi e completare solo con value/low cost.

## Tag

```text
premium
super-top
semitop
aggressiva
```

---

# 7. STRATEGIA 3 — ZERO SUPER TOP

## Concetto

Rinunciare deliberatamente a Lautaro/Malen e distribuire il budget su più attaccanti forti.

## Profili ideali

- Keinan Davis
- Douvikas
- Yildiz
- Kean
- Berardi
- Scamacca
- Dovbyk
- Simeone
- Laurientè
- Lorenzo Colombo

## Budget

```text
195-220 / 500
```

## Rischio

```text
BASSO
```

## Esempio

- Keinan Davis
- Dovbyk
- Berardi
- Lorenzo Colombo
- Ghedjemis
- Akor Adams

## Pro

- 5-6 fonti di voto/bonus;
- meno dipendenza da un singolo bomber;
- grande flessibilità durante l'asta;
- sfrutta una fascia intermedia molto profonda.

## Contro

- manca il giocatore da 18-20 gol più probabile;
- serve scegliere bene ogni giornata.

## Quando usarla

Quando i Super Top e i Top vengono strapagati.

## Tag

```text
zero-top
value
profondità
equilibrata
```

---

# 8. STRATEGIA 4 — DUE PRIMI SLOT

## Concetto

Acquistare due attaccanti di fascia molto alta e completare con quattro profili economici.

Combinazioni:
- Thuram + Hojlund
- Ramos + Yildiz
- Kolo Muani + Douvikas
- Hojlund + Davis
- Thuram + Berardi

## Budget

```text
230-255 / 500
```

## Rischio

```text
MEDIO
```

## Struttura

- A1: primo slot
- A2: primo/secondo slot
- A3: value
- A4: low cost
- A5: low cost
- A6: scommessa

## Esempio

- Kolo Muani
- Douvikas
- Lorenzo Colombo
- Cutrone
- Geubbels
- Ghedjemis

## Pro

- due reali possibilità di doppia cifra abbondante;
- altissimo potenziale settimanale.

## Contro

- budget molto alto;
- ultimi 4 slot devono essere costruiti perfettamente.

## Regola

> Dopo A1 e A2 non partecipare più alle guerre d'asta sui nomi.

## Tag

```text
due-top
premium
aggressiva
```

---

# 9. STRATEGIA 5 — RIGORISTI + TITOLARITÀ

## Concetto

Privilegiare attaccanti con:
- alta probabilità di voto;
- ruolo centrale;
- rigori.

## Rigoristi principali / candidati forti

- Donyell Malen
- Goncalo Ramos
- Kolo Muani
- Keinan Davis
- Berardi
- Geubbels

## Gerarchie aperte / interessanti

- Hojlund
- Scamacca
- Akor Adams
- Lorenzo Colombo
- Albion Rrahmani
- Dovbyk
- Kevin Carlos

## Budget

```text
200-230 / 500
```

## Rischio

```text
BASSO / MEDIO
```

## Esempio

- Malen
- Keinan Davis
- Berardi
- Lorenzo Colombo
- Geubbels
- Akor Adams

## Pro

- rigori possono trasformare un attaccante da 10 gol in uno da 13-15;
- maggiore floor;
- bonus anche in partite mediocri.

## Contro

- gerarchie possono cambiare;
- alcuni rigoristi hanno rischio fisico/titolarità.

## Regola

> Avere 2-3 forti possibilità dal dischetto è un vantaggio; non è necessario avere 6 rigoristi.

## Tag

```text
rigoristi
titolari
bonus
```

---

# 10. STRATEGIA 6 — ATTACCO DA DOPPIA CIFRA

## Concetto

Privilegiare prime punte centrali che hanno una reale possibilità di chiudere in doppia cifra.

## Profili

- Lautaro Martinez
- Malen
- Goncalo Ramos
- Hojlund
- Kolo Muani
- Kean
- Douvikas
- Keinan Davis
- Scamacca
- Krstovic
- Simeone
- Dovbyk
- Pinamonti
- Lorenzo Colombo

## Budget

```text
205-235 / 500
```

## Rischio

```text
BASSO / MEDIO
```

## Esempio

- Douvikas
- Simeone
- Dovbyk
- Lorenzo Colombo
- Cutrone
- Ghedjemis

## Pro

- tanti giocatori con obiettivo doppia cifra;
- titolarità mediamente elevata;
- struttura semplice da gestire.

## Contro

- meno assist rispetto a un attacco con più esterni;
- alcuni centravanti prendono brutti voti quando non segnano.

## Regola

> Cercare almeno 3 attaccanti con potenziale reale da 10+ gol.

## Tag

```text
bomber
doppia-cifra
titolari
```

---

# 11. STRATEGIA 7 — BONUS DIFFUSO

## Concetto

Non concentrare i bonus su un solo bomber.

Costruire 4-5 fonti diverse di gol/assist.

## Profili

- Yildiz
- Berardi
- Laurientè
- De Ketelaere
- Raspadori
- Diao
- Neres
- Dybala
- Alisson Santos
- Vitinha
- Ghedjemis

## Budget

```text
200-225 / 500
```

## Rischio

```text
BASSO
```

## Esempio

- Yildiz
- Berardi
- Laurientè
- De Ketelaere
- Lorenzo Colombo
- Ghedjemis

## Pro

- bonus distribuiti;
- meno dipendenza da un singolo centravanti;
- tanti assist oltre ai gol.

## Contro

- meno probabilità di avere il capocannoniere;
- alcune ali sono più discontinue.

## Tag

```text
bonus-diffuso
assist
equilibrata
```

---

# 12. STRATEGIA 8 — TITOLARI + JOLLY DI BIG

## Concetto

Integrare jolly di big in un reparto già coperto.

## Jolly principali

- Francesco Pio Esposito
- Santiago Castro
- Neres
- Boga
- Mateo Pellegrino
- Jonathan David
- Bonny
- Piccoli
- Giovane

## Regola fondamentale

```text
MASSIMO 2 VERI JOLLY SU 6 ATTACCANTI
```

Gli altri 4 devono avere un'alta probabilità di voto.

## Budget

```text
190-220 / 500
```

## Rischio

```text
MEDIO
```

## Esempio

- Keinan Davis
- Simeone
- Lorenzo Colombo
- Ghedjemis
- Pio Esposito
- Neres

## Pro

- qualità delle big;
- bonus anche da subentranti;
- turnover europeo crea opportunità.

## Contro

- accumulando jolly aumenta il rischio SV;
- gestione settimanale più difficile.

## Tag

```text
jolly
big
rotazioni
coperture
```

---

# 13. STRATEGIA 9 — VALUE

## Concetto

Non partire dai nomi ma da fasce e tetti di prezzo.

## Fasce operative

### A1
- Lautaro Martinez
- Malen
- Thuram
- Goncalo Ramos
- Hojlund
- Kolo Muani

### A2
- Keinan Davis
- Douvikas
- Yildiz
- Kean
- Berardi
- Scamacca
- Krstovic

### A3
- Simeone
- Dovbyk
- De Ketelaere
- Laurientè
- Lorenzo Colombo
- Dybala

### A4
- Akor Adams
- Cutrone
- Ghedjemis
- Geubbels
- John Yeboah
- David Romero
- Dia
- Frigan
- N'Dri

## Budget

```text
185-215 / 500
```

## Rischio

```text
BASSO
```

## Principio

> Non devi vincere il nome più forte. Devi comprare più gol possibili per credito speso.

## Logica

1. Lautaro troppo caro → Malen/Thuram.
2. Anche i top esplodono → Davis/Douvikas/Yildiz.
3. Anche la seconda fascia sale → costruisci tre A2/A3.
4. Sfrutta Colombo, Akor Adams, Ghedjemis, Geubbels, Dia, Frigan, N'Dri se dimenticati.

## Pro

- flessibilità;
- evita overpay;
- sfrutta errori degli avversari.

## Contro

- richiede preparazione e disciplina.

## Tag

```text
value
opportunistica
flessibile
```

---

# 14. STRATEGIA 10 — UN TOP + TUTTO VALUE

## Concetto

Un solo investimento forte e cinque slot costruiti su valore/titolarità.

## Budget

```text
185-210 / 500
```

## Rischio

```text
MEDIO
```

## Esempio

- Hojlund
- Laurientè
- Lorenzo Colombo
- Akor Adams
- Ghedjemis
- Geubbels

## Pro

- un riferimento importante;
- conserva budget per gli altri reparti;
- tanti giocatori utilizzabili.

## Contro

- bisogna azzeccare i value;
- forte dipendenza dal rendimento dell'A1.

## Tag

```text
top-value
equilibrata
risparmio
```

---

# 15. STRATEGIA 11 — LOW COST / ATTACCO ECONOMICO

## Concetto

Ridurre nettamente la spesa in attacco.

## Profili

- Lorenzo Colombo
- Akor Adams
- Cutrone
- Ghedjemis
- John Yeboah
- Geubbels
- Vitinha
- Raimondo
- Kevin Carlos
- Bowie

## Budget

```text
150-180 / 500
```

## Rischio

```text
ALTO
```

## Esempio

- Lorenzo Colombo
- Akor Adams
- Cutrone
- Ghedjemis
- John Yeboah
- Geubbels

## Pro

- centrocampo e difesa possono diventare molto forti;
- tanti titolari di provincia.

## Contro

- manca il bomber da 15-20 gol;
- 2-3 scommesse sbagliate possono compromettere il reparto.

## Regola

> Non scegliere questa strategia soltanto perché i giocatori costano poco: serve comunque un numero sufficiente di titolari e fonti di bonus.

## Tag

```text
low-cost
risparmio
alto-rischio
```

---

# 16. STRATEGIA 12 — GIOVANI / SCOMMESSE

## Concetto

Inserire giovani ad alto upside in un reparto già coperto.

## Profili

- David Romero
- Ghedjemis
- Akor Adams
- Frigan
- Camarda
- Ekhator
- Paul Mendy
- Albion Rrahmani
- Gustavo Varela
- Robinio Vaz

## Struttura

- 3-4 certezze;
- 1 value;
- massimo 1-2 scommesse.

## Budget

```text
175-205 / 500
```

## Rischio

```text
ALTO
```

## Esempio

- Hojlund
- Simeone
- Lorenzo Colombo
- Laurientè
- David Romero
- Ghedjemis

## Regola

> Non comprare sei scommesse.

## Pro

- possibilità di trovare il crack;
- costo iniziale spesso ridotto.

## Contro

- adattamento alla Serie A;
- titolarità incerta;
- volatilità elevata.

## Tag

```text
giovani
scommesse
upside
```

---

# 17. STRATEGIA 13 — COPPIE DI BALLOTTAGGIO

## Concetto

Comprare entrambi gli attaccanti che si contendono lo stesso posto per garantirsi il titolare.

## Coppie principali

- Scamacca + Krstovic
- Dovbyk + Piccoli
- Pinamonti + Bowie
- Geubbels + Stulic
- Keinan Davis + Buksa
- Akor Adams + Albion Rrahmani / Adorante
- Simeone + Che Adams

## Coppia più interessante

```text
Scamacca + Krstovic
```

ma soltanto se il costo complessivo resta sostenibile.

## Regola

```text
MASSIMO UNA COPPIA SU 6 SLOT
```

## Rischio

```text
MEDIO
```

## Pro

- garantisce quasi sempre il centravanti della squadra;
- utile nei ballottaggi ad alto potenziale.

## Contro

- due slot legati alla stessa squadra;
- se costano troppo insieme conviene comprare un Top indipendente.

## Tag

```text
coppie
ballottaggi
copertura
```

---

# 18. STRATEGIA 14 — MERCATO / OCCASIONI

## Concetto

Sfruttare giocatori svalutati o in attesa di una destinazione più favorevole.

## Profili mercato principali

- Nkunku
- Sebastiano Esposito
- Santiago Gimenez
- Morata
- Noa Lang

## Situazioni ancora influenzate dal mercato

- Rafael Leao
- Mati Soulè
- Lorenzo Lucca

## Principio

> Non pagare oggi il valore che il giocatore avrebbe nella destinazione ideale.

## Rischio

```text
MEDIO
```

## Pro

- enormi occasioni se cambia squadra;
- possibile acquisto sotto prezzo.

## Contro

- rischio di comprare una situazione che non cambia;
- gerarchie non definite.

## Regola

> Valutare il giocatore per la situazione reale del giorno dell'asta, non per l'ipotesi migliore.

## Tag

```text
mercato
occasioni
rischio
```

---

# 19. STRATEGIA 15 — OPPORTUNISTICA

## Concetto

È la strategia che deve governare tutte le altre.

Definire per ogni slot:
- target;
- alternative;
- prezzo massimo;
- piano B.

## Tetti indicativi

| Slot | Range indicativo |
|---|---:|
| A1 | 70-115 |
| A2 | 35-65 |
| A3 | 20-40 |
| A4 | 10-25 |
| A5 | 3-15 |
| A6 | 1-8 |

Questi numeri sono **tetti strategici**, non quotazioni ufficiali.

## Logica

Se:
- A1 supera il tetto → rinuncia;
- tutti gli A1 salgono → trasforma A1+A2 in due Semitop;
- A3 viene dimenticato → investi di più lì;
- un value cade troppo → anticipa l'acquisto;
- gli ultimi slot diventano inflazionati → cerca titolarità prima.

## Pro

- evita overpay;
- sfrutta errori degli altri;
- massima adattabilità.

## Contro

- richiede disciplina;
- bisogna conoscere molte alternative.

## Tag

```text
opportunistica
value
flessibile
```

---

# 20. PIANI A-E

La pagina deve avere una sezione iniziale:

```text
PIANI PER L'ASTA
```

con 5 card confrontabili.

---

## PIANO A — BOMBER + PROFONDITÀ

### Budget

```text
205-225 / 500
```

### Rischio

```text
BASSO
```

### Struttura

- 1 Top
- 1 Semitop
- 2 medi
- 2 low/value

### Filosofia

È il piano di partenza consigliato.

Un bomber forte, ma reparto ancora profondo.

---

## PIANO B — SUPER TOP

### Budget

```text
220-240 / 500
```

### Rischio

```text
BASSO / MEDIO
```

### Struttura

- Lautaro oppure Malen
- 1 A2
- 2 value
- 1 low cost
- 1 scommessa

### Filosofia

Leader assoluto del reparto senza arrivare a un attacco totalmente squilibrato.

---

## PIANO C — ZERO SUPER TOP

### Budget

```text
195-215 / 500
```

### Rischio

```text
BASSO
```

### Struttura

- 2 A1/A2
- 2 A3
- 2 low/value

### Profili

- Keinan Davis
- Dovbyk
- Simeone
- Berardi
- Douvikas
- Lorenzo Colombo
- Laurientè
- Ghedjemis

### Filosofia

Massimo rapporto qualità/prezzo.

---

## PIANO D — DUE STELLE

### Budget

```text
230-250 / 500
```

### Rischio

```text
MEDIO
```

### Struttura

- 2 primi slot
- 1 value
- 2 low cost
- 1 scommessa

### Filosofia

Attacco dominante, ma ultimi slot da costruire con disciplina.

---

## PIANO E — VALUE

### Budget

```text
180-205 / 500
```

### Rischio

```text
BASSO / MEDIO
```

### Struttura

- nessun nome obbligatorio;
- 2-3 profili medio-alti;
- 2 value;
- 1 low;
- 1 scommessa.

### Filosofia

Massimizzare gol e assist per credito speso.

---

# 21. Piano consigliato

Mostrare una card speciale:

```text
PIANO CONSIGLIATO
```

## Piano A con possibilità di passare al Piano C

Logica:

1. provare ad acquistare un A1 forte;
2. fissare un tetto massimo;
3. se Lautaro/Malen/Thuram/Ramos/Hojlund/Kolo Muani vengono strapagati, rinunciare;
4. passare al Piano C;
5. distribuire il budget su 5-6 giocatori realmente utilizzabili.

Esempio Zero Super Top:

- Keinan Davis
- Dovbyk
- Simeone
- Lorenzo Colombo
- Ghedjemis
- Geubbels

Messaggio chiave:

> L'attacco 2026/27 ha una fascia intermedia abbastanza profonda da permettere una costruzione forte anche senza Lautaro o Malen.

---

# 22. Value Picks

Creare una sezione:

```text
VALUE PICKS
```

Profili da evidenziare:

- Keinan Davis
- Dovbyk
- Simeone
- Lorenzo Colombo
- Laurientè
- Akor Adams
- Ghedjemis
- Geubbels
- Dia
- Frigan
- N'Dri
- John Yeboah
- David Romero
- Bowie

Recuperare tutti i dati dal dataset `attaccanti.js`.

NON duplicare:
- squadra;
- fascia;
- titolarità;
- statistiche;
- rigori.

---

# 23. Rigoristi da evidenziare

Creare sezione:

```text
RIGORISTI E GERARCHIE
```

## Principali

- Donyell Malen
- Goncalo Ramos
- Kolo Muani
- Keinan Davis
- Berardi
- Geubbels

## Da monitorare

- Hojlund
- Scamacca
- Akor Adams
- Lorenzo Colombo
- Albion Rrahmani
- Dovbyk
- Kevin Carlos

Nota:

> Una gerarchia aperta non deve essere mostrata come certezza.

---

# 24. Jolly da gestire

Sezione:

```text
JOLLY DI BIG
```

Profili:
- Pio Esposito
- Santiago Castro
- Neres
- Boga
- Mateo Pellegrino
- Jonathan David
- Bonny
- Piccoli
- Giovane

Callout:

> In una rosa da 6 attaccanti è consigliabile avere al massimo 2 veri jolly/non titolari.

---

# 25. Scommesse ad upside

Sezione:

```text
SCOMMESSE
```

Profili:
- David Romero
- Ghedjemis
- Akor Adams
- Frigan
- Camarda
- Ekhator
- Paul Mendy
- Albion Rrahmani
- Gustavo Varela
- Robinio Vaz

Callout:

> Le scommesse vanno inserite in un reparto già coperto. In generale, massimo 1-2 su 6.

---

# 26. Coppie

Sezione:

```text
COPPIE DI BALLOTTAGGIO
```

Coppie:
- Scamacca + Krstovic
- Dovbyk + Piccoli
- Pinamonti + Bowie
- Geubbels + Stulic
- Keinan Davis + Buksa
- Akor Adams + Albion Rrahmani / Adorante
- Simeone + Che Adams

Callout:

> Massimo una coppia in un reparto da 6 attaccanti.

---

# 27. Mercato

Sezione:

```text
MERCATO E OCCASIONI
```

Profili:
- Nkunku
- Sebastiano Esposito
- Santiago Gimenez
- Morata
- Noa Lang
- Rafael Leao
- Mati Soulè
- Lorenzo Lucca

Callout:

> Valuta il giocatore per la situazione reale del giorno dell'asta, non per la possibile destinazione migliore.

---

# 28. Struttura dati strategie

Creare:

```text
data/strategieAttaccanti.js
```

Esempio:

```js
{
  id: "super-top-profondita",
  nome: "Super Top + profondità",
  categoria: "Premium",
  tags: ["premium", "super-top", "profondita"],
  descrizione:
    "Un Super Top e cinque slot costruiti con profondità e titolarità.",
  budgetMin: 210,
  budgetMax: 235,
  rischio: "basso",

  struttura: [
    "1 Super Top",
    "1 Semitop / fascia alta",
    "1 terzo slot da bonus",
    "1 titolare di provincia",
    "1 low cost titolare",
    "1 scommessa / jolly"
  ],

  giocatoriIdeali: [
    "lautaro-martinez",
    "keinan-davis",
    "lauriente",
    "lorenzo-colombo",
    "ghedjemis",
    "geubbels"
  ],

  pro: [
    "Leader assoluto",
    "Buona profondità",
    "Almeno 4-5 giocatori schierabili"
  ],

  contro: [
    "Perde equilibrio se il Super Top viene strapagato"
  ],

  regola:
    "Comprare il Super Top solo se rimane budget sufficiente per costruire almeno altri 3-4 attaccanti realmente schierabili."
}
```

Usare gli ID reali presenti in `attaccanti.js`.

NON modificare gli ID del dataset principale solo per adattarli alle strategie.

---

# 29. Filtri strategie

Se compatibile con il design esistente:

```text
Tutte
Premium
Equilibrate
Bonus
Rigoristi
Value
Low Cost
Jolly
Scommesse
Coppie
Mercato
```

Una strategia può appartenere a più tag.

---

# 30. Pagina `/strategie/attaccanti`

Ordine consigliato:

1. Header
2. Piani A-E
3. Piano consigliato
4. Tabella budget
5. Struttura dei 6 slot
6. 15 strategie
7. Value Picks
8. Rigoristi
9. Jolly di big
10. Scommesse
11. Coppie di ballottaggio
12. Mercato e occasioni

---

# 31. Header

Titolo:

```text
Strategie Attaccanti
```

Sottotitolo:

```text
Come costruire l'attacco per l'asta 2026/27
```

Descrizione:

> Confronta strategie, budget e profili per costruire un attacco equilibrato, premium o orientato al value.

Badge utili:

```text
Budget riferimento: 500
Slot attaccanti: 6
```

---

# 32. Collegamento ai giocatori

Quando una strategia cita un attaccante:
- recuperarlo da `attaccanti.js`;
- rendere il nome cliccabile;
- aprire il dettaglio giocatore già esistente;
- non duplicare i dati.

Esempio:

```js
const player = attaccanti.find(
  (p) => p.id === "keinan-davis"
);
```

---

# 33. Design

Mantenere lo stesso linguaggio visivo di:
- Strategie Portieri
- Strategie Difensori
- Strategie Centrocampisti

Usare:
- card;
- badge;
- tabelle;
- griglie;
- pro/contro;
- callout;
- profili cliccabili.

Evitare:
- muri di testo;
- nuove librerie UI;
- pattern grafici diversi dagli altri ruoli.

---

# 34. Rischio

Usare scala coerente:

```text
BASSO
BASSO / MEDIO
MEDIO
MEDIO / ALTO
ALTO
```

---

# 35. Cosa NON fare

NON:
- modificare il dataset degli 88 attaccanti salvo necessità tecnica;
- inventare prezzi individuali;
- creare una sola rosa perfetta;
- aggiungere asta live;
- backend;
- database;
- login;
- autenticazione;
- API esterne;
- nuove librerie pesanti;
- commit/push/modifiche Git.

---

# 36. Definition of Done

La pagina è completa quando:

- `/strategie/attaccanti` esiste;
- tutte le 15 strategie sono presenti;
- Piani A-E presenti;
- Piano consigliato presente;
- tabella budget presente;
- struttura 6 slot presente;
- Value Picks presenti;
- rigoristi presenti;
- jolly presenti;
- scommesse presenti;
- coppie presenti;
- mercato presente;
- giocatori recuperati dal dataset principale;
- nomi giocatori cliccabili se il pattern esiste;
- nessuna duplicazione inutile;
- layout responsive;
- nessuna regressione;
- `npm run build` termina senza errori.
