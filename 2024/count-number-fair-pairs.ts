// 2563. Count the Number of Fair Pairs
// Given a 0-indexed integer array nums of size n and two integers lower and upper, return the number of fair pairs.
//
//   A pair (i, j) is fair if:
//
// 0 <= i < j < n, and
// lower <= nums[i] + nums[j] <= upper
//
//
// Example 1:
//
// Input: nums = [0,1,7,4,4,5], lower = 3, upper = 6
// Output: 6
// Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5).
//   Example 2:
//
// Input: nums = [1,7,9,2,5], lower = 11, upper = 11
// Output: 1
// Explanation: There is a single fair pair: (2,3).
//
//
//   Constraints:
//
// 1 <= nums.length <= 105
// nums.length == n
// -109 <= nums[i] <= 109
// -109 <= lower <= upper <= 109
// [0,1,7,4,4,5];
// function countFairPairs(nums: number[], lower: number, upper: number): number {
//   nums.sort((a, b) => a - b);
//   let counter = 0;
//   let n = nums.length;
//
//   for (let i = 0; i < n; i++) {
//     let left = i + 1, right = n - 1;
//
//     while (left <= right) {
//       const sum = nums[i] + nums[left];
//       if (sum >= lower && sum <= upper) {
//         counter += right - left + 1;
//         break;
//       } else if (sum < lower) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }
//
//   return counter;
// };


function countFairPairs(nums: number[], lower: number, upper: number): number {
  nums.sort((a, b) => a - b);
  let count = 0;
  let n = nums.length;

  const countPairsBelowOrEqual = (target: number): number => {
    let left = 0, right = n - 1, total = 0;

    while (left < right) {
      if (nums[left] + nums[right] <= upper) {
        total += (right - left);
        left++;
      } else {
        right--;
      }
    }
    return total;
  }

  return countPairsBelowOrEqual(upper) - countPairsBelowOrEqual(lower - 1);
};
// Приклад використання
const nums = [0,1,7,4,4,5];
const lower = 3;
const upper = 6;
const result = countFairPairs(nums, lower, upper);

console.log(result); // Виведе: 6
