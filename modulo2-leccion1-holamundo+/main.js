'use strict';

const hello = document.querySelector('.js-hello');
hello.innerHTML = hello.innerHTML + ' Mundo';

const me = document.querySelector('.js-me');
const friend = document.querySelector('.js-friend');
const chosen = document.querySelector('.js-chosen');
//chosen.innerHTML = chosen.innerHTML + me.innerHTML;
chosen.innerHTML = chosen.innerHTML + friend.innerHTML;

const div = document.querySelector('.js-div');
const content = `<h1>Lorem ipsum</h1>
<img src="http://via.placeholder.com/350x150" alt="">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>`;
div.innerHTML = content;



