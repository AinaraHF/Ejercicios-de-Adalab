'use strict';

const dogage = document.querySelector('.js-dogage');
const humanage = document.querySelector('.js-humanage');
const btn = document.querySelector('.js-btn');

btn.addEventListener('click',()=>{
  if (dogage.value === "1") {
    humanage.innerHTML = 15;
  } 
  else if (dogage.value === "2") {
    humanage.innerHTML = 24;
  }
  else if (dogage.value === "3") {
    humanage.innerHTML = 29;
  }
  else if (dogage.value === "4") {
    humanage.innerHTML = 34;
  }
  else if (dogage.value === "5") {
    humanage.innerHTML = 39;
  }
  else if (dogage.value === "6") {
    humanage.innerHTML = 44;
  }
  else if (dogage.value === "7") {
    humanage.innerHTML = 49;
  }
  else if (dogage.value === "8") {
    humanage.innerHTML = 54;
  }
})
