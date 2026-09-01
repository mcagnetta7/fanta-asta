# Fanta Asta 2026/27 — Difensori V4
## Aggiornamento tabella al 1 settembre 2026

## 1. Scopo

Questo documento sostituisce, per la pagina `/difensori`, la precedente:

```text
FANTA_ASTA_DIFENSORI_SPEC_V3.md
```

La V4 serve **solo ad aggiornare i dati della tabella Difensori**.

NON deve essere usata per modificare:

```text
/strategie/difensori
```

La UI della pagina Difensori esistente deve rimanere sostanzialmente invariata.

Source principale verificata il 1 settembre 2026:

```text
SOS Fanta — Guida all'Asta Fantacalcio 2026/27 — Difensori
Aggiornamento: 1 settembre 2026, ore 10:10
```

La classificazione SOS aggiornata contiene:

```text
187 difensori
20 categorie
```

La precedente V3 operativa conteneva 185 profili:

```text
181 base SOS
+ 2 Extra Aggiornamenti
+ 2 Extra Mercato
= 185
```

La nuova V4 NON usa più le categorie:

```text
EXTRA AGGIORNAMENTI
EXTRA MERCATO
```

Sutalo, Badiashile e Kambwala sono ora assorbiti direttamente nelle fasce SOS.

Oosterwolde NON compare nella nuova guida e non deve essere presente nel nuovo dataset operativo.

---

# 2. Principio fondamentale

La nuova pagina `/difensori` deve avere:

```text
difensori.length === 187
```

Non:

```text
181
185
176
```

Il filtro `Tutti` deve mostrare:

```text
187 difensori
```

---

# 3. Categorie e conteggi esatti

| Categoria | Conteggio |
|---|---:|
| SUPER TOP | 1 |
| TOP | 7 |
| SEMITOP | 7 |
| SOTTO AI SEMITOP | 4 |
| FASCIA ALTA | 6 |
| JOLLY 1ª FASCIA | 2 |
| POSSIBILI SORPRESE | 4 |
| FASCIA MEDIA | 7 |
| INFORTUNATI | 3 |
| SCOMMESSE | 8 |
| SOPRA AI LOW COST | 7 |
| JOLLY 2ª FASCIA | 10 |
| LOW COST 1ª FASCIA | 17 |
| LOW COST 2ª FASCIA | 18 |
| LEGHE NUMEROSE | 14 |
| JOLLY 3ª FASCIA | 15 |
| JOLLY 4ª FASCIA | 22 |
| A RISCHIO | 15 |
| DA EVITARE | 12 |
| MERCATO | 8 |
| **TOTALE** | **187** |

---

# 4. Ordine categorie

Con filtro `Tutti` mantenere questo ordine:

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

NON ordinare globalmente tutti i difensori in ordine alfabetico.

---

# 5. Classificazione completa — 187 difensori

## SUPER TOP — 1

```text
Dimarco
```

---

## TOP — 7

```text
Wesley
Bremer
Bastoni
Molina N.
Pavlovic
Spence
Solet
```

---

## SEMITOP — 7

```text
Akanji
Kalulu
Di Lorenzo
Mancini
Rrahmani
Stones
Gila
```

---

## SOTTO AI SEMITOP — 4

```text
Bisseck
N'Dicka
Ostigard
Ramon
```

---

## FASCIA ALTA — 6

```text
Spinazzola
Tavares N.
Cambiaso
Zappacosta
Celik
Lucumì
```

---

## JOLLY 1ª FASCIA — 2

```text
Carlos Augusto
Kempf
```

---

## POSSIBILI SORPRESE — 4

```text
Chalobah T.
Couto
Vojvoda
Koulierakis
```

---

## FASCIA MEDIA — 7

```text
Hermoso
Belghali
Miranda J.
Valle
Delprato
Bernasconi
Kristensen T.
```

---

## INFORTUNATI — 3

```text
Buongiorno
Hien
Parisi
```

---

## SCOMMESSE — 8

```text
Jimenez A.
Fortini
Kaiki
Obrador
Mitaj
Viery
Valdepenas
Lulli
```

---

## SOPRA AI LOW COST — 7

