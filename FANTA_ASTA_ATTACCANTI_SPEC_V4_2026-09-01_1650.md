# Fanta Asta 2026/27 — Attaccanti V4
## Aggiornamento tabella — 1 settembre 2026, snapshot ore 16:50

## 1. Scopo

Questo documento sostituisce, per la sola pagina:

```text
/attaccanti
```

la precedente:

```text
FANTA_ASTA_ATTACCANTI_SPEC.md
```

La V4 serve **solo ad aggiornare i dati della tabella Attaccanti**.

NON deve essere utilizzata per modificare:

```text
/strategie/attaccanti
```

Questa è una **data update**, non un redesign.

La precedente specifica conteneva:

```text
88 attaccanti
19 categorie
```

La Guida SOS Fanta aggiornata il **1 settembre 2026 alle 10:10** contiene:

```text
87 attaccanti
19 categorie
```

Dopo la pubblicazione della guida sono però già avvenute due uscite certe dalla Serie A:

```text
Boulaye Dia → Rennes
Nicolas Kühn → Borussia Mönchengladbach
```

Questi due giocatori devono quindi essere rimossi dal dataset operativo.

Risultato:

```text
BASE SOS 10:10 = 87
USCITE LIVE = -2
TOTALE OPERATIVO SNAPSHOT 16:50 = 85
```

Due nuovi arrivi ufficiali, **Exequiel Zeballos al Monza** e **Jay Enem al Bologna**, NON vengono ancora aggiunti al dataset perché al momento di questo snapshot non è stata verificata in modo esplicito la loro classificazione **Classic A** nel listone Fantacalcio.

NON inventare il ruolo Classic.

Quindi il vincolo attuale è:

```js
attaccanti.length === 85
```

## 2. Categorie operative e conteggi esatti

| Categoria | N. |
|---|---:|
| SUPER TOP | 2 |
| TOP | 3 |
| SEMITOP | 4 |
| SOTTO AI SEMITOP | 5 |
| FASCIA ALTA | 4 |
| JOLLY 1ª FASCIA | 5 |
| POSSIBILI SORPRESE | 2 |
| FASCIA MEDIA | 6 |
| INFORTUNATI | 1 |
| SCOMMESSE | 4 |
| JOLLY 2ª FASCIA | 2 |
| LOW COST 1ª FASCIA | 8 |
| LOW COST 2ª FASCIA | 6 |
| LEGHE NUMEROSE | 4 |
| JOLLY 3ª FASCIA | 12 |
| JOLLY 4ª FASCIA | 3 |
| A RISCHIO | 3 |
| DA EVITARE | 4 |
| MERCATO | 7 |
| **TOTALE OPERATIVO** | **85** |

Nota:

La categoria precedente:

```text
SOPRA AI LOW COST
```

NON esiste più nella nuova classificazione.

Compare invece:

```text
INFORTUNATI
```

con Kenan Yildiz.

## 3. Ordine categorie

1. SUPER TOP
2. TOP
3. SEMITOP
4. SOTTO AI SEMITOP
5. FASCIA ALTA
6. JOLLY 1ª FASCIA
7. POSSIBILI SORPRESE
8. FASCIA MEDIA
9. INFORTUNATI
10. SCOMMESSE
11. JOLLY 2ª FASCIA
12. LOW COST 1ª FASCIA
13. LOW COST 2ª FASCIA
14. LEGHE NUMEROSE
15. JOLLY 3ª FASCIA
16. JOLLY 4ª FASCIA
17. A RISCHIO
18. DA EVITARE
19. MERCATO

Con filtro `Tutti` mantenere questo ordine. All'interno delle categorie mantenere l'ordine indicato sotto.

## 4. Dataset operativo completo — 85

### SUPER TOP — 2

- Malen
- Martinez L.

### TOP — 3

- Ramos G.
- Thuram
- Hojlund

### SEMITOP — 4

- Kolo Muani
- Douvikas
- Kean
- Davis K.

### SOTTO AI SEMITOP — 5

- Scamacca
- Esposito F.P.
- Krstovic
- Dybala
- Berardi

### FASCIA ALTA — 4

- Pinamonti
- Simeone
- Santos A.
- Dovbyk

### JOLLY 1ª FASCIA — 5

- Castro S.
- Pellegrino M.
- Bonny
- Boga
- Neres

### POSSIBILI SORPRESE — 2

- Adams A.
- Varela G.

### FASCIA MEDIA — 6

- De Ketelaere
- Raspadori
- Laurientè
- Colombo
- Diao
- Esposito Se.

