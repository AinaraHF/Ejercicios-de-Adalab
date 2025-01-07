'use strict';

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const sayHi = (name) => `Bienvenida ` + name;
const greetingsNames = names.map(sayHi);

console.log(greetingsNames);