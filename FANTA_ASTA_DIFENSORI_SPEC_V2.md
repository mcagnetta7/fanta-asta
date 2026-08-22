
# 0. REQUISITO BLOCCANTE — COMPLETEZZA DELLA TABELLA DIFENSORI

La pagina `/difensori` deve contenere **TUTTI i 176 difensori elencati in questa specifica**, senza eccezioni.

NON devono essere mostrati soltanto:
- Super Top
- Top
- Semitop
- Fascia Alta
- Fascia Media
- Low Cost principali

Devono comparire nella tabella principale ANCHE:
- Jolly 1ª Fascia
- Possibili Sorprese
- Infortunati
- Scommesse
- Sopra ai Low Cost
- Jolly 2ª Fascia
- Low Cost 1ª Fascia
- Low Cost 2ª Fascia
- Leghe Numerose
- Jolly 3ª Fascia
- Jolly 4ª Fascia
- A Rischio
- Da Evitare
- Mercato

La tabella deve quindi poter essere filtrata fino alle fasce più basse, ma il filtro `Tutti` deve restituire **176 record**.

## Conteggio obbligatorio per fascia

| Fascia | Numero giocatori |
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
| LEGHE NUMEROSE | 18 |
| JOLLY 3ª FASCIA | 17 |
| JOLLY 4ª FASCIA | 18 |
| A RISCHIO | 12 |
| DA EVITARE | 19 |
| MERCATO | 7 |
| **TOTALE** | **176** |

## Elenco di controllo completo

### SUPER TOP (1)
Dimarco

### TOP (6)
Wesley, Spence, Bremer, Bastoni, Pavlovic, Solet

### SEMITOP (6)
Akanji, Stones, Molina N., Di Lorenzo, Gila, Rrahmani

### SOTTO AI SEMITOP (5)
Mancini, Kalulu, Cambiaso, Zappacosta, Spinazzola

### FASCIA ALTA (4)
N'Dicka, Lucumì, Bisseck, Ramon

### JOLLY 1ª FASCIA (2)
Carlos Augusto, Celik

### POSSIBILI SORPRESE (6)
Chalobah T., Koulierakis, Vojvoda, Kaiki, Obrador, Mitaj

### FASCIA MEDIA (9)
Ostigard, Kristensen T., Hermoso, Bartesaghi, Delprato, Miranda J., Valle, Kempf, Bernasconi

### INFORTUNATI (2)
Buongiorno, Parisi

### SCOMMESSE (5)
Couto, Jimenez A., Viery, Ahanor, Valdepenas

### SOPRA AI LOW COST (10)
Vasquez, Dragusin, Valeri, Gabbia, Scalvini, Hien, Mina, Norton-Cuffy, Tiago Gabriel, Pedraza

### JOLLY 2ª FASCIA (5)
Bellanova, Joao Mario, Beukema, Holm, Rensch

### LOW COST 1ª FASCIA (11)
Zortea, Kelly L., Gatti, Doekhi, Idzes, Bella-Kotchap, Comuzzo, Gallo, Gaspar K., Pedersen, Troilo

### LOW COST 2ª FASCIA (13)
Coco, Ismajli, Heggem, Kamara H., Mangas, Kolasinac, Oyono A., Veiga D., Vitik, Comert, Kabasele, Walukiewicz, Favasuli

### LEGHE NUMEROSE (18)
Obert, Marcandalli, Marusic, Monterisi, Bracaglia, Haps, Moreno M., Zè Pedro, Correia T., Halhal, Siebert, Smolcic I., Carboni A., Hainaut, Kossounou, Rodriguez Ju., Pellegrini Lu., Terzic

### JOLLY 3ª FASCIA (17)
Pavard, Olivera, Bertola, Doig, Ghilardi, Valenti, Zanoli, De Winter, Idrissi R., Provstgaard, Ranieri L., Biraghi, Helland, Puczka, Van Der Brempt, Cabal, Ziolkowski

### JOLLY 4ª FASCIA (18)
Kofler, Arizala, Birindelli, Zappa, Britschgi, Casale, Alhassane, Ebosse, Lazzari, Otoa, Palma, Sabelli, Carboni F., De Silvestri, Mazzocchi, Mlacic, Ndiaye, Oyono J.

### A RISCHIO (12)
Calvani, Pongracic, Akpoguma, Candè, Cittadini, Diawara S., Marin R., Corrado, Marianucci, Missori, Ndaba, Rugani

### DA EVITARE (19)
Delli Carri, Lucchesi, Kouadio, Schingtienne, Sverko, Aurelio, Franjic, Jean, Sagrado, Abankwah, Amey, Antov, Bakoune, Gelli J., Goldaniga, Gomes, Matturro, Patric, Pieragnolo

### MERCATO (7)
Dodò, Romagnoli, Tavares N., Tomori, Martin, Estupinan, Floriani Mussolini

## Validazione obbligatoria

Prima di considerare completata la sezione, verificare programmaticamente che:

```js
difensori.length === 176
```

Se il numero è diverso da 176, la sezione NON è completa.

Ogni record deve avere almeno:
- `id`
- `nome`
- `squadra`
- `fascia`
- `titolare`
- `gerarchia`
- `strategia`

Quando i dati statistici dettagliati non sono disponibili, usare `null` o `—`, ma **non eliminare il giocatore dal dataset**.

---

# Fanta Asta 2026/27 — Specifica completa Difensori

## 1. Obiettivo

Questa sezione dell'app deve funzionare come **guida interattiva personale per l'asta del fantacalcio 2026/27**, dedicata ai **DIFENSORI**.

La sezione deve mantenere la stessa filosofia già adottata per i Portieri:
- consultazione rapida;
- dati organizzati per fascia;
- ricerca e filtri;
- titolarità e gerarchie;
- statistiche principali;
- strategia individuale per ogni giocatore;
- strategie generali di costruzione del reparto;
- nessuna gestione asta live;
- nessun backend/database/login/API.

Il file va considerato **source of truth** per la fase Difensori.

---

# 2. Regole generali di visualizzazione