### INFORTUNATI — 1

- Yildiz

### SCOMMESSE — 4

- Raimondo
- Kvernadze
- Mendy P.
- Romero D.

### JOLLY 2ª FASCIA — 2

- Piccoli
- Lucca

### LOW COST 1ª FASCIA — 8

- Bowie
- Adams C.
- Cutrone
- Maldini
- Geubbels
- Vitinha O.
- Elphege
- Yeboah J.

### LOW COST 2ª FASCIA — 6

- Kevin Carlos
- Tourè E.
- Bobcek
- Zapata D.
- Ngonge
- Fatah

### LEGHE NUMEROSE — 4

- Rrahmani Al.
- Stulic
- Adorante
- Mota

### JOLLY 3ª FASCIA — 12

- Osmajic
- Noslin
- Sulemana K.
- Birligea
- Camarda
- Frigan
- Borrelli
- Giovane
- Havel
- Kulenovic
- N'Dri
- Lontani

### JOLLY 4ª FASCIA — 3

- Gueye
- Ekhator
- Bayo V.

### A RISCHIO — 3

- Milik
- Robinson J.
- Azon

### DA EVITARE — 4

- De Martis
- Lauberbach
- Lisman
- Trepy

### MERCATO — 7

- Soulè
- Ratkov
- David
- Ghedjemis
- Mutandwa
- Lang
- Vaz

## 5. Snapshot SOS originario delle 10:10

Per chiarezza, la base SOS prima delle due uscite live era di **87 giocatori**.

Rispetto al dataset operativo sopra, comprendeva anche:

```text
Dia      → MERCATO
Kuhn     → JOLLY 3ª FASCIA
```

Non devono però essere mantenuti nell'app perché entrambi hanno già lasciato la Serie A.

La differenza va trattata come:

```text
fascia SOS storica
≠
presenza nel dataset operativo live
```

## 6. Principali cambi rispetto alla vecchia V3

| Giocatore | Vecchia fascia | Nuova fascia |
|---|---|---|
| Kolo Muani | TOP | SEMITOP |
| Pio Esposito | JOLLY 1ª FASCIA | SOTTO AI SEMITOP |
| Dybala | FASCIA ALTA | SOTTO AI SEMITOP |
| Colombo | SOPRA AI LOW COST | FASCIA MEDIA |
| Sebastiano Esposito | MERCATO | FASCIA MEDIA |
| Yildiz | SEMITOP | INFORTUNATI |
| Raimondo | LOW COST 2ª FASCIA | SCOMMESSE |
| Kvernadze | LEGHE NUMEROSE | SCOMMESSE |
| Bonny | JOLLY 2ª FASCIA | JOLLY 1ª FASCIA |
| Varela | LEGHE NUMEROSE | POSSIBILI SORPRESE |
| Lucca | JOLLY 1ª FASCIA | JOLLY 2ª FASCIA |
| Bowie | LOW COST 2ª FASCIA | LOW COST 1ª FASCIA |
| Elphege | LOW COST 2ª FASCIA | LOW COST 1ª FASCIA |
| Yeboah | LOW COST 2ª FASCIA | LOW COST 1ª FASCIA |
| Kevin Carlos | LOW COST 1ª FASCIA | LOW COST 2ª FASCIA |
| El Bilal Touré | LOW COST 1ª FASCIA | LOW COST 2ª FASCIA |
| Albion Rrahmani | LOW COST 2ª FASCIA | LEGHE NUMEROSE |
| Camarda | JOLLY 4ª FASCIA | JOLLY 3ª FASCIA |
| Frigan | JOLLY 4ª FASCIA | JOLLY 3ª FASCIA |
| N'Dri | JOLLY 4ª FASCIA | JOLLY 3ª FASCIA |
| Giovane | JOLLY 2ª FASCIA | JOLLY 3ª FASCIA |
| Havel | LEGHE NUMEROSE | JOLLY 3ª FASCIA |
| Lontani | DA EVITARE | JOLLY 3ª FASCIA |
| Ekhator | JOLLY 3ª FASCIA | JOLLY 4ª FASCIA |
| Vakoun Bayo | A RISCHIO | JOLLY 4ª FASCIA |
| Lauberbach | A RISCHIO | DA EVITARE |
| Trepy | A RISCHIO | DA EVITARE |
| Soulé | JOLLY 1ª FASCIA | MERCATO |
| Ratkov | JOLLY 3ª FASCIA | MERCATO |
| Jonathan David | JOLLY 2ª FASCIA | MERCATO |
| Ghedjemis | LOW COST 1ª FASCIA | MERCATO |
| Mutandwa | DA EVITARE | MERCATO |
| Robinio Vaz | JOLLY 3ª FASCIA | MERCATO |

