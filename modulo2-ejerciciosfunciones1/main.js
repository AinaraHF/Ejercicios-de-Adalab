
/*
sintaxis:
definición:
    function nombre_de_la_función (parámetros) {
        instrucciones --> condicionales, crear var, innerHTML, eventos
        }
ejecturarla:
    nombre_de_la_función()

Pasos obligatorios:
    1.- Crearla o definirla
    2.- Llamarla o ejecutarla (fuera de las llaves{})

opcional:
    -parametros

El número de parámetros debe ser igual tanto en la definición como ejecución.

*/

//función necesita parámetros si hay algo que cambia dentro de la misma
function sayHello (adalaber) { //adalaber es una variable y hay que darle valor
    console.log(`Hola ${adalaber}`)
}

sayHello('Ainara');



/*
Crear función que calcule la media de 3 valores
Necesita:
    recibir 3 parámetros (3 notas)
Devuelve:
    la media (sumar los 3 parámetros y dividirlo entre 3)
*/
const mark1 = document.querySelector('.js-mark1');
const mark2 = document.querySelector('.js-mark2');
const mark3 = document.querySelector('.js-mark3');
const btn = document.querySelector('.js-btn');
const result= document.querySelector('.js-result');

function average(nota1, nota2, nota3){
    const sum = nota1 + nota2 + nota3;
    const avg = sum / 3;
    return avg;
}

function handleClick(event) {
    event.preventDefault();
    const valueNota1 = parseFloat(mark1.value);
    const valueNota2 = parseFloat(mark2.value);
    const valueNota3 = parseFloat(mark3.value);

    const media = average(valueNota1, valueNota2, valueNota3);
    result.innerHTML = media;
}
btn.addEventListener('click', handleClick); //no lleva parentesis porque no se ejecuta cuando carga la pág., sino al hacer click