```text
Scalvini
Vasquez
Tiago Gabriel
Valeri
Kamara H.
Theate
Mina
```

---

## JOLLY 2ª FASCIA — 10

```text
Bartesaghi
Bellanova
Joao Mario
Balerdi
Beukema
Holm
Pavard
De Winter
Gatti
Rensch
```

---

## LOW COST 1ª FASCIA — 17

```text
Gabbia
Mangas
Sutalo J.
Zortea
Gallo
Leysen F.
Gaspar K.
Troilo
Van Der Brempt
Doekhi
Bracaglia
Dragusin
Idzes
Obert
Kelly L.
Provstgaard
Mazzocchi
```

---

## LOW COST 2ª FASCIA — 18

```text
Comuzzo
Coco
Ismajli
Caleta-Car
Heggem
Kolasinac
Marcandalli
Marusic
Monterisi
Pedraza
Veiga D.
Bella-Kotchap
Zè Pedro
Juan Jesus
Kabasele
Vitik
Estupinan
Ziolkowski
```

---

## LEGHE NUMEROSE — 14

```text
Oyono A.
Correia T.
Haps
Comert
Hainaut
Moreno M.
Rodriguez Ju.
Siebert
Smolcic I.
Terzic
Walukiewicz
Carboni A.
Schingtienne
Tchato
```

---

## JOLLY 3ª FASCIA — 15

```text
Badiashile
Doig
Ghilardi
Olivera
Bertola
Floriani Mussolini
Kossounou
Valenti
Zanoli
Helland
Ranieri L.
Abankwah
Biraghi
Marin R.
Dembelè A.
```

---

## JOLLY 4ª FASCIA — 22

```text
Calvani
Birindelli
Cittadini
Favasuli
Britschgi
Ebosse
Franjic
Halhal
Kambwala
Odenthal
Palma
Alhassane
Lazzari
Ndiaye
Otoa
Pellegrini Lu.
Puczka
Sabelli
Carboni F.
Maye
Mlacic
Omar Fayed
```

---

## A RISCHIO — 15

```text
Kofler
Arizala
Delli Carri
Pongracic
Akpoguma
Candè
Casale
Kouadio
Lucchesi
Cinquegrano
Drobnic
Jean
Ndaba
Terracciano F.
De Silvestri
```

---

## DA EVITARE — 12

```text
Idrissi R.
Sverko
Aurelio
Bakoune
Diawara S.
Sagrado
Amey
Antov
Goldaniga
Gomes
Patric
Pieragnolo
```

---

## MERCATO — 8

```text
Dodò
Norton-Cuffy
Ahanor
Romagnoli
Tomori
Cabal
Marianucci
Rugani
```

---

# 6. Cambiamenti principali rispetto alla precedente V3

## Upgrade di fascia

### Molina

```text
SEMITOP
→
TOP
```

Profilo:
- esterno destro Roma;
- titolarità alta;
- forte propensione offensiva;
- bonus + assist;
- profilo da primo slot.

---

### Mancini

```text
SOTTO AI SEMITOP
→
SEMITOP
```

Mantenere:
- titolarità molto alta;
- bonus sui piazzati;
- MOD;
- tag VALUE se già presente.

Dati utili già presenti:
- 36 presenze;
- 4 gol;
- 2 assist;
- FM 6,51.

---

### Kalulu

```text
SOTTO AI SEMITOP
→
SEMITOP
```

Profilo:
- titolare;
- terzino/centrale;
- 37 presenze;
- 2 gol;
- 4 assist;
- FM 6,36.

---

### Bisseck

```text
FASCIA ALTA
→
SOTTO AI SEMITOP
```

NON trasformarlo in titolare certo.

Stato:
```text
ballottaggio / rotazione
```

Mantenere:
- 3 gol;
- 2 assist;
- FM 6,65;
- MOD + BONUS;
- tag VALUE/UPGRADE.

---

### N'Dicka

```text
FASCIA ALTA
→
SOTTO AI SEMITOP
```

Profilo:
- titolarissimo;
- MOD;
- piazzati;
- 3 gol;
- FM 6,32.

---

### Ostigard

```text
FASCIA MEDIA
→
SOTTO AI SEMITOP
```

