'use strict';
//Ejer1
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
  
  //Ejer2
  adalaber1.run = (distance) => `Estoy corriedo un maratón de ${distance} kilómetros.`;
console.log(adalaber1.run("50"));


//Ejer1.2
adalaber1.showBio = () => `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}.`;
    console.log(adalaber1.showBio());

adalaber2.showBio = () => `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`;
    console.log(adalaber2.showBio());