Ogni difensore deve avere almeno:

- nome;
- squadra;
- fascia;
- titolarità;
- gerarchia;
- dati ultima stagione quando disponibili;
- nota sintetica;
- strategia asta;
- flag utili:
  - modificatore;
  - bonus;
  - titolarità;
  - rischio;
  - scommessa;
  - infortunato;
  - mercato.

Legenda titolarità:

- `si` = titolare / prima scelta
- `ballottaggio` = favorito o in concorrenza reale
- `no` = riserva / rotazione
- `infortunato` = indisponibile con rientro futuro
- `mercato` = situazione non stabilizzata

---

# 3. Fasce

Ordine consigliato:

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
11. SOPRA AI LOW COST
12. JOLLY 2ª FASCIA
13. LOW COST 1ª FASCIA
14. LOW COST 2ª FASCIA
15. LEGHE NUMEROSE
16. JOLLY 3ª FASCIA
17. JOLLY 4ª FASCIA
18. A RISCHIO
19. DA EVITARE
20. MERCATO

---

# 4. DATASET DIFENSORI

## SUPER TOP

### Federico Dimarco
- Squadra: Inter
- Fascia: SUPER TOP
- Titolare: sì
- Gerarchia: titolare indiscusso a sinistra
- Dati ultima stagione: 7 gol, 17 assist
- Profilo: esterno offensivo, specialista sui piazzati
- Modificatore: 5/5
- Bonus: 5/5
- Titolarità: 5/5
- Rischio: basso
- Strategia asta: 1° slot assoluto; premium; da pagare molto ma senza perdere equilibrio negli altri reparti
- Nota: è il difensore con il potenziale offensivo più alto del listone

---

## TOP

### Wesley
- Squadra: Roma
- Fascia: TOP
- Titolare: sì
- Gerarchia: titolare a sinistra nel sistema di Gasperini
- Dati: 5 gol in 30 presenze; fantamedia 6,47
- Modificatore: 4/5
- Bonus: 5/5
- Titolarità: 5/5
- Rischio: basso
- Strategia asta: 1° slot; esterno molto offensivo; ideale in leghe bonus-oriented

### Djed Spence
- Squadra: Inter
- Fascia: TOP
- Titolare: sì
- Gerarchia: titolare/favorito a destra
- Dati: pochi bonus nelle stagioni precedenti
- Modificatore: 5/5
- Bonus: 3/5
- Titolarità: 5/5
- Rischio: basso
- Strategia asta: 1°/2° slot alto; più utile per voto e modificatore che per bonus

### Gleison Bremer
- Squadra: Juventus
- Fascia: TOP
- Titolare: sì
- Gerarchia: pilastro centrale
- Dati: 4 gol, 3 assist; fantamedia 6,81
- Modificatore: 5/5
- Bonus: 5/5
- Titolarità: 5/5
- Rischio: medio per storico infortuni
- Strategia asta: 1° slot; centrale premium da modificatore e piazzati

### Alessandro Bastoni
- Squadra: Inter
- Fascia: TOP
- Titolare: sì
- Gerarchia: titolare braccetto sinistro
- Dati: 1 gol, 4 assist in 28 presenze
- Modificatore: 5/5
- Bonus: 4/5
- Titolarità: 5/5
- Rischio: basso
- Strategia asta: 1°/2° slot; continuità, voto e assist

### Strahinja Pavlovic
- Squadra: Milan
- Fascia: TOP
- Titolare: sì
- Gerarchia: titolare nella difesa a 3
- Dati: 5 gol in 34 presenze; fantamedia 6,62
- Modificatore: 4/5
- Bonus: 5/5
- Titolarità: 5/5
- Rischio: basso/medio
- Strategia asta: 1°/2° slot; centrale goleador e forte sui piazzati

### Oumar Solet
- Squadra: Udinese
- Fascia: TOP
- Titolare: sì
- Gerarchia: leader della difesa
- Dati: 3 gol, 1 assist
- Modificatore: 5/5
- Bonus: 4/5
- Titolarità: 5/5
- Rischio: basso
- Strategia asta: 1°/2° slot; ottimo modificatore con bonus

---

## SEMITOP

### Manuel Akanji
- Squadra: Inter
- Titolare: sì
- Gerarchia: titolare a destra / adattabile al centro
- Dati: 32 presenze, 2 gol, fantamedia 6,41
- Modificatore: 5/5
- Bonus: 3/5
- Titolarità: 5/5
- Rischio: basso
- Strategia asta: 2° slot alto; eccellente per modificatore

### John Stones
- Squadra: Inter
- Titolare: ballottaggio
- Gerarchia: favorito al centro ma con gestione e rotazioni
- Dati: 9 presenze in Premier nell'ultima stagione
- Modificatore: 5/5
- Bonus: 2/5
- Titolarità: 3/5
- Rischio: medio-alto per gestione fisica
- Strategia asta: 2° slot se il prezzo resta controllato; evitare sovrapprezzo

### Nahuel Molina
- Squadra: Roma
- Titolare: sì
- Gerarchia: titolare sulla corsia destra
- Dati: 2 gol, 2 assist in 26 presenze Liga
- Modificatore: 4/5
- Bonus: 5/5
- Titolarità: 5/5
- Rischio: basso
- Strategia asta: 2° slot alto; esterno offensivo ideale nel sistema Gasperini

### Giovanni Di Lorenzo
- Squadra: Napoli
- Titolare: sì
- Gerarchia: capitano e titolare
- Dati: 2 gol, 1 assist in 26; fantamedia 6,33
- Modificatore: 5/5
- Bonus: 4/5
- Titolarità: 5/5
- Rischio: basso
- Strategia asta: 2° slot; sicurezza e continuità

### Mario Gila
- Squadra: Milan
- Titolare: sì
- Gerarchia: titolare/braccetto destro
- Dati: 31 titolarità; fantamedia 5,95; pochi bonus
- Modificatore: 4/5
- Bonus: 2/5
- Titolarità: 5/5
- Rischio: basso
- Strategia asta: 2°/3° slot; soprattutto modificatore

