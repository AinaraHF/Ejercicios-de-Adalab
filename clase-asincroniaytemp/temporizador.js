'use strict';

//setInterval(()=>, 2000) tiene dos parámetros, la función a ejecutar y cada cuantos milisegundos se va a repetir dicha función, 2000ms = 2segundos

/*
Vamos a crear un temporizador que empiece en 0 y cada 2 segundos incrementa
1. Crear variable para el contador
2. Crear p para mostrar el contador
3. Crear la función para incrementar el contador 2 en 2
4. Pintarlo en el html
*/

const counterHtml = document.querySelector('.js-cont');
const btnStop = document.querySelector('.js-stopbtn');
const btnReset = document.querySelector('.js-resetbtn');
const btnResume = document.querySelector('.js-resumebtn');

let acum = 0;

const incrementCounter =()=> { //función ARROW, no constante
    acum += 2 // acum = acum +2; NO se podría acum++ porque solo incrementa de uno en uno, y aquí queremos de dos en dos
    counterHtml.textContent = acum;
};

let intervalId = setInterval(incrementCounter, 2000);

function handleStopCounter(){
    clearInterval(intervalId)
};

btnStop.addEventListener('click', handleStopCounter);


function handleResetCounter(){
    acum = 0;
    counterHtml.textContent = acum;
    intervalId = setInterval(incrementCounter, 2000); // para que vuelva a empezar tras darle al Stop y luego al Reset, sino el reset solo reinicia pero no después de pararlo, se guarda con el intervalId porque sin ello no podríamos pararlo de nuevo ni nada
};

btnReset.addEventListener('click', handleResetCounter);

function handleResumeCounter(){
    intervalId = setInterval(incrementCounter, 2000);}; //volvemos a ejecutar el intervalo

btnResume.addEventListener('click', handleResumeCounter);