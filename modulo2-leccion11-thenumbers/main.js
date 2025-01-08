'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNumber (){
    
}
bestLostNumber()

const evenNumbers = [];
for (const number of lostNumbers) {
    if (number % 2 === 0){
       evenNumbers.push(number);
    }
}

console.log(evenNumbers);

const threeMultiple = [];
for (const number of lostNumbers) {
    if (number % 3 === 0){
        threeMultiple.push(number);
     }
    
}

console.log(threeMultiple);

const mix = evenNumbers.concat(threeMultiple);

console.log(mix)



