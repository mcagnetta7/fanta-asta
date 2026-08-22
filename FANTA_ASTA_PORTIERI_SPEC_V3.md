# Fanta Asta 2026/27 — Portieri V3

## 1. Scopo

Questo documento è la **nuova source of truth** per ricostruire da zero la pagina `/portieri` della web app **Fanta Asta 2026/27**.

**Ignorare la precedente specifica Portieri.** Questa V3 sostituisce integralmente il vecchio dataset per la pagina Portieri.

In questa fase NON va ricostruita `/strategie/portieri`: le strategie della porta verranno rifatte successivamente da zero.

La base delle fasce è la guida SOS Fanta aggiornata fornita dall'utente. Le colonne `stato`, `gerarchia`, `lettura incrociata` e `note` incorporano anche gli aggiornamenti di campo e il confronto con altre guide/gerarchie al **22 agosto 2026**.

## 2. Completezza

Il nuovo dataset operativo deve contenere **30 profili**:

- 27 profili presenti nella guida SOS di base;
- 2 profili aggiunti perché gli aggiornamenti della 1ª giornata li rendono direttamente rilevanti: Pizzignacco e Diego Mascardi;
- 1 profilo di mercato da monitorare: Lucas Perri.

```js
portieri.length === 30
```

### Conteggio categorie

| Categoria | N. |
|---|---:|
| SUPER TOP | 1 |
| TOP | 5 |
| SEMITOP | 1 |
| FASCIA ALTA | 4 |
| JOLLY 1ª FASCIA | 2 |
| FASCIA MEDIA | 2 |
| SOPRA AI LOW COST | 1 |
| JOLLY 2ª FASCIA | 3 |
| LOW COST 1ª FASCIA | 2 |
| LOW COST 2ª FASCIA | 1 |
| LEGHE NUMEROSE | 2 |
| JOLLY 3ª FASCIA | 2 |
| MERCATO | 2 |
| EXTRA AGGIORNAMENTI | 2 |
| **TOTALE** | **30** |

Le categorie `MERCATO` ed `EXTRA AGGIORNAMENTI` sono volutamente separate dalle fasce SOS tradizionali.

## 3. Stati normalizzati

Usare nel dataset:

```text
si
ballottaggio
no
mercato
```

La UI può renderli come `TITOLARE`, `BALLOTTAGGIO`, `RISERVA`, `MERCATO`.

## 4. Profilo fantasy

Usare il campo `profilo` per distinguere rapidamente:

- `MOD` = valore soprattutto per modificatore/voti;
- `INV` = valore soprattutto per clean sheet/imbattibilità;
- `MOD + INV` = profilo completo.

Non trasformare questa etichetta in una statistica ufficiale.

## 5. Struttura dati consigliata

```js
{
  id,
  nome,
  nomeBreve,
  squadra,
  ruolo: "P",
  fascia,
  stato,
  gerarchia,
  statistiche: {
    presenze,
    golSubiti,
    cleanSheet,
    rigoriParati,
    assist
  },
  profilo,
  rigori,
  valutazioni: {
    modificatore,
    cleanSheet,
    titolarita
  },
  rischio,
  tags,
  strategia,
  letturaIncrociata,
  note
}
```

Per dati sconosciuti usare `null`, NON `0`.

## 6. Dataset completo — 30 profili

### SUPER TOP — 1

| Portiere | Squadra | Stato | Gerarchia | Dati disponibili | Profilo | Rigori | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|---|
| **Mile Svilar** | Roma | si | 1° Svilar · 2° Gollini | 38 P · 31 GS · 18 CS | MOD + INV | Non è specialista: 4 rigori parati su 31 in carriera | 1° slot assoluto; può essere il portiere più pagato dell'asta | Confermato al vertice da tutte le letture principali | Nessun bisogno reale di comprare il vice in leghe standard. |

### TOP — 5

