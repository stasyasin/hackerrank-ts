'use strict';

function makeTest(ar) {
  let result;

  let max = ar[0];
  let map = new Map();

  for (let i = 0; i < ar.length; i++) {
    if (max < ar[i]) {
      max = ar[i];
    }
    if (!map.has(ar[i])) {
      map.set(ar[i], 1);
    } else {
      map.set(ar[i], map.get(ar[i]) + 1);
    }
  }
  return map.get(max);
}

function main() {
  const input = [3, 2, 1, 3];

  let result = makeTest(input);
  console.log(result);
}

main();
