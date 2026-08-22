# Fanta Asta 2026/27 — Specifica sezione Portieri

## 1. Obiettivo

Questa web app deve funzionare come **guida interattiva personale per l'asta del fantacalcio 2026/27**.

Per questa prima versione bisogna implementare **solo la sezione Portieri**, usando i dati e le strategie raccolte finora.

L'app NON deve ancora gestire:
- asta live
- budget in tempo reale
- acquisti degli avversari
- backend
- database
- login
- API

La prima versione deve essere un **contenitore consultabile, veloce e ordinato** di:
1. tabella completa dei portieri;
2. filtri;
3. ricerca;
4. schede giocatore;
5. strategie per la porta;
6. tabella completa dei terzetti;
7. preferiti salvati in localStorage.

---

## 2. Stack e vincoli tecnici

Progetto esistente:
- Next.js
- App Router
- JavaScript
- Tailwind CSS
- npm
- GitHub + SourceTree
- deploy Vercel

Non aggiungere un backend.
Non aggiungere un database.
Non aggiungere autenticazione.

I dati possono essere salvati in file locali JS/JSON.

Struttura suggerita:

```text
app/
  page.js
  portieri/
    page.js
  strategie/
    portieri/
      page.js

components/
  Navbar.js
  SearchBar.js
  Filters.js
  PlayerTable.js
  PlayerCard.js
  StrategyTable.js
  StrategyCard.js
  FavoriteButton.js

data/
  portieri.js
  strategiePortieri.js
```

---

## 3. Navigazione

Navbar principale:

```text
FANTA ASTA 26/27

Home | Portieri | Strategie
```

Per ora le sezioni Difensori, Centrocampisti e Attaccanti possono essere mostrate come "Prossimamente" oppure non essere ancora presenti.

---

# 4. HOME

Home semplice, pulita e responsive.

Contenuto:

## Titolo
**Fanta Asta 2026/27**

Sottotitolo:
**La mia guida personale all'asta**

Card principale:

### 🧤 Portieri
- Fasce
- Titolarità
- Gerarchie
- Statistiche
- Consigli
- Strategie
- Terzetti

CTA:
**Vai ai Portieri**

Seconda card:

### 🧠 Strategie Portieri
- Premium
- Equilibrate
- Low Cost
- Scommesse

CTA:
**Vedi strategie**

---

# 5. PAGINA PORTIERI

Route:

```text
/portieri
```

## Elementi richiesti

### Titolo
**Portieri 2026/27**

### Search
Campo:
```text
Cerca portiere...
```

Ricerca case-insensitive per nome.

### Filtri fascia

- Tutti
- Super Top
- Top
- Semitop
- Fascia Alta
- Jolly 1ª Fascia
- Fascia Media
- Sopra ai Low Cost
- Jolly 2ª Fascia
- Low Cost 1ª Fascia
- Low Cost 2ª Fascia
- Leghe Numerose
- Jolly 3ª Fascia
- Mercato

### Filtro titolarità

- Tutti
- Sì
- Ballottaggio
- No

### Ordinamento opzionale

- Fascia
- Nome
- Squadra
- Valutazione

---

# 6. TABELLA PORTIERI

Colonne:

| Fascia | Giocatore | Squadra | Titolare | Gerarchia | Dati ultima stagione | Strategia asta |
|---|---|---|---|---|---|---|

La tabella deve essere responsive.
Su mobile può trasformarsi in card.

Legenda:
- 🟢 SÌ = titolare
- 🟠 BALLOTTAGGIO = favorito ma non blindato / situazione aperta
- 🔴 NO = riserva / seconda scelta

Abbreviazioni:
- CS = clean sheet
- GS = gol subiti

---

# 7. DATI PORTIERI

Usare questi dati come base.