| Portiere | Squadra | Stato | Gerarchia | Dati disponibili | Profilo | Rigori | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|---|
| **Mike Maignan** | Milan | si | 1° Maignan · 2° Torriani · 3° Terracciano | 37 P · 35 GS · 13 CS · 2 rigori parati | MOD + INV | Ottimo para-rigori; 2 parati nell'ultima stagione | 1° slot pieno; garanzia di rendimento e clean sheet | Top confermato; il cambio importante riguarda il vice: Torriani ha superato Terracciano | Titolarità molto solida. |
| **Josep Martinez** | Inter | ballottaggio | 1° Martinez · 2° Provedel · 3° Di Gennaro | Dato personale 25/26 poco significativo da vice; Inter 4ª miglior difesa | INV | Da verificare | 1° slot come porta Inter, ma meglio acquistarlo insieme a Provedel | SOS lo considera Top; la 1ª giornata ha confermato Martinez titolare, ma Provedel è un secondo di livello e il gap non è enorme | Non trattarlo come titolare blindato alla Svilar/Maignan. |
| **Marco Carnesecchi** | Atalanta | si | 1° Carnesecchi · 2° Sportiello · 3° Vismara | 37 P · 35 GS · 13 CS · 2 rigori parati | MOD | 2 rigori parati nel 2025/26 | 1° slot; ottimo soprattutto con modificatore | SOS Top; altre guide leggermente più prudenti ma rendimento individuale molto alto | L'arrivo di Sarri può aumentare la solidità difensiva. |
| **Jean Butez** | Como | si | 1° Butez · 2° Tornqvist · 3° Vigorito | 38 P · 29 GS · 19 CS · 1 rigore parato · 1 assist | INV | 1 rigore parato nel 2025/26 | 1° slot premium; uno dei migliori per clean sheet | Confermato Top; 19 clean sheet sono il miglior dato della scorsa Serie A | Champions può portare più rotazioni di squadra, ma non mette in dubbio il posto. |
| **Guglielmo Vicario** | Juventus | si | 1° Vicario · 2° Perin · 3° Pinsoglio | Tottenham: 31 P Premier · 50 GS | INV | Da verificare | 1° slot; valore legato alla porta Juventus più che ai numeri 25/26 | Top SOS; altre guide leggermente più caute ma la titolarità è certa | Arriva per sostituire Di Gregorio, che ha lasciato la Serie A. |

### SEMITOP — 1

| Portiere | Squadra | Stato | Gerarchia | Dati disponibili | Profilo | Rigori | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|---|
| **Alex Meret** | Napoli | ballottaggio | Meret leggermente davanti a Milinkovic-Savic | 2025/26 condizionato da perdita del posto e infortunio; 1ª giornata 26/27 da titolare con clean sheet | INV | Da verificare | Quasi Top come valore della porta; consigliata fortemente la coppia con Milinkovic-Savic | SOS Semitop; altre guide lo alzano. La 1ª giornata ha rafforzato la sua posizione | Non considerare ancora chiusa la gerarchia. |

### FASCIA ALTA — 4

| Portiere | Squadra | Stato | Gerarchia | Dati disponibili | Profilo | Rigori | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|---|
| **David De Gea** | Fiorentina | si | 1° De Gea · 2° Christensen | 37 P · 49 GS · 10 CS | MOD | Da verificare | Primo portiere / co-top; possibile value se i Top salgono troppo | SOS Fascia Alta; altre guide lo collocano anche in prima fascia | La Fiorentina ha rinforzato la rosa: margine per migliorare i numeri. |
| **Lukasz Skorupski** | Bologna | si | 1° Skorupski · 2° Pessina | 18 P · 15 GS · 7 CS | MOD + INV | Da verificare | Ottimo compromesso; primo portiere affidabile senza prezzo da Top | Gerarchia più netta dopo la partenza di Ravaglia; niente coppe europee | Rischio principale: disponibilità fisica. |
| **Christos Mandas** | Lazio | ballottaggio | Mandas leggermente davanti a Motta | — | MOD | Da verificare | Buon primo portiere, ma meglio acquistarlo insieme a Motta | SOS Fascia Alta; altre guide lo valutano anche da prima fascia | Gap ridotto con Motta: non comprarlo come titolare blindato. |
| **Maduka Okoye** | Udinese | si | 1° Okoye · 2° Padelli · 3° Piana | 30 P · 32 GS · 1 rigore parato · 1 assist | MOD | 1 rigore parato nel 2025/26 | Ottimo da alternare; molto interessante con modificatore | Titolarità confermata anche dalla 1ª giornata | Udinese tra le provinciali più solide sulla carta. |

