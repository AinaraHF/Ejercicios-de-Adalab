'use strict';

const cities = document.querySelector('.js-cities');
const city1 = document.querySelector('.js-opt1');
const city2 = document.querySelector('.js-opt2');
const city3 = document.querySelector('.js-opt3');
const img1 = document.querySelector('.js-img1');
const img2 = document.querySelector('.js-img2');
const img3 = document.querySelector('.js-img3');

function handleChange(){
        const citiesSelection = cities.value;
        if(citiesSelection === city1){
            img1.src
        }else if(citiesSelection === city2){

        }else if(citiesSelection === city3){

        }
}

cities.addEventListener('change', handleChange)