
export function randomNumber() {
    Math.ceil(Math.random() * 20);

}

export function compareNumbers(guess, correctNumber) {
    if (guess === Number && guess === correctNumber) {
        return true;
    } else {
        return false;
    }
}