| Fascia | Giocatore | Squadra | Titolare | Gerarchia | Dati ultima stagione | Strategia asta |
|---|---|---|---|---|---|---|
| SUPER TOP | Svilar | Roma | Sì | Titolare indiscusso | 18 CS, 31 GS / 38 | 1° slot assoluto; premium |
| TOP | Maignan | Milan | Sì | Titolare | 13 CS, 35 GS / 37, 2 rigori parati | 1° slot; garanzia + pararigori |
| TOP | Josep Martinez | Inter | Ballottaggio | Favorito su Provedel | Inter quarta miglior difesa nella stagione precedente | 1° slot; consigliata copertura Provedel |
| TOP | Carnesecchi | Atalanta | Sì | Titolare indiscusso | 13 CS, 35 GS / 37, 2 rigori parati | 1° slot; molto interessante col modificatore |
| TOP | Butez | Como | Sì | Titolare indiscusso | 19 CS, 29 GS / 38, 1 rigore parato, 1 assist | 1° slot; top assoluto |
| TOP | Vicario | Juventus | Sì | Favorito / titolare | 50 GS / 31 in Premier | 1° slot; Perin come copertura |
| SEMITOP | Meret | Napoli | Ballottaggio | Favorito su Milinkovic-Savic | — | Porta da 1° slot; meglio la coppia |
| FASCIA ALTA | De Gea | Fiorentina | Sì | Titolare indiscusso | 10 CS, 49 GS / 37 | Buon primo portiere |
| FASCIA ALTA | Skorupski | Bologna | Sì | Titolare | 7 CS, 15 GS / 18 | Buon primo portiere |
| FASCIA ALTA | Mandas | Lazio | Ballottaggio | Favorito su Motta | — | Meglio Mandas + Motta |
| FASCIA ALTA | Okoye | Udinese | Sì | Titolare | 32 GS / 30, 1 rigore parato, 1 assist | Interessante per modificatore |
| JOLLY 1ª FASCIA | Milinkovic-Savic | Napoli | No | Dietro Meret | — | Da prendere soprattutto con Meret |
| JOLLY 1ª FASCIA | Provedel | Inter | Ballottaggio | Insegue Josep Martinez | — | Copertura molto importante |
| FASCIA MEDIA | Caprile | Cagliari | Sì | Titolare | 8 CS, 53 GS / 38 | Più da modificatore che da clean sheet |
| FASCIA MEDIA | Falcone | Lecce | Sì | Titolare | 10 CS, 50 GS / 38, 2 rigori parati | Garanzia; da modificatore; non strapagare |
| SOPRA AI LOW COST | Bijlow | Genoa | Sì | Prima scelta | 5 CS, 20 GS / 16 | Da alternare con big o altri provinciali |
| JOLLY 2ª FASCIA | Daffara | Parma | No | Dietro Corvi | Ottima stagione in B | Meglio coppia con Corvi |
| JOLLY 2ª FASCIA | Perin | Juventus | No | Vice Vicario | — | Copertura Juventus |
| JOLLY 2ª FASCIA | Motta | Lazio | No | Dietro Mandas | — | Meglio coppia con Mandas |
| LOW COST 1ª FASCIA | Muric | Sassuolo | Ballottaggio | Favorito su Turati | 6 CS, 43 GS / 32, 1 rigore parato | Tra i due preferibile Muric |
| LOW COST 1ª FASCIA | Corvi | Parma | Ballottaggio | Favorito su Daffara | 7 CS, 18 GS / 17 | Low cost interessante |
| LOW COST 2ª FASCIA | Filip Stankovic | Venezia | Sì | Titolare indiscusso | 16 CS, 31 GS in B | Buono con una big o in rotazione |
| LEGHE NUMEROSE | Thiam | Monza | Sì | Titolare | 16 CS, 32 GS / 38 in B | Low cost per leghe numerose |
| LEGHE NUMEROSE | Palmisani | Frosinone | Ballottaggio | Favorito su Desplanches | 15 CS, 34 GS / 38 in B | Interessante ma non blindato |
| JOLLY 3ª FASCIA | Desplanches | Frosinone | No | Insegue Palmisani | 2 CS, 48 GS / 25 in B | Prudenza |
| JOLLY 3ª FASCIA | Turati | Sassuolo | No | Insegue Muric | — | Muric attualmente preferibile |
| MERCATO | Di Gregorio | Juventus | No | Fuori dalla formazione tipo / mercato | — | Da monitorare |
| MERCATO | Paleari | Torino | No | Seconda scelta / situazione mercato | — | Da monitorare |

---

# 8. SCHEDA GIOCATORE

Cliccando un giocatore aprire una modale, drawer o pagina dettaglio.

Esempio:

## Marco Carnesecchi

**Atalanta**

Badge:
- TOP
- TITOLARE

Sezioni:

### Gerarchia
Titolare indiscusso

### Ultima stagione
- 13 clean sheet
- 35 gol subiti
- 2 rigori parati

### Valutazione
- Modificatore: ★★★★★
- Clean sheet: ★★★★☆
- Titolarità: ★★★★★

### Consiglio
Primo slot. Titolarità molto solida e profilo particolarmente interessante con modificatore.

### Strategie in cui compare
Mostrare automaticamente i terzetti di `strategiePortieri.js` che contengono il giocatore.

---

# 9. VALUTAZIONI SINTETICHE CONSIGLIATE

