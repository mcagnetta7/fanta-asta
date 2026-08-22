# Fanta Asta 2026/27 — Strategie Centrocampisti

## Scopo
Questo file è la source of truth per la pagina `/strategie/centrocampisti`.
La pagina deve usare il dataset già esistente dei 186 centrocampisti (`data/centrocampisti.js`) e NON duplicare dati anagrafici/statistici dei giocatori.

Riferimento: rosa con 8 centrocampisti, budget totale 500 crediti.
I budget indicati sono tetti strategici, non quotazioni ufficiali.

---

## Budget di riferimento

| Tipo centrocampo | Budget /500 | Filosofia |
|---|---:|---|
| Ultra risparmio | 95-120 | Massimo budget spostato su attacco |
| Low cost / attacco pesante | 120-140 | Molti titolari economici |
| Equilibrato | 140-165 | Miglior compromesso |
| Forte | 165-185 | Uno o due primi slot + profondità |
| Premium | 185-205 | Due grandi investimenti |
| Dominante | 205-225 | Il centrocampo diventa reparto principale |

---

## Struttura generale degli 8 slot

| Slot | Profilo |
|---|---|
| C1 | Top / Super Top |
| C2 | Semitop / grande value |
| C3 | Bonus |
| C4 | Bonus / rendimento |
| C5 | Titolare affidabile |
| C6 | Titolare low cost |
| C7 | Low cost / value |
| C8 | Scommessa |

Obiettivo: evitare troppi mediani, troppi jolly, troppi infortunati o un reparto senza bonus.

---

# 1. Super Top + profondità

**Budget:** 155-180  
**Rischio:** Basso  
**Idea:** un solo Super Top e tanta profondità dietro.

Super Top di riferimento:
- Nico Paz
- McTominay

Struttura:
- 1 Super Top
- 2 giocatori medio-alti
- 3 value/titolari
- 1 low cost
- 1 scommessa

Esempio:
- Nico Paz
- McKennie
- Ekkelenkamp
- Schmid
- Bernabè
- Busio
- Frendrup
- Benjamin Dominguez

**Pro**
- un giocatore da potenziale 15-20 bonus;
- reparto profondo;
- buona copertura settimanale.

**Contro**
- perde senso se il Super Top viene strapagato;
- non bisogna ritrovarsi con 5 giocatori da 1 credito dopo il C1.

**Regola:** comprare il Super Top solo se resta budget sufficiente per almeno 4-5 centrocampisti realmente schierabili.

Tag: `premium`, `super-top`, `profondità`, `equilibrata`.

---

# 2. Due primi slot

**Budget:** 175-205  
**Rischio:** Medio  
**Idea:** due giocatori di primissima fascia e completamento low/value.

Combinazioni concettuali:
- Orsolini + Vlasic
- Calhanoglu + Baturina
- Pulisic + Da Cunha
- Rabiot + Gudmundsson
- Zaniolo + Barella

Esempio:
- Orsolini
- Vlasic
- Ekkelenkamp
- Schmid
- Frendrup
- Basic
- Mandela Keita
- Benjamin Dominguez

**Pro**
- due fonti principali di bonus;
- reparto potenzialmente dominante.

**Contro**
- forte impatto sul budget;
- rischio di compromettere l'attacco.

**Regola:** dopo due grandi investimenti non inseguire altri centrocampisti costosi.

Tag: `premium`, `due-top`, `bonus`, `aggressiva`.

---

# 3. Zero Super Top

**Budget:** 140-165  
**Rischio:** Basso  
**Idea:** niente Paz/McTominay e reparto costruito con 5-6 giocatori forti.

Profili ideali:
- Da Cunha
- Barella
- McKennie
- Baturina
- Kenneth Taylor
- Ekkelenkamp
- Thorstvedt
- Schmid
- Bernabè
- Rowe
- Perrone

Esempio:
- Da Cunha
- Barella
- McKennie
- Ekkelenkamp
- Schmid
- Bernabè
- Busio
- Frendrup

