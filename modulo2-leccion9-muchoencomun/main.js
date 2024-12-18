'use strict';

const button = document.querySelector('.js-btn');
const book1 = document.querySelector('.js-book1');
const book2 = document.querySelector('.js-book2');
const text = document.querySelector('.js-text');


function handleClick (ev) {
    ev.preventDefault();
        const books = [book1.value, book2.value];
        for (const book of books){
           text.innerHTML = `¡A mí también me encantó ${books[0]}! Tenemos mucho en común, humana.` 
        };
    
};

button.addEventListener('click', handleClick);