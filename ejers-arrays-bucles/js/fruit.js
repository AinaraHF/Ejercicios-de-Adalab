'use strict';

const fruits = ['plátano', 'uvas', 'kiwi'];
const list = document.querySelector('.js-list');
const btn = document.querySelector('.js-btn');
const inputFruit = document.querySelector('.js-fruit');
const span = document.querySelector('span');

function renderFruits(){
    list.innerHTML = '';
    for (const eachFruit of fruits) {
    list.innerHTML += `<li> ${eachFruit} </li>`;
    }
}

function handleClick(ev) {
    ev.preventDefault();
    const valueInput = inputFruit.value;
    const index = fruits.indexOf(valueInput); // para comprobar que lo que se indique no esté ya incluido en la lista
    if(index === -1){
        fruits.push(valueInput);
    }else{
        span.innerHTML = '¡La fruta ya existe!'
    }
    renderFruits();
}

renderFruits();

btn.addEventListener('click', handleClick);

