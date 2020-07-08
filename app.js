// import functions and grab DOM elements
import { compareNumbers, randomNumber, highOrLow } from './guessUtils.js';

const userInput = document.querySelector('#input');
console.log(userInput);

const myButton = document.querySelector('#button');
console.log(myButton);

const resultDisplay = document.querySelector('#Display-result');
console.log(resultDisplay);


// initialize state

let triesLeft = 4;


// set event listeners to update state and DOM

myButton.addEventListener('click', () => {
    const guess = Number(userInput);
    console.log('guess', guess);
    const correctNumber = randomNumber();
    const result = compareNumbers(guess, correctNumber);
    const tooHighOrLow = highOrLow(result);

    if (result === 0) {
        resultDisplay.textContent = ('You won a Tesla!');
    } 
    
    if (triesLeft > 0 && result !== 0) {
        triesLeft--;
        resultDisplay.textContent = `You have ${triesLeft} tries left. Your guess was ${tooHighOrLow}`;
        console.log('tries left', triesLeft);
    }

    if (triesLeft === 0 && result !== 0) {
        resultDisplay.textContent = `You lost, sorry my dude.`;
    }
    

});