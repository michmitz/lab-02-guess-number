// import functions and grab DOM elements
import { compareNumbers, randomNumber } from './guessUtils.js';

const userInput = document.querySelector('#input');
console.log(userInput);

const myButton = document.querySelector('#button');
console.log(myButton);

// initialize state

let scoreCounter = 0;


// set event listeners to update state and DOM

myButton.addEventListener('click', () => {
    const userGuess = Number(userInput);

});