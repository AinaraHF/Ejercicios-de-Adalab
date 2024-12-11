
//Operadores comparación: siempre devuelven valor booleano

const price = 235.6;
console.log(2==='2');
console.log(price>100);
console.log(2 !== '2');

//Operadores lógicos: &&, ||, !

const name = 'Anacleta';

//enviar un mensaje de bienvenida siempre que el nombre NO sea Anacleta

if(name !== 'Anacleta'){
    console.log('Bienvenida'+ name);
}

//INCORRECTO, no tiene sentido crear un if, para usar básicamente el else, para eso usamos el !==
if(name === 'Anacleta'){
    //dejamos vacío porque no pasa nada
} else {
    console.log('Bienvenida'+ name);
}

/* 
EJERCICIO
Solicitar edad de un niño
 edad < 5 --> debe ir a infantil
 edad >5 <11 --> debe ir a primaria
 edad >11 --> debe ir a la ESO

 1.- Seleccionar los elementos del HTML y crear las variables, input edad, input boton, h2
 2.- Escuchar un evento sobre el boton enviar
 3.- Recoger el valor de la edad, que introdujo el usuario
 4.- Realizar la comparación y renderizar (o pintar) en el HTML el mensaje que le corresponda
   */

const inputAge = document.querySelector('.js-age');
const btn = document.querySelector('.js-btn');
const message = document.querySelector('.js-msg');

btn.addEventListener('click', (event)=>{
    event.preventDefault(); //esto ponemos porque el btn es submit y sino por defecto refresca la página
    
    //parseInt --> convierte un string a numero
    const age = parseInt(inputAge.value);
    //console.log(age);   así vemos en la consola lo indicado en el inputAge

    let msg;
    if(age <= 5){
        msg = 'Debe ir a la escuela de infantil';
    }
    else if(age <= 11){
        msg = 'Debe ir a la escuela primaria';
    }
    else if(age <= 17){
        msg = 'Debe ir a la ESO';
    }
    else {
        msg = 'Debes tener menos de 18';
    }        
    message.innerHTML = msg;
});