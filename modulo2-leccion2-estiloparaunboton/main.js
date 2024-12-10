'use strict';

const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');

button1.addEventListener('click', ()=> {
    button1.classList.toggle('btnchange');
});

button2.addEventListener('click', ()=> {
    button2.classList.toggle('btnchange');
});
