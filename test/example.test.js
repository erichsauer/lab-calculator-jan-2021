// IMPORT MODULES under test here:
import { getSum, getDiff, getProduct, getQuotient } from '../mathUtils.js';

const test = QUnit.test;

test('returns the sum of two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 8;
    const expected2 = -4;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSum(7, 1);
    const actual2 = getSum(4, -8);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
});

test('returns the difference of two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 6;
    const expected2 = 12;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDiff(7, 1);
    const actual2 = getDiff(4, -8);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
});

test('returns the product of two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 7;
    const expected2 = -32;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getProduct(7, 1);
    const actual2 = getProduct(4, -8);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
});

test('returns the quotient of two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 7;
    const expected2 = .5;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getQuotient(7, 1);
    const actual2 = getQuotient(4, 8);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
});
