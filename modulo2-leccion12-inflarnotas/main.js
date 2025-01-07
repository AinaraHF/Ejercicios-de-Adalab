'use strict';

const marks = [5, 4, 6, 7, 9];
const getHigherMarks = (mark) => mark +1;
const inflatedMarks = marks.map(getHigherMarks);

console.log(inflatedMarks);