Questo è uno dei cambiamenti più importanti.

Mantenere:
- titolare Genoa;
- 5 gol;
- MOD;
- piazzati;
- VALUE.

Non deve più apparire come semplice Fascia Media.

---

### Ramon

```text
FASCIA ALTA
→
SOTTO AI SEMITOP
```

Mantenere:
- titolarità alta;
- 2 gol;
- profilo MOD + BONUS;
- rischio cartellini.

---

### Celik

```text
JOLLY 1ª FASCIA
→
FASCIA ALTA
```

Alla Juventus sta trovando più spazio del previsto.

NON trasformarlo automaticamente in titolare blindato.

Stato consigliato:
```text
ballottaggio / alta rotazione
```

---

### Yan Couto

```text
SCOMMESSE
→
POSSIBILI SORPRESE
```

Mantenere fortemente evidenziato:
- BONUS;
- esterno offensivo;
- 3 gol + 3 assist nella stagione precedente in tutte le competizioni;
- VALUE/UPGRADE.

NON trattarlo come normale scommessa da ultimo slot.

---

### Kamara

```text
LOW COST 2ª FASCIA
→
SOPRA AI LOW COST
```

Profilo:
- titolare Udinese a sinistra;
- posizione alta;
- potenziale assist/bonus;
- 26 presenze e 2 assist.

---

### Leysen

```text
LEGHE NUMEROSE
→
LOW COST 1ª FASCIA
```

Stato:
```text
si
```

Gerarchia:
- candidato a giocare praticamente sempre al Sassuolo.

Tag:
```text
TITOLARE
LOW COST
VALUE
```

---

### Bracaglia

```text
LEGHE NUMEROSE
→
LOW COST 1ª FASCIA
```

Aggiornamento importante:
- partenza di stagione molto positiva;
- gol + assist contro Fiorentina;
- aumenta appeal.

---

### Obert

```text
LEGHE NUMEROSE
→
LOW COST 1ª FASCIA
```

Stato:
```text
si
```

Profilo:
- titolare Cagliari;
- low cost affidabile;
- possibile spinta.

---

### Marcandalli

```text
LEGHE NUMEROSE
→
LOW COST 2ª FASCIA
```

Stato:
```text
si
```

Profilo:
- titolare Genoa;
- voto da ultimi slot;
- non aspettarsi molti bonus.

---

### Marusic

```text
LEGHE NUMEROSE
→
LOW COST 2ª FASCIA
```

Stato:
```text
si
```

Gerarchia:
- avanti sulla fascia destra Lazio.

---

### Pavard

```text
JOLLY 3ª FASCIA
→
JOLLY 2ª FASCIA
```

Squadra:
```text
Inter
```

È tornato all'Inter.

Stato:
```text
ballottaggio / rotazione
```

NON titolare certo.

---

### De Winter

```text
JOLLY 3ª FASCIA
→
JOLLY 2ª FASCIA
```

Gerarchia:
- ballottaggio concreto con Gabbia al Milan.

---

### Floriani Mussolini

```text
MERCATO
→
JOLLY 3ª FASCIA
```

Rimuovere stato `mercato`.

---

### Abankwah

```text
DA EVITARE
→
JOLLY 3ª FASCIA
```

Upgrade significativo della valutazione.

---

### Marin R.

```text
A RISCHIO
→
JOLLY 3ª FASCIA
```

---

### Schingtienne

```text
DA EVITARE
→
LEGHE NUMEROSE
```

---

### Franjic

```text
DA EVITARE
→
JOLLY 4ª FASCIA
```

---

### Delli Carri

```text
DA EVITARE
→
A RISCHIO
```

---

### Kouadio

```text
DA EVITARE
→
A RISCHIO
```

---

### Lucchesi

```text
DA EVITARE
→
A RISCHIO
```

---

### Cinquegrano

```text
DA EVITARE
→
A RISCHIO
```

---

# 7. Downgrade / cambi di utilizzo

## Cambiaso

```text
SOTTO AI SEMITOP
→
FASCIA ALTA
```

Motivazione:
- inizio meno brillante;
- ha perso un po' di spazio;
- rimane interessante come occasione a prezzo inferiore.

