'use strict';

function resolve(p, d, m, s) {
  let result = 0;
  let currentP = p;
  while (s >= currentP) {
    result++;
    s = s - currentP;
    currentP = currentP - d;
    if (currentP < m) {
      currentP = m;
    }
  }

  return result;
}

function main() {
  // const inputArray = [7,1,3,4,1,7];

  let p, d, m, s;
  // p = 20;
  // d = 3;
  // m = 6;
  // s = 80;
  //
  p = 20;
  d = 3;
  m = 6;
  s = 85;


  let result = resolve(p, d, m, s);
  console.log(result);
}

main();
