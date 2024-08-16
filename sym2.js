'use strict'

const text1 = 'two times three is not four';
const text2 = 'II will find you and I will kill you';
const text3 = 'I will kill you and I will find you';
const text4 = 'I I I';
const text5 = '    I will find you and I will kill you    ';
const phrase = 'two times two is four';

function canMakePhrase(text, phrase) {
    const arrayText = text.split(' ');
    const map = {};
    let result = true;
    for (const val of arrayText) {
      if (!map[val]) {
        map[val]= 1;
      } else {
        map[val]++;
      }
    }

    const arrayPhrase = phrase.split(' ');
    for (const val of arrayPhrase) {
      if (result) {
        if (map[val]) {
          map[val]--;
          if (map[val] < 0) {
            result = false;
          }
        } else {
          result = false;
        }
      }
    }
    return result;
}

const result1 = canMakePhrase(text1, phrase);
console.log(result1);
// const result2 = canMakePhrase(text2, phrase);
// console.log(result2);
// const result3 = canMakePhrase(text3, phrase);
// console.log(result3);
// const result4 = canMakePhrase(text4, phrase);
// console.log(result4);
// const result5 = canMakePhrase(text5, phrase);
// console.log(result5);