## 7. Nuovi rispetto alla vecchia lista da 88

Aggiungere:

1. Osmajic
2. Birligea
3. Bobcek
4. Ngonge
5. Fatah

Questi cinque fanno parte della nuova guida SOS.

## 8. Rimossi rispetto alla vecchia lista

La vecchia lista conteneva 88 giocatori.

Non compaiono più nella nuova guida SOS:

1. Albarracin
2. Buksa
3. Santiago Gimenez
4. Rafael Leao
5. Morata
6. Nkunku

In aggiunta, rispetto alla guida SOS delle 10:10, vanno rimossi LIVE:

7. Boulaye Dia
8. Nicolas Kühn

Quindi, rispetto alla vecchia app:

```text
88
- 8 rimossi effettivi
+ 5 nuovi
=
85
```

NON mostrare automaticamente un motivo nell'interfaccia per i sei giocatori semplicemente spariti dalla nuova guida.

Per Dia e Kühn invece è corretto considerarli fuori dal dataset perché hanno lasciato la Serie A.

## 9. Casi principali

### Donyell Malen

```text
Roma
SUPER TOP
si
```

Mantenere:
- 14 gol + 2 assist in 18 partite nella scorsa stagione;
- avvio 2026/27 eccezionale;
- rigorista insieme a Dybala;
- primo slot assoluto.

Tags:
```text
BONUS
RIGORISTA
SUPER TOP
TITOLARE
```

---

### Lautaro Martinez

```text
Inter
SUPER TOP
si
```

Mantenere:
- 17 gol;
- 6 assist;
- 30 presenze;
- leader Inter;
- NON primo rigorista.

---

### Marcus Thuram

```text
Inter
TOP
si
```

Mantenere:
- 13 gol;
- 6 assist;
- FM 7,95.

Lettura incrociata:
```text
quasi SUPER TOP
```

Altre guide lo collocano insieme ai migliori assoluti.

---

### Gonçalo Ramos

```text
Milan
TOP
si
```

Profilo:
```text
BONUS
RIGORISTA
TITOLARE
```

È il centravanti titolare Milan.

Rigori:
- candidato principale;
- 11/13 in carriera.

---

### Hojlund

```text
Napoli
TOP
si
```

Mantenere:
- 12 gol;
- 5 assist;
- titolare;
- rigori in gerarchia aperta con De Bruyne.

---

### Kolo Muani

Vecchia fascia:

```text
TOP
```

Nuova:

```text
SEMITOP
```

Squadra:
```text
Juventus
```

Stato:
```text
si
```

Gerarchia:
- centravanti voluto da Spalletti;
- riferimento offensivo.

Rigori:
- 6/6 in carriera;
- candidato forte a prima scelta Juventus.

Tags:
```text
BONUS
RIGORISTA
TITOLARE
VALUE
```

Lettura incrociata:
```text
SEMITOP ALTO / QUASI TOP
```

---

### Douvikas

```text
Como
SEMITOP
ballottaggio
```

IMPORTANTE:
non più titolare blindato.

Gerarchia:
```text
Douvikas ↔ Kean
```

Mantenere:
- 14 gol;
- Champions e Kean aumentano alternanza.

---

### Moise Kean

Aggiornare squadra:

```text
Fiorentina
→
Como
```

Fascia:
```text
SEMITOP
```

Stato:
```text
ballottaggio
```

Gerarchia:
```text
Kean ↔ Douvikas
```

NON mostrarlo come titolare fisso.

---

### Keinan Davis

```text
Udinese
SEMITOP
si
```

Mantenere:
- 10 gol;
- 4 assist;
- 4/4 rigori;
- titolare fisso.

Rischio:
```text
fisico
```

---

### Pio Esposito

Vecchia fascia:

```text
JOLLY 1ª FASCIA
```

Nuova:

```text
SOTTO AI SEMITOP
```

Squadra:
```text
Inter
```

Stato:
```text
ballottaggio
```

Gerarchia:
- terzo attaccante Inter;
- dietro Lautaro e Thuram;
- voto/minutaggio molto alto.

Mantenere:
- 31 presenze;
- 7 gol;
- 3 assist.

Tags:
```text
JOLLY PREMIUM
BONUS
VALUE
BIG
```

---

### Dybala

Vecchia fascia:

