
export function randomNumber() {
    Math.ceil(Math.random() * 20);

}

export function compareNumbers(guess, correctNumber) {
    if (typeof guess === Number && guess === correctNumber) {
        return 0;
    } else if
    (typeof guess === Number && guess > correctNumber) {
        return 1;
    }
    else if (typeof guess === Number && guess < correctNumber) {
        return -1;
    }
}

export function highOrLow(result) {
    if (result === 1) {
        return ('too high ya dingus!');
    } else if (result === -1) {
        return ('too low ya dingus!');
    }
}
