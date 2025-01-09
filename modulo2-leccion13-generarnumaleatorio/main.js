'use strict';

let randomNumber = [];

fetch ('https://api.rand.fun/number/integer?min=0&max=20')
    .then((response) => response.json())
    .then((data) => {
        randomNumber = data.result;
        console.log(randomNumber);
    });