### Amir Rrahmani
- Squadra: Napoli
- Titolare: sì
- Gerarchia: leader centrale
- Dati: 2 gol in 21; fantamedia 6,48
- Modificatore: 5/5
- Bonus: 4/5
- Titolarità: 5/5
- Rischio: medio per precedenti problemi muscolari
- Strategia asta: 2° slot; molto forte con modificatore

---

## SOTTO AI SEMITOP

### Gianluca Mancini
- Squadra: Roma
- Titolare: sì
- Gerarchia: titolare indiscusso
- Dati: 4 gol, 2 assist; fantamedia 6,51
- Modificatore: 5/5
- Bonus: 5/5
- Titolarità: 5/5
- Rischio: medio per cartellini
- Strategia asta: 2° slot alto; possibile value se gli altri seguono fasce più basse

### Pierre Kalulu
- Squadra: Juventus
- Titolare: sì
- Gerarchia: titolare a destra / jolly difensivo
- Dati: 37 presenze, 2 gol, 4 assist; FM 6,36
- Modificatore: 5/5
- Bonus: 4/5
- Titolarità: 5/5
- Rischio: basso
- Strategia asta: 2°/3° slot

### Andrea Cambiaso
- Squadra: Juventus
- Titolare: sì
- Gerarchia: titolare a sinistra
- Dati: 3 gol, 4 assist in 36
- Modificatore: 3/5
- Bonus: 5/5
- Titolarità: 5/5
- Rischio: medio
- Strategia asta: 2°/3° slot offensivo; più bonus che voto

### Davide Zappacosta
- Squadra: Atalanta
- Titolare: ballottaggio
- Gerarchia: favorito su Bellanova
- Dati: 3 gol, 1 assist in 35
- Modificatore: 4/5
- Bonus: 5/5
- Titolarità: 3/5
- Rischio: medio
- Strategia asta: 3° slot; bonus interessanti ma prezzo controllato

### Leonardo Spinazzola
- Squadra: Napoli
- Titolare: sì
- Gerarchia: favorito su Olivera
- Dati: 3 gol, 3 assist in 30; FM 6,55
- Modificatore: 4/5
- Bonus: 5/5
- Titolarità: 4/5
- Rischio: medio per gestione fisica
- Strategia asta: 2°/3° slot; ottimo rapporto bonus/prezzo

---

## FASCIA ALTA

### Evan N'Dicka
- Squadra: Roma
- Titolare: sì
- Gerarchia: punto fermo
- Dati: 3 gol in 31; FM 6,32
- Modificatore: 5/5
- Bonus: 4/5
- Titolarità: 5/5
- Strategia asta: 3° slot; affidabile

### Jhon Lucumì
- Squadra: Juventus
- Titolare: sì
- Gerarchia: favorito su Kelly
- Dati: 1 gol in 28
- Modificatore: 4/5
- Bonus: 3/5
- Titolarità: 4/5
- Strategia asta: 3° slot; più voto che bonus

### Yann Bisseck
- Squadra: Inter
- Titolare: no/ballottaggio
- Gerarchia: dietro Stones ma con alto minutaggio
- Dati: 3 gol, 2 assist in 23; FM 6,65
- Modificatore: 5/5
- Bonus: 5/5
- Titolarità: 3/5
- Rischio: medio
- Strategia asta: 3° slot ad alto upside; forte se svalutato dalla non titolarità

### Jacobo Ramon
- Squadra: Como
- Titolare: sì
- Gerarchia: titolare centrale
- Dati: 2 gol; 11 gialli e 1 rosso
- Modificatore: 4/5
- Bonus: 4/5
- Titolarità: 5/5
- Rischio: medio per cartellini
- Strategia asta: 3° slot

---

## JOLLY 1ª FASCIA

### Carlos Augusto
- Squadra: Inter
- Titolare: no
- Gerarchia: alternativa a Dimarco / Bastoni
- Dati: 1 gol, 1 assist
- Strategia asta: jolly di qualità; non strapagare

### Zeki Celik
- Squadra: Juventus
- Titolare: no
- Gerarchia: alternativa a Kalulu
- Strategia asta: ultimi slot / leghe numerose

---

## POSSIBILI SORPRESE

### Trevoh Chalobah
- Squadra: Como
- Titolare: sì
- Gerarchia: titolare centrale
- Dati: 3 gol in Premier
- Strategia asta: 3°/4° slot; possibile value importante

### Konstantinos Koulierakis
- Squadra: Roma
- Titolare: ballottaggio
- Gerarchia: testa a testa con Hermoso
- Profilo: centrale mancino, forte di testa
- Strategia asta: scommessa intrigante; non pagarlo da titolare certo

### Mergim Vojvoda
- Squadra: Udinese
- Titolare: sì/ballottaggio
- Gerarchia: favorito finché Zanoli recupera
- Dati: 2 gol, 1 assist
- Strategia asta: esterno offensivo low-medium cost

### Kaiki Bruno
- Squadra: Como
- Titolare: ballottaggio
- Gerarchia: contende il posto ad Alex Valle
- Dati: 5 assist nel 2025 + 4 assist nella prima parte dell'anno successivo in Brasile
- Strategia asta: scommessa da bonus; interessante anche in coppia con Valle

### Rafa Obrador
- Squadra: Sassuolo
- Titolare: sì/ballottaggio
- Gerarchia: favorito su Doig
- Dati: 1 gol, 3 assist in 16 presenze al Torino
- Strategia asta: low cost da bonus molto interessante

### Mario Mitaj
- Squadra: Genoa
- Titolare: sì
- Gerarchia: favorito a sinistra
- Dati: 1 gol, 2 assist nell'ultima stagione in Arabia
- Strategia asta: sorpresa da voto + potenziali piazzati

---

## FASCIA MEDIA

### Leo Ostigard
- Squadra: Genoa
- Titolare: sì
- Gerarchia: leader centrale
- Dati: 5 gol
- Modificatore: 4/5
- Bonus: 5/5
- Strategia asta: 3°/4° slot; centrale provinciale molto interessante

