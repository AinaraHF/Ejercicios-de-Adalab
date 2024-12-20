'use strict';

const button = document.querySelector('.js-play');
const select = document.querySelector('.js-select');
const result = document.querySelector('.js-result');

function getRandomNumber(max){
    return Math.ceil(Math.random()*max);
}

function getRandomMove(){
    const numRandom = getRandomNumber(9);
    if(numRandom <= 3){
        let moveRandom = 'rock';
    }else if(numRandom >= 7){
        let moveRandom = 'paper';
    }else{
        let moveRandom = 'scissors';
    }
}



