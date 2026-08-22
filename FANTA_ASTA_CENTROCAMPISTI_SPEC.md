# Fanta Asta 2026/27 — Specifica completa Centrocampisti

## 1. Obiettivo

Questo documento è la **source of truth** per implementare esclusivamente la pagina `/centrocampisti` della web app **Fanta Asta 2026/27**.

In questa fase NON deve essere creata la pagina delle strategie del centrocampo. La colonna `Strategia asta` contiene soltanto il consiglio individuale sul singolo calciatore.

La pagina deve essere un database completo e consultabile con ricerca, filtri, preferiti, tabella responsive e dettaglio giocatore.

## 2. Requisito bloccante di completezza

Il dataset deve contenere **esattamente 186 centrocampisti**.

```js
centrocampisti.length === 186
```

Un giocatore NON deve essere eliminato perché possiede meno statistiche degli altri. Quando un dato non è disponibile usare `null` nel dataset e `—` nell'interfaccia.

### Conteggio per fascia

| Fascia | N. |
|---|---:|
| SUPER TOP | 2 |
| TOP | 6 |
| SEMITOP | 8 |
| SOTTO AI SEMITOP | 6 |
| FASCIA ALTA | 9 |
| JOLLY 1ª FASCIA | 7 |
| POSSIBILI SORPRESE | 4 |
| FASCIA MEDIA | 9 |
| INFORTUNATI | 3 |
| SCOMMESSE | 7 |
| SOPRA AI LOW COST | 8 |
| JOLLY 2ª FASCIA | 8 |
| LOW COST 1ª FASCIA | 20 |
| LOW COST 2ª FASCIA | 9 |
| LEGHE NUMEROSE | 16 |
| JOLLY 3ª FASCIA | 12 |
| JOLLY 4ª FASCIA | 25 |
| A RISCHIO | 14 |
| DA EVITARE | 9 |
| MERCATO | 4 |
| **TOTALE** | **186** |

## 3. Campi dati consigliati

Ogni record deve avere almeno:

```js
{
  id,
  nome,
  nomeBreve,
  squadra,
  ruolo: "C",
  fascia,
  titolare,       // si | ballottaggio | no | infortunato | mercato
  gerarchia,
  statistiche,
  valutazioni,
  rischio,
  tags,
  strategia,
  note
}
```

Non usare `0` per un dato sconosciuto: `0` significa realmente zero. Usare `null`.

## 4. Dataset completo — 186 centrocampisti

Legenda titolarità: `si` = prima scelta; `ballottaggio` = concorrenza/rotazione; `no` = riserva; `infortunato` = indisponibile; `mercato` = posizione non stabilizzata.

### SUPER TOP — 2

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Nico Paz** | Como | si | Trequartista titolare e intoccabile; può giocare anche a destra o da falso nove | 35 P · 12 G · 5 A · FM 7,30 · 2 rigori sbagliati | bonus, trequartista, punizioni, titolare | 1° slot assoluto; uno dei migliori centrocampisti del listone | Non dovrebbe essere la prima scelta sui rigori dopo gli errori della scorsa stagione. |
| **McTominay** | Napoli | si | Mezzala box-to-box, titolare praticamente intoccabile | 33 P · 10 G · 2 A · FM 7,26 · 1 giallo | bonus, inserimenti, rendimento, titolare | 1° slot assoluto; garanzia di voto e bonus | Salvo sorprese non dovrebbe più essere tra i primi rigoristi. |

### TOP — 6

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Orsolini** | Bologna | si | Ala destra titolare nel tridente | 34 P · 10 G · 1 A · FM 6,76 · 2 rigori sbagliati su 6 | rigorista, bonus, offensivo, titolare | 1° slot; listato C ma gioca in attacco | Primo rigorista del Bologna; niente coppe europee. |
| **Calhanoglu** | Inter | si | Regista titolare e riferimento tecnico | 22 P · 9 G · 4 A · FM 7,64 | rigorista, punizioni, corner, rendimento | 1° slot; mix eccellente tra voto, piazzati e bonus | Prima scelta sui rigori; rischio principale legato agli infortuni. |
| **Pulisic** | Milan | infortunato | Titolare sulla trequarti appena recuperato | 8 G · 4 A | bonus, offensivo, rigori, infortunato | 1° slot con sconto legato alla condizione fisica | Prec campionato condizionato da edema osseo/microfrattura; una volta recuperato resta centrale. |
| **De Bruyne** | Napoli | ballottaggio | Mezzala offensiva con ampissimo minutaggio; gestione Champions | 17 P · 5 G · 2 A · 3/3 rigori | rigori, piazzati, bonus, rischio-fisico | 1°/2° slot ad alto upside; non pagarlo come profilo senza rischi | Può contendersi i rigori; condizione fisica e rotazioni sono i punti da monitorare. |
| **Rabiot** | Milan | si | Titolare in mediana, grande capacità d'inserimento | 29 P · 6 G · 4 A · FM 6,98 · 4 gialli · 1 rosso | inserimenti, bonus, rendimento, titolare | 1° slot; rendimento e bonus anche partendo da posizione più bassa | Può riposare in Europa, ma è una prima scelta. |
| **Zaniolo** | Udinese | si | Trequartista/seconda punta, molto vicino alla porta | 31 P · 5 G · 5 A · 8 gialli | offensivo, bonus, piazzati, titolare | 1°/2° slot; attaccante di fatto listato C | Grande upside, ma attenzione ai cartellini. |

