'use strict'

// QUERY SELECTORS
const Form = document.querySelector('.js__form');
const buttonForm = document.querySelector('.js__buttonForm');
const userNumberInput = document.querySelector('.js__userNumberInput');
const messageClue = document.querySelector('.js__messageClue');
const counter = document.querySelector('.js__counter');
const resetButton = document.querySelector('.js__resetButton');

// VARIABLES DE DATOS

const randomNumber= getRandomNumber(100);
console.log(randomNumber);
let numbercounter = '';

// FUNCIONES

//Función para generar el número aleatorio del ordenador
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    };

//Función para obtener el número que introduce la usuaria
function getUserNumber (){
    return parseInt(userNumberInput.value);
    };

//Función para comparar el número de la usuaria con el que genera el ordenador
function checkNumbers(userNumber,randomNumber){

    if(userNumber < 1 || userNumber > 100){
        messageClue.innerHTML = 'El número debe estar entre 1 y 100.';
    } else if (userNumber < randomNumber){
        messageClue.innerHTML = '¡Ups! Demasiado bajo.';
    } else if (userNumber > randomNumber){
        messageClue.innerHTML = '¡Ups! Demasiado alto.';
    } else{
        messageClue.innerHTML = '¡Enhorabuena! ¡Ya lo tienes!';
    }};

   //Función para actualizar el contador de intentos
  function updateCounter(){
     numbercounter++
    counter.innerHTML = numbercounter;
};

//Función para resetear el juego


//FUNCIONES DE EVENTOS(HANDLERS)

//Función manejadora del click del botón
function handleClickButtonForm(event) {
// 1. Traemos el número de la usuaria
    const userNumber = getUserNumber();
// 2. Comparamos con el número aleatorio del ordenador
//      - Ponemos la pista
    checkNumbers(userNumber,randomNumber);
// 3.Actualizamos contador de intentos
    updateCounter();
};

//Función manejadora del click del botón de reset

// EVENTOS

buttonForm.addEventListener('click', handleClickButtonForm);
resetButton.addEventListener('click',handleclickResetButton);

// AL CARGAR LA PÁGINA

Form.addEventListener('submit',(event) =>{
    event.preventDefault();
})

    