Queste stelle possono essere usate come base UI.

| Giocatore | Modificatore | Clean sheet | Titolarità |
|---|---:|---:|---:|
| Svilar | 5 | 5 | 5 |
| Maignan | 4 | 5 | 5 |
| Josep Martinez | 4 | 4 | 4 |
| Carnesecchi | 5 | 5 | 5 |
| Butez | 5 | 5 | 5 |
| Vicario | 4 | 4 | 5 |
| Meret | 4 | 5 | 3 |
| De Gea | 4 | 4 | 5 |
| Skorupski | 4 | 4 | 5 |
| Mandas | 4 | 4 | 3 |
| Okoye | 5 | 3 | 5 |
| Milinkovic-Savic | 4 | 5 | 2 |
| Provedel | 4 | 4 | 2 |
| Caprile | 5 | 2 | 5 |
| Falcone | 5 | 3 | 5 |
| Bijlow | 4 | 3 | 5 |
| Daffara | 3 | 3 | 2 |
| Perin | 4 | 4 | 1 |
| Motta | 4 | 3 | 2 |
| Muric | 4 | 3 | 3 |
| Corvi | 4 | 3 | 3 |
| Stankovic | 4 | 2 | 5 |
| Thiam | 3 | 2 | 5 |
| Palmisani | 4 | 2 | 3 |
| Desplanches | 3 | 2 | 2 |
| Turati | 3 | 3 | 2 |
| Di Gregorio | 4 | 4 | 1 |
| Paleari | 3 | 3 | 1 |

Nota: queste stelle sono valutazioni sintetiche operative, non dati ufficiali.

---

# 10. PAGINA STRATEGIE PORTIERI

Route:

```text
/strategie/portieri
```

Filtri:

- Tutte
- Premium
- Equilibrate
- Low Cost
- Scommesse

Colonne:

| # | Categoria | Portiere 1 | Portiere 2 | Portiere 3 | Tipo | Tetto max /500 | Rischio | Valutazione | Perché |
|---|---|---|---|---|---|---:|---|---|---|

I tetti massimi sono valori strategici personali su 500 crediti.

---

# 11. TERZETTI PORTIERI