Profilo:
```text
BONUS / ESTERNO
```

---

## Zappacosta

```text
SOTTO AI SEMITOP
→
FASCIA ALTA
```

Mantenere:
- 3 gol + 1 assist;
- nuovo ruolo più arretrato nel 4-3-3;
- titolarità non da dare per assoluta senza considerare Bellanova.

---

## Kempf

```text
FASCIA MEDIA
→
JOLLY 1ª FASCIA
```

Stato:
```text
ballottaggio / rotazione
```

Motivo:
- arrivo Chalobah;
- Como molto profondo;
- non più titolare inamovibile.

---

## Bartesaghi

```text
FASCIA MEDIA
→
JOLLY 2ª FASCIA
```

Stato:
```text
ballottaggio
```

Motivo:
- non ha più il posto fisso.

---

## Hien

```text
SOPRA AI LOW COST
→
INFORTUNATI
```

Rientro previsto:
```text
ottobre inoltrato
```

---

## Gabbia

```text
SOPRA AI LOW COST
→
LOW COST 1ª FASCIA
```

Stato:
```text
ballottaggio / alta probabilità di voto
```

Dualismo con De Winter.

---

## Dragusin

```text
SOPRA AI LOW COST
→
LOW COST 1ª FASCIA
```

Mantenere:
- titolare Fiorentina;
- rientro post crociato;
- inizio difficile;
- prezzo potenzialmente sceso.

---

## Walukiewicz

```text
LOW COST 2ª FASCIA
→
LEGHE NUMEROSE
```

---

# 8. Giocatori che escono da MERCATO

## Nuno Tavares

Prima:
```text
MERCATO
```

Ora:
```text
FASCIA ALTA
Lazio
```

Stato:
```text
si / favorito
```

Profilo:
```text
BONUS
UPSIDE
```

Non deve più avere badge Mercato.

---

## Estupinan

Prima:
```text
MERCATO
```

Ora:
```text
LOW COST 2ª FASCIA
Milan
```

Stato:
```text
ballottaggio / rotazione
```

Amorim lo sta utilizzando.

---

# 9. Giocatori che entrano in MERCATO

## Norton-Cuffy

Prima:
```text
SOPRA AI LOW COST
```

Ora:
```text
MERCATO
```

NON eliminarlo ancora.

Stato:
```text
mercato
```

---

## Ahanor

Prima:
```text
SCOMMESSE
```

Ora:
```text
MERCATO
```

---

## Cabal

Prima:
```text
JOLLY 3ª FASCIA
```

Ora:
```text
MERCATO
```

---

## Marianucci

Prima:
```text
A RISCHIO
```

Ora:
```text
MERCATO
```

---

## Rugani

Prima:
```text
A RISCHIO
```

Ora:
```text
MERCATO
```

---

# 10. Extra V3 che diventano fasce ufficiali

## Josip Sutalo

Prima V3:
```text
EXTRA AGGIORNAMENTI
```

Ora:
```text
LOW COST 1ª FASCIA
Lazio
```

Stato:
```text
ballottaggio
```

Gerarchia:
- può trovare spazio accanto a Doekhi;
- situazione Romagnoli ancora collegata al mercato.

NON assegnargli più `EXTRA AGGIORNAMENTI`.

---

## Benoit Badiashile

Prima V3:
```text
EXTRA AGGIORNAMENTI
```

Ora:
```text
JOLLY 3ª FASCIA
Napoli
```

Stato:
```text
ballottaggio / rotazione
```

Può trovare spazio soprattutto durante l'assenza di Buongiorno.

---

## Willy Kambwala

Prima V3:
```text
EXTRA MERCATO
Como*
```

Ora:
```text
JOLLY 4ª FASCIA
Como
```

Rimuovere:
- asterisco;
- stato Mercato;
- categoria Extra.

Stato:
```text
ballottaggio / rotazione
```

---

## Jayden Oosterwolde

Prima V3:
```text
EXTRA MERCATO
Roma*
```

Ora:
```text
ASSENTE
```

NON deve essere presente nel nuovo dataset operativo.

---

# 11. Nuovi giocatori da aggiungere rispetto alla V3 operativa