### Thomas Kristensen
- Squadra: Atalanta
- Titolare: sì
- Gerarchia: favorito accanto a Scalvini
- Dati: 3 gol
- Modificatore: 4/5
- Bonus: 4/5
- Strategia asta: 3°/4° slot

### Mario Hermoso
- Squadra: Roma
- Titolare: ballottaggio
- Gerarchia: Koulierakis lo insidia
- Dati: 3 gol, 2 assist; FM 6,41
- Rischio: medio
- Strategia asta: buono solo a prezzo corretto

### Davide Bartesaghi
- Squadra: Milan
- Titolare: no/ballottaggio
- Gerarchia: Moreira attualmente davanti
- Dati: 2 gol
- Strategia asta: declassato rispetto alle aspettative iniziali; solo se cala molto

### Enrico Delprato
- Squadra: Parma
- Titolare: sì
- Gerarchia: capitano e titolare
- Dati: 35 presenze, 2 gol
- Strategia asta: 4° slot affidabile

### Juan Miranda
- Squadra: Bologna
- Titolare: sì
- Gerarchia: favorito su Alhassane
- Dati: 1 gol, 3 assist in 31
- Strategia asta: 4° slot affidabile

### Alex Valle
- Squadra: Como
- Titolare: ballottaggio
- Gerarchia: favorito di poco su Kaiki
- Dati: 1 gol, 3 assist in 26
- Strategia asta: potenziale bonus ma senza sovrapprezzo

### Marc-Oliver Kempf
- Squadra: Como
- Titolare: no/ballottaggio
- Gerarchia: Chalobah davanti
- Dati: 4 gol, 1 assist
- Strategia asta: ottimo se fortemente svalutato

### Lorenzo Bernasconi
- Squadra: Atalanta
- Titolare: ballottaggio
- Gerarchia: testa a testa con Ahanor
- Dati: 3 assist in 22
- Strategia asta: interessante per spinta, solo a prezzo controllato

---

## INFORTUNATI

### Alessandro Buongiorno
- Squadra: Napoli
- Stato: infortunato
- Infortunio: menisco
- Rientro indicativo: novembre
- Titolarità futura: alta
- Strategia asta: scommessa da saldo; potenziale big nella seconda parte

### Fabiano Parisi
- Squadra: Fiorentina
- Stato: infortunato
- Infortunio: crociato
- Rientro indicativo: novembre-dicembre
- Strategia asta: più da asta di riparazione che da asta iniziale

---

## SCOMMESSE

### Yan Couto
- Squadra: Como
- Titolare: sì/ballottaggio
- Gerarchia: favorito a destra
- Dati: 27 presenze, 3 gol, 3 assist in tutte le competizioni
- Strategia asta: una delle scommesse più interessanti per bonus

### Alex Jimenez
- Squadra: Fiorentina
- Titolare: sì/ballottaggio
- Gerarchia: favorito a destra
- Dati: 26 titolarità in Premier, 1 gol
- Strategia asta: upside offensivo alto

### Viery
- Squadra: Fiorentina
- Titolare: sì/ballottaggio
- Gerarchia: parte avanti al centro
- Profilo: giovane centrale/regista difensivo
- Strategia asta: 4°/5° slot scommessa

### Honest Ahanor
- Squadra: Atalanta
- Titolare: ballottaggio
- Gerarchia: con Bernasconi
- Strategia asta: upside alto a pochi crediti

### Victor Valdepenas
- Squadra: Fiorentina
- Titolare: sì/ballottaggio
- Gerarchia: favorito a sinistra
- Dati: 30 presenze, 2 gol, 1 assist con Real Madrid Castilla
- Strategia asta: giovane ad alto upside

---

## SOPRA AI LOW COST

### Johan Vasquez
- Squadra: Genoa
- Titolare: sì
- Dati: 36 presenze, 1 gol, FM 6,14
- Strategia asta: 4° slot affidabile e da modificatore

### Radu Dragusin
- Squadra: Fiorentina
- Titolare: sì
- Gerarchia: titolare centrale
- Strategia asta: titolarità + pericolosità aerea

### Emanuele Valeri
- Squadra: Parma
- Titolare: sì
- Dati: 34 presenze, 2 assist, FM 6,09
- Bonus extra: piazzati/rigori possibili
- Strategia asta: uno dei migliori low cost

### Matteo Gabbia
- Squadra: Milan
- Titolare: sì
- Dati: 29 presenze, FM 5,84
- Strategia asta: titolare di una big a prezzo contenuto

### Giorgio Scalvini
- Squadra: Atalanta
- Titolare: sì
- Dati: 24 presenze, 3 gol, 1 assist, FM 6,44
- Modificatore: 5/5
- Strategia asta: grandissimo value per modificatore

### Isak Hien
- Squadra: Atalanta
- Titolare: no/infortunato
- Rientro: ottobre inoltrato
- Strategia asta: investimento di lungo periodo a pochi crediti

### Yerry Mina
- Squadra: Cagliari
- Titolare: sì/ballottaggio
- Dati: 28 presenze, 2 gol, 1 assist, FM 6,17
- Extra: possibile rigorista occasionale
- Strategia asta: modificatore + upside rigori

### Norton-Cuffy
- Squadra: Genoa
- Titolare: sì
- Dati: 2 gol; FM 6,10
- Strategia asta: uno dei terzini provinciali più interessanti

### Tiago Gabriel
- Squadra: Lecce
- Titolare: sì
- Dati: 36 presenze, 2 gol, FM 6,01
- Strategia asta: low cost affidabile

### Alfonso Pedraza
- Squadra: Lazio
- Titolare: sì/ballottaggio
- Gerarchia: favorito a sinistra
- Strategia asta: 4°/5° slot con buon rapporto qualità/prezzo

---

## JOLLY 2ª FASCIA

### Raoul Bellanova
- Squadra: Atalanta
- Titolare: ballottaggio
- Gerarchia: dietro/alla pari con Zappacosta
- Strategia asta: jolly offensivo; coppia con Zappacosta possibile ma non obbligatoria

