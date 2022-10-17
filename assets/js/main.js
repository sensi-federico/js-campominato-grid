// Consegna


// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
// ed emetto un messaggio in console con il numero della cella cliccata.

const containerEl = document.querySelector('.my-container');
const button = document.querySelector('.btn');

function start () {
    for (let i = 1; i <= 100; i++) {
        const markUp = `<div class="cell" src="" alt="">${i}</div>`
        containerEl.insertAdjacentHTML('beforeend', markUp);
    }

    const cells = document.querySelectorAll('.cell');
    
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.addEventListener('click', function(){
            cell.classList.toggle('bg');
            const cellNum = cell.innerHTML;
            console.log(cellNum);
        })
    }   
}
