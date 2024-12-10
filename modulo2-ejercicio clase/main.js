'use strict';

const btn = document.querySelector('.js-button');
const menuNav = document.querySelector('.js-menuNav');
const darkLink = document.querySelector('.js-dark');
const lightLink = document.querySelector('.js-light');
const main = document.querySelector('.js-main');

btn.addEventListener('click', ()=>{
    menuNav.classList.toggle('hidden');
});
darkLink.addEventListener('click', ()=>{
    main.classList.add('dark');
    main.classList.remove('light')
});
lightLink.addEventListener('click', ()=>{
    main.classList.add('light');
    main.classList.remove('dark')
});



//seccion modal

const modal = document.querySelector('.js-modal');
const closeModal = document.querySelector('.js-close');

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

const form = document.querySelector('.js-form');
const name = document.querySelector ('.js-name');

form.addEventListener('submit', (event) => {
    console.log(event);
    event.preventDefault ();
    //elemento con la funcion addEventListener
    console.log(event.currentTarget);
    //elemento sobre el que hacemos la accion addEventListener
    console.log(event.target);
})
