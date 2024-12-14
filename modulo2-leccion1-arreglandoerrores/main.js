'use strict';

/*Si ponemos const como dice el ejercicio, sale error "main.js:9 Uncaught TypeError: Assignment to constant variable." porque const no cambia, es una constante.
const myAddress = 'Oilakorbe 3';
myAddress = 'Lehendakari Agirre';*/

// Para que no salga error, deberíamos poner let que es una variable y no const:
let myAddress = 'Oilakorbe 3';
myAddress = 'Lehendakari Agirre';

