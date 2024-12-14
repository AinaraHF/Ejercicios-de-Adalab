'use strict';

const box = document.querySelector('.js-box');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 250){
        box.classList.add('purple');
} else if(window.scrollY()< 250){
        box.classList.add('green');
}
})
