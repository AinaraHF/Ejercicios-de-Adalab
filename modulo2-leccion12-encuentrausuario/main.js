'use strict';

const users = [
    { name: "María", isPremium: false, pin: 2389 },
    { name: "Lucía", isPremium: true, pin: 2384 },
    { name: "Susana", isPremium: true, pin: 2837 },
    { name: "Rocío", isPremium: false, pin: 5232 },
    { name: "Inmaculada", isPremium: false, pin: 8998 },
  ];

//a)
const errorUser = users.find((user) => user.pin === 5232);
console.log(errorUser);

//b)
const index = users.findIndex((user) => user.pin === 5232);
console.log(index);

const keepUsers = users.splice(3, 1);
console.log(users)
console.log(keepUsers);