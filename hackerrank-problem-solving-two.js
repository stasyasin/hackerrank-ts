'use strict'

// 4
// 1
// 2
// 3
// 4
// 4
// 3
const arr = [4, 1, 2, 3, 4];
const threshold = 4;
const d = 3;
// const arr = [64, 30, 25, 33];
// const threshold = 2;
// const d = 2;

function minOperations(arr, threshold, d) {
  let res = 0;
  let matchesNum = isMatchesEnough(arr, threshold);
  while (!matchesNum) {
    res++;
    arr = divide(arr, threshold, d);
    matchesNum = isMatchesEnough(arr, threshold);
  }
  return res;
}

function divide(arr, threshold, d) {
  const max = Math.max(...arr);
  const index = arr.indexOf(max);
  arr[index] = arr[index] % d;
  return arr;
}

function isMatchesEnough(arr, threshold) {
  const dic = {}
  for (let val of arr) {
    dic[val] = (dic[val] || 0) + 1;
  }
  const matches = Object.values(dic);
  return matches.find((val)=> val ===threshold);
}



// findSubSequences(oldName);
const result = minOperations(arr, threshold, d);
console.log(result)




// function renameFile(newName, oldName) {
//   const dic = findSubSequences(oldName);
//   return dic[newName] || 0;
// }
//
// function findSubSequences(str) {
//   const len = str.length;
//   let output = '';
//   const dic = {};
//   for (let i = 1; i < Math.pow(2, len); i++) {
//     output = '';
//     for (let j = 0; j < len; j++) {
//       if (i & (1 << j)) {
//         output += str[j];
//       }
//     }
//     dic[output] = (dic[output] || 0) + 1;
//   }
//   return dic;
// }


// function renameFile(newName, oldName) {
//   let f = [];
//   for (let i = 0; i < newName.length; i++) {
//     f.push(new Array(oldName.length).fill(0))
//     if (newName[i] === oldName[0] || newName[0] === oldName[0]) f[i][0] = 1;
//   }
//   for (let i = 0; i < oldName.length; i++) {
//     if (oldName[i] === newName[0] || newName[0] === oldName[0]) f[0][i] = 1;
//   }
//   for (let i = 1; i < newName.length; i++) {
//     for (let j = 1; j < oldName.length; j++) {
//       if (newName[i] === oldName[j]) f[i][j] = f[i - 1][j - 1] + 1;
//       else f[i][j] = Math.max(f[i - 1][j - 1], f[i][j - 1], f[i - 1][j]);
//     }
//   }
//   return f[newName.length - 1][oldName.length - 1];
// }
