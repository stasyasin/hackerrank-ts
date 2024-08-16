'use strict';

function binarySearch(arr, key, start = 0, end = arr.length) {
  if (start > end) return -1;

  const mid = Math.floor((start + end) /2);

  if (arr[mid] === key) return mid;
  if (arr[mid] > key) {
    return binarySearch( arr, key, start, mid -1);
  } else {
    return binarySearch( arr, key, mid +1 , end);
  }

}

function _binarySearch(arr, key, start = 0, end = arr.length) {
  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);

  switch(true) {
    case arr[mid] === key:
      return mid;
    case arr[mid] > key:
      return binarySearch(arr, key, start, mid - 1);
    case arr[mid] < key:
      return binarySearch(arr, key, mid + 1, end);
  }
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const resultBinary = binarySearch(inputArray, 22);
console.log(resultBinary)
