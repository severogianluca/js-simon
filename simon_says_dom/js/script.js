let elementCountdown = document.getElementById ('countdown');
let elementAnswers = document.getElementById('answers-form');
let elementInstructions = document.getElementById('instructions')
let elementNumber = document.getElementById('numbers-list');

let count = 10;
let countDown = setInterval(function () {
    elementCountdown.innerText = count;
    count--;
    
    if (count === -1) {
        elementNumber.classList.add('d-none');
        elementAnswers.classList.remove('d-none');
        elementInstructions.innerText = `Inserisci i numeri che ricordi (l'ordine non è importante!)`
        clearInterval(countDown);
    }
}, 1000);



function randomNumber (){
    return Math.ceil(Math.random() * 50);
}

for(let i = 0; i < 5; i++){
    let number = randomNumber();
    console.log(number);
    
    let listItem = document.createElement('li'); // Crea un <li>
    listItem.textContent = number; // Imposta il testo del <li>
    elementNumber.appendChild(listItem); // Aggiunge il <li> alla <ul>
    
}