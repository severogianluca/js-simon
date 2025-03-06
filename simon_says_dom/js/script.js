let elementCountdown = document.getElementById ('countdown');
let elementAnswers = document.getElementById('answers-form');
let elementInstructions = document.getElementById('instructions')
let elementNumber = document.getElementById('numbers-list');

let count = 10;
let countDown = setInterval(function () {
    elementCountdown.innerText = count;
    count--;
    // nella condizione aggiungo d-none per far sparire i numeri random
    // rimuovo il d-none per far comparire la lista di input da 
    // inserire i numeri memorizzati
    if (count === -1) {
        elementNumber.classList.add('d-none');
        elementAnswers.classList.remove('d-none');
        elementInstructions.innerText = `Inserisci i numeri che ricordi (l'ordine non è importante!)`
        clearInterval(countDown);
    }
}, 1000);


// funzione per creare num random
function randomNumber (){
    return Math.ceil(Math.random() * 50);
}

// ciclo for per stampare 5 numeri random e creare i li e poi aggiungerli alla classe ul
for(let i = 0; i < 5; i++){
    let number = randomNumber();
    console.log(number);
    
    let listItem = document.createElement('li'); 
    listItem.innerHTML = number; 
    elementNumber.appendChild(listItem); 
    
}
// utilizzo il querySelectorAll per selezionare il div che contiene tutti gli input quindi 
// prendo l'id del div con # e scrivo input per prendere i figli
let elementInputGroup = document.querySelectorAll('#input-group input');
console.log(elementInputGroup)
elementAnswers.addEventListener('submit', function(event){
    event.preventDefault();
    // creo una lista vuota per inserire i numeri degli input
    let listRisposta = [];
    for(let i = 0; i < elementInputGroup.length; i++){
        let risposta = elementInputGroup[i].value;
        // i numeri inseriti li butto dentro la nuova lista
        listRisposta.push(risposta);
    }
    console.log("Risposte inserite:", listRisposta);

})