Questi 10 giocatori NON erano presenti nel dataset operativo V3 e devono essere aggiunti:

```text
Balerdi
Belghali
Caleta-Car
Dembelè A.
Drobnic
Juan Jesus
Lulli
Maye
Tchato
Theate
```

---

# 12. Nuovi giocatori — indicazioni essenziali

## Leonardo Balerdi

Squadra:
```text
Roma
```

Fascia:
```text
JOLLY 2ª FASCIA
```

Stato:
```text
ballottaggio / rotazione
```

Nota:
- nuovo centrale Roma;
- non parte titolare;
- alternativa;
- storico di qualche stop fisico.

---

## Belghali

Fascia:
```text
FASCIA MEDIA
```

Usare squadra e gerarchia corrette già disponibili nel progetto/source aggiornata.

NON inventare statistiche se non presenti.

---

## Caleta-Car

Fascia:
```text
LOW COST 2ª FASCIA
```

Usare dati reali disponibili.
Dati non noti = `null`.

---

## Dembelè A.

Fascia:
```text
JOLLY 3ª FASCIA
```

Dati non noti = `null`.

---

## Drobnic

Fascia:
```text
A RISCHIO
```

Dati non noti = `null`.

---

## Juan Jesus

Squadra:
```text
Venezia
```

Fascia:
```text
LOW COST 2ª FASCIA
```

Stato:
```text
si
```

Cambio di status:
- al Napoli era alternativa;
- al Venezia diventa un titolare low cost.

Profilo:
```text
TITOLARITÀ
LOW COST
```

---

## Emanuele Lulli

Squadra:
```text
Roma
```

Fascia:
```text
SCOMMESSE
```

Stato:
```text
ballottaggio / rotazione
```

Nota:
- classe giovane;
- ha iniziato titolare alla prima;
- Molina rimane il riferimento a destra;
- non sovrastimarlo.

Tag:
```text
SCOMMESSA
UPSIDE
```

---

## Maye

Fascia:
```text
JOLLY 4ª FASCIA
```

Dati non noti = `null`.

---

## Tchato

Fascia:
```text
LEGHE NUMEROSE
```

Dati non noti = `null`.

---

## Arthur Theate

Squadra:
```text
Bologna
```

Fascia:
```text
SOPRA AI LOW COST
```

Stato:
```text
si / alta probabilità
```

Nota:
- tornato al Bologna;
- sulla carta titolare;
- profilo appena sopra il normale low cost;
- esperienza Bundesliga/Ligue 1;
- possibile value.

Tag:
```text
VALUE
MOD
TITOLARE
```

---

# 13. Giocatori da rimuovere rispetto alla V3 operativa

Rimuovere completamente come record:

```text
Corrado
Martin
Matturro
Missori
Oyono J.
Pedersen
Zappa
Oosterwolde
```

Totale rimossi:
```text
8
```

NON assumere automaticamente in UI che tutti siano “fuori Serie A”.
Semplicemente NON fanno parte del nuovo dataset operativo V4.

---

# 14. Delta conteggio

V3 operativa:

```text
185
```

Rimozioni:

```text
-8
```

Nuovi record reali:

```text
+10
```

Totale V4:

```text
187
```

---

# 15. Casi critici da verificare nel codice

## Spence

Fascia:
```text
TOP
```

Stato:
```text
ballottaggio
```

NON:
```text
si
```

Motivo:
- Diouf è concorrenza reale;
- non avrà posto fisso;
- può partire in ritardo.

---

## Stones

Fascia:
```text
SEMITOP
```

Stato:
```text
ballottaggio
```

Nota:
- gestione tra campionato e Champions;
- indicativamente non voto fisso;
- storico fisico.

---

## Mancini

Fascia:
```text
SEMITOP
```

NON più:
```text
SOTTO AI SEMITOP
```

Tag:
```text
VALUE
MOD
BONUS
TITOLARE
```

---

## Bisseck

Fascia:
```text
SOTTO AI SEMITOP
```

Stato:
```text
ballottaggio
```

NON trasformarlo in titolare certo.

---

## Ostigard

Fascia:
```text
SOTTO AI SEMITOP
```