| # | Categoria | Portiere 1 | Portiere 2 | Portiere 3 | Tipo | Max /500 | Rischio | Valutazione | Perché |
|---:|---|---|---|---|---|---:|---|---|---|
| 1 | Premium | Svilar | Gollini | Skorupski | Top + vice + titolare | 55 | Molto basso | 5 | Svilar blindato + ottima alternativa |
| 2 | Premium | Svilar | Gollini | Stankovic | Top + vice + low cost | 52 | Basso | 5 | Massima sicurezza spendendo poco sul 3° |
| 3 | Premium | Butez | De Gea | Tornqvist | 2 forti + vice | 45 | Basso | 5 | Grande alternanza e alto potenziale clean sheet |
| 4 | Premium | Carnesecchi | Okoye | Sportiello | Top + medio + vice | 40 | Basso | 5 | Fortissima con modificatore |
| 5 | Premium | Carnesecchi | Muric | Sportiello | Top + low cost + vice | 38 | Basso/medio | 4.5 | Ottimi incroci, costo inferiore |
| 6 | Premium | Maignan | Terracciano | Falcone | Top + vice + medio | 42 | Basso | 4.5 | Milan coperto + portiere da modificatore |
| 7 | Premium | Josep Martinez | Provedel | Skorupski | Blocco Inter + titolare | 45 | Basso | 4.5 | Elimina il rischio gerarchia Inter |
| 8 | Premium | Vicario | Perin | Caprile | Blocco Juve + medio | 42 | Basso | 4.5 | Sicurezza + Caprile da alternare |
| 9 | Premium | Meret | Milinkovic-Savic | Falcone | Blocco Napoli + medio | 40 | Basso | 4.5 | Copertura totale del ballottaggio Napoli |
| 10 | Equilibrata | De Gea | Corvi | Christensen | Fascia alta + low cost + vice | 30 | Basso | 5 | Grande rapporto qualità/prezzo |
| 11 | Equilibrata | Bijlow | Okoye | Padelli | 2 medi + vice | 24 | Basso | 5 | Molto interessante per modificatore |
| 12 | Equilibrata | Mandas | Motta | Falcone | Blocco Lazio + medio | 24 | Basso | 5 | Lazio coperta + Falcone |
| 13 | Equilibrata | Butez | Okoye | Tornqvist | Top + medio + vice | 36 | Basso | 4.5 | Alternativa più economica a Butez-De Gea |
| 14 | Equilibrata | Skorupski | Stankovic | Pessina | Medio-alto + low + vice | 22 | Basso | 4.5 | Bologna coperto + alternanza economica |
| 15 | Equilibrata | Caprile | Stankovic | Sherri | 2 titolari + vice | 20 | Basso | 4.5 | Buona alternanza |
| 16 | Equilibrata | Okoye | Falcone | Padelli | 2 portieri da modificatore + vice | 20 | Basso | 4.5 | Alto potenziale voto |
| 17 | Equilibrata | Muric | Turati | Corvi | Sassuolo coperto + Parma | 18 | Basso/medio | 4.5 | Elimina il rischio Muric-Turati |
| 18 | Equilibrata | De Gea | Mandas | Motta | Fiorentina + blocco Lazio | 35 | Basso | 4.5 | Qualità elevata senza super top |
| 19 | Low Cost | Bijlow | Falcone | Penev | Coppia low cost + vice | 15 | Basso/medio | 5 | Low cost preferita |
| 20 | Low Cost | Corvi | Daffara | Bijlow | Parma coperto + Genoa | 15 | Basso | 4.5 | Economica e protetta |
| 21 | Low Cost | Corvi | Daffara | Falcone | Parma coperto + Lecce | 16 | Basso | 4.5 | Interessante col modificatore |
| 22 | Low Cost | Stankovic | Muric | Turati | Venezia + Sassuolo coperto | 10 | Medio | 4 | Risparmio estremo ragionato |
| 23 | Low Cost | Thiam | Okoye | Pizzignacco | Monza coperto + Udinese | 11 | Medio | 4 | Prezzo basso e due titolari |
| 24 | Low Cost | Palmisani | Desplanches | Bijlow | Frosinone coperto + Genoa | 11 | Medio | 4 | Elimina il ballottaggio Frosinone |
| 25 | Low Cost | Stankovic | Grandi | Thiam | Venezia coperta + Monza | 9 | Medio | 3.5 | Molto economica |
| 26 | Low Cost | Palmisani | Desplanches | Stankovic | Frosinone coperto + Venezia | 9 | Medio/alto | 3.5 | Low cost ma difese rischiose |
| 27 | Scommessa | Bijlow | Falcone | Provedel | 2 titolari + jolly big | 17 | Medio | 5 | Grande upside se Provedel guadagna spazio |
| 28 | Scommessa | Corvi | Stankovic | Milinkovic-Savic | 2 titolari + jolly big | 13 | Medio/alto | 4.5 | Possibile jackpot Napoli |
| 29 | Scommessa | Muric | Corvi | Provedel | 2 low cost + jolly Inter | 14 | Medio/alto | 4 | Alto potenziale a prezzo basso |
| 30 | Scommessa | Thiam | Palmisani | Provedel | Ultra low + jolly Inter | 10 | Alto | 3 | Massimo risparmio, massimo rischio |

---

# 12. TERZETTI DA EVIDENZIARE

Mostrare una sezione "Consigliati" sopra la tabella completa.

## Premium
**Svilar + Gollini + Skorupski**
Max: 55/500

## Modificatore
**Carnesecchi + Okoye + Sportiello**
Max: 40/500

## Qualità/prezzo
**De Gea + Corvi + Christensen**
Max: 30/500

## Low cost
**Bijlow + Falcone + Penev**
Max: 15/500

## Scommessa
**Bijlow + Falcone + Provedel**
Max: 17/500

---

# 13. STRATEGIE GENERALI PER LA PORTA

Creare una sezione introduttiva sopra i terzetti con queste strategie:

| Strategia | Descrizione | Budget indicativo /500 | Rischio |
|---|---|---:|---|
| Blocco totale di una big | Titolare + riserve stessa squadra | 30-50 | Basso |
| Top + vice + titolare low cost | Top coperto + alternativa titolare | 30-50 | Basso |
| Due portieri forti da alternare | Top/semitop + fascia alta | 35-50 | Basso |
| Fascia alta + fascia media | Due titolari di squadre diverse | 20-35 | Basso/medio |
| Coppia da griglia | Due titolari scelti per incroci calendario | 15-30 | Medio |
| Coppia low cost | Due provinciali titolari | 10-15 | Medio |
| Porta ultra low cost | 2/3 provinciali economici | 5-10 | Alto |
| Terzetto da alternanza | Tre titolari differenti | 10-25 | Medio/alto |
| Coppia + riserva | Due titolari + vice di uno | 10-30 | Basso |
| Due low cost + jolly big | Due titolari economici + riserva forte di big | 8-20 | Medio |
| Strategia modificatore | Privilegiare portieri da alto voto | 15-30 | Medio |
| Strategia clean sheet | Privilegiare porte di difese forti | 30-50 | Basso |
| Value/opportunistica | Nessun nome fisso, si segue il prezzo d'asta | Variabile | Medio |

