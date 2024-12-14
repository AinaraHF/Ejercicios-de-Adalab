'use strict';

const button = document.querySelector('.js-btn');
const box = document.querySelector('.js-box');

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const content = `<ul">
            <li>${inception}</li>
            <li>${theButterFlyEffect}</li>
            <li>${eternalSunshineOfTheSM}</li>
            <li>${blueVelvet}</li>
            <li>${split}</li>
        </ul>`;

button.addEventListener('click', ()=> {
    box.innerHTML= box.innerHTML + content;
});

const text = document.querySelector('.js-text');


inception.addEventListener('click', ()=> {
    text.classList.remove('hidden');
    text.innerHTML = text.innerHTML + inception;
});








