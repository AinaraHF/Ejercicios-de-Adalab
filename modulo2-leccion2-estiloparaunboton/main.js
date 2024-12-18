'use strict';

const button1 = document.querySelector('.js-btn1');
const button2 = document.querySelector('.js-btn2');
const form = document.querySelector('.js-form');
/*
button1.addEventListener('click', ()=> {
    button1.classList.toggle('btnchange');
});

button2.addEventListener('click', ()=> {
    button2.classList.toggle('btnchange');
});*/

form.addEventListener('click', (ev)=> {
    ev.preventDefault();
    ev.target.classList.toggle('btnchange');
});