### SEMITOP — 8

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Zaccagni** | Lazio | si | Ala sinistra titolare nel 4-3-3 | 26 P · 3 G · 0 A · 6 gialli · 1 rosso | offensivo, rigori, piazzati, titolare | 2° slot con potenziale da 1°; candidato al riscatto | Rigori in competizione con Kenneth Taylor; niente coppe. |
| **Mastantuono** | Fiorentina | si | Ala destra/trequartista, arriva per giocare con continuità | 35 presenze complessive al Real Madrid · 3 G; al River 7 G · 4 A nel 2025 | offensivo, bonus, talento, titolare | 2° slot ad altissimo upside | Non è il primo rigorista; Gudmundsson e Kean sono davanti. |
| **Atta** | Fiorentina | si | Mezzala sinistra titolare, grande capacità d'inserimento | 32 P · 5 G · 3 A · 3 gialli | inserimenti, bonus, titolare | 2° slot; titolarità e potenziale doppia cifra G+A | Non rigorista e non specialista principale sui piazzati. |
| **Baturina** | Como | si | Trequartista/ala sinistra; rotazioni possibili per la Champions | 25 P · 6 G · 3 A | bonus, offensivo, trequartista | 2° slot; numeri da possibile top se conferma l'exploit | Grande feeling con gol e assist. |
| **Curtis Jones** | Inter | ballottaggio | Mezzala; si gioca il posto con Zielinski e Sucic | Liverpool 25/26: 1 G · 2 A | rendimento, mezzala, ballottaggio | 2°/3° slot; prezzo da controllare per la concorrenza | Arriva per avere molto spazio, ma il centrocampo Inter è affollato. |
| **Gudmundsson** | Fiorentina | si | Ala sinistra/trequartista offensivo | 32 P · 5 G · 3 A · 3/3 rigori | rigorista, offensivo, bonus, piazzati | 2° slot molto interessante se mantiene i rigori | Al momento leggermente avanti nella gerarchia dal dischetto. |
| **Alajbegovic** | Juventus | ballottaggio | Trequartista/ala destra; compete soprattutto con Conceicao | 28 P · 9 G · 3 A in Austria · 2 G · 1 A in Europa League | talento, offensivo, bonus, scommessa | 2° slot ad alto rischio/upside; evitare effetto hype | Giovane di enorme talento; possibile minutaggio molto alto anche da subentrante. |
| **Vlasic** | Torino | si | Trequartista intoccabile | 37 P · 8 G · 3 A · 5/5 rigori | rigorista, bonus, titolare, trequartista | 2° slot fortissimo; uno dei migliori semi-top per rapporto rischio/rendimento | Prima scelta sui rigori; Torino senza coppe. |

### SOTTO AI SEMITOP — 6

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Rodrigo Mora** | Roma | ballottaggio | Trequartista; concorrenza elevata ma ruolo molto offensivo | Porto: 28 P · 1 G · 1 A; due stagioni fa 10 G in 23 | trequartista, talento, offensivo, scommessa | 2°/3° slot; upside alto ma titolarità non blindata | Listato C è molto più appetibile rispetto a un'eventuale classificazione da A. |
| **Kenneth Taylor** | Lazio | si | Mezzala titolare e molto presente negli inserimenti | 17 P · 3 G · 2 A · 5 gialli | inserimenti, rigori, titolare, bonus | 2°/3° slot; grande value per titolarità e niente coppe | Può contendere i rigori a Zaccagni. |
| **Da Cunha** | Como | si | Centrocampista centrale titolare e rigorista | 35 P · 6 G · 4 A · FM 6,91 · 4/4 rigori | rigorista, rendimento, bonus, titolare | 2° slot mascherato; profilo molto completo | Possibili rotazioni Champions, ma voto quasi sempre garantito. |
| **Barella** | Inter | si | Mezzala intoccabile, oggi più assist-man che incursore puro | 3 G · 9 A · FM 6,71 | assist, rendimento, titolare | 2°/3° slot; voto e continuità premium | Solo 4 gare saltate nell'ultima Serie A. |
| **McKennie** | Juventus | si | Jolly tra mediana, trequarti, fascia e falso nove | 34 P · 5 G · 6 A | bonus, duttilita, titolare, rendimento | 2°/3° slot; grande value per bonus + certezza del voto | Spalletti lo utilizza moltissimo. |
| **Jonathan Rowe** | Bologna | ballottaggio | Ala sinistra; favorito su Cambiaghi | 28 P · 3 G · 3 A | offensivo, bonus, scommessa | 3° slot con upside da 2° | Niente coppe; può puntare alla doppia cifra G+A. |

### FASCIA ALTA — 9

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Conceicao** | Juventus | ballottaggio | Ala destra; concorrenza con Alajbegovic | 30 P · 3 G · 5 A | offensivo, bonus, dribbling | 2°/3° slot; potenziale doppia cifra G+A | Talento notevole ma continuità ancora da dimostrare. |
| **Zielinski** | Inter | ballottaggio | Mezzala/regista; importante nelle rotazioni | 30 P · 6 G · 2 A | rigori, piazzati, bonus | 3° slot premium; voto quasi sempre possibile | Vice rigorista quando Calhanoglu non è in campo. |
| **Modric** | Milan | si | Regista titolare e riferimento tecnico | 33 P · 2 G · 3 A · FM 6,67 | punizioni, corner, rendimento | 3° slot; più rendimento che bonus | Gestione possibile in Europa League. |
| **Saelemaekers** | Milan | ballottaggio | Esterno destro a tutta fascia, può giocare anche più avanzato | 35 P · 3 G · 3 A | duttilita, offensivo, assist | 3°/4° slot; posizione interessante ma posto meno blindato | Può agire anche da vice Pulisic. |
| **Zambo Anguissa** | Napoli | ballottaggio | Mezzala di rotazione con possibile grande minutaggio | 18 P · 4 G · 1 A | inserimenti, bonus, rischio-fisico | 3°/4° slot value se il prezzo scende | Seconda metà della scorsa stagione condizionata dal grave infortunio. |
| **Isaksen** | Lazio | infortunato | Ala destra; candidato a riprendersi il posto una volta recuperato | 27 P · 5 G · 1 A | offensivo, bonus, infortunato | 3° slot da saldo-infortunio | Operato per ernia bilaterale; recupero da monitorare. |
| **Frattesi** | Lazio | si | Mezzala incursore, candidato a un ruolo importante | 14 P · MV 5,89 nell'ultima stagione | inserimenti, bonus, titolare | 3° slot con grande upside | L'ultima annata negativa può abbassarne il prezzo. |
| **Samardzic** | Atalanta | ballottaggio | Mezzala offensiva; rotazioni con Pasalic/Elmas | 21 P · 2 G · 2 A | piazzati, bonus, talento | 3°/4° slot; upside elevato se conquista continuità | Sarri lo conosce e può valorizzarlo. |
| **Politano** | Napoli | si | Ala destra titolare con rotazioni Champions | 33 P · 2 G · 5 A · FM 6,36 | assist, piazzati, offensivo | 3° slot sicuro; più assist che gol | Va a voto con grande continuità. |