```text
FASCIA ALTA
```

Nuova:

```text
SOTTO AI SEMITOP
```

Squadra:
```text
Roma
```

Stato:
```text
ballottaggio
```

Rischio:
```text
ALTO PER INFORTUNI
```

Rigori:
- concorrenza Malen.

Mantenere:
- qualità da fascia più alta;
- 2 gol;
- 7 assist;
- 21 presenze.

Tags:
```text
BONUS
RIGORISTA
VALUE
RISCHIO FISICO
```

---

### Scamacca

```text
Atalanta
SOTTO AI SEMITOP
ballottaggio
```

Gerarchia:
```text
Scamacca ↔ Krstovic
```

Mantenere:
- 10 gol in 22;
- alta propensione bonus;
- forte rischio fisico;
- possibile rigorista.

---

### Krstovic

```text
Atalanta
SOTTO AI SEMITOP
ballottaggio
```

Mantenere:
- 10 gol;
- 5 assist;
- 32 presenze;
- più continuità fisica rispetto a Scamacca.

---

### Berardi

```text
Sassuolo
SOTTO AI SEMITOP
si
```

Mantenere:
- 8 gol;
- 4 assist;
- primo rigorista;
- rischio fisico.

---

### Pinamonti

Aggiornare squadra:

```text
Sassuolo
→
Lazio
```

Fascia:
```text
FASCIA ALTA
```

Stato:
```text
si
```

Mantenere:
- 9 gol;
- 3 assist;
- MV 5,88;
- 20/24 rigori in carriera.

Rigori:
```text
candidato insieme a Zaccagni/Taylor
```

NON impostarlo automaticamente come primo rigorista.

---

### Simeone

```text
Torino
FASCIA ALTA
si
```

Mantenere:
- 32 presenze;
- 11 gol;
- riferimento offensivo;
- VALUE.

---

### Dovbyk

Aggiornare squadra:

```text
Roma
→
Bologna
```

Fascia:
```text
FASCIA ALTA
```

Stato:
```text
si / favorito
```

Gerarchia:
```text
Dovbyk > Piccoli
```

Profilo:
```text
BONUS
RILANCIO
VALUE
```

Rigori:
- 27/32 in carriera;
- dietro Orsolini e forse Bernardeschi.

---

### Santiago Castro

Aggiornare squadra:

```text
Bologna
→
Roma
```

Fascia:
```text
JOLLY 1ª FASCIA
```

Stato:
```text
ballottaggio
```

Gerarchia:
- dietro Malen;
- può giocare con Malen;
- alta probabilità di voto grazie alle rotazioni.

---

### Bonny

Vecchia fascia:

```text
JOLLY 2ª FASCIA
```

Nuova:

```text
JOLLY 1ª FASCIA
```

Squadra:
```text
Inter
```

Stato:
```text
no / rotazione
```

Gerarchia:
```text
4° attaccante
```

---

### Akor Adams

```text
Venezia
POSSIBILI SORPRESE
si
```

Mantenere:
- 10 gol;
- 3 assist;
- 6/9 rigori in carriera;
- 3/3 ultima stagione.

Tags:
```text
VALUE
RIGORISTA
BONUS
TITOLARE
```

---

### Gustavo Varela

Vecchia fascia:

```text
LEGHE NUMEROSE
```

Nuova:

```text
POSSIBILI SORPRESE
```

Squadra:
```text
Monza
```

Stato:
```text
si
```

Mantenere:
- 6 gol;
- 3 assist nell'ultima stagione;
- ottimo inizio con due gol in due gare.

Lettura incrociata:
- SOS molto aggressiva;
- altre guide più prudenti.

---

### Lorenzo Colombo

Vecchia fascia:

```text
SOPRA AI LOW COST
```

Nuova:

```text
FASCIA MEDIA
```

Squadra:
```text
Genoa
```

Stato:
```text
si
```

Mantenere:
- 37 presenze a voto;
- 7 gol;
- 1 assist;
- candidato ad alcuni rigori.

Tags:
```text
VALUE
TITOLARE
BONUS
```

---

### Sebastiano Esposito

Grande aggiornamento.

Prima:

```text
MERCATO
Cagliari
```

Ora:

```text
FASCIA MEDIA
Sassuolo
```

Stato:
```text
si / favorito
```

Gerarchia:
- favorito come falso nove/centravanti;
- Bowie resta alternativa;
- può giocare anche esterno.

Mantenere:
- 7 gol;
- 4 assist;
- 22/23 rigori in carriera.

