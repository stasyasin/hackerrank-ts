'use strict';

function chocolotaFest(n, c, m) {
  let result = 0;
  if (n < c) {
    return result;
  }
  let firstBuy = Math.floor(n/c);
  result = result + firstBuy;

  if (firstBuy < m) {
    return result;
  }
  let wrappers = firstBuy;

  while(wrappers >= m) {
    wrappers = wrappers - m;
    wrappers++;
    result++;
  }

  return result;
}

function main() {
  let n, c, m;
  n = 6;
  c = 2;
  m = 2;

  let result = chocolotaFest(n, c, m);
  console.log(result);
}

main();
