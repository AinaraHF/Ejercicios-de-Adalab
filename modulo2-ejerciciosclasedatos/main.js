/*
EJERCICIO CALCULADORA

1.- Declarar las var y seleccionar los elementos del HTML: inputs, span, btn.
2.- Escuchar un evento sobre el botón, click.
3.- Recoger los valores de los inputs.
4.- Hacer la operación de suma.
5.- Pintar el resultado en el HTML.

*/

const inputNumb1 = document.querySelector('.js-num1');
const inputNumb2 = document.querySelector('.js-num2');
const btn = document.querySelector('.js-btn');
const result = document.querySelector('.js-result');
const ope = document.querySelector('.js-ope');


btn.addEventListener('click', (event)=>{
    //se ejecuta cuando la usuario hace click en el botón
    event.preventDefault();
    const num1 = parseInt(inputNumb1.value);
    const num2 = parseInt(inputNumb2.value);

    //operadores ternarios 
    const total = ope.value === "sum" ? num1 + num2 : num1 / num2;

    //result.innerHTML = num1 + num2 ; 
    /* también se podría hacer en 2 pasos, primero declarar constante y luego añadirlo
    const total = num1 + num2;
    result.innerHTML = total ;
    */
    result.innerHTML = total ;
})