Rigori:
```text
vice Berardi
```

Tags:
```text
VALUE
BONUS
RIGORISTA
OFFENSIVO
```

---

### Yildiz

Vecchia fascia:

```text
SEMITOP
```

Nuova:

```text
INFORTUNATI
```

Squadra:
```text
Juventus
```

Stato:
```text
infortunato
```

Rientro:
```text
probabile fine novembre
```

MOLTO IMPORTANTE:
qui la fascia SOS è davvero `INFORTUNATI`.

Non mantenere SEMITOP nel campo `fascia`.

Nelle note si può scrivere che il valore assoluto sarebbe molto più alto una volta recuperato.

---

### Raimondo

Vecchia fascia:

```text
LOW COST 2ª FASCIA
```

Nuova:

```text
SCOMMESSE
```

Squadra:
```text
Frosinone
```

Stato:
```text
si / favorito
```

Gerarchia:
```text
Raimondo > Bobcek al momento
```

Mantenere:
- 11 gol in B;
- doppietta contro Fiorentina all'avvio.

Tags:
```text
SCOMMESSA
VALUE
BONUS
```

---

### Kvernadze

Vecchia fascia:

```text
LEGHE NUMEROSE
```

Nuova:

```text
SCOMMESSE
```

Squadra:
```text
Frosinone
```

Stato:
```text
si
```

Mantenere:
- 8 gol;
- 10 assist nelle ultime due stagioni;
- voto molto frequente.

---

### Piccoli

```text
Bologna
JOLLY 2ª FASCIA
ballottaggio
```

Gerarchia:
```text
Dovbyk > Piccoli
```

---

### Lucca

Vecchia fascia:

```text
JOLLY 1ª FASCIA
```

Nuova:

```text
JOLLY 2ª FASCIA
```

Squadra:
```text
Napoli
```

Stato:
```text
no / ballottaggio
```

Gerarchia:
```text
vice Hojlund
```

---

### Bowie

Vecchia fascia:

```text
LOW COST 2ª FASCIA
```

Nuova:

```text
LOW COST 1ª FASCIA
```

Squadra:
```text
Sassuolo
```

Stato:
```text
ballottaggio
```

Gerarchia:
- concorrenza Sebastiano Esposito;
- più spazio dopo partenza Pinamonti.

---

### Geubbels

```text
Lecce
LOW COST 1ª FASCIA
ballottaggio
```

Gerarchia:
```text
Geubbels ↔ Stulic
```

Rigori:
```text
7/7 in carriera
```

Tags:
```text
RIGORISTA
LOW COST
BONUS
VALUE
```

---

### John Yeboah

Vecchia fascia:

```text
LOW COST 2ª
```

Nuova:

```text
LOW COST 1ª
```

Squadra:
```text
Venezia
```

Stato:
```text
si
```

Mantenere:
- 10 gol;
- 10 assist.

---

### Bobcek

NUOVO RECORD.

```text
Frosinone
LOW COST 2ª FASCIA
ballottaggio
```

Mantenere:
- 20 gol;
- 6 assist;
- 30 presenze in Polonia;
- 5/6 rigori;
- investimento >10 milioni.

Gerarchia:
```text
inizialmente dietro Raimondo
```

Tags:
```text
LOW COST
RIGORISTA
BONUS
UPSIDE
```

---

### Ngonge

NUOVO RECORD.

```text
Monza
LOW COST 2ª FASCIA
si / favorito
```

Profilo:
```text
OFFENSIVO
LOW COST
RILANCIO
```

---

### Fatah

NUOVO RECORD.

```text
Lecce
LOW COST 2ª FASCIA
ballottaggio
```

Profilo:
- ala offensiva;
- 8 gol + 3 assist in Scozia;
- possibile titolare;
- ultimo slot.

---

### Albion Rrahmani

Vecchia fascia:

```text
LOW COST 2ª FASCIA
```

Nuova:

```text
LEGHE NUMEROSE
```

Squadra:
```text
Venezia
```

Stato:
```text
ballottaggio
```

---

### Osmajic

NUOVO RECORD.

```text
JOLLY 3ª FASCIA
```

Usare squadra/stato verificati nel source corrente.

Dati non noti:
```text
null
```

---

### Birligea

NUOVO RECORD.

```text
JOLLY 3ª FASCIA
```

Usare squadra/stato verificati nel source corrente.

Dati non noti:
```text
null
```

---

### Camarda

Vecchia fascia:

```text
JOLLY 4ª FASCIA
```

Nuova:

```text
JOLLY 3ª FASCIA
```

