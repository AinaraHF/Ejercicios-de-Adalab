'use strict';

const users = [
    { name: "María", isPremium: false, pin: 2389 },
    { name: "Lucía", isPremium: true, pin: 2384 },
    { name: "Susana", isPremium: true, pin: 2837 },
    { name: "Rocío", isPremium: false, pin: 5232 },
    { name: "Inmaculada", isPremium: false, pin: 8998 },
  ];

//¿Podrías ordenarlos por orden alfabético? 
users.sort((a, b) => a.name - b.name); // PORQUE NO FUNCIONA SI PONGO .NAME Y CON .PIN SI FUNCIONA
console.log(users)

// ¿Y por su número de PIN?

//users.sort((a, b) => a.pin - b.pin); FUNCIONA BIEN Y SE ORDENA
//console.log(users)