### JOLLY 1ª FASCIA — 2

| Portiere | Squadra | Stato | Gerarchia | Dati disponibili | Profilo | Rigori | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|---|
| **Vanja Milinkovic-Savic** | Napoli | ballottaggio | 2° dietro Meret, distanza ridotta | Nella passata stagione è diventato il primo portiere del Napoli durante l'assenza/perdita del posto di Meret | MOD + INV | Da verificare | Da prendere soprattutto insieme a Meret; jolly rischioso da solo | La prima giornata ha favorito Meret, ma la competizione non è chiusa | Non è un normale secondo da 1 credito. |
| **Ivan Provedel** | Inter | ballottaggio | 2° dietro Josep Martinez, ma può ritagliarsi spazio | — | INV | Da verificare | Molto importante come copertura di Martinez; non è un secondo simbolico | Arriva da anni da titolare in Serie A; aumenta il rischio individuale di Martinez | Può costare più di un normale vice. |

### FASCIA MEDIA — 2

| Portiere | Squadra | Stato | Gerarchia | Dati disponibili | Profilo | Rigori | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|---|
| **Elia Caprile** | Cagliari | si | 1° Caprile · vice da gerarchia secondaria | 38 P · 53 GS · 8 CS · 0 rigori parati | MOD | 0 rigori parati nel 2025/26 | Ottimo co-titolare o alternanza con una big; non strapagare la porta Cagliari | Altre guide lo apprezzano molto per modificatore; 1ª giornata 26/27 con clean sheet | Titolare sicuro e spesso chiamato a molti interventi. |
| **Wladimiro Falcone** | Lecce | si | 1° Falcone · vice non rilevante per l'asta standard | 38 P · 50 GS · 10 CS · 2 rigori parati | MOD | 2 rigori parati nel 2025/26 | Uno dei migliori portieri di provincia per modificatore | SOS Fascia Media; altre guide lo considerano molto consigliato | Non va pagato come porta di una big. |

### SOPRA AI LOW COST — 1

| Portiere | Squadra | Stato | Gerarchia | Dati disponibili | Profilo | Rigori | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|---|
| **Justin Bijlow** | Genoa | si | 1° Bijlow · 2° Stolz · 3° Sommariva | 16 P · 20 GS · 5 CS | MOD | Da verificare | Uno dei migliori value per spendere meno; ottimo in alternanza | Gerarchia chiara e confermata dalla 1ª giornata | Interessante soprattutto in casa. |

### JOLLY 2ª FASCIA — 3

| Portiere | Squadra | Stato | Gerarchia | Dati disponibili | Profilo | Rigori | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|---|
| **Giovanni Daffara** | Parma | ballottaggio | Dietro Corvi al momento | Serie B 2025/26 molto positiva; il Parma ha investito circa 6 milioni | MOD | Da verificare | Scommessa o coppia con Corvi, soprattutto in leghe numerose | La 1ª giornata ha rafforzato Corvi | Può comunque ribaltare la gerarchia nel corso della stagione. |
| **Mattia Perin** | Juventus | no | 2° Vicario · 3° Pinsoglio | — | INV | Da verificare | Handcuff di Vicario, non acquisto indipendente | Gerarchia attuale da vice | Non è necessario in tutte le leghe, ma utile per copertura completa. |
| **Edoardo Motta** | Lazio | ballottaggio | 2° dietro Mandas, distanza ridotta | Buone risposte nella passata stagione quando utilizzato | MOD | Da verificare | Molto utile insieme a Mandas; jolly interessante | La coppia Lazio è più sensata del singolo Mandas in aste prudenti | Non è un semplice terzo portiere. |

### LOW COST 1ª FASCIA — 2