### JOLLY 1ª FASCIA — 7

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Jesus Rodriguez** | Como | ballottaggio | Ala/trequartista, listato centrocampista | 2 G · 8 A | offensivo, assist, jolly | 4° slot offensivo; ottimo se hai coperture | Posto non fisso ma alta probabilità di voto. |
| **Sucic** | Inter | ballottaggio | Mezzala di qualità nelle rotazioni | 28 P · 2 G · 2 A | rendimento, jolly, bonus | 4° slot di lusso; si può schierare spesso | Evitare coppie nel centrocampo Inter. |
| **Pasalic** | Atalanta | ballottaggio | Mezzala/trequartista con capacità di incidere anche da subentrante | 31 P · 3 G · 3 A | inserimenti, bonus, jolly | 4° slot; non accumulare troppi jolly non titolari | Da mettere spesso se si hanno coperture. |
| **Odgaard** | Bologna | no | Mezzala/trequartista, più jolly che titolare | 22 P · 5 G · 1 A | bonus, jolly | 4°/5° slot solo con titolari sicuri | Può replicare un bottino simile alla scorsa stagione. |
| **Chukwueze** | Milan | ballottaggio | Trequartista/esterno, inizialmente alternativa | — | offensivo, jolly, scommessa | Jolly offensivo a prezzo contenuto | Buoni segnali in pre-campionato. |
| **Zhegrova** | Juventus | no | Ala/trequartista dietro nelle gerarchie | 12 P · 0 G · 0 A | offensivo, rischio | Solo a forte sconto | Prima stagione molto negativa e problemi fisici. |
| **Lorenzo Pellegrini** | Roma | ballottaggio | Mezzala/trequartista, forte sui piazzati | 24 P · 4 G · 2 A | piazzati, bonus, rischio-fisico | Jolly da bonus; prezzo condizionato da fisico e concorrenza | Può incidere se trova continuità. |

### POSSIBILI SORPRESE — 4

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Andy Diouf** | Inter | ballottaggio | Mezzala adattabile a esterno destro; in forte crescita | 10 P · 1 G | sorpresa, offensivo, duttilita | 4°/5° slot con upside importante | Pre-campionato molto positivo; può giocarsi minuti anche largo. |
| **Oulai** | Fiorentina | ballottaggio | Mezzala dinamica, grande forza fisica | 25 P · 2 G · 4 A · 9 gialli | rendimento, inserimenti, scommessa | 4° slot con upside; attenzione ai cartellini | Può contendere spazio a Mandragora. |
| **Cacciamani** | Torino | si | Esterno sinistro molto alto | Serie B: 36 P · 2 G · 4 A | offensivo, titolare, scommessa | Uno dei low cost offensivi più interessanti | Giovane su cui il Torino e Abate puntano. |
| **Pisilli** | Roma | ballottaggio | Mediano/trequartista, spesso utilizzato avanzato | 22 P · 2 G · 4 A | inserimenti, bonus, scommessa | 4°/5° slot con copertura | Grande feeling con la zona bonus. |

### FASCIA MEDIA — 9

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Ederson** | Atalanta | si | Mezzala titolare | 30 P · 2 G · 1 A · FM 6,43 | rendimento, inserimenti, titolare | 3°/4° slot; ruolo più offensivo può aumentare i bonus | Rimasto all'Atalanta dopo interessamento estero. |
| **Manu Koné** | Roma | si | Centrocampista titolare da voto | 29 P · 2 G · 3 A · FM 6,53 | rendimento, titolare | 4° slot pieno | Non aspettarsi esplosione di bonus, ma voto solido. |
| **Khephren Thuram** | Juventus | si | Mediano titolare / prima rotazione | 34 P · 3 G · 2 A | rendimento, inserimenti | 4° slot da rendimento | Qualche acciacco da monitorare. |
| **Baldanzi** | Genoa | ballottaggio | Trequartista molto apprezzato da De Rossi | 17 P · 1 G · 2 A dal mercato di gennaio | trequartista, piazzati, rischio-fisico | 4° slot interessante | Tutto dipende dalla continuità fisica. |
| **Thorstvedt** | Sassuolo | si | Trequartista puro / mezzala offensiva | 31 P · 4 G · 3 A · FM 6,48 · 9 gialli | offensivo, inserimenti, titolare | 3°/4° slot; possibile value di fascia superiore | Cartellini da limitare. |
| **Bernardeschi** | Bologna | ballottaggio | Trequartista/mezzala, può coesistere con Orsolini | 24 P · 4 G · 2 A | bonus, piazzati, rischio-fisico | 4° slot; può arrivare a 10 G+A se sta bene | Condizione fisica determinante. |
| **Ekkelenkamp** | Udinese | si | Mezzala, può giocare anche seconda punta | 31 P · 5 G · 3 A · FM 6,61 · 1 giallo | inserimenti, bonus, titolare | Value pick: numeri da fascia superiore | Grande spazio previsto. |
| **Perrone** | Como | si | Regista titolare | 36 P · 3 G · 4 A · FM 6,47 · 8 gialli | rendimento, titolare | 4° slot da voto; possibile value | Milla aumenta la concorrenza ma parte ancora avanti. |
| **Diego Moreira** | Milan | ballottaggio | Esterno sinistro a tutta fascia, può giocare avanzato | Ligue 1: 27 P · 4 G · 7 A | offensivo, bonus, scommessa | 3°/4° slot ad alto upside | Acquisto importante; può diventare la prima scelta a sinistra. |

### INFORTUNATI — 3

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Ismael Koné** | Sassuolo | infortunato | Titolare futuro una volta recuperato | 35 P · 6 G | infortunato, bonus | Ultimo slot solo con reparto molto coperto | Doppia frattura tibia/fibula; rientro tra dicembre e inizio 2027. |
| **Pessina** | Monza | infortunato | Capitano e titolare quando disponibile | Serie B: 37 P · 5 G · 1 A | rigorista, infortunato, titolare | Scommessa in prospettiva; interessante per rigori | Problema serio al ginocchio, tempi non ancora certi. |
| **Addai** | Como | infortunato | Giovane offensivo in recupero | — | infortunato, scommessa | Meglio asta di riparazione; massimo ultimo slot | Rottura del tendine d'Achille. |

