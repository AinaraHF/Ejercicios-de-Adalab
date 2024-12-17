'use strict';

const pearBasket = {
    maxiValue: 10,
    minValue: 3,
    currentValue: 8,
    initialValue: 3,
}

pearBasket.add = () => 
    pearBasket.currentValue +=1;

//console.log(pearBasket.add());

pearBasket.take = () => 
    pearBasket.currentValue -=1;

//console.log(pearBasket.take());

pearBasket.reset = () => 
    pearBasket.currentValue;

console.log(pearBasket.reset());