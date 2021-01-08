import { getSum, getDiff, getProduct, getQuotient } from './mathUtils.js';

const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const result = document.getElementById('result-div');
const affirm = document.getElementById('affirmation');

export function sumClickHandler() {
    // cool zone
    const number1 = Number(input1.value);
    const number2 = Number(input2.value);
    const addResult = getSum(number1, number2);
    result.textContent = addResult;
    affirm.textContent = '🧠 Mathmatical!! 💪🏼';
}

export function diffClickHandler() {
    // cool zone
    const number1 = Number(input1.value);
    const number2 = Number(input2.value);
    const subResult = getDiff(number1, number2);
    result.textContent = subResult;
    affirm.textContent = '🧮 Subtractular!! 🤯';
}

export function productClickHandler() {
    // cool zone
    const number1 = Number(input1.value);
    const number2 = Number(input2.value);
    const multResult = getProduct(number1, number2);
    result.textContent = multResult;
    affirm.textContent = '💾 Computational!! ✨';
}

export function quotientClickHandler() {
    // cool zone
    const number1 = Number(input1.value);
    const number2 = Number(input2.value);
    const quotResult = getQuotient(number1, number2);
    result.textContent = quotResult;
    affirm.textContent = '⚡️ Algebraic!! 🤓';
}