Squadra:
```text
Milan
```

Stato:
```text
no / rotazione
```

---

### Frigan

Vecchia fascia:

```text
JOLLY 4ª FASCIA
```

Nuova:

```text
JOLLY 3ª FASCIA
```

Squadra:
```text
Parma
```

Stato:
```text
ballottaggio
```

---

### N'Dri

Vecchia fascia:

```text
JOLLY 4ª FASCIA
```

Nuova:

```text
JOLLY 3ª FASCIA
```

Squadra:
```text
Lecce
```

Mantenere lettura:
- possibile titolarità da esterno;
- value rispetto alla fascia.

---

### Giovane

Vecchia fascia:

```text
JOLLY 2ª FASCIA
```

Nuova:

```text
JOLLY 3ª FASCIA
```

---

### Lontani

Vecchia fascia:

```text
DA EVITARE
```

Nuova:

```text
JOLLY 3ª FASCIA
```

---

### Ekhator

Vecchia fascia:

```text
JOLLY 3ª FASCIA
```

Nuova:

```text
JOLLY 4ª FASCIA
```

---

### Vakoun Bayo

Vecchia fascia:

```text
A RISCHIO
```

Nuova:

```text
JOLLY 4ª FASCIA
```

---

### Lauberbach

Vecchia fascia:

```text
A RISCHIO
```

Nuova:

```text
DA EVITARE
```

---

### Trepy

Vecchia fascia:

```text
A RISCHIO
```

Nuova:

```text
DA EVITARE
```

## 10. MERCATO operativo — 7

Devono essere:

```text
Soulé
Ratkov
Jonathan David
Ghedjemis
Mutandwa
Noa Lang
Robinio Vaz
```

### Soulé
```text
JOLLY 1ª → MERCATO
Roma
mercato
```

### Ratkov
```text
JOLLY 3ª → MERCATO
Lazio
mercato
```

### Jonathan David
```text
JOLLY 2ª → MERCATO
Juventus
mercato
```

### Ghedjemis
```text
LOW COST 1ª → MERCATO
Frosinone
mercato
```

### Mutandwa
```text
DA EVITARE → MERCATO
Cagliari
mercato
```

### Noa Lang
```text
Napoli
MERCATO
mercato
```

### Robinio Vaz
```text
JOLLY 3ª → MERCATO
Roma
mercato
```

NON aggiungere Dia: ha già lasciato la Serie A.

## 11. Uscite live dopo la guida SOS

### Boulaye Dia

Nella guida SOS delle 10:10 era:

```text
MERCATO
Lazio
```

Aggiornamento live:
```text
Lazio → Rennes
```

Il giocatore saluta la Serie A e il fantacalcio.

AZIONE:

```text
RIMUOVERE DAL DATASET
```

NON lasciarlo nella categoria Mercato.

---

### Nicolas Kühn

Nella guida SOS delle 10:10 era:

```text
Como
JOLLY 3ª FASCIA
```

Aggiornamento live:
```text
Como → Borussia Mönchengladbach
```

AZIONE:

```text
RIMUOVERE DAL DATASET
```

NON lasciarlo in Jolly 3ª.

## 12. Nuovi arrivi LIVE ancora da NON inserire

### Exequiel Zeballos

Stato reale:
```text
ufficiale Monza
```

Fantacalcio.it lo ha già recepito nelle quotazioni, ma nello snapshot utilizzato per questa V4 non è disponibile una conferma testuale esplicita del suo **ruolo Classic**.

È un esterno offensivo.

NON dedurre:

```text
ruolo = A
```

soltanto dal ruolo reale in campo.

AZIONE V4:

```text
NON AGGIUNGERE ANCORA
```

Appena una fonte ufficiale/listone mostra esplicitamente `A`, potrà entrare in una futura categoria `EXTRA AGGIORNAMENTI LIVE` senza inventare una fascia SOS.

---

### Jay Enem

Stato reale:
```text
ufficiale Bologna
```

Il Bologna lo definisce:
```text
centravanti
```

Ma al momento dello snapshot non compare ancora nel listone Fantacalcio verificato.

NON basta il ruolo reale per assegnare automaticamente il ruolo Classic.

AZIONE V4:

```text
NON AGGIUNGERE ANCORA
```

Quando sarà listato esplicitamente `A`, potrà essere aggiunto come Extra Live.

---

### Regola generale per gli arrivi delle ultime ore

NON aggiungere automaticamente:
- esterni offensivi;
- seconde punte;
- centravanti;
- trequartisti;

