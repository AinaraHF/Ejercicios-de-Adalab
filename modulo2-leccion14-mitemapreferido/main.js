'use strict';

const lightTheme = document.querySelector('.js-lighttheme');
const darkTheme = document.querySelector('.js-darktheme');

function handleChangeLight(){
    const lightValue = lightTheme.value;
    if(lightValue){
    lightTheme.classList.add('lighttheme');
    }else{}
    localStorage.setItem('tema', 'tema claro')
}

function handleChangeDark(){
    const darkValue = darkTheme.value;
    console.log(darkValue)
    if(darkValue){
        darkTheme.classList.add('darktheme')
    }else{}
    localStorage.setItem('tema', 'tema oscuro')
}

lightTheme.addEventListener('change', handleChangeLight);
darkTheme.addEventListener('change', handleChangeDark);

