'use strict';

const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

function handleClick(){
    body.classList.toggle('red');
};

buttons.addEventListener('click', handleClick);
