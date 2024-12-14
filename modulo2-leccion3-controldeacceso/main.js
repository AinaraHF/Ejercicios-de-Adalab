'use strict';

const inputName = document.querySelector('.js-inputName');
const message = document.querySelector('.js-message');
const btn = document.querySelector('.js-btn');

btn.addEventListener('click', ()=>{
    if (inputName.value === 'Maria'){
    message.innerHTML = '¡Bienvenida, Maria!';
} 
else if (inputName.value === 'Luisa'){
    message.innerHTML = '¡Bienvenida, Luisa!';
}
else {
    message.innerHTML = 'Lo siento pero el usuario que has introducido no está registrado';    
}
})