### SCOMMESSE — 7

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Ndour** | Fiorentina | ballottaggio | Mezzala con grande concorrenza | 30 P · 3 G | scommessa, low-cost | Low cost; evitare coppie nel centrocampo viola | Atta è la certezza, gli altri ruotano. |
| **Calò** | Frosinone | si | Regista, specialista dei piazzati | Serie B: 10 G · 14 A · 7 gialli | punizioni, corner, rigori, bonus | Una delle scommesse preferite della fascia | Gerarchia rigori da verificare tra lui e Schmid. |
| **Liberali** | Como | ballottaggio | Trequartista/ala mancina, talento giovane | Serie B: 3 G · 4 A | talento, punizioni, scommessa | Ultimo slot in reparto coperto | Concorrenza elevata ma Champions può aprire spazi. |
| **Hamed Traorè** | Genoa | ballottaggio | Trequartista, reduce da lungo stop | Ligue 1: 13 P · 2 G · 1 A | offensivo, rischio-fisico, scommessa | Alto upside, alto rischio; non seguire l'hype | Deve ritrovare continuità fisica. |
| **Adzic** | Sassuolo | ballottaggio | Mezzala con tiro da fuori, può giocare sulla trequarti | 10 presenze totali · 4 a voto | scommessa, bonus, tiro-da-fuori | Ottimo colpo a pochi crediti | Si gioca il posto con Bakola durante l'assenza di Koné. |
| **Amondarain** | Bologna | no | Box-to-box/trequartista giovane | Libertadores: 1 G · 2 A in 6; Apertura: 2 G · 1 A in 14 | scommessa, talento | 7°/8° slot in reparto con molti titolari | Avrà bisogno di ambientamento. |
| **Bakola** | Sassuolo | ballottaggio | Mezzala/trequartista classe 2007 | 3 partite a voto · 0 bonus | scommessa, talento | Solo pochi crediti; upside da monitorare | Testa a testa con Adzic. |

### SOPRA AI LOW COST — 8

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Fagioli** | Fiorentina | ballottaggio | Regista/mezzala; titolarità da verificare per l'affollamento | 33 P · 2 G · 3 A · FM 6,23 | rendimento, low-cost | 4°/5° slot da voto; non aspettarsi grandi bonus | Grande concorrenza nel centrocampo viola. |
| **Gaetano** | Atalanta | si | Regista/mezzala; possibile prima scelta davanti alla difesa | 32 P · 2 G · 4 A | rendimento, piazzati | 4°/5° slot da rendimento | Arretramento di ruolo riduce il potenziale bonus. |
| **Casadei** | Torino | ballottaggio | Mezzala d'inserimento | 32 P · 6 G | inserimenti, bonus, scommessa | Low cost da bonus con upside superiore alla fascia | Deve conquistarsi il posto. |
| **Mandragora** | Fiorentina | ballottaggio | Mezzala con inserimenti e piazzati | 7 G · 2 A | bonus, rigori, piazzati | Grande value se il ballottaggio ne abbassa il prezzo | Concorrenza Oulai; 4/5 rigori in carriera. |
| **Locatelli** | Juventus | si | Titolare in mediana | 36 P · 1 G · 2 A · 9 gialli | rendimento, titolare | 5° slot da voto; pochi bonus | Malus da cartellini da considerare. |
| **Schmid** | Frosinone | si | Mezzala offensiva/ala/trequartista | Bundesliga: 34 P · 4 G · 8 A | rigori, bonus, assist, titolare | Uno dei migliori value delle neopromosse | 9/10 rigori in carriera; gerarchia dal dischetto da monitorare. |
| **Bernabè** | Parma | si | Regista/mezzala titolare | 32 P · 3 G · 1 A | punizioni, corner, rendimento | 4°/5° slot eccellente | Qualche acciacco fisico da monitorare. |
| **Oristanio** | Torino | ballottaggio | Trequartista/esterno/mezzala | 18 P · 1 G | offensivo, jolly | Ultimi slot; serve copertura | Problema al ginocchio e ruolo non ancora definito. |

### JOLLY 2ª FASCIA — 8

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Vergara** | Napoli | no | Mezzala/ala, grande concorrenza | 8 P · 1 G | jolly, scommessa | Solo con titolari sicuri in rosa | Può avere spazio nelle rotazioni Champions. |
| **Elmas** | Atalanta | no | Mezzala/ala atipica, dietro Samardzic | — | jolly, bonus | Jolly da qualche bonus a prezzo contenuto | Duttile, ma non titolare fisso. |
| **Aleksandar Stankovic** | Inter | no | Mezzala moderna, centrocampo molto affollato | Belgio: 9 G · 5 A | punizioni, bonus, talento | Grandissimo upside ma minutaggio incerto | Può battere punizioni se non ci sono Calhanoglu e Dimarco. |
| **Cancellieri** | Lazio | ballottaggio | Ala destra, alternanza con Isaksen | 28 P · 4 G · 1 A | offensivo, bonus | Aumenta di valore finché Isaksen è fuori | Interessante anche in coppia, ma non obbligatoria. |
| **Cambiaghi** | Bologna | no | Ala sinistra, insegue Rowe | 3 G · 4 A | offensivo, jolly | Cambio ruolo A→C interessante; prezzo basso | Non parte titolare. |
| **Caqueret** | Como | no | Mediano/trequartista nelle rotazioni | 28 P · 2 G · 4 A | jolly, rendimento | Jolly tecnico con Champions; serve copertura | Spazio alternato tra titolarità e subentri. |
| **Zalewski** | Atalanta | ballottaggio | Mezzala/terzino/ala, molto duttile | 31 P · 2 G · 5 A · FM 6,40 | duttilita, offensivo, assist | 5°/6° slot interessante se non serve un titolarissimo | Può giocare anche nel tridente. |
| **Luis Milla** | Como | ballottaggio | Regista con grande qualità sui piazzati | Liga: 37 P · 1 G · 10 A | punizioni, assist, rendimento | Jolly di qualità; possibile crack low cost | Concorrenza con Da Cunha, Perrone e Caqueret. |

