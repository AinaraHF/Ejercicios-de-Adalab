'use strict';

const sessionExpiredMsg = () => {
    const msg = document.querySelector('.msg');
    msg.innerHTML = 'Su sesion ha expirado';
  };
  
  setTimeout(sessionExpiredMsg, 6000);