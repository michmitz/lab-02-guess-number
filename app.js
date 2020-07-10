// import functions and grab DOM elements
import { compareNumbers, randomNumber, highOrLow } from './guessUtils.js';

const userInput = document.querySelector('#input');
const myButton = document.querySelector('#button');
const resultDisplay = document.querySelector('#display-result');
const numberCompDisplay = document.querySelector('#number-comparison');



// initialize state

let triesLeft = 4;


// set event listeners to update state and DOM

myButton.addEventListener('click', () => {
    const guess = Number(userInput.value);
    const correctNumber = randomNumber();
    const result = compareNumbers(guess, correctNumber);

    triesLeft--;

    if (result === 0) {
        resultDisplay.textContent = 'You won a Tesla!';
        myButton.style.display = 'none';
        numberCompDisplay.style.display = 'none';
    } else if (triesLeft > 1 && result !== 0) {
        resultDisplay.textContent = `You have ${triesLeft} tries left.`;
        numberCompDisplay.textContent = highOrLow(result);
    } else if (triesLeft === 1 && result !== 0) {
        resultDisplay.textContent = `You have ${triesLeft} try left.`;
        numberCompDisplay.textContent = highOrLow(result);
    } else if (triesLeft === 0 && result !== 0) {
        resultDisplay.textContent = `You lost, sorry my dude. Refresh the page to try again!`;
        myButton.style.display = 'none';
        numberCompDisplay.style.display = 'none';
    }
   
});
