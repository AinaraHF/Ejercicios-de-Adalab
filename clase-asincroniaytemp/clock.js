'use strict';

const hourBox = document.querySelector('.js-hours');
const minuteBox = document.querySelector('.js-minutes');
const secondBox = document.querySelector('.js-seconds');

function renderHour(){
    //cogemos la hora del sistema
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    hourBox.textContent = hour <10 ? `0${hour}` : hour;
    minuteBox.textContent = minutes <10 ? `0${minutes}` : minutes;;
    secondBox.textContent = seconds <10 ? `0${seconds}` : seconds;;

}

renderHour(); //hay que dejar la función tb aquí además de en setInterval() xke sino, tarda un segundo que es lo que tenemos puesto en setInterval en aparecer la hr

setInterval(renderHour, 1000);