solo in base al ruolo calcistico.

Per entrare in `attaccanti.js` devono essere verificati come:

```text
ruolo Classic = A
```

## 13. Lettura incrociata / Value

Mantenere o assegnare tag `VALUE` dove coerente almeno a:

```text
Thuram
Kolo Muani
Kean
Pio Esposito
Dybala
Berardi
Pinamonti
Simeone
Dovbyk
Colombo
Sebastiano Esposito
Akor Adams
Varela
Raimondo
Geubbels
Yeboah
Bobcek
```

Non cambiare la fascia SOS per questo.

### Divergenze principali con altre guide

- Thuram: SOS TOP, altre guide quasi Super Top.
- Kolo Muani: SOS SEMITOP, altre guide prima fascia.
- Dybala: SOS SOTTO AI SEMITOP, altre guide prima fascia; rischio fisico decisivo.
- Dovbyk: SOS FASCIA ALTA, altre guide prima fascia.
- Scamacca: SOS SOTTO AI SEMITOP, altre guide più alte se sano.
- Yildiz: SOS INFORTUNATI; valore assoluto da fascia molto alta quando recuperato.
- Colombo: SOS FASCIA MEDIA; altre guide più aggressive.
- Sebastiano Esposito: SOS FASCIA MEDIA; situazione Sassuolo e rigori lo rendono Value.
- Varela: SOS POSSIBILI SORPRESE; altre guide più prudenti.

## 14. Rigori

Non trasformare candidature in certezze.

Gerarchie da rappresentare correttamente:

### Roma
```text
Malen / Dybala
```

### Milan
```text
Ramos candidato principale
```

### Napoli
```text
De Bruyne / Hojlund
gerarchia aperta
```

### Juventus
```text
Kolo Muani candidato forte
```

### Udinese
```text
Davis prima scelta
```

### Sassuolo
```text
Berardi prima scelta
Sebastiano Esposito vice molto affidabile
```

### Lazio
```text
Pinamonti candidato con Zaccagni/Taylor
```

### Lecce
```text
Geubbels candidato importante
```

### Venezia
```text
Akor Adams candidato
```

### Frosinone
```text
Bobcek può essere opzione quando gioca
```

Se la gerarchia non è certa:
```text
da verificare
```

## 15. Stati normalizzati

Usare:

```text
si
ballottaggio
no
infortunato
mercato
```

UI:

```text
si            → TITOLARE
ballottaggio  → BALLOTTAGGIO / ROTAZIONE
no            → RISERVA
infortunato   → INFORTUNATO
mercato       → MERCATO
```

FASCIA e STATO sono concetti separati.

## 16. Dati mancanti

NON inventare statistiche.

Se un dato non è disponibile:

```js
null
```

NON:

```js
0
```

`0` deve significare realmente zero.

## 17. ID

Per tutti i giocatori già presenti:

```text
MANTENERE GLI ID ESISTENTI
```

quando possibile.

NON cambiare ID perché cambia:
- fascia;
- squadra;
- stato;
- gerarchia.

Questo evita regressioni su:
- preferiti;
- localStorage;
- dettaglio;
- link interni.

Solo i 5 nuovi record SOS devono ricevere nuovi ID coerenti con la convenzione esistente.

## 18. Ricerca

Testare almeno:

```text
malen
→ SUPER TOP

thuram
→ TOP

kolo muani
→ SEMITOP

kean
→ Como
→ SEMITOP

pio esposito
→ SOTTO AI SEMITOP

dybala
→ SOTTO AI SEMITOP

pinamonti
→ Lazio
→ FASCIA ALTA

dovbyk
→ Bologna
→ FASCIA ALTA

seba esposito
→ Sassuolo
→ FASCIA MEDIA

yildiz
→ INFORTUNATI

raimondo
→ SCOMMESSE

bobcek
→ LOW COST 2ª FASCIA

dia
→ nessun risultato

kuhn
→ nessun risultato

leao
→ nessun risultato

nkunku
→ nessun risultato
```

## 19. Filtri

Usare ESATTAMENTE le 19 categorie operative della sezione 2.

Rimuovere dal filtro:

```text
SOPRA AI LOW COST
```

Aggiungere:

```text
INFORTUNATI
```

Il filtro `Tutti` deve mostrare:

```text
85 attaccanti
```

## 20. Validazione

