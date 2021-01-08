// import functions and grab DOM elements
import { sumClickHandler, diffClickHandler, productClickHandler, quotientClickHandler } from './handlers.js';

const addButton = document.getElementById('add-button');
const subButton = document.getElementById('sub-button');
const multButton = document.getElementById('mult-button');
const divButton = document.getElementById('div-button');

// initialize state

// set event listeners to update state and DOM
addButton.addEventListener('click', sumClickHandler);

subButton.addEventListener('click', diffClickHandler);

multButton.addEventListener('click', productClickHandler);

divButton.addEventListener('click', quotientClickHandler);
