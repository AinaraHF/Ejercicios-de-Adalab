'use strict';

const button = document.querySelector('.btn');
const list = document.querySelector('.list');
const movie1 = document.querySelector('.movie1');
const movie2 = document.querySelector('.movie2');
const movie3 = document.querySelector('.movie3');
const movie4 = document.querySelector('.movie4');
const movie5 = document.querySelector('.movie5');
const text = document.querySelector('.text');


button.addEventListener('click', ()=> {
    list.classList.remove('hidden');
});

movie1.addEventListener('mouseout', ()=> {
    text.classList.remove('hidden');
    text.innerHTML = text.innerHTML + movie1.innerHTML;
});

movie2.addEventListener('mouseout', ()=> {
    text.classList.remove('hidden');
    text.innerHTML = text.innerHTML + movie2.innerHTML;    
});
movie3.addEventListener('mouseout', ()=> {
    text.classList.remove('hidden');
    text.innerHTML = text.innerHTML + movie3.innerHTML;
});
movie4.addEventListener('mouseout', ()=> {
    text.classList.remove('hidden');
    text.innerHTML = text.innerHTML + movie4.innerHTML;    
});
movie5.addEventListener('mouseout', ()=> {
    text.classList.remove('hidden');
    text.innerHTML = text.innerHTML + movie5.innerHTML;
});


