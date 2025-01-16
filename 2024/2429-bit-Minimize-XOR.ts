// // 2429. Minimize XOR
// Given two positive integers num1 and num2, find the positive integer x such that:
//
//   x has the same number of set bits as num2, and
// The value x XOR num1 is minimal.
//   Note that XOR is the bitwise XOR operation.
//
//   Return the integer x. The test cases are generated such that x is uniquely determined.
//
//   The number of set bits of an integer is the number of 1's in its binary representation.
//
//
//
// Example 1:
//
// Input: num1 = 3, num2 = 5
// Output: 3
// Explanation:
//   The binary representations of num1 and num2 are 0011 and 0101, respectively.
//   The integer 3 has the same number of set bits as num2, and the value 3 XOR 3 = 0 is minimal.
//   Example 2:
//
// Input: num1 = 1, num2 = 12
// Output: 3
// Explanation:
//   The binary representations of num1 and num2 are 0001 and 1100, respectively.
//   The integer 3 has the same number of set bits as num2, and the value 3 XOR 1 = 2 is minimal.
//
//
//   Constraints:
//
// 1 <= num1, num2 <= 109

function minimizeXor(num1: number, num2: number): number {
  let countB = num2.toString(2).split('0').join('').length;

  let result = 0;

  for (let i = 31; i >= 0 && countB > 0; i--) {
    if ((num1 & (1 << i)) !== 0) {
      result |= (1 << i);
      countB--;
    }
  }

  for (let i = 0; i < 32 && countB > 0; i++) {
    if ((result & (1 << i)) === 0) {
      result |= (1 << i);
      countB--;
    }
  }

  return result;
};

const num1 = 3, num2 = 5;
const result = minimizeXor(num1, num2);
console.log(result);
