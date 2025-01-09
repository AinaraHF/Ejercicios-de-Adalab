'use strict';

const btn = document.querySelector('.js-btn');
const img = document.querySelector('.js-img');

let dogBreed = [];

fetch ('https://dog.ceo/api/breed/chihuahua/images/random')
    .then((response) => response.json())
    .then((info)=>{
        dogBreed = info.message;
    });

function getChihuahua(){
    fetch ('https://dog.ceo/api/breed/chihuahua/images/random')
    .then((response) => response.json())
    .then((info)=>{
        img.src = info.message;
    });
};

function handleClick(ev){
    ev.preventDefault();
    getChihuahua()
};

btn.addEventListener('click', handleClick);

