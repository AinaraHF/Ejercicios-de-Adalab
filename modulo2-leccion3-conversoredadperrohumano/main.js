'use strict';

const dogage = document.querySelector('.dogage');
const msg = document-querySelector('.msg');
const humanage = document.querySelector('.humanage')

const dogage = 1;
if (dogage.value === 1) {
    humanage.innerHTML = 'msg.innerHTML' + '15';
  } else if (dogage === 2) {
    humanage.innerHTML = 'msg.innerHTML' + '24';
  }