### LOW COST 1ª FASCIA — 20

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Cristante** | Roma | si | Titolare/primissima rotazione in mediana | 37 P · 2 G · 1 A · FM 6,22 · 6 gialli | rendimento, titolare, low-cost | Ottimo 5° slot da voto | Possibili rotazioni Champions. |
| **Fazzini** | Cagliari | si | Mezzala/trequartista | Ultima stagione a Firenze senza bonus; precedentemente 4 G · 1 A a Empoli | titolare, low-cost, inserimenti | Low cost titolare con potenziale bonus | Può ricoprire diversi ruoli. |
| **Frendrup** | Genoa | si | Tuttocampista titolare | 36 P · 1 G · 5 gialli | rendimento, titolare, low-cost | Uno dei migliori tappabuchi | Garantisce presenza e voto. |
| **De Roon** | Atalanta | ballottaggio | Mediano/mezzala nelle rotazioni | 34 P · 1 G · 2 A · FM 6,00 · 6 gialli · 1 rosso | rendimento, low-cost | 5°/6° slot da voto | Minutaggio leggermente meno blindato rispetto al passato. |
| **Colpani** | Monza | ballottaggio | Trequartista/mezzala offensiva | — | offensivo, low-cost, scommessa | Tentativo di rilancio; interessante solo a prezzo basso | Non ha il posto fisso. |
| **Ferguson** | Bologna | si | Mediano/mezzala | 23 P · 1 G | rendimento, low-cost | Low cost da rendimento | Niente coppe può aumentare la continuità. |
| **Lobotka** | Napoli | si | Regista titolare | 31 P · 1 G · FM 6,10 · 3 gialli | rendimento, titolare | 5°/6° slot, voto quasi certo | Aspettative bonus molto basse. |
| **Sow** | Genoa | si | Centrocampista completo, candidato a ruolo importante | 35 presenze totali · 5 G con Siviglia | titolare, rendimento, inserimenti | 4°/5° slot interessante | Esperienza e qualche bonus. |
| **Basic** | Venezia | si | Punto fermo del centrocampo | 2 G · 3 A | titolare, tiro-da-fuori, low-cost | 5°/6° slot con titolarità e qualche bonus | Buon tiro dalla distanza. |
| **Lassana Coulibaly** | Lecce | si | Titolare in mediana | 33 P · 3 G · 1 A · FM 6,29 · 4 gialli | rendimento, titolare, low-cost | Copertura sicura con qualche inserimento | Voto molto frequente. |
| **Rovella** | Lazio | ballottaggio | Regista, si gioca il posto con Cataldi | 11 P · 2 gialli · 1 rosso | rendimento, rischio-fisico | Low cost da voto; attenzione a fisico e ballottaggio | Stagione precedente fortemente condizionata dagli infortuni. |
| **Winks** | Cagliari | ballottaggio | Regista, dualismo con Alessandro Romano | 34 P · 1 G · 2 A | rendimento, low-cost | Titolare/ballottaggio, poco bonus | Storico infortuni da considerare. |
| **Busio** | Venezia | si | Mezzala d'inserimento e capitano | Serie B: 37 P · 7 G · 3 A | inserimenti, bonus, titolare | Low cost intrigante da neopromossa | Può portare bonus anche in Serie A. |
| **Gandelman** | Lecce | ballottaggio | Mezzala/trequartista | 16 P · 2 G · 1 A | inserimenti, offensivo, low-cost | Low cost con upside se sta bene | Problema al ginocchio da monitorare. |
| **Grillitsch** | Frosinone | si | Regista titolare | Braga: 20 P · 1 G · 1 A; Europa League 2 G · 1 A | rendimento, titolare | Titolare affidabile, bonus occasionali | Profilo più da voto che da bonus. |
| **Matic** | Sassuolo | si | Mediano titolare | 34 P · 1 G · 1 A · 6 gialli · 1 rosso | rendimento, titolare | Voto sicuro, malus da considerare | Prestazioni spesso attorno al 6. |
| **Sohm** | Venezia | si | Centrocampista titolare | 0 G nell'ultima stagione | titolare, low-cost | Possibile rilancio; titolare economico | In passato aveva segnato 4 gol al Parma. |
| **El Aynaoui** | Roma | no | Rotazione in mediana | 21 P · 1 G · 2 A | low-cost, rotazione | Ultimi slot; voto non garantito | Champions e concorrenza possono ridurre il minutaggio. |
| **Fitz-Jim** | Torino | ballottaggio | Centrocampista duttile, può giocare molto | — | talento, low-cost, rendimento | Interessante a prezzo minimo | Arriva dall'Ajax con voglia di trovare continuità. |
| **Benjamin Dominguez** | Sassuolo | no | Ala nel tridente, listato centrocampista | 12 P · 3 A · FM 6,04 | offensivo, scommessa, low-cost | 7°/8° slot ad upside | Parte dietro Laurientè ma può incidere anche da subentrante. |

### LOW COST 2ª FASCIA — 9

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Adopo** | Cagliari | ballottaggio | Mediano di rotazione con moltissimi voti | 38/38 a voto · 1 G · 1 A | rendimento, low-cost | Ultimi slot; voto molto frequente | Non è un titolare fisso ma gioca molto. |
| **Ellertsson** | Genoa | ballottaggio | Jolly tra mezzala e corsie | 35 P · 1 G · 1 A | duttilita, rendimento, low-cost | Ultimi slot, più voto che bonus | Può coprire molti ruoli. |
| **Karlstrom** | Udinese | si | Mediano titolare | 36 P · 1 G | rendimento, titolare, low-cost | Titolare da voto | Pochissimo upside bonus. |
| **Nicolussi Caviglia** | Parma | ballottaggio | Regista/mezzala, specialista piazzati | 23 P · 4 A | punizioni, corner, low-cost | Interessante se conquista il posto | Non ha titolarità garantita. |
| **Pierotti** | Lecce | si | Esterno destro/mezzala | 37 P · 1 G · 1 A | offensivo, titolare, low-cost | Titolare low cost con margine di crescita bonus | Di Francesco punta su di lui. |
| **Idrissa Touré** | Monza | ballottaggio | Esterno destro, si gioca il posto con Birindelli | 1 G nell'ultima Serie A | offensivo, low-cost | Da 1 credito; possibile titolare alla lunga | Può guadagnarsi il posto. |
| **Mandela Keita** | Parma | si | Mediano/mezzala intoccabile | 36 P · 1 G · 1 A · 1 giallo | rendimento, titolare, low-cost | Titolare sicuro da copertura | Profilo molto disciplinato. |
| **Kike Perez** | Venezia | ballottaggio | Mezzala d'inserimento | Serie B: 3 G · 7 A · 8 gialli | bonus, inserimenti, low-cost | Buon low cost ma non blindato | Difficile replicare i numeri della B. |
| **Hasa** | Frosinone | ballottaggio | Mezzala/trequartista | Serie B: 31 P · 6 G · 5 A | bonus, scommessa, low-cost | Jolly da bonus a basso costo | Salto B→A da valutare. |

