'use strict';

const userName = document.querySelector('.js-name');
const userSurname = document.querySelector('.js-name');
const infoParagraph = document.querySelector('.js-paragraph');

function handleKeyUp(){
    const userNameValue = userName.value;
    const userSurnameValue = userSurname.value; 
    infoParagraph.innerHTML = userNameValue; 
    infoParagraph.innerHTML += userSurnameValue;
    localStorage.setItem('info', `${infoParagraph}`)
}

userName.addEventListener('keyup', handleKeyUp);
userSurname.addEventListener('keyup', handleKeyUp);

