'use strict'

const input = [1, 5, 5, 25, 125];
const ratio = 5;

const countTrip = (input, ratio) => {
  let result = 0;
  const combos = {};
  const possibilities = {}

  for (const num of input) {
    const nextNum = num * ratio;
    possibilities[nextNum] = (possibilities[nextNum] || 0) + 1;
    combos[nextNum] = (combos[nextNum] || 0) + (possibilities[num] || 0);
    result += (combos[num]  || 0);
  }

  return result;
}


const result = countTrip(input, ratio);
console.log(result)

