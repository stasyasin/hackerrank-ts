'use strict'

const newName = 'ccc';//'ccc'-4 // 'abc' -0 // 'abc'
const oldName = 'cccc';//'cccc'-4 // 'abba' -0 // 'aaabbbccc' -27


function renameFile(newName, oldName) {
  const dic = findSubSequences(oldName);
  return dic[newName] || 0;
}

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

function findSubSequences(str) {
  let result = [];
  const dic = {};

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      const subStr = str.slice(i, j);
      dic[subStr] = (dic[subStr] || 0) + 1;
    }
  }
  return dic;
}

// findSubSequences(oldName);
const result = renameFile(newName, oldName);
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
