'use strict'

//QUERY SELECTORS
const userNumber = document.querySelector('.js__userNumber');
const gameButton = document.querySelector('.js__gameButton');
const gameMessage = document.querySelector('.js__gameMessage');
const attempsCounter = document.querySelector('.js__attempsCounter');

// VARIABLES DE DATOS

let attemps = 0; 

// FUNCIONES


//Generamos número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// EVENTOS

gameButton.addEventListener('click', (event) =>{
    event.preventDefault();
    
    const randomNumber = getRandomNumber(100);
    //Mostramos en la consola el número aleatorio que se ha generado
    console.log('número aleatorio:', randomNumber);
    //Recogemos el valor del input de la usuaria
    const userInput = parseInt(userNumber.value);

    //Comprobamos que el input contiene un número entre 0 y 100
    if(userInput < 1 || userInput > 100 || isNaN(userInput)) {
        gameMessage.innerHTML = 'El número debe estar entre 1 y 100';
    } else {
        attemps++;
        attempsCounter.innerHTML = attemps;
         // Comparamos el número de la usuaria con el aleatorio
    if(userInput > randomNumber){
        gameMessage.innerHTML = '¡Hey! Demasiado alto';
    } else if (userInput < randomNumber){
        gameMessage.innerHTML = '¡Hey! Demasiado bajo';
    } else {
        gameMessage.innerHTML = '¡Enhorabuena! Has ganado campeona!!!';
    }
    }});

    