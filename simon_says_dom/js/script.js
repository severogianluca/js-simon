let elementCountdown = document.getElementById ('countdown');
let elementAnswers = document.getElementById('answers-form');
let elementInstructions = document.getElementById('instructions')

let count = 10;
let countDown = setInterval(function () {
    elementCountdown.innerText = count;
    count--;
    
    if (count === -1) {
        elementAnswers.classList.remove('d-none')
        elementInstructions.innerText = `Inserisci i numeri che ricordi (l'ordine non è importante!)`
        clearInterval(countDown);
    }
}, 1000);


