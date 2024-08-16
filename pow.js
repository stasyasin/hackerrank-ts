'use strict';

function mathPowFor(a, b) {
  if (b === 0) return 1;

  const isPositive = b > 0;
  let result = 1;
  const c = isPositive ? b : -1* b;

  for(let i = 1; i <=c; i++) {
      result = isPositive? result * a : result /a;
  }

  return result;
}

function mathPowForRecursive(a, b) {
  if (b === 0) return 1;

  const isPositive = b > 0;
  if (!isPositive) b = -1 * b;

  const result = pow(a, b);

  return isPositive? result : 1 / result;
}

function pow(a, b) {
  if (b === 1) return a;

  return a * pow(a,b -1);
}

const a = 5;
const b = -5;
const resFor = mathPowFor(a, b);
const resRecursive = mathPowForRecursive(a, b);
console.log(resFor);
console.log(resRecursive);

// function mathPowFor(a, b) {
//   if (b === 0) return 1;
//
//   const isPositive = b > 0;
//   let result = a;
//   if (!isPositive) b = -1 * b;
//
//   for(let i = 2; i <=b; i++) {
//     result *=a;
//   }
//
//   return isPositive? result : 1 / result;
// }
