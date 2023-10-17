## Descrizione
Visualizzare in pagina 5 numeri casuali (anche tramite alert).
Da lì parte un timer di 30 secondi. (durante il quale i numero non devono essere visibili all’utente)
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

# Pseudo codice
- Visualizzare in pagina 5 numeri casuali (anche tramite alert).
  - generare 5 numeri casuali e racchiuderli in un array
  - stamparli uno ad uno in un alert
- Da lì parte un timer di 30 secondi, dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()
  - inserire una funzione: 
    - nella funzione dichiarare un setTimeOut
    - all'interno creare un ciclo che tramite prompt prenderà i numeri e li immagazzinerà in un array
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
  - 
