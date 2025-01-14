'use strict';

//setTimeout(()=>, 5000) tiene dos parámetros, la función a ejecutar y el temporizador de al de X milisegundos, 5000ms = 5segundos

const modal = document.querySelector('.js_newsletter');
const btnClose = document.querySelector('.js_close-btn');

function showModal(){
    modal.classList.remove('hidden');
}

setTimeout(showModal, 2000);

function handleClose(){
    modal.classList.add('hidden');
}

btnClose.addEventListener('click', handleClose);