### Joao Mario
- Squadra: Fiorentina
- Titolare: no/ballottaggio
- Gerarchia: dietro Jimenez
- Strategia asta: jolly offensivo a pochi crediti

### Sam Beukema
- Squadra: Napoli
- Titolare: sì/ballottaggio
- Gerarchia: favorito finché Buongiorno è fuori
- Strategia asta: jolly iniziale interessante

### Emil Holm
- Squadra: Bologna
- Titolare: ballottaggio
- Gerarchia: dietro Zortea
- Strategia asta: bonus potenziale, titolarità incerta

### Devyne Rensch
- Squadra: Roma
- Titolare: no
- Gerarchia: vice Molina
- Strategia asta: jolly offensivo con minutaggio da coppe

---

## LOW COST 1ª FASCIA

### Nadir Zortea
- Squadra: Bologna
- Titolare: sì/ballottaggio
- Gerarchia: favorito su Holm
- Strategia asta: low cost offensivo

### Lloyd Kelly
- Squadra: Juventus
- Titolare: no
- Gerarchia: dietro Lucumì
- Strategia asta: riserva di una big a pochi crediti

### Federico Gatti
- Squadra: Juventus
- Titolare: no
- Gerarchia: dietro Bremer/Lucumì
- Strategia asta: jolly; non pagarlo da titolare

### Danilho Doekhi
- Squadra: Lazio
- Titolare: sì
- Dati: 5 gol in Bundesliga
- Strategia asta: uno dei low cost più intriganti per titolarità + piazzati

### Jay Idzes
- Squadra: Sassuolo
- Titolare: sì
- Strategia asta: voto sicuro a prezzo basso

### Armel Bella-Kotchap
- Squadra: Venezia
- Titolare: sì
- Strategia asta: 6°/7° slot da titolarità

### Pietro Comuzzo
- Squadra: Torino
- Titolare: sì
- Strategia asta: 4°/5° slot interessante

### Antonino Gallo
- Squadra: Lecce
- Titolare: sì
- Dati: 37 presenze, 3 assist
- Strategia asta: garanzia di minutaggio

### Kialonda Gaspar
- Squadra: Lecce
- Titolare: sì/ballottaggio
- Gerarchia: favorito su Siebert
- Strategia asta: low cost fisico

### Marcus Pedersen
- Squadra: Torino
- Titolare: sì
- Dati: 1 gol, 2 assist in 28
- Strategia asta: possibile sorpresa offensiva

### Mariano Troilo
- Squadra: Parma
- Titolare: sì/ballottaggio
- Gerarchia: favorito
- Strategia asta: low cost con rischio cartellini

---

## LOW COST 2ª FASCIA

### Saul Coco
- Squadra: Torino
- Titolare: sì
- Strategia asta: titolarità low cost

### Ardian Ismajli
- Squadra: Torino
- Titolare: no/ballottaggio
- Gerarchia: dietro Comuzzo/Coco/Comert
- Strategia asta: rotazione, non prioritario

### Torbjørn Heggem
- Squadra: Bologna
- Titolare: sì
- Strategia asta: 1-3 crediti per voto abbastanza sicuro

### Hassane Kamara
- Squadra: Udinese
- Titolare: sì
- Posizione: esterno sinistro alto
- Strategia asta: interessante perché gioca avanzato

### Ricardo Mangas
- Squadra: Monza
- Titolare: sì
- Profilo: esterno con discreta propensione al gol
- Strategia asta: 5°/6° slot

### Sead Kolasinac
- Squadra: Atalanta
- Titolare: no/ballottaggio
- Strategia asta: jolly di esperienza

### Antony Oyono
- Squadra: Frosinone
- Titolare: sì
- Dati: 1 gol, 4 assist in 34
- Strategia asta: low cost offensivo

### Danilo Veiga
- Squadra: Lecce
- Titolare: sì
- Dati: 36 presenze
- Strategia asta: voto quasi sicuro, bonus da migliorare

### Martin Vitik
- Squadra: Bologna
- Titolare: sì
- Strategia asta: ultimo slot affidabile

### Eray Comert
- Squadra: Torino
- Titolare: sì/ballottaggio
- Strategia asta: possibile value da pochi crediti

### Christian Kabasele
- Squadra: Udinese
- Titolare: ballottaggio
- Dati: 3 gol
- Strategia asta: bonus potenziale ma non blindato

### Sebastian Walukiewicz
- Squadra: Sassuolo
- Titolare: ballottaggio
- Strategia asta: duttilità = molti voti

### Costantino Favasuli
- Squadra: Napoli
- Titolare: no
- Gerarchia: vice Di Lorenzo
- Strategia asta: solo come copertura

---

## LEGHE NUMEROSE

| Giocatore | Squadra | Titolarità | Strategia |
|---|---|---|---|
| Obert | Cagliari | sì | titolare economico |
| Marcandalli | Genoa | sì | ultimo slot utile |
| Marusic | Lazio | sì | titolarità interessante |
| Monterisi | Frosinone | sì/ballottaggio | ultimi slot |
| Bracaglia | Frosinone | no/ballottaggio | copertura |
| Haps | Venezia | ballottaggio | esterno offensivo |
| Moreno M. | Venezia | ballottaggio | minutaggio probabile |
| Zè Pedro | Cagliari | sì/ballottaggio | low cost da voto |
| Correia T. | Venezia | ballottaggio | favorito a destra |
| Halhal | Venezia | ballottaggio | scommessa |
| Siebert | Lecce | no | dietro Gaspar |
| Smolcic I. | Como | no | dietro Couto |
| Carboni A. | Monza | sì/ballottaggio | possibile titolare |
| Hainaut | Venezia | ballottaggio | rotazione |
| Kossounou | Atalanta | no | prima alternativa ai centrali |
| Rodriguez Ju. | Cagliari | sì | titolare low cost |
| Pellegrini Lu. | Lazio | ballottaggio | insegue Pedraza |
| Terzic | Frosinone | sì/ballottaggio | favorito a sinistra |

---

## JOLLY 3ª FASCIA

