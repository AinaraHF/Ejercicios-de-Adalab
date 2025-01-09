'use strict';

const inputSearch = document.querySelector('.js-input');
const btnSearch = document.querySelector('.js-btn');
const userName = document.querySelector('.js-name');
const userPic = document.querySelector('.js-img');
const userRepos = document.querySelector('.js-repos');

function renderUser(){
fetch('https://api.github.com/users/gootyfer')
    .then((response) => response.json())
    .then((info) =>{
        userName.innerHTML = info.login;
        userPic.src = info.avatar_url;
        userRepos.innerHTML = info.public_repos;
    })
}

function handleClick(ev){
    ev.preventDefault();
    const inputValue = inputSearch.value;
    //const filteredValue = tasks.filter((task)=> task.name.includes(inputValue));
}

btnSearch.addEventListener('click', handleClick);