**Pro**
- grande profondità;
- meno dipendenza da un singolo nome;
- ottima flessibilità.

**Contro**
- manca il picco assoluto del Super Top;
- serve scegliere bene ogni giornata.

**Quando usarla:** quando i top vengono strapagati.

Tag: `value`, `zero-top`, `profondità`, `equilibrata`.

---

# 4. Bonus pesante

**Budget:** 155-185  
**Rischio:** Medio  
**Idea:** privilegiare gol, assist, inserimenti e posizione offensiva.

Profili:
- Nico Paz
- Orsolini
- Pulisic
- Zaniolo
- Zaccagni
- Mastantuono
- Baturina
- Gudmundsson
- Vlasic
- Rowe
- Conceicao
- Frattesi
- Thorstvedt
- Ekkelenkamp
- Schmid
- Casadei

Esempio:
- Vlasic
- Baturina
- Rowe
- Ekkelenkamp
- Schmid
- Casadei
- Busio
- Benjamin Dominguez

**Pro**
- molti potenziali +3/+1;
- centrocampo quasi da secondo attacco.

**Contro**
- più volatilità;
- alcuni profili offensivi sono meno sicuri del voto.

**Regola:** non sacrificare completamente titolarità e coperture.

Tag: `bonus`, `offensiva`, `aggressiva`.

---

# 5. Rigoristi e piazzati

**Budget:** 150-180  
**Rischio:** Basso/Medio

### Rigoristi principali
- Calhanoglu
- Orsolini
- Vlasic
- Da Cunha
- Gudmundsson

### Gerarchie da monitorare
- De Bruyne
- Zaccagni
- Kenneth Taylor
- Calò
- Schmid
- Cataldi

### Punizioni / corner
- Nico Paz
- Calhanoglu
- Modric
- Bernabè
- Calò
- Schmid
- Cataldi
- Zielinski
- Lorenzo Pellegrini

Esempio:
- Vlasic
- Da Cunha
- Kenneth Taylor
- Schmid
- Bernabè
- Frendrup
- Busio
- Basic

**Pro**
- possibilità di bonus anche senza grande prestazione;
- floor più stabile.

**Contro**
- gerarchie dal dischetto possono cambiare.

Badge UI: `RIGORISTA`, `PUNIZIONI`, `CORNER`.

Tag: `rigoristi`, `piazzati`, `bonus`.

---

# 6. Centrocampisti che giocano in attacco

**Budget:** 150-185  
**Rischio:** Medio  
**Idea:** sfruttare il vantaggio dei C schierati realmente nel tridente/trequarti.

Profili:
- Nico Paz
- Orsolini
- Pulisic
- Zaniolo
- Zaccagni
- Mastantuono
- Gudmundsson
- Vlasic
- Jonathan Rowe
- Conceicao
- Politano
- Jesus Rodriguez
- Thorstvedt
- Diego Moreira
- Benjamin Dominguez
- Cancellieri
- Cambiaghi

Struttura ideale:
- 3-4 offensivi;
- 2-3 titolari affidabili;
- 1-2 low cost.

**Pro**
- più occasioni da gol e assist;
- vantaggio di ruolo.

**Contro**
- alcuni sono jolly/ballottaggi;
- rischio di troppi SV.

**Regola:** tre o quattro offensivi bastano, non otto.

Tag: `offensivi`, `trequartisti`, `esterni`, `bonus`.

---

# 7. Rendimento + bonus

**Budget:** 140-165  
**Rischio:** Basso

Struttura:
- 3 da bonus
- 3 da rendimento
- 1 low cost titolare
- 1 scommessa

Esempio:
- Baturina
- McKennie
- Ekkelenkamp
- Barella
- Bernabè
- Frendrup
- Mandela Keita
- Benjamin Dominguez

**Pro:** equilibrio, titolarità, bonus, panchina solida.  
**Contro:** meno esplosiva delle strategie premium.

Tag: `equilibrata`, `rendimento`, `bonus`.

---

# 8. Value

**Budget:** 130-160  
**Rischio:** Basso  
**Idea:** partire da slot e fasce, non da nomi obbligatori.

