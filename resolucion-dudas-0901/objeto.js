'use strict';

const cestaPeras ={
    maxQ: 10,
    minQ: 1,
    currentQ: 4,
    initialQ: 1, 
    increase: function (){ // función anónima
        this.currentQ += 1; // this se utiliza en los métodos, es decir, funciones creadas dentro de objetos
    },
    resetQ: function (){
        this.currentQ = this.initialQ;
    },
};

console.log(cestaPeras.currentQ); // para ver el valor actual
cestaPeras.increase(); // aplicamos el método increase
console.log(cestaPeras.currentQ); // para ver el valor actual tras haber aplicado el método increase
cestaPeras.resetQ(); // aplicamos el método resetQ
console.log(cestaPeras.currentQ); // para ver el valor actual tras haber aplicado el método resetQ



