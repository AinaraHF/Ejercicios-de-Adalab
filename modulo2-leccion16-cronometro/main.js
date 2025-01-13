'use strict';

const time = document.querySelector('.time');
const stopBtn = document.querySelector('.stop');
const resumeBtn = document.querySelector('.resume');

let counter = 0;
let temp;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;  
};

setInterval(incrementAndShowCounter, 1000);

function stopCounter(){
   clearInterval(temp);
};

stopBtn.addEventListener('click', stopCounter);

/*function resumeCounter(){
    setInterval(incrementAndShowCounter, 1000);
};

resumeBtn.addEventListener('click', resumeCounter);*/