C1:
- Nico Paz
- McTominay
- Orsolini
- Calhanoglu

C2:
- Vlasic
- Da Cunha
- Barella
- McKennie
- Baturina
- Gudmundsson

C3:
- Kenneth Taylor
- Rowe
- Ekkelenkamp
- Thorstvedt
- Schmid
- Diego Moreira

C4:
- Bernabè
- Casadei
- Busio
- Luis Milla
- Frendrup
- Basic

**Principio:** non devi vincere il nome; devi vincere il rapporto qualità/prezzo.

Logica:
1. Paz troppo caro → Orsolini.
2. Orsolini troppo caro → Vlasic.
3. Vlasic troppo caro → Da Cunha + McKennie.
4. Fasce alte inflazionate → profondità e value.

Tag: `value`, `opportunistica`, `flessibile`.

---

# 9. Un Top + tutto Value

**Budget:** 125-155  
**Rischio:** Medio

Esempio:
- Orsolini
- Ekkelenkamp
- Schmid
- Bernabè
- Casadei
- Frendrup
- Busio
- Basic

**Pro**
- un leader;
- tanto budget salvato per l'attacco;
- facile da adattare.

**Contro**
- bisogna azzeccare i value;
- il C1 pesa molto sul rendimento complessivo.

Tag: `top-value`, `risparmio`, `equilibrata`.

---

# 10. Low Cost titolari

**Budget:** 95-130  
**Rischio:** Alto

Profili:
- Schmid
- Bernabè
- Busio
- Frendrup
- Basic
- Lassana Coulibaly
- Mandela Keita
- Pierotti
- Grillitsch
- Matic
- Karlstrom

Esempio:
- Schmid
- Bernabè
- Busio
- Frendrup
- Basic
- Lassana Coulibaly
- Mandela Keita
- Pierotti

**Pro**
- grande risparmio;
- tanti voti;
- attacco più ricco.

**Contro**
- pochi +3;
- reparto poco esplosivo.

**Regola:** otto titolari non equivalgono automaticamente a un buon centrocampo.

Tag: `low-cost`, `titolari`, `risparmio`.

---

# 11. Giovani / upside

**Budget:** 120-155  
**Rischio:** Alto

Profili:
- Mastantuono
- Alajbegovic
- Rodrigo Mora
- Cacciamani
- Oulai
- Pisilli
- Calò
- Liberali
- Adzic
- Amondarain
- Bakola
- Meichtry
- Aleksandar Stankovic
- Ousmane Diallo

Struttura:
- 4-5 certezze;
- massimo 2 scommesse vere;
- 1-2 low cost affidabili.

**Regola:** non comprare otto scommesse.

Tag: `giovani`, `scommesse`, `upside`.

---

# 12. Jolly controllati

**Budget:** 130-165  
**Rischio:** Medio

Profili:
- Sucic
- Pasalic
- Odgaard
- Chukwueze
- Jesus Rodriguez
- Zielinski
- Samardzic
- Cambiaghi
- Caqueret
- Zalewski
- Luis Milla

Regola obbligatoria:

> MASSIMO 2 JOLLY VERI SU 8 CENTROCAMPISTI.

Gli altri 6 dovrebbero avere una buona probabilità di voto.

**Pro:** upside e rotazioni delle big.  
**Contro:** troppi jolly = rischio SV.

Tag: `jolly`, `rotazioni`, `coperture`.

---

# 13. Infortunati a saldo

**Rischio:** Medio/Alto

Principali:
- Ismael Koné
- Pessina
- Addai

Rischio fisico meno estremo:
- Pulisic
- Isaksen
- Hamed Traorè
- De Bruyne

Regola:

> Comprare un infortunato solo dopo avere almeno 6 centrocampisti utilizzabili.

Errore da evitare:
- Pulisic
- Isaksen
- Pessina
- Ismael Koné

tutti nello stesso reparto.

Tag: `infortunati`, `saldo`, `rischio`.

---

# 14. Opportunistica

