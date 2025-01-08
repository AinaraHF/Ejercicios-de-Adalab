'use strict';

const users = [
    {
        name: "Lucía",
        age: 67
    },
    {
        name: "Blanca",
        age: 43
    },
];

// quiero generar un array nuevo que diga: X tiene Y años.

const messages = [];

for(const user of users){
    const text = `${user.name} tiene ${user.age} años.`;
    messages.push(text);
}
console.log(messages);

//map --> crea un nuevo array transformado del mismo tamaño que el original

const getUserMessage = (user) => `${user.name} tiene ${user.age} años.`; 
const usersTexts = users.map(getUserMessage);  //o así: const usersTexts = users.map((user)=>{return `${user.name} tiene ${user.age} años.`;}); {} y return NO obligatorios

console.log(usersTexts);

const students = [
    { name: "Ana", promo: "a", city: "Valencia", skills: ["HTML", "Grid"] },
    { name: "Silvia", promo: "b", city: "Madrid", skills: ["JS"] },
    { name: "Sara", promo: "x", city: "Barcelona", skills: ["React"] },
    { name: "Rebeca", promo: "a", city: "Sevilla", skills: ["HTML", "JS"] },
    { name: "Raquel", promo: "x", city: "Madrid", skills: ["Scrum", "Backend"] },
    { name: "Dolores", promo: "y", city: "Bilbao", skills: ["Backend", "MySQL"] },
];

//find --> devuelve el primer elemento del array (objeto completo) que cumple con la condición indicada (filter devuelve todos que cumplen la condición)

const studentPromoX = students.find((item) => item.promo === 'x');
console.log(studentPromoX);

const studentMadridScrum = students.find((item) => item.city === 'Madrid' && item.skills.includes('Scrum')); //no se puede usar === porque es un array, includes SOLO porque son datos primitivos
console.log(studentMadridScrum);

const studentDayana = students.find((item) => item.name === 'Dayana');
console.log(studentDayana); // sale undefined porque no existe la estudiante con nombre Dayana


//findIndex --> devuelve la posición de un elemento dentro del array, si no lo encuentra devuelve -1; devuelve el primero que cumpla la condición indicada

const city = 'bilbao';
//const indexBilbao = students.findIndex((student) => student.city === city); // sale -1 porque el estudiante indico bilbao y en sistema tenemos Bilbao (no diferencia mayus y minus)
const indexBilbao = students.findIndex((student) => student.city.toLowerCase() === city.toLowerCase());
console.log(indexBilbao);


//filter --> crea un nuevo array, con los elementos que cumplan la condición indicada; si no encuentra elementos devuelve un array vacío*

const studentsPromoA = students.filter((student) => student.promo === 'a');
console.log(studentsPromoA);

const studentCoruna = students.filter((student) => student.city === 'A Coruña') // en la variable NO debemos poner caracteres especiales como ñ por ejemplo
console.log(studentCoruna);// *
if(studentCoruna.length === 0){ // se pone .length === 0 para indicar que está vacío
    console.log('No hay chicas en A Coruña.');
};

const studentSkills = students.filter((student) => student.skills.length >=2);
console.log(studentSkills);

