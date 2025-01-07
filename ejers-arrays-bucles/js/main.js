'use strict';

const library = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
    { title: 'La casa de los espíritus', author: 'Isabel Allende', year: 1982 }
];

//push --> añade un elemento al final del array, debe tener las mismas propiedades que lo que ya está incluido en el array (eg. title, author, year)
const newBook = { 
    title: 'Nada', 
    author: 'Carmen Laforet', 
    year: 1945,
};
library.push(newBook);
console.log(library);

//concat --> suma arrays, crea un nuevo array a partir de otros
const additionalBooks = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'Animal Farm', author: 'George Orwell', year: 1945 }
];

const newLibrary = library.concat(additionalBooks);
console.log(newLibrary);

/*indexOf --> me devuelve la posición de un elemento en un array (siempre números), si lo que preguntas no está en la lista, devuelve -1
NO sirve para arrays de objetos, solo para datos primitivos (string, number, boolean)*/

const names = ["Anacleta", "Petra", "Ana", "Yanelis"];
const index = names.indexOf("Ana");
console.log (index)

//splice --> modifica el contenido del array (eliminar, sustituir, agregar)

// ** AÑADIR ** primer parámetro es la posición, segundo parámetro es 0 porque no queremos eliminar, tercer parámetro nuevo valor que queremos añadir
names.splice(0,0,'Dayana')
console.log(names)

// ** SUSTITUIR ** primer parámetro es la posición, segundo parámetro es 1 o más dependiendo cuántos elemetnos queramos sustituir, tercer parámetro nuevo valor
names.splice(2,1,'Luisa')
console.log(names)

// ** ELIMINAR ** primer parámetro es la posición, segundo parámetro es 1 o más dependiendo cuántos elemetnos queramos eliminar
const newNames = names.splice(2, 3);
console.log(newNames)

/*slice --> NO modifica el array original, genera un nuevo array con los parámetros indicados. Hay que crear nueva constante porque genera nuevo array. 
Primer parámetro es la posición, segundo parámetro es posición final NO incluida, es decir, incluye hasta el 4 si pusiéramos el 5*/
const newArrayBooks = newLibrary.slice(2,5)
console.log(newArrayBooks)