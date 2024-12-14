'use strict';

const paragraph = document.querySelector('.js-text');

paragraph.addEventListener('click', ()=>{
    paragraph.innerHTML = paragraph.innerHTML + paragraph.innerHTML;
});