| Portiere | Squadra | Stato | Gerarchia | Dati disponibili | Profilo | Rigori | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|---|
| **Arijanet Muric** | Sassuolo | ballottaggio | Muric leggermente davanti a Turati, gerarchia ancora scrivibile | 32 P · 43 GS · 6 CS · 1 rigore parato | MOD | 1 rigore parato nel 2025/26 | Low cost ad alto rischio; possibile value ma non strapagare | Altre guide lo alzano, ma mercato e concorrenza con Turati impediscono di considerarlo sicuro | Aveva manifestato volontà di non restare; situazione da monitorare. |
| **Edoardo Corvi** | Parma | si | Corvi davanti a Daffara | 17 P · 18 GS · 7 CS | MOD + INV | Da verificare | Uno dei migliori low cost attuali; interessante anche in alternanza | La titolarità alla 1ª giornata rafforza il vantaggio su Daffara | Non è comunque escluso un futuro cambio di gerarchia. |

### LOW COST 2ª FASCIA — 1

| Portiere | Squadra | Stato | Gerarchia | Dati disponibili | Profilo | Rigori | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|---|
| **Filip Stankovic** | Venezia | si | 1° Stankovic · gerarchia definita da Stroppa | Serie B: 31 GS · 16 CS | MOD | Da verificare | Ottimo 2°/3° portiere low cost; interessante con modificatore | Altre guide lo alzano di fascia; titolarità ormai definita | Neopromossa: prevedibile aumento dei gol subiti rispetto alla B. |

### LEGHE NUMEROSE — 2

| Portiere | Squadra | Stato | Gerarchia | Dati disponibili | Profilo | Rigori | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|---|
| **Demba Thiam** | Monza | ballottaggio | Gerarchia riaperta con Pizzignacco | Serie B: 38 P · 32 GS · 16 CS | MOD | Da verificare | Non comprarlo più come titolare certo; solo a prezzo basso e consapevoli del ballottaggio | Downgrade importante: Pizzignacco ha iniziato titolare la 1ª giornata | La vecchia gerarchia SOS lo dava primo, il campo l'ha rimessa in discussione. |
| **Lorenzo Palmisani** | Frosinone | ballottaggio | Palmisani leggermente avanti / dualismo con Desplanches | Serie B: 38 P · 34 GS · 15 CS | MOD | Da verificare | Scommessa da leghe numerose; non amo la coppia Frosinone | Gerarchia aperta, valore soprattutto da modificatore | Squadra da lotta salvezza. |

### JOLLY 3ª FASCIA — 2

| Portiere | Squadra | Stato | Gerarchia | Dati disponibili | Profilo | Rigori | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|---|
| **Sebastiano Desplanches** | Frosinone | ballottaggio | Insegue Palmisani ma il dualismo è aperto | Serie B: 25 P · 48 GS · 2 CS prima di un grave stop muscolare | MOD | Da verificare | Ultimo slot scommessa; meglio prudenza finché non emerge una gerarchia | Annata precedente complicata; Palmisani parte con vantaggio per la promozione | Non consigliata la coppia in leghe standard. |
| **Stefano Turati** | Sassuolo | ballottaggio | Leggermente dietro Muric | — | MOD | Da verificare | Può diventare value se cambia la gerarchia o Muric parte | Situazione molto sensibile a mercato e scelte di Aquilani | Da monitorare, non titolare certo. |

### MERCATO — 2

| Portiere | Squadra | Stato | Gerarchia | Dati disponibili | Profilo | Rigori | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|---|
| **Alberto Paleari** | Torino | mercato | Mascardi lo ha superato; Torino cerca/valuta un nuovo titolare | — | — | Da verificare | Non comprare finché la situazione non si chiarisce | Downgrade netto rispetto alle vecchie ipotesi: non è oggi il titolare | Possibile uscita. |
| **Lucas Perri** | Torino* | mercato | Possibile nuovo titolare se l'operazione si chiude | — | MOD + INV | Da verificare | Non assegnare una fascia definitiva finché non è ufficiale; se arriva diventa molto rilevante | Operazione di mercato avanzata ma da trattare come non ufficiale nel dataset operativo | Squadra indicata come Torino* proprio per segnalare situazione non ufficiale. |

### EXTRA AGGIORNAMENTI — 2

