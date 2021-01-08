export function getSum(number1, number2) {
    return number1 + number2;
}

export function getDiff(number1, number2) {
    return number1 - number2;
}

export function getProduct(number1, number2) {
    return number1 * number2;
}

export function getQuotient(number1, number2) {
    const divResult = number1 / number2;
    const divResultRounded = Math.round(divResult * 100.0) / 100.0;
    return divResultRounded;
}