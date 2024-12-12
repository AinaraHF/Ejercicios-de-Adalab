'use strict';

const inputName = document.querySelector('.inputName');
const message = document.querySelector('.message');

const inputName = 'Maria';

let msg;
if (inputName.value === 'Maria'){
    message = 'Bienvenida, + inputName';
} 
else if (inputName.value !== 'Maria'){
    message = 'Lo siento pero el usuario que has introducido no está registrado';    
}
