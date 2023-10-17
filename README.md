## Descrizione
Visualizzare in pagina 5 numeri casuali (anche tramite alert).
Da lì parte un timer di 30 secondi. (durante il quale i numero non devono essere visibili all’utente)
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

# Pseudo codice
- Visualizzare in pagina 5 numeri casuali (anche tramite alert).
  - generare 5 numeri casuali e racchiuderli in un array
  - stamparli uno ad uno in un alert
    - conferto l'array in una stringa
    - stampo la variabile contentente la stringa nell'alert
- Da lì parte un timer di 30 secondi, dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()
  - dichiarare un setTimeOut
    - all'interno creare un ciclo 
      - quelli giusti li prende e li immagazzina in un array
      - incrementa un indice
    - converti in stringa i numeri indovinati

    - li stampi in un alert con il numero di numeri indovinati e la lista di quelli giusti
