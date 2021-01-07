// import functions and grab DOM elements
const input1 = document.getElementById('input-1')
const input2 = document.getElementById('input-2')
const addButton = document.getElementById('add-button')
const subButton = document.getElementById('sub-button')
const multButton = document.getElementById('mult-button')
const divButton = document.getElementById('div-button')
const result = document.getElementById('result-div')
const affirm = document.getElementById('affirmation')


// initialize state

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    // cool zone
    const inputNumber = Number(input1.value)
    const inputNumber2 = Number(input2.value)
    const addResult = inputNumber + inputNumber2

    affirm.textContent = "🧠 Mathematical!! 💪🏼"
    result.textContent = addResult
});

addButton.addEventListener('click', () => {
    // cool zone
    const inputNumber = Number(input1.value)
    const inputNumber2 = Number(input2.value)
    const addResult = inputNumber + inputNumber2

    affirm.textContent = "🧠 Mathematical!! 💪🏼"
    result.textContent = addResult
});

addButton.addEventListener('click', () => {
    // cool zone
    const inputNumber = Number(input1.value)
    const inputNumber2 = Number(input2.value)
    const addResult = inputNumber + inputNumber2

    affirm.textContent = "🧠 Mathematical!! 💪🏼"
    result.textContent = addResult
});

addButton.addEventListener('click', () => {
    // cool zone
    const inputNumber = Number(input1.value)
    const inputNumber2 = Number(input2.value)
    const addResult = inputNumber + inputNumber2

    affirm.textContent = "🧠 Mathematical!! 💪🏼"
    result.textContent = addResult
});
