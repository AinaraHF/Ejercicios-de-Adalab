'use strict';

const button = document.querySelector('.js-play');
const select = document.querySelector('.js-select');
const result = document.querySelector('.js-result');
const player = document.querySelector('.js-player');
const pc = document.querySelector('.js-pc');
const reset = document.querySelector('.js-reset');


function getRandomNumber(max){
    return Math.ceil(Math.random()*max);
}

function getRandomMove(){
    const numRandom = getRandomNumber(9);
    if(numRandom <= 3){
        return 'rock';
    }else if(numRandom >= 7){
        return 'paper';
    }else{
        return 'scissors';
    }
}

function counter(){
    if(result.innerHTML === '¡Has Ganado!'){
        return player.innerHTML++;
    }else if(result.innerHTML === '¡Has perdido!'){
        return pc.innerHTML++;
    }
}

function maxPoints(){
    if(player.innerHTML || pc.innerHTML === 10){
        return reset.classList.remove('hidden');
    }/*else if(pc.innerHTML === 10){
        return reset.classList.remove('hidden');
    }*/
}

function handleClick(ev){
    ev.preventDefault();
    const moveRandom = getRandomMove();
    if(moveRandom === select.value){
        result.innerHTML = 'Empate';
    } else if(moveRandom === 'rock' && select.value === 'scissors' || moveRandom === 'scissors' && select.value === 'paper' || moveRandom === 'paper' && select.value === 'rock'){
        result.innerHTML = '¡Has Ganado!';
    } else if(moveRandom === 'rock' && select.value === 'paper' || moveRandom === 'scissors' && select.value === 'rock' || moveRandom === 'paper' && select.value === 'scissors'){
        result.innerHTML = '¡Has perdido!';
}
    counter();
    maxPoints();
}

button.addEventListener('click', handleClick)