Stato:
```text
si
```

Deve rimanere evidenziato come:
```text
VALUE
MOD
BONUS
```

---

## Chalobah

Fascia:
```text
POSSIBILI SORPRESE
```

Stato:
```text
si
```

Nota:
- investimento importante Como;
- 2°/3° slot;
- MOD + bonus su piazzati.

---

## Yan Couto

Fascia:
```text
POSSIBILI SORPRESE
```

NON più:
```text
SCOMMESSE
```

Stato:
```text
ballottaggio / alta probabilità di voto
```

Profilo:
```text
BONUS
UPSIDE
VALUE
```

---

## Mitaj

Fascia:
```text
SCOMMESSE
```

Non trattarlo come top di fascia.

Stato:
```text
si / favorito
```

se la gerarchia attuale nel dataset è coerente con le indicazioni di campo.

---

## Kristensen

Fascia:
```text
FASCIA MEDIA
```

Mantenere eventuale alert fisico solo se ancora presente nel dataset/source corrente.
Non inventare indisponibilità se nel codice non viene aggiornata da fonte verificata.

---

## Scalvini

Fascia:
```text
SOPRA AI LOW COST
```

NON `INFORTUNATI` nella classificazione SOS attuale.

Se esiste un alert fisico separato:
- mantenerlo solo se ancora valido;
- fascia resta SOPRA AI LOW COST.

---

## Hien

Fascia:
```text
INFORTUNATI
```

Rientro:
```text
ottobre inoltrato
```

---

## Nuno Tavares

Fascia:
```text
FASCIA ALTA
```

Stato:
```text
si / favorito
```

NON Mercato.

---

## Celik

Fascia:
```text
FASCIA ALTA
```

Stato:
```text
ballottaggio / alta rotazione
```

---

## Leysen

Fascia:
```text
LOW COST 1ª FASCIA
```

Stato:
```text
si
```

---

## Van der Brempt

Squadra:
```text
Sassuolo
```

Fascia:
```text
LOW COST 1ª FASCIA
```

Stato:
```text
si
```

Gerarchia:
- indicato come titolare a destra.

---

## Mazzocchi

Squadra:
```text
Venezia
```

Fascia:
```text
LOW COST 1ª FASCIA
```

Aggiornare eventuale vecchia squadra Napoli.

---

## Juan Jesus

Squadra:
```text
Venezia
```

Fascia:
```text
LOW COST 2ª FASCIA
```

Stato:
```text
si
```

---

## Ziolkowski

Squadra:
```text
Monza
```

Fascia:
```text
LOW COST 2ª FASCIA
```

---

## Kambwala

Squadra:
```text
Como
```

Fascia:
```text
JOLLY 4ª FASCIA
```

NON Extra Mercato.

---

# 16. Fascia e stato sono concetti distinti

Continuare a rispettare questa regola della V3.

Esempio:

```text
DA EVITARE
```

NON significa automaticamente:

```text
stato = no
```

Analogamente:

```text
A RISCHIO
```

NON significa automaticamente:

```text
riserva
```

La fascia è una valutazione fantacalcistica.

Lo stato indica:
- titolarità;
- ballottaggio;
- riserva;
- infortunio;
- mercato.

---

# 17. Stati normalizzati

Usare la struttura già presente.

Valori consigliati:

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

---

# 18. Dati mancanti

NON inventare statistiche.

Se non sono disponibili:

```js
null
```

NON:

```js
0
```

Esempio:

```js
statistiche: {
  presenze: null,
  gol: null,
  assist: null,
  fantamedia: null,
  mediaVoto: null,
  ammonizioni: null,
  espulsioni: null
}
```

---

# 19. ID

Per tutti i giocatori già presenti nella V3:

```text
MANTENERE GLI ID ESISTENTI
```

quando possibile.

Questo evita regressioni su:
- preferiti;
- localStorage;
- dettaglio;
- link interni.

NON creare un nuovo ID solo perché cambia:
- fascia;
- squadra;
- stato.

Esempi:
- Sutalo;
- Badiashile;
- Kambwala;
- Nuno Tavares;
- Estupinan;
- Norton-Cuffy.

Devono conservare l'ID se già presenti.

