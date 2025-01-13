'use strict';

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
  if(counter === 59){
    const p1 = document.querySelector('.p1');
    const p2 = document.querySelector('.p2');
    p1.classList.add('hidden');
    time.classList.add('hidden');
    p2.classList.remove('hidden');
    };

};

setInterval(incrementAndShowCounter, 1000);