'use strict'

const input = 'Hello, my name is Stas. Test';

const  reverseStrings = (input) => {
  const regex = /[a-zA-Z0-9]/g;
  let res = '';
  let tempRes = '';

  for (let i=0; i< input.length; i++) {
    const found = input[i].match(regex);
    if (found) {
      tempRes = input[i] + tempRes;
    } else {
      res += tempRes + input[i];
      tempRes = '';
    }
  }
  if (tempRes) {
    res = res + tempRes;
  }

  return res;
}

const result = reverseStrings(input);

console.log(result);
console.log(result === 'olleH, ym eman si satS. tseT');

const isLetter = (code) => (code >= 65 && code <= 90) || (code >= 97 && code <= 122);

const reverseStrings1 = s => {
  return s.split(' ')
    .map(word => {
      const code = word.charCodeAt(word.length - 1);
      return isLetter(code)
        ? word.split('').reverse().join('')
        : word.substring(0, word.length - 1).split('').reverse().join('') + word[word.length - 1]
    })
    .join(' ');
}

const reverseInPlace = (arr, start, end) => {
  for (let i = start, j = end; i < j; i++, j--) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
}

const reverseStrings2 = s => {
  const arr = s.split('');
  let l, r = 0;
  while (r <= s.length) {
    if (arr[r] === ' ' || r === s.length) {
      const code = arr[r - 1].charCodeAt(0)
      reverseInPlace(arr, l, isLetter(code) ? r - 1 : r - 2)
      l = r + 1
    }
    r += 1
  }
  return arr.join('')
}

console.log(reverseStrings1(input))
console.log(reverseStrings2(input))
