'use strict'

const button = document.querySelector(".js-btn");
const message = document.querySelector(".js-message");
const inputName = document.querySelector(".js-name");

button.addEventListener("click", () => {
  message.innerHTML = message.innerHTML + inputName.value; 
  inputName.value = "";
});