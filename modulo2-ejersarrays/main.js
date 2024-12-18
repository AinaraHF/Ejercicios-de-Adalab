'use strict';

const objeto={
    propiedad: 'valor',
    propiedad2: 'valor',
    propiedad3: 'valor',
};

const lista = [5,32,8,9,4]
const producto=['pan', 'cafe', 'queso', 'jamon'];
const names = ['Ainara']; // esto es un array vacío y luego podemos añadir cosas. ¿problema const en vez de let? NO, porque modificamos lo de dentro del Array no el Array por un Objeto por ejemplo

console.log(producto[2]);

producto[3] = 'yogur'; //hemos sustituido jamon por yogur y la consola muestra la nueva lista
console.log(producto);

let indice = 1; //aquí no tiene nada que ver con el array, es en console.log donde se asocia véase los dos ejemplos de abajo
console.log(producto[indice]);
console.log(lista[indice]);

indice +=1;  // se puede escribir también indice++
console.log(producto[indice]);

producto[20] = 'mantequilla'; // me rellena como "vacíos" del 4 al 19 y me indica mantequilla en el 20
console.log(producto);
console.log(producto.length); // me va a indicar 21 porque cuenta los que están "vacíos"


/*
Ejercicio pintar consola mensaje:
Si no hay nombres en el array, mensaje= No se ha registrado nadie todavía.
Si hubiera nombres en el array, mensaje= Hay X cantidad de personas registradas.
*/

if (names.length === 0){
    console.log('No se ha registrado nadie todavía.')
}else{
    console.log(`Tienes ${names.length} personas registradas`); // con comillas francesas, sino sería 'Tienes' + names.length + 'personas registradas.'
}