---

# 20. Nuovi ID

Per i 10 nuovi record usare ID coerenti con la funzione/standard già presente nel progetto.

Esempi concettuali:

```text
leonardo-balerdi
arthur-theate
emanuele-lulli
juan-jesus
```

NON inventare un formato diverso dagli altri record.

---

# 21. Ricerca

La ricerca deve continuare a funzionare almeno per:

```text
nome
nomeBreve
squadra
```

Test specifici:

```text
mancini
→ Gianluca Mancini → SEMITOP

ostigard
→ Leo Ostigard → SOTTO AI SEMITOP

m Molina
→ Nahuel Molina → TOP

theate
→ Arthur Theate → SOPRA AI LOW COST

lulli
→ Emanuele Lulli → SCOMMESSE

juan jesus
→ Juan Jesus → LOW COST 2ª

kambwala
→ Kambwala → JOLLY 4ª

oosterwolde
→ nessun risultato
```

---

# 22. Filtri

Aggiornare le opzioni categoria.

NON mostrare più:

```text
EXTRA AGGIORNAMENTI
EXTRA MERCATO
```

Le 20 categorie disponibili devono essere ESATTAMENTE quelle del capitolo 3.

---

# 23. Contatore

Default:

```text
187 difensori
```

Non:

```text
176
181
185
```

---

# 24. Validazione conteggio

Aggiornare la validazione:

```js
const expectedCount = 187;

if (difensori.length !== expectedCount) {
  console.error(
    `Dataset Difensori V4 incompleto: ${difensori.length}/${expectedCount}`
  );
}
```

---

# 25. Validazione categorie

Usare:

```js
const expectedCategoryCounts = {
  "SUPER TOP": 1,
  "TOP": 7,
  "SEMITOP": 7,
  "SOTTO AI SEMITOP": 4,
  "FASCIA ALTA": 6,
  "JOLLY 1ª FASCIA": 2,
  "POSSIBILI SORPRESE": 4,
  "FASCIA MEDIA": 7,
  "INFORTUNATI": 3,
  "SCOMMESSE": 8,
  "SOPRA AI LOW COST": 7,
  "JOLLY 2ª FASCIA": 10,
  "LOW COST 1ª FASCIA": 17,
  "LOW COST 2ª FASCIA": 18,
  "LEGHE NUMEROSE": 14,
  "JOLLY 3ª FASCIA": 15,
  "JOLLY 4ª FASCIA": 22,
  "A RISCHIO": 15,
  "DA EVITARE": 12,
  "MERCATO": 8
};
```

---

# 26. Validazione ID

```js
const ids = difensori.map((d) => d.id);

if (new Set(ids).size !== ids.length) {
  console.error("ID duplicati nel dataset Difensori V4");
}
```

---

# 27. Controllo nuovi nomi

Devono essere PRESENTI:

```text
Balerdi
Belghali
Caleta-Car
Dembelè A.
Drobnic
Juan Jesus
Lulli
Maye
Tchato
Theate
Sutalo
Badiashile
Kambwala
```

---

# 28. Controllo rimossi

Devono essere ASSENTI:

```text
Corrado
Martin
Matturro
Missori
Oyono J.
Pedersen
Zappa
Oosterwolde
```

---

# 29. Controllo fasce critiche

Verificare programmaticamente o manualmente almeno:

```text
Dimarco → SUPER TOP
Molina → TOP
Mancini → SEMITOP
Kalulu → SEMITOP
Bisseck → SOTTO AI SEMITOP
N'Dicka → SOTTO AI SEMITOP
Ostigard → SOTTO AI SEMITOP
Ramon → SOTTO AI SEMITOP
Tavares N. → FASCIA ALTA
Celik → FASCIA ALTA
Kempf → JOLLY 1ª FASCIA
Couto → POSSIBILI SORPRESE
Hien → INFORTUNATI
Kamara → SOPRA AI LOW COST
Bartesaghi → JOLLY 2ª FASCIA
Sutalo → LOW COST 1ª FASCIA
Leysen → LOW COST 1ª FASCIA
Bracaglia → LOW COST 1ª FASCIA
Obert → LOW COST 1ª FASCIA
Marcandalli → LOW COST 2ª FASCIA
Marusic → LOW COST 2ª FASCIA
Estupinan → LOW COST 2ª FASCIA
Badiashile → JOLLY 3ª FASCIA
Abankwah → JOLLY 3ª FASCIA
Kambwala → JOLLY 4ª FASCIA
Norton-Cuffy → MERCATO
Ahanor → MERCATO
Rugani → MERCATO
```

