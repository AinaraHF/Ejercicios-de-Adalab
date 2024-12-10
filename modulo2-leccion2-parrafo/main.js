'use strict';

const paragraph = document.querySelector('.text');

paragraph.addEventListener('click', ()=>{
    paragraph.innerHTML = paragraph.innerHTML + paragraph.innerHTML;
});