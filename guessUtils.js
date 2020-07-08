
export function randomNumber() {
    Math.ceil(Math.random() * 20);

}

export function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) {
        return 0;
    } else if
    (guess > correctNumber) {
        return 1;
    }
    else if (guess < correctNumber) {
        return -1;
    }
}

//highOrLow function I haven't figured out how to use yet
/*export function highOrLow(result) {
    if (result === 1) {
        return ('too high ya dingus!');
    } else if (result === -1) {
        return ('too low ya dingus!');
    }
}*/


