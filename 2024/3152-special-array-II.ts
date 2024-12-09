// // 3152. Special Array II
// An array is considered special if every pair of its adjacent elements contains two numbers with different parity.
//
//   You are given an array of integer nums and a 2D integer matrix queries, where for queries[i] = [fromi, toi] your task is to check that
// subarray
// nums[fromi..toi] is special or not.
//
//   Return an array of booleans answer such that answer[i] is true if nums[fromi..toi] is special.
//
//
//
//   Example 1:
//
// Input: nums = [3,4,1,2,6], queries = [[0,4]]
//
// Output: [false]
//
// Explanation:
//
//   The subarray is [3,4,1,2,6]. 2 and 6 are both even.
//
//   Example 2:
//
// Input: nums = [4,3,1,6], queries = [[0,2],[2,3]]
//
// Output: [false,true]
//
// Explanation:
//
//   The subarray is [4,3,1]. 3 and 1 are both odd. So the answer to this query is false.
//   The subarray is [1,6]. There is only one pair: (1,6) and it contains numbers with different parity. So the answer to this query is true.
//
//
//   Constraints:
//
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105
// 1 <= queries.length <= 105
// queries[i].length == 2
// 0 <= queries[i][0] <= queries[i][1] <= nums.length - 1

function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
  const result: boolean[] = [];
  const n = nums.length;
  if (n === 0) return result;
  const prefixInvalid = Array(n).fill(0);
  for (let i=1; i< n; i++) {
    prefixInvalid[i] = prefixInvalid[i - 1];
    if (nums[i] % 2 === nums[i - 1] % 2) {
      prefixInvalid[i]++;
    }
  }
  for (let [from, to] of queries) {
    if (from < 0 || to >= n || from > to) {
      continue;
    }
    if (from === to) {
      result.push(true);
      continue;
    }

    const errorsInRange = prefixInvalid[to] - prefixInvalid[from];
    result.push(errorsInRange === 0);
  }

  return result;
};

const nums = [1], queries = [[0,0]]
const result = isArraySpecial(nums, queries);
console.log(result);


// function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
//   const result: boolean[] = [];
//   const n = nums.length;
//   const parity: number[] = nums.map(num => num % 2);
//   for (let [from, to] of queries) {
//     if (from < 0 || to >= n || from > to) {
//       continue;
//     }
//     const subArray: number[] = nums.slice(from, to + 1);
//
//     if (subArray.length === 1) {
//       result.push(true);
//       continue;
//     }
//     const m = subArray.length;
//     let isValid = true;
//     for (let i = 1; i < m; i++) {
//       if (parity[i] === parity[i - 1]) {
//         isValid = false;
//         break;
//       }
//     }
//     result.push(isValid);
//   }
//
//   return result;
//
// };

// function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
//   const result: boolean[] = [];
//   const n = nums.length;
//   const parity: number[] = nums.map(num => num % 2);
//   const dp = Array(n).fill(true);
//   for (let i=1; i< n; i++) {
//     if (parity[i] === parity[i - 1]) {
//       dp[i] = false;
//     }
//   }
//   for (let [from, to] of queries) {
//     if (from < 0 || to >= n || from > to) {
//       continue;
//     }
//     const subArray: number[] = dp.slice(from, to + 1);
//     const isValid = !subArray.some(val => !val);
//     result.push(isValid);
//   }
//
//   return result;
// };
