// // 2523. Closest Prime Numbers in Range
//
// Given two positive integers left and right, find the two integers num1 and num2 such that:
//
//   left <= num1 < num2 <= right .
//     Both num1 and num2 are prime numbers.
//   num2 - num1 is the minimum amongst all other pairs satisfying the above conditions.
//   Return the positive integer array ans = [num1, num2]. If there are multiple pairs satisfying these conditions, return the one with the smallest num1 value. If no such numbers exist, return [-1, -1].
//
//
//
//   Example 1:
//
// Input: left = 10, right = 19
// Output: [11,13]
// Explanation: The prime numbers between 10 and 19 are 11, 13, 17, and 19.
// The closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].
//   Since 11 is smaller than 17, we return the first pair.
//   Example 2:
//
// Input: left = 4, right = 6
// Output: [-1,-1]
// Explanation: There exists only one prime number in the given range, so the conditions cannot be satisfied.
//
//
//   Constraints:
//
// 1 <= left <= right <= 106
//

function closestPrimes(left: number, right: number): number[] {
// 1. Створюємо решето Ератосфена до right
  const isPrime = new Array(right + 1).fill(true);
  isPrime[0] = isPrime[1] = false; // 0 та 1 не є простими

  for (let i = 2; i * i <= right; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= right; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // 2. Отримуємо прості числа в межах [left, right]
  const primes: number[] = [];
  for (let i = left; i <= right; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  // 3. Якщо немає хоча б двох простих чисел — повертаємо [-1, -1]
  if (primes.length < 2) return [-1, -1];

  // 4. Шукаємо пару з мінімальною різницею
  let minDiff = Infinity;
  let result: [number, number] = [-1, -1];

  for (let i = 1; i < primes.length; i++) {
    const diff = primes[i] - primes[i - 1];
    if (diff < minDiff) {
      minDiff = diff;
      result = [primes[i - 1], primes[i]];
    }
  }

  return result;
};

const left = 10, right = 19;
const result = closestPrimes(left, right);
console.log(result);