| Giocatore | Squadra | Titolarità | Strategia |
|---|---|---|---|
| Pavard | Inter | no | copertura Akanji |
| Olivera | Napoli | no/ballottaggio | rotazione Spinazzola |
| Bertola | Udinese | ballottaggio | può giocare molto |
| Doig | Sassuolo | no | dietro Obrador |
| Ghilardi | Roma | no | vice Mancini |
| Valenti | Parma | sì | titolare economico |
| Zanoli | Udinese | infortunato/ballottaggio | al rientro sfida Vojvoda |
| De Winter | Milan | no | prima alternativa ai centrali |
| Idrissi R. | Cagliari | infortunato | scommessa futura |
| Provstgaard | Lazio | no/ballottaggio | prima alternativa centrale |
| Ranieri L. | Fiorentina | no/ballottaggio | dietro Viery |
| Biraghi | Torino | no | rotazione |
| Helland | Bologna | no | riserva |
| Puczka | Genoa | no | insegue sulle corsie |
| Van der Brempt | Como | no | dietro Couto/Smolcic |
| Cabal | Juventus | no | vice Cambiaso |
| Ziolkowski | Roma | no | alternativa a N'Dicka |

---

## JOLLY 4ª FASCIA

| Giocatore | Squadra | Titolarità | Strategia |
|---|---|---|---|
| Kofler | Cagliari | no | ultimissimo slot |
| Arizala | Udinese | no | rotazione |
| Birindelli | Monza | sì/ballottaggio | leghe numerose |
| Zappa | Cagliari | ballottaggio | insegue Zè Pedro |
| Britschgi | Parma | no | riserva |
| Casale | Bologna | no | riserva centrale |
| Alhassane | Bologna | no | vice Miranda |
| Ebosse | Udinese | no | rotazione |
| Lazzari | Lazio | no | dietro Marusic |
| Otoa | Genoa | no | riserva centrale |
| Palma | Udinese | ballottaggio | compete con Bertola |
| Sabelli | Genoa | no | vice Norton-Cuffy |
| Carboni F. | Parma | no | dietro Valeri |
| De Silvestri | Bologna | no | riserva |
| Mazzocchi | Napoli | no | rotazione |
| Mlacic | Udinese | no | rotazione |
| Ndiaye | Parma | no | dietro Troilo |
| Oyono J. | Frosinone | no | vice Antony Oyono |

---

## A RISCHIO

| Giocatore | Squadra | Titolarità | Strategia |
|---|---|---|---|
| Calvani | Frosinone | no/ballottaggio | solo a 1 |
| Pongracic | Fiorentina | no | evitabile salvo cambio gerarchie |
| Akpoguma | Frosinone | ballottaggio | minutaggio possibile |
| Candè | Sassuolo | ballottaggio | centrale in concorrenza |
| Cittadini | Frosinone | no | copertura |
| Diawara S. | Milan | no | giovane da rotazione |
| Marin R. | Napoli | no/ballottaggio | minuti in emergenza |
| Corrado | Frosinone | no | minimo o niente |
| Marianucci | Napoli | no | rotazione |
| Missori | Sassuolo | ballottaggio | possibile spazio a destra |
| Ndaba | Lecce | no | dietro Gallo |
| Rugani | Juventus | no | poco spazio |

---

## DA EVITARE

| Giocatore | Squadra | Titolarità | Strategia |
|---|---|---|---|
| Delli Carri | Monza | sì/ballottaggio | basso appeal fanta |
| Lucchesi | Monza | no | evitare |
| Kouadio | Monza | sì/ballottaggio | possibile titolare ma basso appeal |
| Schingtienne | Venezia | sì/ballottaggio | possibile voto ma poco appetibile |
| Sverko | Venezia | no/ballottaggio | gerarchie peggiorate |
| Aurelio | Cagliari | no | evitare |
| Franjic | Venezia | no | evitare |
| Jean | Lecce | no | evitare |
| Sagrado | Venezia | no | evitare |
| Abankwah | Udinese | no | rotazione |
| Amey | Frosinone | no | rotazione |
| Antov | Monza | no | evitare |
| Bakoune | Monza | no | evitare |
| Gelli J. | Frosinone | no | evitare |
| Goldaniga | Como | no | pochissimo minutaggio |
| Gomes | Venezia | no | evitare |
| Matturro | Genoa | no | evitare |
| Patric | Lazio | no | dietro nelle gerarchie |
| Pieragnolo | Sassuolo | no | alto rischio SV |

---

## MERCATO

| Giocatore | Squadra attuale | Stato | Strategia |
|---|---|---|---|
| Dodò | Fiorentina | mercato/ballottaggio | monitorare; Jimenez forte concorrente |
| Romagnoli | Lazio | mercato ma potenziale titolare | interessante se svalutato |
| Nuno Tavares | Lazio | mercato/no | Pedraza davanti |
| Tomori | Milan | mercato/no | dietro nelle gerarchie |
| Aaron Martin | Genoa | mercato/no | Mitaj davanti |
| Estupinan | Milan | mercato/no | Moreira davanti |
| Floriani Mussolini | Lazio | mercato/ballottaggio | Marusic davanti ma possibile spazio |

---

# 5. STRATEGIE GENERALI DI COSTRUZIONE DELLA DIFESA

Riferimento: rosa da 8 difensori, budget 500.

## Strategia 1 — Super Top + equilibrio
Struttura:
- 1 super top
- 1 semitop
- 2 fascia alta
- 4 low/value

Budget indicativo: 85-110
Rischio: basso
Ideale: quasi tutte le leghe

Esempio concettuale:
- Dimarco
- Rrahmani
- N'Dicka
- Scalvini
- Valeri
- Doekhi
- Gallo
- Pedersen

---

## Strategia 2 — Due Top
Struttura:
- 2 top
- 2 medi
- 4 low cost

Budget: 100-125
Rischio: basso/medio
Ideale: modificatore forte

Esempio:
- Bremer
- Wesley
- N'Dicka
- Scalvini
- Valeri
- Doekhi
- Gallo
- Pedersen

---

## Strategia 3 — Nessun Super Top
Struttura:
- 2 semitop
- 2/3 fascia alta
- 3/4 value

