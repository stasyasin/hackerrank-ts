// // 1014. Best Sightseeing Pair
// You are given an integer array values where values[i] represents the value of the ith sightseeing spot. Two sightseeing spots i and j have a distance j - i between them.
//
//   The score of a pair (i < j) of sightseeing spots is values[i] + values[j] + i - j: the sum of the values of the sightseeing spots, minus the distance between them.
//
//   Return the maximum score of a pair of sightseeing spots.
//
//
//
//   Example 1:
//
// Input: values = [8,1,5,2,6]
// Output: 11
// Explanation: i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11
// Example 2:
//
// Input: values = [1,2]
// Output: 2
//
//
// Constraints:
//
//   2 <= values.length <= 5 * 104
// 1 <= values[i] <= 1000

function maxScoreSightseeingPair(values: number[]): number {
  let maxI = values[0];
  let maxScore = -Infinity;

  for (let j = 1; j < values.length; j++) {
    maxScore = Math.max(maxScore, maxI + values[j] - j);

    maxI = Math.max(maxI, values[j] + j);
  }

  return maxScore;
};


// function maxScoreSightseeingPair(values: number[]): number {
//   const dp = Array(values.length).fill(0);
//   const maxHeap = [-Infinity, -Infinity]
//   for (let i = 0; i < values.length; i++) {
//     dp[i] = values[i] - i;
//     if (maxHeap[0] < dp[i]) {
//       maxHeap[0] = dp[i];
//       maxHeap.sort((a, b) => a - b);
//     }
//   }
//
//   return maxHeap[0] + maxHeap[1];
// };

const values = [8,1,5,2,6];
const result = maxScoreSightseeingPair(values);
console.log(result);