| Portiere | Squadra | Stato | Gerarchia | Dati disponibili | Profilo | Rigori | Strategia asta | Lettura incrociata | Note |
|---|---|---|---|---|---|---|---|---|---|
| **Pizzignacco** | Monza | ballottaggio | Ha iniziato titolare la 1ª giornata davanti a Thiam | — | MOD | Da verificare | Jolly/ultimo slot; da monitorare perché può diventare il titolare Monza | Non era nella lista SOS principale ma il campo lo rende ormai rilevante | Non assegnargli autonomamente una fascia SOS tradizionale. |
| **Diego Mascardi** | Torino | si | Titolare attuale davanti a Paleari, in attesa degli sviluppi di mercato | 16 presenze in Serie B con lo Spezia; precampionato positivo | MOD | Da verificare | Scommessa da 1 finché non arriva un nuovo portiere; valore molto sensibile al mercato | Ha superato Paleari ed è stato annunciato titolare per la 1ª giornata | Se arriva Lucas Perri, diventa presumibilmente il vice. |

## 7. Porte che richiedono particolare prudenza

### Inter

`Josep Martinez + Ivan Provedel` va trattato come **pacchetto Top**. Martinez parte davanti, ma Provedel non è un secondo simbolico. Il singolo Martinez ha più rischio di gerarchia rispetto a Svilar/Maignan/Butez.

### Napoli

`Meret + Milinkovic-Savic` è una delle coppie più interessanti. La 1ª giornata ha rafforzato Meret, ma la competizione non è ancora considerata chiusa.

### Lazio

`Mandas + Motta`: Mandas parte leggermente davanti, ma il gap è ridotto. Se si vuole la porta Lazio, la coppia è più prudente del singolo.

### Parma

`Corvi > Daffara` oggi. La 1ª giornata ha rafforzato Corvi. Daffara rimane però un investimento importante del club e può riaprire il discorso durante la stagione.

### Sassuolo

`Muric > Turati` solo leggermente. Mercato e scelte tecniche possono cambiare rapidamente la gerarchia.

### Monza

Non considerare più Thiam titolare certo. Pizzignacco ha iniziato la 1ª giornata e la gerarchia è da considerare riaperta.

### Frosinone

`Palmisani ≈ Desplanches`, con Palmisani leggermente avanti. La coppia non è raccomandata in leghe standard perché occupa due slot per una porta da lotta salvezza.

### Torino

Situazione più instabile del reparto: Mascardi è oggi davanti a Paleari, ma il club può inserire un nuovo titolare. Lucas Perri deve restare `MERCATO` finché non è ufficiale.

## 8. Profili da evidenziare nella UI

### Migliore investimento assoluto
`Mile Svilar`

### Top clean sheet
`Svilar`, `Butez`, `Maignan`, `Carnesecchi`

### Value
`Meret`, `Falcone`, `Caprile`, `Bijlow`, `Corvi`, `Filip Stankovic`

### Modificatore
`Carnesecchi`, `De Gea`, `Mandas`, `Okoye`, `Caprile`, `Falcone`, `Bijlow`, `Filip Stankovic`

### Attenzione
`Josep Martinez`, `Meret`, `Mandas`, `Muric`, `Thiam`, `Palmisani`, `Paleari`, `Mascardi`

## 9. Pagina `/portieri`

La pagina deve essere ricostruita usando la stessa architettura generica delle altre pagine ruolo, ma sostituendo completamente il vecchio dataset Portieri.

Titolo: `Portieri 2026/27`

Sottotitolo indicativo: `Fasce, gerarchie, clean sheet e consigli per l'asta`

## 10. Ricerca

Campo `Cerca portiere...` con ricerca case-insensitive su nome, nome breve e squadra.

## 11. Filtri

### Fascia/categoria

Mostrare tutte le 14 categorie di questa V3, comprese `MERCATO` ed `EXTRA AGGIORNAMENTI`.

### Stato

`Tutti`, `Titolare`, `Ballottaggio`, `Riserva`, `Mercato`.

### Profilo

Se l'architettura lo consente: `MOD`, `INV`, `MOD + INV`.

### Tags utili

`Top`, `Value`, `Modificatore`, `Clean sheet`, `Coppia consigliata`, `Gerarchia aperta`, `Mercato`, `Extra aggiornamento`.

