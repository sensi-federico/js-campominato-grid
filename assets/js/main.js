// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

function start () {

    const rowEl = document.querySelector ('.row');

    for (let i = 1; i <= 100; i++) {

        const markUp = `<div class="col" src="" alt="">${i}</div>`
        rowEl.insertAdjacentHTML('beforeend', markUp);
    }



}

start();

// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
// ed emetto un messaggio in console con il numero della cella cliccata.