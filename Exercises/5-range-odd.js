"use strict";

const rangeOdd = (start, end) => {
  let array = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      array.push(i);
    }
  }
  return array;
};
//console.log(rangeOdd(0, 5));

module.exports = { rangeOdd };
