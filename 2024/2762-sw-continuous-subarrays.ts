// // 2762. Continuous Subarrays
// You are given a 0-indexed integer array nums. A subarray of nums is called continuous if:
//
// Let i, i + 1, ..., j be the indices in the subarray. Then, for each pair of indices i <= i1, i2 <= j, 0 <= |nums[i1] - nums[i2]| <= 2.
// Return the total number of continuous subarrays.
//
//   A subarray is a contiguous non-empty sequence of elements within an array.
//
//
//
//   Example 1:
//
// Input: nums = [5,4,2,4]
// Output: 8
// Explanation:
//   Continuous subarray of size 1: [5], [4], [2], [4].
//   Continuous subarray of size 2: [5,4], [4,2], [2,4].
//   Continuous subarray of size 3: [4,2,4].
//   Thereare no subarrys of size 4.
// Total continuous subarrays = 4 + 3 + 1 = 8.
// It can be shown that there are no more continuous subarrays.
//
//
//   Example 2:
//
// Input: nums = [1,2,3]
// Output: 6
// Explanation:
//   Continuous subarray of size 1: [1], [2], [3].
//   Continuous subarray of size 2: [1,2], [2,3].
//   Continuous subarray of size 3: [1,2,3].
//   Total continuous subarrays = 3 + 2 + 1 = 6.
//
//
// Constraints:
//
//   1 <= nums.length <= 105
// 1 <= nums[i] <= 109

// function continuousSubarrays(nums: number[]): number {
//   let left = 0, result = 0;
//   let minVal = nums[0], maxVal = nums[0];
//
//   for (let right = 0; right < nums.length; right++) {
//     minVal = Math.min(minVal, nums[right]);
//     maxVal = Math.max(maxVal, nums[right]);
//     while (maxVal - minVal > 2) {
//       left++;
//       minVal = Math.min(...nums.slice(left, right + 1));
//       maxVal = Math.max(...nums.slice(left, right + 1));
//     }
//
//     result += right - left + 1;
//
//
//   }
//
//
//   return result;
// };


function continuousSubarrays(nums: number[]): number {
  let left = 0, result = 0;
  const minDeque: number[] = [];
  const maxDeque: number[] = [];

  for (let right = 0; right < nums.length; right++) {
    while (minDeque.length && nums[minDeque[minDeque.length - 1]] >= nums[right]) {
      minDeque.pop();
    }
    while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] <= nums[right]) {
      maxDeque.pop();
    }

    minDeque.push(right);
    maxDeque.push(right);

    while (nums[maxDeque[0]] - nums[minDeque[0]] > 2) {
      if (minDeque[0] === left) minDeque.shift();
      if (maxDeque[0] === left) maxDeque.shift();
      left++;
    }

    result += right - left + 1;
  }

  return result;
};

const nums = [1,2,3]
const result = continuousSubarrays(nums);
console.log(result);
