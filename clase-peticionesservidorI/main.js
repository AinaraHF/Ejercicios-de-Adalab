'use strict';

//https://dog.ceo/api/breeds/image/random

const figure = document.querySelector('.js-fig');

console.log(1);

fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json())
    .then(info => {
        console.log(2);
        figure.innerHTML = `<img src="${info.message}"/>` //el "message" es el objeto que nos devuelve la url cuando ponemos console.log(info) o tb podemos verlo en la docu, screenshot messageAPI
    });

    console.log(3);


    const ul = document.querySelector('.js-list');
    let characters = [];//*

    function renderCharacter(){
        for (const oneChar of characters) { //hay que hacerlo aquí dentro, no fuera, porque characters fuera está vacío *
                ul.innerHTML += `<li> ${oneChar.name} <li/>`;
            }
    }
    fetch('https://swapi.py4e.com/api/people/')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            characters = data.results;
            console.log(characters);
            renderCharacter();            
        });