---

# 14. INCROCI INTERESSANTI

Mostrare eventualmente in una card secondaria "Abbinamenti interessanti".

- Roma + Bologna
- Atalanta + Sassuolo
- Inter + Bologna
- Como + Bologna
- Como + Udinese
- Lazio + Lecce
- Milan + Fiorentina
- Milan + Lecce
- Napoli + Lecce
- Napoli + Torino
- Milan + Parma
- Genoa + Lecce
- Genoa + Frosinone
- Parma + Genoa
- Bologna + Venezia
- Sassuolo + Venezia

Non serve calcolare automaticamente gli incroci nella V1.

---

# 15. PREFERITI

Aggiungere una stella cliccabile accanto a:
- giocatori
- strategie/terzetti

Salvare i preferiti in `localStorage`.

Esempio:
```text
☆ Carnesecchi
```

clic:
```text
★ Carnesecchi
```

Creare un filtro:
**Solo preferiti**

Per le strategie mostrare eventualmente:
- Piano A
- Piano B
- Piano C

Non serve consentire rinomina nella V1.

---

# 16. DESIGN

Stile:
- moderno
- pulito
- sportivo
- leggibile
- niente eccessi grafici
- niente gradienti pesanti
- niente animazioni inutili

Priorità:
1. velocità di consultazione;
2. leggibilità delle tabelle;
3. gerarchia visiva delle fasce;
4. uso da desktop durante l'asta;
5. responsive mobile.

Badge fascia con colori coerenti e accessibili.
Usare icone solo se migliorano la lettura.

---

# 17. COMPORTAMENTO

- ricerca e filtri devono lavorare lato client;
- nessuna chiamata API;
- nessun dato inventato;
- se un campo vale `—`, mostrare `—`;
- non modificare autonomamente nomi, squadre, fasce, gerarchie o terzetti;
- separare chiaramente i dati oggettivi dalle valutazioni strategiche;
- le valutazioni a stelle e i budget sono indicazioni personali, non dati ufficiali.

---

# 18. IMPLEMENTAZIONE CONSIGLIATA

Creare i dati in strutture JS riutilizzabili.

Esempio portiere:

```js
{
  id: "carnesecchi",
  nome: "Marco Carnesecchi",
  nomeBreve: "Carnesecchi",
  squadra: "Atalanta",
  fascia: "TOP",
  titolare: "si",
  gerarchia: "Titolare indiscusso",
  statistiche: {
    cleanSheet: 13,
    golSubiti: 35,
    presenze: 37,
    rigoriParati: 2
  },
  valutazioni: {
    modificatore: 5,
    cleanSheet: 5,
    titolarita: 5
  },
  consiglio: "1° slot; molto interessante col modificatore"
}
```

Esempio strategia:

```js
{
  id: 4,
  categoria: "Premium",
  portieri: ["Carnesecchi", "Okoye", "Sportiello"],
  tipo: "Top + medio + vice",
  maxBudget: 40,
  rischio: "Basso",
  valutazione: 5,
  perche: "Fortissima con modificatore"
}
```

Le strategie associate al giocatore devono essere ricavate dinamicamente cercando il nome del giocatore nell'array `portieri` di ogni strategia.

---

# 19. ORDINE DI SVILUPPO

Implementare in questo ordine:

1. struttura dati;
2. navbar;
3. home;
4. pagina Portieri;
5. ricerca;
6. filtri;
7. tabella responsive;
8. scheda dettaglio giocatore;
9. pagina Strategie Portieri;
10. filtri strategie;
11. terzetti consigliati;
12. preferiti con localStorage;
13. responsive finale;
14. controllo build;
15. test `npm run build`.

---

# 20. DEFINIZIONE DI DONE

La sezione Portieri è completata quando:

- `/portieri` mostra tutti i portieri;
- ricerca funzionante;
- filtri fascia funzionanti;
- filtro titolarità funzionante;
- dettaglio giocatore funzionante;
- `/strategie/portieri` mostra tutte le 30 combinazioni;
- filtro categoria strategie funzionante;
- sezione 5 terzetti consigliati presente;
- preferiti persistenti dopo refresh;
- navigazione funzionante;
- layout responsive;
- nessun errore console;
- `npm run build` termina senza errori.