Budget: 75-100
Rischio: basso
Ideale: aste dove i top vengono strapagati

Esempio:
- Molina
- Rrahmani
- Mancini
- N'Dicka
- Scalvini
- Valeri
- Doekhi
- Gallo

---

## Strategia 4 — Modificatore Premium
Obiettivo:
schierare quasi sempre 4 difensori con alta probabilità di voto >= 6.

Profili ideali:
- Bremer
- Bastoni
- Akanji
- Rrahmani
- Gila
- N'Dicka
- Solet
- Mancini
- Scalvini
- Kristensen

Budget: 100-130
Rischio: basso

---

## Strategia 5 — Modificatore Value
Struttura:
- 3/4 difensori da buon voto
- nessun super top obbligatorio
- completamento con titolari affidabili

Profili:
- Rrahmani
- Gila
- N'Dicka
- Scalvini
- Vasquez
- Doekhi
- Tiago Gabriel
- Valeri

Budget: 70-95
Rischio: basso

---

## Strategia 6 — Bonus Pesante
Da usare soprattutto senza modificatore.

Profili esterni:
- Dimarco
- Wesley
- Molina
- Cambiaso
- Spinazzola
- Zappacosta
- Yan Couto
- Norton-Cuffy
- Obrador
- Valeri

Centrali goleador:
- Bremer
- Pavlovic
- Ostigard
- Doekhi
- Solet

Budget: 85-115
Rischio: medio

---

## Strategia 7 — Difensori che giocano alti
Obiettivo:
comprare D listati come difensori ma utilizzati da esterni/quinti.

Profili:
- Dimarco
- Wesley
- Molina
- Cambiaso
- Spinazzola
- Norton-Cuffy
- Kamara
- Mangas
- Yan Couto
- Obrador

Regola:
non serve avere 8 esterni; 3-4 sono sufficienti.

Budget: 75-105
Rischio: medio

---

## Strategia 8 — Un Top + tutto Value
Struttura:
- 1 top
- 7 value/titolari

Budget: 60-85
Rischio: medio

Esempio:
- Bremer
- N'Dicka
- Scalvini
- Valeri
- Doekhi
- Mitaj
- Gallo
- Pedersen

---

## Strategia 9 — Difesa completamente equilibrata
Struttura:
- 8 giocatori schierabili
- nessun investimento enorme

Profili esempio:
- N'Dicka
- Scalvini
- Ostigard
- Doekhi
- Valeri
- Norton-Cuffy
- Mitaj
- Gallo

Budget: 65-90
Rischio: basso/medio

---

## Strategia 10 — Low Cost titolari
Profili:
- Valeri
- Mitaj
- Gallo
- Pedersen
- Comert
- Bella-Kotchap
- Mangas
- Marcandalli
- Oyono
- Rodriguez

Budget: 45-70
Rischio: alto
Nota: sconsigliata se il modificatore è centrale nella lega.

---

## Strategia 11 — Scommesse ad upside
Struttura:
- 4 sicuri
- 2 sorprese
- 2 titolari economici

Scommesse:
- Yan Couto
- Koulierakis
- Mitaj
- Obrador
- Ahanor
- Valdepenas
- Kaiki
- Jimenez

Budget: 50-80
Rischio: alto

---

## Strategia 12 — Coppie di ballottaggio
Coppie interessanti:
- Bernasconi + Ahanor
- Valle + Kaiki
- Zappacosta + Bellanova
- Jimenez + Joao Mario
- Obrador + Doig
- Koulierakis + Hermoso

Regola:
massimo una coppia, salvo leghe molto numerose.

---

## Strategia 13 — Infortunati a saldo
Profili:
- Buongiorno
- Hien
- Parisi

Regola:
avere già 6/7 difensori affidabili prima di occupare uno slot con un infortunato.

---

## Strategia 14 — Value / Opportunistica
Regola:
nessun nome obbligatorio.

Definire fasce-prezzo e alternative:
- D1: Dimarco / Wesley / Bremer / Mancini
- D2: Molina / Rrahmani / Akanji / Bastoni
- D3: N'Dicka / Scalvini / Solet / Gila
- D4: Ostigard / Doekhi / Valeri / Norton-Cuffy

Se un giocatore supera il prezzo massimo, passare al profilo successivo.

---

# 6. BUDGET DIFESA CONSIGLIATI SU 500

| Strategia | Budget |
|---|---:|
| Ultra low cost | 45-60 |
| Risparmio | 60-75 |
| Equilibrata | 75-95 |
| Modificatore | 90-115 |
| Premium | 105-125 |
| Modificatore super premium | 120-140 |

Nota:
i budget sono riferimenti strategici, non quotazioni ufficiali.

---

# 7. STRUTTURA IDEALE DEGLI 8 SLOT

| Slot | Profilo |
|---|---|
| D1 | Top / Semitop |
| D2 | Semitop |
| D3 | Fascia alta |
| D4 | Fascia alta / media |
| D5 | Value |
| D6 | Titolare low cost |
| D7 | Titolare low cost |
| D8 | Scommessa / titolare da 1 |

---

# 8. SE C'È IL MODIFICATORE

Priorità:
1. voto medio;
2. titolarità;
3. pochi malus;
4. bonus come extra.

Struttura:
- D1 top da voto + bonus
- D2 semitop da alta MV
- D3 alta MV
- D4 alta MV
- D5 titolare affidabile
- D6 titolare affidabile
- D7 low cost
- D8 scommessa

Esempio:
- Bremer
- Rrahmani
- N'Dicka
- Scalvini
- Valeri
- Doekhi
- Gallo
- Mitaj

---

# 9. SE NON C'È IL MODIFICATORE

Priorità:
1. bonus;
2. posizione offensiva;
3. piazzati;
4. gol da fermo.

Struttura:
- D1 bonus
- D2 bonus
- D3 bonus/piazzati
- D4 esterno offensivo
- D5-D8 titolari low cost

Esempio:
- Wesley
- Molina
- Pavlovic
- Ostigard
- Norton-Cuffy
- Obrador
- Valeri
- Pedersen

