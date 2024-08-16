'use strict'



function sumPairs(arr) {
  // brute force with O(n*n)

  // dictionary -> O(n)
  const dict = {}; // key will be differnce between 3- item
  let result = []

  for(const item of arr) {
    if(dict[3-item]) {
      result.push([item, 3-item]);
    }
    dict[item] = true;
  }

  return result;

  // O(n) -> O(n);
  // O(n^2) -> O(1);

}

const arr = [1,3,2,0,-4,8,7,10];
const result = sumPairs(arr);

console.log(result)

// write me a function that will find all pairs of integers from an array that sum up to a specified value.
// For example, for an array of [3, 5, 2, -4, 8, 11] and a sum of 7, your function should return [[2, 5], [-4, 11]]
function sumPairs(arr, sum) {
  // brute force with O(n*n)

  // dictionary -> O(n)
  const dict = {}; // key will be differnce between 3- item
  let result = []

  for(const item of arr) {
    if(dict[sum-item]) {
      result.push([item, sum-item]);
    }
    dict[item] = true;
  }

  return result;

}
