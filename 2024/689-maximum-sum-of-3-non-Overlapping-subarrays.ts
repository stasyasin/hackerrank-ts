// 689. Maximum Sum of 3 Non-Overlapping Subarrays
// Given an integer array nums and an integer k, find three non-overlapping subarrays of length k with maximum sum and return them.
//
//   Return the result as a list of indices representing the starting position of each interval (0-indexed). If there are multiple answers, return the lexicographically smallest one.
//
//
//
//   Example 1:
//
// Input: nums = [1,2,1,2,6,7,5,1], k = 2
// Output: [0,3,5]
// Explanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
//   We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.
//   Example 2:
//
// Input: nums = [1,2,1,2,1,2,1,2,1], k = 2
// Output: [0,2,4]
//
//
// Constraints:
//
//   1 <= nums.length <= 2 * 104
// 1 <= nums[i] < 216
// 1 <= k <= floor(nums.length / 3)


function maxSumOfThreeSubarrays(nums: number[], k: number): number[] {
  const n = nums.length;
  const sums = [];
  let currentSum = 0;

  for (let i = 0; i < n; i++) {
    currentSum += nums[i];
    if (i >= k) {
      currentSum -= nums[i - k];
    }
    if (i >= k - 1) {
      sums.push(currentSum);
    }
  }

  const m = sums.length;
  const left: number[] = Array(m).fill(0);
  const right: number[] = Array(m).fill(0);

  let maxIndex = 0;
  for (let i = 0; i < m; i++) {
    if (sums[i] > sums[maxIndex]) maxIndex = i;
    left[i] = maxIndex;
  }

  maxIndex = m - 1;
  for (let i = m - 1; i >= 0; i--) {
    if (sums[i] >= sums[maxIndex]) maxIndex = i;
    right[i] = maxIndex;
  }

  let maxSum = 0;
  const result = [-1, -1, -1];

  for (let mid = k; mid < m - k; mid++) {
    const l = left[mid - k];
    const r = right[mid + k];

    const totalSum = sums[l] + sums[mid] + sums[r];
    if (totalSum > maxSum) {
      maxSum = totalSum;
      result[0] = l;
      result[1] = mid;
      result[2] = r;
    }
  }

  return result;
};

const nums = [1,2,1,2,6,7,5,1], k = 2;
const result = maxSumOfThreeSubarrays(nums, k);
console.log(result);
