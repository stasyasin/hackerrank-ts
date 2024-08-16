'use strict'

const a= [1, 3, 5, 7];
const b= [5, 7, 9];
const c= [7, 9, 11, 13];

function crObj(k) {
  const obj = {
    value:  0,
    getValue() {return this.value;},
    decrement() {this.value=this.value-k},
    increment() {this.value=this.value+k}
  };

  return obj;
}

const result = crObj(15);
console.log(result)

// const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const resultBinary = binarySearch(inputArray, 17);
// console.log(resultBinary)
