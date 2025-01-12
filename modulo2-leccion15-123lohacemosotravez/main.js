'use strict';

const list = document.querySelector('.js-list');

const numbers = [1, 2, 3];

const item1 = document.createElement('li');
const contentItem1 = document.createTextNode(numbers[0]);
item1.appendChild(contentItem1);
list.appendChild(item1);

const item2 = document.createElement('li');
const contentItem2 = document.createTextNode(numbers[1]);
item2.appendChild(contentItem2);
list.appendChild(item2);

const item3 = document.createElement('li');
const contentItem3 = document.createTextNode(numbers[2]);
item3.appendChild(contentItem3);
list.appendChild(item3);

