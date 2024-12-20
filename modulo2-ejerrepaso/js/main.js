'use strict';

/*
    1. Crear HTML (select, botón), css (.yellow, .orange)
    2. Crear variables - Seleccionar los elementos del HTML, para interacturar -- select, botón, h1(face), main(color)
    3. Escuchar evento sobre el botón--click
        - recoger la cara seleccionada
        - pintar en el HTML la cara correspondiente (dependiendo de la opción que has seleccionado)
        - generar número aleatorio entre 1-100
        - comprobar si es par o impar
            - si es par cambio el color a .yellow
            - si es impar cambio el color a .orange
*/

const main = document.querySelector('.js-main');
const h1 =document.querySelector('.js-face');
const select =document.querySelector('.js-face-select');
const btn =document.querySelector('.js-btn');


function pintarCara(cara){
    h1.innerHTML = cara === 'happy' ? ':)' : ':(';     //podríamos mejorarlo con un operador ternario si solo hay 2 condiciones y si cada opción solo tiene una instrucción
    /*if (cara === "happy"){
        h1.innerHTML = ":)" //en el h1 ya hay una carita feliz porque es por defecto lo que queramos que se vea
    }else{
        h1.innerHTML = ":("
    }*/
}

function generarNumRandom(){
    return Math.round(Math.random()* 100); //Math.round es para redondear 15.1 = 15, 15.8 = 16; *100 es porque Math.random es del 0-1, por eso también usamos el Math.round
    //return parseInt(Math.random()*100;)
}

function cambiarColor(){
    const numRandom = generarNumRandom();
    console.log(numRandom)

    if(numRandom % 2 === 0) { //para saber si es un número par
        main.classList.add('yellow');
        main.classList.remove('orange');
    }else{
        main.classList.add('orange');
        main.classList.remove('yellow');
    }
}

function handleClick(ev){ // intentar que la manejadora tenga el menor código posible, básicamente ejecuciones
    ev.preventDefault(); // para evitar que se refresque
    const valueSelect = select.value; // para recoger lo que ha seleccionado el usuario
    pintarCara(valueSelect);
    cambiarColor();
}

btn.addEventListener('click', handleClick);