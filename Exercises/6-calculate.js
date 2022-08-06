"use strict";

const square = (x) => x * x;

const cube = (x) => x ** 3;

const average = (a, b) => (a + b) / 2;
let array = [];
const calculate = () => {
  for (let i = 0; i <= 9; i++) {
    array.push(average(square(i), cube(i)));
  }
  return array;
};

module.exports = { square, cube, average, calculate };
