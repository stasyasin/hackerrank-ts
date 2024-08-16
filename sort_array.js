'use strict';

function makeTest(w) {
  let result = 1;
  let sorted = w.sort((a, b) => a - b);
  let curWeight = sorted[0];

  for (let i = 0; i < sorted.length; i++) {
    if(sorted[i] > curWeight+4) {
      result++;
      curWeight = sorted[i];
    }

  }




  return result;
}

function main() {
  // const input = [1,2,3,21,7,12,14,21]; //4
  const input = [16,18,10,13,2,9,17,17,0,19]; //3

  let result = makeTest(input);
  console.log(result);
}

main();
