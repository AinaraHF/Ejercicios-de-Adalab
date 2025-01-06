'use strict';

const numbers = [];

function get100Numbers (){
for (let i = 1; i < 101; i++){
    numbers.push(i)};
}
get100Numbers();

function getReversed100Numbers (){
    get100Numbers();
    numbers.reverse();
}

getReversed100Numbers();

console.log (numbers)