### LEGHE NUMEROSE — 16

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Unai Gomez** | Udinese | no | Trequartista, dietro Zaniolo/Ekkelenkamp | 4 gol complessivi in tre stagioni di Liga | trequartista, leghe-numerose | Solo leghe numerose | Concorrenza forte. |
| **Akinsanmiro** | Monza | si | Mezzala/mediano, arriva per avere spazio | — | titolare, leghe-numerose | Ultimo slot da voto | Può diventare un titolare fisso. |
| **Medon Berisha** | Lecce | ballottaggio | Mezzala/trequartista | — | leghe-numerose, piazzati | Può conquistare il posto; solo leghe numerose | Reduce da lungo stop. |
| **Gineitis** | Torino | ballottaggio | Centrocampista da rotazione | — | rendimento, leghe-numerose | Voto più che bonus | Non titolare fisso. |
| **Piotrowski** | Udinese | ballottaggio | Mezzala/mediano | 30 P · 1 G | rendimento, leghe-numerose | Ultimi slot | Concorrenza aumentata. |
| **Alessandro Romano** | Cagliari | ballottaggio | Regista, dualismo con Winks | — | rendimento, piazzati, leghe-numerose | Leghe numerose; possibile voto e piazzati | Giovane di grande ordine tattico. |
| **Zerbin** | Frosinone | ballottaggio | Esterno/ala, molto duttile | 32 P · 3 A con Cremonese | duttilita, leghe-numerose | Completa il reparto in leghe numerose | Concorrenza offensiva elevata. |
| **Alexsandro Amorim** | Genoa | ballottaggio | Mediano, ottimo pre-campionato | — | scommessa, leghe-numerose | Può insidiare i titolari; da monitorare | Ha segnato anche nelle amichevoli. |
| **Cataldi** | Lazio | ballottaggio | Regista, in concorrenza con Rovella | — | punizioni, corner, rigori, leghe-numerose | Interessante se conquista il posto | Se in campo è candidato ai piazzati e può essere in lista rigori. |
| **Koutsoupias** | Frosinone | ballottaggio | Mezzala d'inserimento | Serie B: 34 P · 8 G · 4 A | inserimenti, bonus, leghe-numerose | Upside bonus ma posto non garantito | Numeri della B non replicabili automaticamente. |
| **Deiola** | Cagliari | no | Mediano da rotazioni | — | rendimento, leghe-numerose | Solo leghe numerose | Pochi bonus attesi. |
| **Ousmane Diallo** | Parma | no | Ala sinistra classe 2007 | Europeo U19: 3 G in 4; Borussia B: 1 A in 28 | talento, scommessa, leghe-numerose | Scommessa futuribile | Serve tempo per affermarsi. |
| **Helgason** | Venezia | no | Mezzala, dietro Basic e Busio | — | leghe-numerose | Solo leghe profonde | Gerarchie ancora da scrivere. |
| **Lennon Miller** | Udinese | no | Mediano giovane in crescita | — | talento, leghe-numerose | Scommessa da minutaggio crescente | Insegue nelle gerarchie. |
| **Oliver Sorensen** | Parma | ballottaggio | Mezzala che va spesso a voto | 30 P · 1 G · 1 A | rendimento, leghe-numerose | Ultimi slot; può migliorare in zona bonus | Spesso impiegato anche da subentrante. |
| **Masini** | Frosinone | si | Regista titolare | FM 5,91 · 1 A | rendimento, titolare, leghe-numerose | Titolare da buon voto, poco bonus | Investimento importante del Frosinone. |

### JOLLY 3ª FASCIA — 12

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Pobega** | Bologna | ballottaggio | Mezzala, può avere più spazio dopo la partenza di Freuler | — | inserimenti, jolly | Potenziale titolare, gerarchie da scrivere | Più gol che assist nel repertorio. |
| **Dele-Bashiru** | Lazio | ballottaggio | Mezzala in concorrenza per un posto | 1 G nell'ultima stagione | inserimenti, jolly | Ultimi slot con upside | Deve dimostrare continuità. |
| **Koopmeiners** | Juventus | no | Riserva in partenza; mercato da monitorare | — | mercato, rischio | Solo forte sconto | Gerarchie molto basse. |
| **Meichtry** | Genoa | ballottaggio | Esterno destro/trequartista/mezzala | Thun: 8 G · 5 A | bonus, scommessa, jolly | Scommessa vera in provincia | Può avere chance da titolare. |
| **Mkhitaryan** | Inter | no | Leader di spogliatoio, non più titolare fisso | — | rendimento, jolly | Solo a prezzo basso | Minutaggio da capire. |
| **Fabbian** | Fiorentina | mercato | Mezzala da bonus, non centrale nel progetto | — | mercato, inserimenti | Da rivalutare dopo eventuale cessione | Un trasferimento può aumentarne molto l'appeal. |
| **Jashari** | Milan | no | Rotazione dietro Modric/Rabiot | — | rendimento, rischio | Ultimi slot solo in leghe profonde | Prima stagione condizionata da infortunio. |
| **Luis Henrique** | Inter | no | Esterno destro, dietro nelle gerarchie | 27 P · 1 G · 2 A | offensivo, jolly | Solo in centrocampo molto coperto | Non garantirà voto ogni giornata. |
| **Nikola Moro** | Bologna | ballottaggio | Mediano, si gioca il posto con Pobega | — | rendimento, jolly | Possibile titolare; più voto che bonus | Gerarchie da definire. |
| **Brescianini** | Fiorentina | mercato | Mezzala da bonus in possibile uscita | — | mercato, inserimenti | Da rivalutare dopo il mercato | Una destinazione con titolarità lo rilancerebbe. |
| **Leonardo Colombo** | Monza | ballottaggio | Centrocampista da rendimento | — | rendimento, jolly | Ultimi slot; può tenersi il posto | Più voto che bonus. |
| **Gilmour** | Napoli | no | Vice Lobotka in regia | — | rendimento, jolly | Solo come rotazione di una big | Voto poco garantito. |

