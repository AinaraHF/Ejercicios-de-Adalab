'use strict';

const users = [
    {name: 'María', isPremium: false},
    {name: 'Lucía', isPremium: true},
    {name: 'Susana', isPremium: true},
    {name: 'Rocío', isPremium: false},
    {name: 'Inmaculada', isPremium: false},
  ];

  const sayHi = (user) => user.isPremium === true ? `Bienvenida ${user.name}. Gracias por confiar en nosotros.`: `Bienvenida ${user.name}.`;
  const premiumUsers = users.map(sayHi);

console.log(premiumUsers);