---

# 30. Value da mantenere/evidenziare

Senza trasformarli in nuove fasce, mantenere o assegnare il tag VALUE almeno ai profili:

```text
Mancini
Bisseck
Ostigard
Chalobah
Yan Couto
N'Dicka
Ramon
Scalvini
Doekhi
Valeri
Leysen
Bracaglia
Theate
Marcandalli
Kamara
```

---

# 31. Modificatore

Profili da mantenere/evidenziare come MOD dove coerente:

```text
Bremer
Bastoni
Akanji
Mancini
Gila
Rrahmani
N'Dicka
Bisseck
Ostigard
Solet
Doekhi
Scalvini
Vasquez
Tiago Gabriel
Chalobah
Kristensen
Theate
```

---

# 32. Bonus / esterni offensivi

Profili da mantenere/evidenziare:

```text
Dimarco
Wesley
Molina
Cambiaso
Spinazzola
Tavares
Zappacosta
Yan Couto
Miranda
Valle
Kaiki
Obrador
Vojvoda
Valeri
Kamara
```

NON è una nuova fascia.

È un tag/profilo.

---

# 33. NON modificare Strategie Difensori

MOLTO IMPORTANTE.

NON modificare:

```text
/strategie/difensori
```

NON modificare:

```text
data/strategieDifensori.js
```

anche se:
- contiene vecchie fasce;
- contiene giocatori rimossi;
- contiene vecchi esempi.

Le strategie verranno aggiornate separatamente.

---

# 34. NON modificare altri ruoli

NON modificare:

```text
portieri.js
centrocampisti.js
attaccanti.js
```

né le loro pagine/strategie salvo componenti condivisi strettamente necessari.

---

# 35. UI

NON fare redesign.

Mantenere:
- header;
- tabella;
- card mobile;
- ricerca;
- filtri;
- preferiti;
- dettaglio;
- responsive.

Questa è una **data update**, non una ricostruzione grafica.

---

# 36. Preferiti

Se alcuni ID rimossi sono ancora presenti nel localStorage dei preferiti:

```text
l'app NON deve crashare
```

Gestire in modo sicuro record non più esistenti.

Non serve una migration complessa.

---

# 37. Definition of Done

L'aggiornamento V4 è completato quando:

- `/difensori` mostra 187 record;
- le 20 categorie hanno i conteggi esatti;
- `EXTRA AGGIORNAMENTI` non esiste più;
- `EXTRA MERCATO` non esiste più;
- Sutalo è Low Cost 1ª;
- Badiashile è Jolly 3ª;
- Kambwala è Jolly 4ª;
- Oosterwolde è assente;
- Molina è Top;
- Mancini è Semitop;
- Kalulu è Semitop;
- Bisseck è Sotto ai Semitop;
- Ostigard è Sotto ai Semitop;
- N'Dicka è Sotto ai Semitop;
- Ramon è Sotto ai Semitop;
- Nuno Tavares è Fascia Alta;
- Celik è Fascia Alta;
- Couto è Possibile Sorpresa;
- Kempf è Jolly 1ª;
- Hien è Infortunati;
- Theate è presente;
- Lulli è presente;
- Balerdi è presente;
- Juan Jesus è presente;
- Leysen è Low Cost 1ª;
- Bracaglia è Low Cost 1ª;
- Marcandalli è Low Cost 2ª;
- Estupinan non è più Mercato;
- Norton-Cuffy è Mercato;
- i 8 record rimossi sono assenti;
- dati mancanti = null;
- ricerca funziona;
- filtri funzionano;
- preferiti non crashano;
- dettaglio funziona;
- responsive funziona;
- `/strategie/difensori` non è stato modificato;
- nessun altro ruolo è stato modificato;
- `npm run build` termina senza errori.
