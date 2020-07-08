// IMPORT MODULES under test here:
import { compareNumbers } from '../guessUtils.js';

// import example from '../example.js';

const test = QUnit.test;

test('should take in a number and compare it to another number, yielding 1 if higher, -1 if lower, 0 if equal', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess1 = 7;
    const guess2 = 3;
    const guess3 = 6;
    const comparedNumber1 = 3;
    const comparedNumber2 = 5;
    const comparedNumber3 = 6;

    const expected1 = 1;
    const expected2 = -1;
    const expected3 = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = compareNumbers(guess1, comparedNumber1);
    const actual2 = compareNumbers(guess2, comparedNumber2);
    const actual3 = compareNumbers(guess3, comparedNumber3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});
