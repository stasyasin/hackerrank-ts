'use strict';

function makeTest(k, contests) {
  console.log(k);
  console.log(contests);
  let result = 0;
  const important = contests.filter((elValue) => elValue[1] === 1).map((elValue) => elValue[0]).sort((a, b) => b - a);
  const notImportant = contests.filter((elValue) => elValue[1] === 0).map((elValue) => elValue[0]);
  console.log(important);
  console.log(notImportant);
  result = notImportant.reduce((a,b) => a + b, result);

  if (k === 0) {
    result = important.reduce((a,b) => a - b, result);
  } else {
    if (k >= important.length) {
      result = important.reduce((a,b) => a + b, result);
    } else {
      for (let i=0; i < k; i++) {
        result = result + important[i];
      }
      for (let i=k; i < important.length; i++) {
        result = result - important[i];
      }
    }

  }

  return result;
}

function main() {
  // const input = ['abcde','fghij','klmno','pqrst','uvwxy']; //YES
  // const input = ['eabcd','fghij','olkmn','trpqs','xywuv']; //YES
  const k = 3;
  const contests = [ [ 5, 1 ], [ 2, 1 ], [ 1, 1 ], [ 8, 1 ], [ 10, 0 ], [ 5, 0 ] ]; //29

  let result = makeTest(k, contests);
  console.log(result);
}

main();