## 12. Contatore

Con nessun filtro: `30 portieri`.

## 13. Tabella

| Fascia | Portiere | Squadra | Stato | Gerarchia | Dati | Profilo | Strategia asta |
|---|---|---|---|---|---|---|---|

La tabella deve rimanere leggibile: la `letturaIncrociata` e le note più lunghe possono stare principalmente nel dettaglio giocatore.

## 14. Dettaglio portiere

Mostrare:

- nome e squadra;
- fascia/categoria;
- stato;
- gerarchia completa;
- dati disponibili;
- profilo MOD/INV;
- informazioni sui rigori;
- strategia asta individuale;
- lettura incrociata;
- note;
- tag;
- eventuale alert `GERARCHIA APERTA` o `MERCATO`.

Valutazioni a stelle opzionali solo se il sistema esistente le supporta. Non inventare valori.

## 15. Casi speciali UI

### Lucas Perri

Mostrare chiaramente che `Torino*` è una possibile destinazione non ufficiale. Non trattarlo come giocatore Torino definitivo finché il dataset non viene aggiornato manualmente.

### Pizzignacco e Mascardi

Usare categoria `EXTRA AGGIORNAMENTI`; non inventare una fascia SOS tradizionale.

### Di Gregorio

NON deve essere nel dataset: ha lasciato la Serie A.

## 16. Preferiti

Riutilizzare il sistema generico esistente. Non creare un secondo sistema di localStorage.

## 17. Home e Navbar

La pagina Portieri esiste già: mantenere il link `/portieri`. Non cambiare la struttura generale della navigazione salvo il minimo necessario.

## 18. Strategie Portieri

**NON modificare `/strategie/portieri` in questa fase.**

La vecchia pagina strategie può risultare temporaneamente non allineata: verrà ricostruita successivamente da zero con una nuova specifica.

Non usare la vecchia strategia come source of truth per correggere il nuovo dataset.

## 19. Validazione obbligatoria

```js
const expectedCount = 30;

if (portieri.length !== expectedCount) {
  console.error(
    `Dataset portieri V3 incompleto: ${portieri.length}/${expectedCount}`
  );
}

const ids = portieri.map((p) => p.id);
if (new Set(ids).size !== ids.length) {
  console.error("ID duplicati nel dataset portieri V3");
}
```

Verificare anche i conteggi categoria esatti:

- `SUPER TOP`: 1
- `TOP`: 5
- `SEMITOP`: 1
- `FASCIA ALTA`: 4
- `JOLLY 1ª FASCIA`: 2
- `FASCIA MEDIA`: 2
- `SOPRA AI LOW COST`: 1
- `JOLLY 2ª FASCIA`: 3
- `LOW COST 1ª FASCIA`: 2
- `LOW COST 2ª FASCIA`: 1
- `LEGHE NUMEROSE`: 2
- `JOLLY 3ª FASCIA`: 2
- `MERCATO`: 2
- `EXTRA AGGIORNAMENTI`: 2

## 20. Cosa NON fare

- non riutilizzare il vecchio dataset Portieri come base dati;
- non reinserire Di Gregorio;
- non inventare fasce SOS per Pizzignacco/Mascardi;
- non rendere Lucas Perri ufficialmente del Torino;
- non trasformare gerarchie aperte in certezze;
- non ricostruire ancora Strategie Portieri;
- non aggiungere backend/database/login/API;
- non fare commit/push/modifiche Git.

## 21. Definition of Done

La fase è completa quando:

- `/portieri` usa soltanto la V3;
- `portieri.length === 30`;
- tutte le 14 categorie sono presenti;
- Di Gregorio non è presente;
- Pizzignacco e Mascardi sono presenti come Extra Aggiornamenti;
- Lucas Perri è presente solo come Mercato;
- ricerca e filtri funzionano;
- contatore default = 30;
- preferiti persistono;
- dettaglio portiere funziona;
- gerarchie aperte sono visibili;
- dati mancanti non sono inventati;
- responsive funziona;
- Difensori/Centrocampisti/Attaccanti non subiscono regressioni;
- `/strategie/portieri` non viene modificata;
- `npm run build` termina senza errori.