```js
const expectedCount = 85;

if (attaccanti.length !== expectedCount) {
  console.error(
    `Dataset Attaccanti V4 incompleto: ${attaccanti.length}/${expectedCount}`
  );
}

const expectedCategoryCounts = {
  "SUPER TOP": 2,
  "TOP": 3,
  "SEMITOP": 4,
  "SOTTO AI SEMITOP": 5,
  "FASCIA ALTA": 4,
  "JOLLY 1ª FASCIA": 5,
  "POSSIBILI SORPRESE": 2,
  "FASCIA MEDIA": 6,
  "INFORTUNATI": 1,
  "SCOMMESSE": 4,
  "JOLLY 2ª FASCIA": 2,
  "LOW COST 1ª FASCIA": 8,
  "LOW COST 2ª FASCIA": 6,
  "LEGHE NUMEROSE": 4,
  "JOLLY 3ª FASCIA": 12,
  "JOLLY 4ª FASCIA": 3,
  "A RISCHIO": 3,
  "DA EVITARE": 4,
  "MERCATO": 7
};

const ids = attaccanti.map((p) => p.id);

if (new Set(ids).size !== ids.length) {
  console.error("ID duplicati nel dataset Attaccanti V4");
}
```

## 21. Controllo presenze

Devono essere PRESENTI:

```text
Malen
Lautaro
Thuram
Ramos
Hojlund
Kolo Muani
Douvikas
Kean
Davis
Scamacca
Pio Esposito
Krstovic
Dybala
Berardi
Pinamonti
Simeone
Alisson Santos
Dovbyk
Castro
Pellegrino
Bonny
Boga
Neres
Akor Adams
Varela
Colombo
Sebastiano Esposito
Yildiz
Raimondo
Kvernadze
Bobcek
Ngonge
Fatah
Osmajic
Birligea
```

Devono essere ASSENTI:

```text
Albarracin
Buksa
Santiago Gimenez
Rafael Leao
Morata
Nkunku
Boulaye Dia
Nicolas Kühn
```

Devono restare PENDING e NON nel dataset:

```text
Exequiel Zeballos
Jay Enem
```

## 22. NON modificare Strategie Attaccanti

MOLTO IMPORTANTE.

NON modificare:

```text
/strategie/attaccanti
data/strategieAttaccanti.js
```

anche se contiene:
- vecchie fasce;
- Leao;
- Dia;
- Kühn;
- vecchi esempi;
- vecchie gerarchie;
- vecchi budget.

Le strategie verranno aggiornate separatamente.

## 23. UI

NON fare redesign.

Mantenere:
- header;
- tabella;
- card mobile;
- ricerca;
- filtri;
- preferiti;
- dettaglio;
- responsive;
- Navbar.

Questa fase deve essere un aggiornamento dati.

## 24. Preferiti

Se gli ID dei giocatori rimossi sono ancora nel localStorage:

```text
l'app NON deve crashare
```

Ignorare in modo sicuro preferiti che non trovano più un record nel dataset.

## 25. Definition of Done

L'aggiornamento V4 è completo quando:

- `attaccanti.length === 85`;
- le 19 categorie operative hanno i conteggi esatti;
- SOPRA AI LOW COST non esiste più;
- INFORTUNATI esiste;
- Malen e Lautaro sono Super Top;
- Top = Ramos, Thuram, Hojlund;
- Kolo Muani è Semitop;
- Kean è Como e ballottaggio;
- Douvikas è ballottaggio;
- Pio Esposito è Sotto ai Semitop;
- Dybala è Sotto ai Semitop;
- Pinamonti è Lazio;
- Dovbyk è Bologna;
- Castro è Roma;
- Varela è Possibile Sorpresa;
- Colombo è Fascia Media;
- Sebastiano Esposito è Sassuolo e Fascia Media;
- Yildiz è Infortunati;
- Raimondo è Scommesse;
- Kvernadze è Scommesse;
- Bonny è Jolly 1ª;
- Lucca è Jolly 2ª;
- Bowie è Low Cost 1ª;
- Yeboah è Low Cost 1ª;
- Bobcek, Ngonge e Fatah sono presenti;
- Osmajic e Birligea sono presenti;
- Dia è assente;
- Kühn è assente;
- Leao è assente;
- Nkunku è assente;
- Zeballos non viene aggiunto senza conferma del ruolo Classic A;
- Enem non viene aggiunto senza conferma del ruolo Classic A;
- dati mancanti = null;
- ricerca funziona;
- filtri funzionano;
- preferiti non crashano;
- dettaglio funziona;
- responsive funziona;
- Strategie Attaccanti NON modificata;
- altri ruoli NON modificati;
- `npm run build` termina senza errori.
