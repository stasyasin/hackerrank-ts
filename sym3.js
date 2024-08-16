'use strict'

const input = ['1', '2', '3', '4', '1', '2', '3', '1', '2'];

function removeDuplicates(input) {
  return [...new Set(input)];
}

function keepDuplicates(input) {
  const map = new Map();
  for (const val of input) {
    if (!map.has(val)) {
      map.set(val, 1);
    } else {
      map.set(val, map.get(val) + 1);
    }
  }
  const res = [];

  for (const key of map.keys()) {
    if (map.get(key) > 1) {
      res.push(key);
    }
  }

  return res;
}

function keepTwice(input) {
  const map = {};
  for (const val of input) {
    map[val] = (map[val] || 0) + 1;
  }
  const res = [];

  for (const key of Object.keys(map)) {
    if (map[key] === 2) {
      res.push(key);
    }
  }

  return res;
}

const noDuplicates = removeDuplicates(input);
console.log(noDuplicates);
const onlyDuplicates = keepDuplicates(input);
console.log(onlyDuplicates);
const onlyTwice = keepTwice(input);
console.log(onlyTwice);
