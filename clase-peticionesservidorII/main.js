'use strict';

/*
1. Traer los elementos del HTML (inputs)
2. Escuchar evento click sobre el botón
    - Recoger el valor del checkbox (si checked o no)
        - si TRUE coger los valores de los inputs
            - convertirlo en objeto
            - guardarlo en el LS (LocalStorage)
3. Al cargar la página buscar si hay algo en LS
    - Si hay algo debo pintar en el value del input esa info
*/

const inputEmail = document.querySelector('.js-email');
const inputPass = document.querySelector('.js-pass');
const inputConfirm = document.querySelector('.js-confirm');
const btn = document.querySelector('.js-btn');

//Esto se ejecuta al hacer click en el botón enviar
function savedLocalStorage(isChecked){
    if(isChecked) { // como es booleano NO hace falta === true, es redundante y queda feo, para preguntar si fuera false if(!isChecked){}
        const user = {
            email: inputEmail.value,
            password: inputPass.value, 
        };
        localStorage.setItem('userData', JSON.stringify(user)); // esto es para guardar en LS, primer parámetro es el nombre que queramos darle y segundo es lo que se guarda que en este caso hay que pasarlo a string porque es un objeto
    }
}

function handleClick(ev){
    ev.preventDefault();
    const isChecked = inputConfirm.checked; // esta línea se podría meter en la función savedLocalStorage en la primera línea y no harían falta los parámetros ni arriba ni en esta
    savedLocalStorage(isChecked)
}

btn.addEventListener('click', handleClick);

//Esto se ejecuta al cargar la página
const userDataLS = localStorage.getItem('userData'); // solo necesita un parámetro, el nombre de la variable utilizada para guardar los datos (primer parámetro usado en setItem)
if(userDataLS !== null){ // también se puede poner solamente if(userDataLS) {}
    const userObject = JSON.parse(userDataLS);
    inputEmail.value = userObject.email;
    inputPass.value = userObject.password;
}