### JOLLY 4ª FASCIA — 25

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Volpato** | Sassuolo | ballottaggio | Rotazione nel tridente | — | offensivo, jolly | Ultimi slot; qualche bonus possibile | — |
| **Felici** | Cagliari | ballottaggio | Esterno offensivo | — | offensivo, jolly | Solo a prezzo minimo | — |
| **Ilkhan** | Torino | ballottaggio | Rotazione centrocampo | — | jolly | Solo leghe profonde | — |
| **Loftus-Cheek** | Milan | no | Gerarchie basse | — | jolly, rischio | Solo forte sconto | — |
| **Ngom** | Lecce | ballottaggio | Centrocampista di rendimento | — | rendimento, jolly | Possibile voto; pochi bonus | — |
| **Njie** | Torino | ballottaggio | Jolly offensivo | — | offensivo, jolly | Ultimi slot | — |
| **Prati** | Cagliari | ballottaggio | Mediano in reparto affollato | — | rendimento, jolly | Ultimi slot | — |
| **Samuele Ricci** | Milan | ballottaggio | Rotazione in mediana | — | rendimento, jolly | Solo a prezzo basso | — |
| **Aboukhlal** | Torino | ballottaggio | Profilo offensivo | — | offensivo, jolly | Upside se trova minuti | — |
| **Fini** | Frosinone | no | Rotazione | — | jolly | Leghe molto numerose | — |
| **Messias** | Genoa | ballottaggio | Trequartista/esterno con qualità sui piazzati | — | piazzati, offensivo, jolly | Solo se il prezzo è minimo | Minutaggio incerto. |
| **Chakvetadze** | Udinese | infortunato | Trequartista/ala di qualità | — | assist, infortunato, jolly | Scommessa tecnica con rischio fisico | — |
| **Ciurria** | Monza | ballottaggio | Jolly sulle corsie/trequarti | — | duttilita, jolly | Ultimi slot | — |
| **Duncan** | Venezia | no | Centrocampista d'esperienza | — | rendimento, jolly | Solo leghe profonde | — |
| **Fadera** | Cagliari | ballottaggio | Esterno offensivo | — | offensivo, jolly | Ultimi slot ad upside | — |
| **Musah** | Milan | no | Rotazione in mediana/corsia | — | duttilita, jolly | Solo leghe profonde | — |
| **Ordonez C.** | Parma | ballottaggio | Giovane centrocampista | — | talento, jolly | Ultimi slot | — |
| **Venturino** | Genoa | infortunato | Giovane offensivo | — | talento, infortunato, jolly | Solo prospettiva | — |
| **Anjorin** | Torino | ballottaggio | Rotazione | — | jolly | Ultimi slot | — |
| **Comotto** | Milan | no | Giovane centrocampista | — | talento, jolly | Poco spazio iniziale | — |
| **Fofana Sa.** | Lecce | ballottaggio | Rotazione | — | jolly | Ultimi slot | — |
| **Ilic** | Torino | ballottaggio | Centrocampista tecnico | — | rendimento, jolly | Può portare voto, ma concorrenza | — |
| **Kaba** | Lecce | no | Dietro nelle gerarchie | — | jolly | Solo leghe profonde | — |
| **Przyborek** | Lazio | no | Giovane da rotazioni | — | talento, jolly | Ultimi slot di leghe profonde | — |
| **Zarraga** | Udinese | ballottaggio | Rotazione in mediana | — | jolly | Voto non garantito | — |

### A RISCHIO — 14

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Almqvist** | Parma | ballottaggio | Gerarchie non consolidate | — | rischio | Solo pochi crediti | — |
| **Gelli F.** | Frosinone | no | Dietro nelle gerarchie | — | rischio | Evitabile salvo cambi | — |
| **Sulemana I.** | Atalanta | no | Minutaggio limitato | — | rischio | Solo leghe molto profonde | — |
| **Boloca** | Sassuolo | infortunato | Situazione fisica/gerarchie da verificare | — | rischio, infortunato | Da monitorare | — |
| **El Azzouzi O.** | Bologna | ballottaggio | Può avere minuti ma gerarchie incerte | — | rischio | Ultimi slot | — |
| **Lipani** | Sassuolo | ballottaggio | Può giocare molto durante l'assenza di Ismael Koné | — | rischio, value-temporaneo | Value temporaneo; da rivalutare al rientro di Koné | — |
| **Maleh** | Lecce | ballottaggio | Può partire titolare ma concorrenza elevata | — | rischio | Solo prezzo basso | — |
| **Belahyane** | Lazio | no | Rotazione | — | rischio | Ultimi slot | — |
| **Camara A.** | Udinese | no | Poco spazio iniziale | — | rischio | Evitabile | — |
| **Cremaschi** | Parma | ballottaggio | Rotazione | — | rischio | Ultimi slot | — |
| **El Azzouzi A.** | Frosinone | no | Gerarchie basse | — | rischio | Evitabile | — |
| **Iannoni** | Sassuolo | ballottaggio | Rotazione | — | rischio | Ultimi slot | — |
| **Lahdo** | Como | no | Troppa concorrenza offensiva | — | rischio | Evitabile salvo cambi | — |
| **Liteta** | Cagliari | no | Minutaggio limitato | — | rischio | Solo leghe profondissime | — |

