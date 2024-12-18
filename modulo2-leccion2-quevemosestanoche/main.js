'use strict';

const button = document.querySelector('.js-btn');
const box = document.querySelector('.js-box');

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const content = `<li>${inception}</li>
            <li>${theButterFlyEffect}</li>
            <li>${eternalSunshineOfTheSM}</li>
            <li>${blueVelvet}</li>
            <li>${split}</li>`;

button.addEventListener('click', ()=> {
    box.innerHTML= content;
});

const text = document.querySelector('.js-text');

box.addEventListener('click', (ev)=>{
    const movie = ev.target.innerHTML;
    text.innerHTML = 'La peli seleccionada es: ' + movie;
    console.log(movie);
});










