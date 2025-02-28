// // 862. Shortest Subarray with Sum at Least K
// Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. If there is no such subarray, return -1.
//
// A subarray is a contiguous part of an array.
//
//
//
//   Example 1:
//
// Input: nums = [1], k = 1
// Output: 1
// Example 2:
//
// Input: nums = [1,2], k = 4
// Output: -1
// Example 3:
//
// Input: nums = [2,-1,2], k = 3
// Output: 3
//
//
// Constraints:
//
//   1 <= nums.length <= 105
//   -105 <= nums[i] <= 105
// 1 <= k <= 109


function shortestSubarray(nums: number[], k: number): number {
  const n = nums.length;
  const prefix: number[] = new Array(n + 1).fill(0);

  // Обчислення префіксних сум
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }

  let minLength = Infinity;
  const deque: number[] = []; // Дек для збереження індексів

  for (let i = 0; i <= n; i++) {
    // Перевіряємо чи можемо знайти підмасив, сума якого >= k
    while (deque.length > 0 && prefix[i] - prefix[deque[0]] >= k) {
      minLength = Math.min(minLength, i - deque.shift()!);
    }

    // Видаляємо з черги всі `j`, де prefix[i] ≤ prefix[j], бо вони вже не корисні
    while (deque.length > 0 && prefix[i] <= prefix[deque[deque.length - 1]]) {
      deque.pop();
    }

    // Додаємо поточний індекс у дек
    deque.push(i);
  }

  return minLength === Infinity ? -1 : minLength;
};


const nums = [1], k = 1;
const result= shortestSubarray(nums,k);
console.log(result);
