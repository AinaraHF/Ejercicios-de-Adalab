'use strict';

const title = document.querySelector('.js-title');
const msg = document.querySelector('.js-msg');
const box = document.querySelector('.js-box');

if(box.classList.contains('warning')){
    title.innerHTML = 'AVISO';
    msg.innerHTML = 'Tenga cuidado';
}
else if(box.classList.contains('error')){
    title.innerHTML = 'ERROR';
    msg.innerHTML = 'Ha surgido un error';
}
else if(box.classList.contains('success')){
    title.innerHTML = 'CORRECTO';
    msg.innerHTML = 'Los datos son correctos';
}