---

# 10. PIANI DA MOSTRARE NELL'APP

## Piano A — Modificatore equilibrato
Budget: 90-105
Descrizione:
difesa profonda con 4 giocatori da schierare sempre.

## Piano B — 1 Top + reparto profondo
Budget: 85-100
Descrizione:
un leader più tanti titolari di valore.

## Piano C — Zero Top, 5-6 ottimi titolari
Budget: 75-90
Descrizione:
massimo rapporto qualità/prezzo.

## Piano D — Difesa da bonus
Budget: 85-105
Descrizione:
esterni offensivi + centrali goleador.

## Piano E — Value / Low Cost
Budget: 55-75
Descrizione:
massimo risparmio per centrocampo e attacco.

---

# 11. GIOCATORI VALUE DA EVIDENZIARE

Creare una sezione "Value Picks".

- Mancini
- Scalvini
- Doekhi
- Valeri
- Norton-Cuffy
- Mitaj
- Obrador
- N'Dicka
- Ostigard
- Tiago Gabriel

---

# 12. STRUTTURA DATI CONSIGLIATA

Esempio:

```js
{
  id: "bremer",
  nome: "Gleison Bremer",
  nomeBreve: "Bremer",
  squadra: "Juventus",
  ruolo: "D",
  fascia: "TOP",
  titolare: "si",
  gerarchia: "Pilastro centrale",
  statistiche: {
    presenze: null,
    gol: 4,
    assist: 3,
    fantamedia: 6.81
  },
  valutazioni: {
    modificatore: 5,
    bonus: 5,
    titolarita: 5
  },
  rischio: "medio",
  tags: ["modificatore", "piazzati", "bonus", "top"],
  strategia: "1° slot; centrale premium da modificatore e piazzati",
  note: "Storico recente di infortuni da monitorare"
}
```

Esempio giocatore con ballottaggio:

```js
{
  id: "bisseck",
  nome: "Yann Bisseck",
  squadra: "Inter",
  ruolo: "D",
  fascia: "FASCIA ALTA",
  titolare: "ballottaggio",
  gerarchia: "Dietro Stones ma con alto minutaggio",
  valutazioni: {
    modificatore: 5,
    bonus: 5,
    titolarita: 3
  },
  rischio: "medio",
  tags: ["upside", "bonus", "modificatore"],
  strategia: "3° slot ad alto upside; forte se svalutato dalla non titolarità"
}
```

---

# 13. PAGINA DIFENSORI

Route:

```text
/difensori
```

Elementi:
- titolo
- ricerca
- filtro fascia
- filtro titolarità
- filtro tag
- filtro solo preferiti
- tabella
- dettaglio giocatore

Filtri tag consigliati:
- Modificatore
- Bonus
- Esterno offensivo
- Centrale goleador
- Piazzati
- Low cost
- Scommessa
- Infortunato
- Mercato

---

# 14. TABELLA DIFENSORI

Colonne consigliate:

| Fascia | Giocatore | Squadra | Titolare | Gerarchia | Dati | Strategia asta |
|---|---|---|---|---|---|---|

Opzionali:
- Modificatore
- Bonus
- Rischio

Su mobile usare card.

---

# 15. DETTAGLIO GIOCATORE

Mostrare:

- Nome
- Squadra
- Fascia
- Titolarità
- Gerarchia
- Statistiche
- Valutazione modificatore
- Valutazione bonus
- Valutazione titolarità
- Rischio
- Strategia asta
- Note
- Tags

---

# 16. PAGINA STRATEGIE DIFENSORI

Route:

```text
/strategie/difensori
```

Mostrare:
1. strategie generali;
2. budget;
3. piani A-E;
4. sezione "con modificatore";
5. sezione "senza modificatore";
6. value picks;
7. coppie di ballottaggio;
8. infortunati a saldo.

Filtri:
- Tutte
- Modificatore
- Bonus
- Premium
- Equilibrata
- Low Cost
- Scommesse
- Value

---

# 17. PREFERITI

Come nei Portieri:
- stella su giocatore;
- persistenza via localStorage;
- filtro "Solo preferiti".

Le chiavi localStorage possono essere separate per ruolo:
- `favorite-goalkeepers`
- `favorite-defenders`

---

# 18. DESIGN

Mantenere lo stesso design della sezione Portieri.

Obiettivi:
- coerenza visiva;
- leggibilità;
- velocità di consultazione;
- badge fascia;
- badge titolarità;
- evidenziare modificatore/bonus/rischio.

Non creare un design completamente diverso dalla sezione Portieri.

---

# 19. ORDINE DI IMPLEMENTAZIONE

1. leggere questo file;
2. analizzare struttura Portieri esistente;
3. riutilizzare componenti generici già presenti;
4. creare `data/difensori.js`;
5. aggiungere `/difensori`;
6. aggiungere ricerca e filtri;
7. aggiungere dettaglio;
8. creare `/strategie/difensori`;
9. aggiungere preferiti;
10. integrare Home/Navbar;
11. responsive;
12. `npm run build`.

---

# 20. REGOLA ARCHITETTURALE IMPORTANTE

NON duplicare componenti se quelli dei Portieri possono diventare generici.

Preferire:
- `PlayerTable`
- `PlayerCard`
- `SearchBar`
- `Filters`
- `FavoriteButton`
- `StrategyCard`

rispetto a:
- `DefenderTable`
- `DefenderCard`

salvo reale necessità.

---

# 21. DEFINIZIONE DI DONE

La sezione Difensori è completa quando:

- `/difensori` mostra tutti i giocatori;
- ricerca funzionante;
- filtro fascia funzionante;
- filtro titolarità funzionante;
- filtro tag funzionante;
- preferiti funzionanti;
- dettaglio giocatore funzionante;
- `/strategie/difensori` mostra tutte le strategie;
- piani A-E presenti;
- sezione modificatore presente;
- sezione senza modificatore presente;
- value picks presenti;
- responsive coerente con Portieri;
- nessun errore console;
- `npm run build` termina senza errori.
