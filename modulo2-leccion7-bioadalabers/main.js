'use strict';

const desc1= document.querySelector('.js-adalaber1');
const desc2= document.querySelector('.js-adalaber2');

const adalaber1 = {
    name: "Susana",
    age: 34,
    job: "periodista",
  };

  const adalaber2 = {
    name: "Rocío",
    age: 25,
    job: "actriz",
  };

  desc1.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.job}.`;

  desc2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.job}.`;