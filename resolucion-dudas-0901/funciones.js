'use strict';

const names = ['claudia', 'gaby', 'jaqueline', 'ana'];
const otrosNames = ['patri', 'majo', 'andrea', 'mel'];
const otrosOtrosNames = ['tania', 'almu', 'idoia', 'ainara', 'gemma'];

const ul = document.querySelector('ul');

function renderNames(array){
    for (const name of array) {
        ul.innerHTML += `<li> ${name} </li>`
    }
};

const todosLosNames = names.concat(otrosNames, otrosOtrosNames);
renderNames(todosLosNames);

/*renderNames(names);
renderNames(otrosNames);
renderNames(otrosOtrosNames);*/ //normalmente se haría así, pero si queremos llamar todo en una función podemos usar concat creando una nueva const


/*function renderNamesOtros(){  PARA NO TENER QUE IR REPITIENDO ESTO, AÑADIMOS PARÁMETRO A RENDERNAMES
    for (const name of names) {
        ul.innerHTML += `<li> ${name} </li>`
    }
};

renderNamesOtros();*/

// ***Cuando usar parámetros y cuando no, cuando vas a utilizar una función que tiene una variable que cambia el valor pero no la estructura***

/*Ejercicio funciones arrow 2.6.1
    border-box --> se resta del ancho del contenido el padding y el border
    content-box --> se suma al ancho de la caja el padding y el border
*/
function calcularModeloCaja(borderBox, width, padding, border){ //true, 20, 20, 5 x ejemplo
    const contenido = borderBox ? width - (padding*2) - (border*2) : width;
    //calcular ancho caja
    let box;
    if(borderBox){  
        box = width;
    }else{
        box = width + (padding*2) + (border*2);
    }
    console.log(`El ancho del contenido es: ${contenido}px y el ancho total de la caja es: ${box}px.`)
}

calcularModeloCaja(false, 100, 10, 5);

//como aplicar una función a varias etiquetas iguales
const pList = document.querySelectorAll('.js-p');

function addClass(clase, listaEtiqueta){
   for (const etiqueta of listaEtiqueta) {
    etiqueta.classList.add(clase);
} 
}

addClass('red', pList); //addClass('pink', articleList);


//Como se accede a las propiedades de los distintos elementos en función del tipo de dato

const promos = [
    {
        letra: 'a',
        profe: 'ana',
        chicas: ['anacleta', 'petra', 'josefa'],
    },
    {
        letra: 'b',
        profe: 'dayana',
        chicas: ['tania', 'ainara', 'gemma'],
    },
];
const promo = 'b';
//const nameChica = 'ainara';
const person = {
    name: 'ainara'
}

const adalaber = promos.find(
    (item) => item.letra === promo && item.chicas.includes(person.name) // inludes solo funciona con primitivos, con objetos hay que buscar la unidad mínima del objeto
);