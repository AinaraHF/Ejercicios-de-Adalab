'use strict';

const frutas = ['uva','peras','mango'];

frutas.push('manzana');

const indice = frutas.indexOf('peras');
console.log(indice);

frutas[indice] = 'kiwi'; //si queremos sustituir una fruta hacemos así
console.log(frutas)

const productos = [
    {nombre: 'falda', precio: 20},
    {nombre: 'zapatilla', precio: 85},
    {nombre: 'camiseta', precio: 30},
];

//aplicar descuento del 15% a las zapatillas

const indexZap = productos.findIndex((item) => item.nombre === 'zapatilla');
productos[indexZap].precio = productos[indexZap].precio * 0.85;
console.log (productos);

//SORT -->
const numeros = [8, 6, 7, 9, 1, 3];
numeros.sort((a,b) => a - b); // ascendente b-a sería descendente  ***se pone a-b xke por defecto pone orden alfabetico
console.log(numeros);

frutas.sort(); // funciona por defecto por orden alfabetico
console.log(frutas);

productos.sort((a,b) => a.precio - b.precio);
console.log(productos);

//REDUCE --> siempre recibe dos parámetros, el acumulador (acc) y el valor actual
const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 
0 //hace referencia al valor inicial del acumulador y podría ser un string, etc
);
console.log(suma);

/*const totalPrecio = productos.reduce(
    (total, producto) => total + producto.precio, 
    0
);
console.log(totalPrecio);*/

const totalPrecio = productos.reduce(
    (total, producto) => total + producto.precio / productos.length, //esto sería para sacar la media
    0
);
console.log(totalPrecio);