**Rischio:** Basso/Medio  
**Idea:** è la strategia che governa tutte le altre.

Definire per ogni slot:
- target;
- alternative;
- tetto massimo.

| Slot | Range indicativo |
|---|---:|
| C1 | 40-65 |
| C2 | 25-40 |
| C3 | 15-25 |
| C4 | 10-20 |
| C5 | 5-12 |
| C6 | 3-8 |
| C7 | 1-5 |
| C8 | 1-3 |

Questi sono tetti strategici, non quotazioni ufficiali.

**Pro:** evita overpay e sfrutta gli errori altrui.  
**Contro:** richiede disciplina e conoscenza delle alternative.

Tag: `opportunistica`, `value`, `flessibile`.

---

# Piani A-E

## Piano A — Equilibrato Bonus
**Budget:** 150-170  
**Rischio:** Basso  
Struttura:
- 1 forte
- 3 bonus
- 2 titolari affidabili
- 1 low cost
- 1 scommessa

È il piano iniziale consigliato.

## Piano B — Super Top
**Budget:** 160-180  
**Rischio:** Basso/Medio  
Struttura:
- Paz oppure McTominay
- 2 medio-alti
- 3 value/titolari
- 1 low
- 1 scommessa

## Piano C — Zero Top
**Budget:** 140-160  
**Rischio:** Basso  
Profili:
- Da Cunha
- McKennie
- Barella
- Ekkelenkamp
- Schmid
- Bernabè
- Rowe
- Thorstvedt

## Piano D — Offensivo
**Budget:** 155-180  
**Rischio:** Medio  
Profili:
- Orsolini
- Zaniolo
- Zaccagni
- Mastantuono
- Gudmundsson
- Vlasic
- Rowe
- Thorstvedt
- Moreira

## Piano E — Value
**Budget:** 125-150  
**Rischio:** Basso/Medio  
Nessun nome obbligatorio; 1 miglior affare + 3/4 value + 2 low + 1 scommessa.

---

# Piano consigliato

Mostrare una card speciale: **Piano A con possibilità di passare al Piano C**.

Logica:
1. provare a comprare un C1 a prezzo corretto;
2. se i top vengono strapagati, rinunciare;
3. passare a Zero Top;
4. distribuire il budget su 5-6 giocatori forti.

Esempio Zero Top:
- Da Cunha
- McKennie
- Ekkelenkamp
- Schmid
- Bernabè
- Busio
- Frendrup
- una scommessa

Messaggio chiave:
> La fascia intermedia 2026/27 è abbastanza profonda da permettere un centrocampo forte anche senza Super Top.

---

# Value Picks

Recuperare dal dataset principale:
- Da Cunha
- Kenneth Taylor
- Barella
- McKennie
- Ekkelenkamp
- Thorstvedt
- Diego Moreira
- Schmid
- Bernabè
- Calò
- Cacciamani
- Busio
- Luis Milla
- Frendrup
- Basic

Non duplicare squadra/statistiche/titolarità.

---

# Centrocampisti che giocano alti

- Nico Paz
- Orsolini
- Pulisic
- Zaniolo
- Zaccagni
- Mastantuono
- Gudmundsson
- Vlasic
- Jonathan Rowe
- Conceicao
- Politano
- Jesus Rodriguez
- Thorstvedt
- Diego Moreira
- Benjamin Dominguez
- Cancellieri
- Cambiaghi

---

# Rigoristi e piazzati

### Rigoristi principali
- Calhanoglu
- Orsolini
- Vlasic
- Da Cunha
- Gudmundsson

### Da monitorare
- De Bruyne
- Zaccagni
- Kenneth Taylor
- Calò
- Schmid
- Cataldi

### Punizioni / corner
- Nico Paz
- Calhanoglu
- Modric
- Bernabè
- Calò
- Schmid
- Cataldi
- Zielinski
- Lorenzo Pellegrini

---

# Jolly da gestire

- Sucic
- Pasalic
- Odgaard
- Chukwueze
- Jesus Rodriguez
- Zielinski
- Samardzic
- Cambiaghi
- Caqueret
- Zalewski
- Luis Milla

