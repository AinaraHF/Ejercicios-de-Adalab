'use strict';

const inputSearch = document.querySelector('.js-input');
const btnSearch = document.querySelector('.js-btn');
const userName = document.querySelector('.js-name');
const userPic = document.querySelector('.js-img');
const userRepos = document.querySelector('.js-repos');

function renderUser(username){    
fetch(`https://api.github.com/users/${username}`)
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
    renderUser(inputValue);
}

btnSearch.addEventListener('click', handleClick);