### DA EVITARE — 9

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Cichella** | Frosinone | no | Gerarchie basse | — | da-evitare | Da evitare | — |
| **Alphadjo Cissè** | Milan | no | Giovane talento ma pochissimo spazio previsto | — | da-evitare, talento | Da evitare nell'asta standard | Interessante solo in ottica futura. |
| **Dagasso** | Venezia | ballottaggio | Giovane con concorrenza elevata | — | da-evitare | Da evitare salvo cambi di gerarchia | — |
| **Foe Ondoa** | Monza | ballottaggio | Può avere minuti ma basso appeal fanta | — | da-evitare | Da evitare nelle leghe standard | — |
| **Forson O.** | Monza | no | Gerarchie basse | — | da-evitare | Da evitare | — |
| **Gorter** | Lecce | ballottaggio | Rotazione | — | da-evitare | Da evitare nelle leghe standard | — |
| **Kone B.** | Frosinone | no | Gerarchie basse | — | da-evitare | Da evitare | — |
| **Laerke** | Lecce | no | Minutaggio molto limitato | — | da-evitare | Da evitare | — |
| **Mathis Mout** | Monza | ballottaggio | Giovane classe 2007, può trovare qualche titolarità | — | da-evitare, talento | Profilo ancora troppo acerbo per l'asta standard | Separare titolarità reale da appetibilità fantacalcistica. |

### MERCATO — 4

| Giocatore | Squadra | Titolarità | Gerarchia / ruolo | Dati disponibili | Tags | Strategia asta | Note |
|---|---|---|---|---|---|---|---|
| **Youssouf Fofana** | Milan | mercato | Fuori dalle prime gerarchie; possibile cessione | — | mercato | Da rivalutare solo dopo eventuale trasferimento | Una nuova squadra da titolare può cambiarne completamente il valore. |
| **Douglas Luiz** | Juventus | mercato | Poco spazio nelle gerarchie attuali | — | mercato | Destinazione decisiva per il fantacalcio | — |
| **Folorunsho** | Napoli | mercato | Fuori dalle prime scelte | — | mercato | Da monitorare fino alla chiusura del mercato | — |
| **Miretti** | Juventus | mercato | Concorrenza enorme | — | mercato | Interessante solo se cambia squadra e trova titolarità | — |

## 5. Fasce nell'ordine corretto

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

Con filtro `Tutti` mantenere questo ordine gerarchico. All'interno di ogni fascia mantenere l'ordine del dataset.

## 6. Pagina `/centrocampisti`

La pagina deve mantenere lo stesso design e comportamento delle pagine già esistenti `/portieri` e `/difensori`.

### Ricerca

Campo `Cerca centrocampista...` con ricerca case-insensitive almeno su:
- nome
- nome breve
- squadra

### Filtri

Filtro fascia con tutte le 20 categorie presenti in questo documento.

Filtro titolarità:
- Tutti
- Titolare
- Ballottaggio
- Riserva
- Infortunato
- Mercato

Se l'architettura esistente supporta già i tag, filtri utili:
- Bonus
- Offensivo
- Trequartista
- Rigorista
- Punizioni
- Corner
- Inserimenti
- Rendimento
- Low Cost
- Scommessa
- Infortunato
- Mercato

Aggiungere anche `Solo preferiti` riutilizzando il sistema già esistente.

### Contatore

Con nessun filtro deve mostrare `186 centrocampisti`. Il numero deve aggiornarsi quando si applicano ricerca o filtri.

## 7. Tabella

Colonne minime:

| Fascia | Giocatore | Squadra | Titolare | Gerarchia | Dati | Strategia asta |
|---|---|---|---|---|---|---|

La colonna `Dati` deve mostrare solo le statistiche realmente disponibili, in forma sintetica. Se nessun dato è disponibile mostrare `—`.

Su mobile riutilizzare la soluzione responsive già adottata nelle altre pagine, preferibilmente card se la tabella diventa troppo larga.

## 8. Dettaglio giocatore

Cliccando sul giocatore aprire lo stesso tipo di dettaglio già usato per Portieri/Difensori. Mostrare:
- nome
- squadra
- fascia
- titolarità
- gerarchia/ruolo reale
- statistiche disponibili
- strategia asta individuale
- note
- tags

Quando disponibili, evidenziare rigori, punizioni e corner.

Valutazioni opzionali da 1 a 5, solo se già previste nell'architettura:
- Bonus
- Titolarità
- Rendimento

Non inventare stelle o valori se non sono definiti.

## 9. Preferiti

Riutilizzare il sistema già esistente. Possibili chiavi:

```js
favorite-midfielders
```

oppure una struttura generica unica per tutti i ruoli. I preferiti devono persistere dopo il refresh.

## 10. Coerenza architetturale

Non creare componenti duplicati come `MidfielderTable` o `MidfielderCard` se esistono componenti generici come `PlayerTable`, `PlayerCard`, `PlayerDetail`, `Filters`, `SearchBar`, `FavoriteButton`.

La nuova pagina non deve rompere `/portieri` e `/difensori`.

## 11. Home e Navbar

Attivare la card `Centrocampisti` in Home e collegarla a `/centrocampisti`. Aggiungere `Centrocampisti` alla navbar se non presente.

NON aggiungere ancora `Strategie Centrocampisti`.

## 12. Validazione obbligatoria

Prima di terminare controllare:

```js
const expectedCount = 186;

if (centrocampisti.length !== expectedCount) {
  console.error(
    `Dataset centrocampisti incompleto: ${centrocampisti.length}/${expectedCount}`
  );
}

const ids = centrocampisti.map((player) => player.id);
if (new Set(ids).size !== ids.length) {
  console.error("Sono presenti ID duplicati nel dataset centrocampisti");
}
```

Verificare inoltre:
- 186 giocatori totali
- 20 fasce
- nessun duplicato
- nessun `id` duplicato
- nessun giocatore senza squadra
- nessun giocatore senza fascia
- ricerca funzionante
- filtri funzionanti
- preferiti persistenti
- dettaglio funzionante
- responsive funzionante
- `/portieri` e `/difensori` ancora funzionanti
- `npm run build` senza errori

## 13. Cosa NON implementare in questa fase

- `/strategie/centrocampisti`
- strategie di costruzione del centrocampo
- budget del reparto
- piani A/B/C
- combinazioni di centrocampisti
- asta live
- backend
- database
- autenticazione
- API esterne

La fase corrente è esclusivamente: **DATABASE COMPLETO + TABELLA + RICERCA + FILTRI + PREFERITI + DETTAGLIO**.