Nota UI:
> In una rosa da 8 centrocampisti, in generale massimo 2 veri jolly/non titolari.

---

# Scommesse ad upside

- Mastantuono
- Alajbegovic
- Rodrigo Mora
- Cacciamani
- Oulai
- Pisilli
- Calò
- Liberali
- Adzic
- Amondarain
- Bakola
- Meichtry
- Aleksandar Stankovic

Nota:
> Le scommesse devono essere inserite in un reparto già coperto. In generale massimo 2 su 8.

---

# Infortunati a saldo

Principali:
- Ismael Koné
- Pessina
- Addai

Rischio fisico:
- Pulisic
- Isaksen
- Hamed Traorè
- De Bruyne

Nota:
> Prima di occupare uno slot con un infortunato, assicurarsi di avere almeno 6 centrocampisti utilizzabili.

---

# Struttura dati consigliata

Creare `data/strategieCentrocampisti.js`.

Esempio:

```js
{
  id: "super-top-profondita",
  nome: "Super Top + profondità",
  categoria: "Premium",
  tags: ["premium", "super-top", "profondità"],
  descrizione: "Un Super Top e un reparto profondo costruito con value e titolari.",
  budgetMin: 155,
  budgetMax: 180,
  rischio: "basso",
  struttura: [
    "1 Super Top",
    "2 fascia medio-alta",
    "3 value/titolari",
    "1 low cost",
    "1 scommessa"
  ],
  giocatoriIdeali: [
    "nico-paz",
    "mckennie",
    "ekkelenkamp",
    "schmid",
    "bernabe",
    "busio",
    "frendrup"
  ],
  pro: [
    "Leader assoluto",
    "Buona profondità",
    "Tanti giocatori schierabili"
  ],
  contro: [
    "Perde senso se il Super Top viene strapagato"
  ],
  regola: "Acquistare il Super Top solo se rimane budget per almeno 4-5 giocatori realmente schierabili."
}
```

I riferimenti ai giocatori devono usare gli ID reali di `centrocampisti.js`.

---

# Pagina `/strategie/centrocampisti`

Ordine consigliato:
1. Header
2. Piani A-E
3. Piano consigliato
4. Budget
5. Struttura 8 slot
6. 14 strategie
7. Value Picks
8. Centrocampisti offensivi
9. Rigoristi e piazzati
10. Jolly
11. Scommesse
12. Infortunati

Filtri strategie:
- Tutte
- Premium
- Equilibrate
- Bonus
- Offensive
- Value
- Low Cost
- Scommesse
- Rigoristi
- Jolly

---

# Collegamento ai giocatori

Quando una strategia cita un giocatore:
- recuperarlo da `centrocampisti.js`;
- rendere il nome cliccabile;
- aprire il dettaglio già esistente;
- non duplicare statistiche/squadra/fascia/titolarità.

---

# Design

Coerente con le pagine strategie già esistenti:
- card confrontabili;
- badge budget;
- badge rischio;
- pro/contro;
- struttura;
- profili ideali;
- niente muri di testo;
- responsive.

Non aggiungere nuove librerie UI.

---

# Cosa NON fare

Non:
- modificare i 186 centrocampisti se non per necessità tecnica;
- inventare prezzi individuali;
- creare una sola rosa "perfetta";
- aggiungere asta live;
- backend;
- database;
- autenticazione;
- API;
- modifiche Git.

---

# Definition of Done

La pagina è completa quando:
- `/strategie/centrocampisti` esiste;
- tutte le 14 strategie sono presenti;
- Piani A-E presenti;
- Piano consigliato presente;
- budget presente;
- struttura degli 8 slot presente;
- Value Picks presenti;
- offensivi presenti;
- rigoristi/piazzati presenti;
- jolly presenti;
- scommesse presenti;
- infortunati presenti;
- nomi giocatori collegati al dataset principale;
- nessuna duplicazione inutile dei dati;
- nessuna regressione sulle altre pagine;
- responsive;
- `npm run build` termina senza errori.
