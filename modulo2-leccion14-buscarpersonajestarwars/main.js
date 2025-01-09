'use strict';

const inputField = document.querySelector('.js-input');
const searchBtn = document.querySelector('.js-btn');
const characterList = document.querySelector('.js-list');

let characters = [];

fetch ('https://swapi.py4e.com/api/people/')
    .then((response) => response.json())
    .then((info) =>{
        characters = info.results;
        console.log(characters)
    });

function renderCharacter(array){
        characterList.innerHTML = '';
        for (const character of array) {
            characterList.innerHTML += `<li> ${array.name} </li>`
        }
    };

renderCharacter(characters);

function handleClick(ev){
    ev.preventDefault();
    const inputValue = inputField.value;
    const filteredCharacter = characters.filter((character) => character.name.includes(inputValue));
    //renderCharacter(filteredCharacter);
    console.log(filteredCharacter);
};

searchBtn.addEventListener('click', handleClick);