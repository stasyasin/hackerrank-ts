'use strict'

// const input = 'abba';
const input = 'ifailuhkqq';

const sherlockAnograms = (s) => {
  let result = 0;
  const dictionary = {};

  for (let i=1; i < s.length; i++) {
    dictionary[i] = [];
    for (let j=0; j <= s.length -i; j++) {
      dictionary[i].push(s.substr(j,i));
    }
  }
  // console.log(dictionary);

  for (let value of Object.values(dictionary)) {
    for (let i=0; i< value.length; i++) {
        for (let j=i + 1; j<value.length; j++) {
          if (testAnagram(value[i], value[j])) {
            result++;
          }
        }
    }
  }

  return result;
}

function testAnagram(s1, s2) {
  const letters = {};
  let result = true;

  for (let i=0; i < s1.length; i++) {
    const letter = s1[i];
    letters[letter] = (letters[letter] || 0) + 1;
  }

  for (let i=0; i < s2.length; i++) {
    const letter = s2[i];
    if (!letters[letter]) {
      result = false;
    } else {
      letters[letter] = letters[letter] - 1;
      if (letters[letter] <0) {
        result = false;
      }
    }

  }

  return result;
}

const result = sherlockAnograms(input);
console.log(result)

const test = testAnagram('ifa', 'aia');
console.log(test)

