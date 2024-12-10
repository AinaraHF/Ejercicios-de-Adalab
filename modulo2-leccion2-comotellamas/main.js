'use strict'

const button = document.querySelector(".btn");
const message = document.querySelector(".message");
const input = document.querySelector(".input");

button.addEventListener("click", () => {
  message.innerHTML = innerHTML+ input.value; 
});