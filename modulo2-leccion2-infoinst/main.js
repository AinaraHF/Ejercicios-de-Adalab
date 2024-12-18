'use strict';

const input = document.querySelector(".js-input");
const text = document.querySelector(".js-text");

input.addEventListener("keyup", (ev) => {
    text.innerHTML = ev.currentTarget.value;
});