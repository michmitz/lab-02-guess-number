// import functions and grab DOM elements
import { compareNumbers, randomNumber } from './guessUtils.js';

const userInput = document.querySelector('#input');
console.log(userInput);

const myButton = document.querySelector('#button');
console.log(myButton);

const resultDisplay = document.querySelector('#display-result');
console.log(resultDisplay);

const numberCompDisplay = document.querySelector('#number-comparison');
console.log(resultDisplay);



// initialize state

let triesLeft = 4;


// set event listeners to update state and DOM

myButton.addEventListener('click', () => {
    const guess = Number(userInput.value);
    console.log('guess', guess);
    const correctNumber = randomNumber();
    const result = compareNumbers(guess, correctNumber);

    triesLeft--;

    if (result === 0) {
        resultDisplay.textContent = ('You won a Tesla!');
        myButton.style.display = 'none';
    } 

    if (result === 1) {
        numberCompDisplay.textContent = ('Your guess was too high.');
    }

    if (result === -1) {
        numberCompDisplay.textContent = ('Your guess was too low.');
    }
    
    if (triesLeft > 1 && result !== 0) {
        resultDisplay.textContent = `You have ${triesLeft} tries left.`;
        console.log('tries left', triesLeft);
    }

    if (triesLeft === 1 && result !== 0) {
        resultDisplay.textContent = `You have ${triesLeft} try left.`;
        console.log('one try left', triesLeft);
    }

    if (triesLeft === 0 && result !== 0) {
        resultDisplay.textContent = `You lost, sorry my dude. Refresh the page to try again!`;
        myButton.style.display = 'none';
    }
    

});

