'use strict';

const inputName = document.querySelector('.js-name');
const inputSurname = document.querySelector('.js-surname');
const inputPhone = document.querySelector('.js-phone');
const usersSelect = document.querySelector('.js-users');
const selectSara = document.querySelector('.js-sara');
const selectAlba = document.querySelector('.js-alba');
const selectAinara = document.querySelector('.js-ainara');


const userInfo = [
    {
        userName: 'Sara',
        userSurname: 'Abasolo',
        userPhone: '626262627',
    },
    {
        userName: 'Alba',
        userSurname: 'Molina',
        userPhone: '626262623',
    },
    {
        userName: 'Ainara',
        userSurname: 'Hermoso',
        userPhone: '626262628',
    }
]

function handleChange(ev){
    ev.preventDefault();
    const usersSelection = usersSelect.value;
    console.log(usersSelection)
    if(usersSelection === selectSara){
        inputName.value.appendChild(userInfo[0][0])
        inputSurname.value.appendChild(userInfo[0][1])
        inputPhone.value.appendChild(userInfo[0][2])
    }
}

usersSelect.addEventListener('change', handleChange);