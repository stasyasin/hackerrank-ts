'use strict'

const a= [1, 3, 5, 7];
const b= [5, 7, 9];
const c= [7, 9, 11, 13];

function triplets(a, b, c) {
  let res = 0;
  const dataA = [...new Set(a)].sort((a,b) => a - b);
  const dataB = [...new Set(b)];
  const dataC = [...new Set(c)].sort((a,b) => a - b);

  for (const numB of dataB) {
    if (dataA[0] > numB || dataC[0] > numB) continue;
    let ai = 0;
    let ci = 0;
    if (dataA[dataA.length -1] <= numB) {
      ai = dataA.length;
    } else {
      ai = binarySearch(dataA, numB);
    }

    if (dataC[dataC.length -1] <= numB) {
      ci = dataC.length;
    } else {
      ci = binarySearch(dataC, numB);
    }


    res += ai * ci;
  }


  return res;
}

function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length -1;

  while (start < end) {
    const mid = Math.floor((start + end)/2);
    if (arr[mid]===key) return mid +1;
    if (arr[mid] < key) {
        start = mid + 1;
        if(arr[start] > key) return start;
    } else {
      end=mid;
    }
  }

  return end;

  // const start = 0;
  // const stop = arr.length - 1;

  // const newArr = [...arr];
  // const mid = Math.floor(arr.length /2)
  //
  // if (newArr[mid] === key) return mid;
  // if (newArr[mid] > key) {
  //   return binarySearch( newArr.slice(start, mid), key);
  // } else {
  //   return binarySearch( newArr.slice(mid, end), key);
  // }

}

const result = triplets(a, b, c);
console.log(result)

// const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const resultBinary = binarySearch(inputArray, 17);
// console.log(resultBinary)
