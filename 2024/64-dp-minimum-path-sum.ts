// // 64. Minimum Path Sum
// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
//
//   Note: You can only move either down or right at any point in time.
//
//
//
//   Example 1:
//
//
// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
//   Example 2:
//
// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12
//
//
// Constraints:
//
//   m == grid.length
// n == grid[i].length
// 1 <= m, n <= 200
// 0 <= grid[i][j] <= 200
function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from({length: m}, () => Array(n).fill(0));
  dp[0][0] = grid[0][0];

  for (let i =0; i< m; i++) {
    for (let j = 0; j<n; j++) {
      if (i===0 && j===0) {
        continue;
      }
      if (i===0) {
        dp[i][j] = grid[i][j] + dp[i][j-1];
      } else if (j===0) {
        dp[i][j] = grid[i][j] + dp[i-1][j];
      } else {
        dp[i][j] = Math.min(grid[i][j] + dp[i][j-1],grid[i][j] + dp[i-1][j]);
      }
    }
  }

  return dp[m-1][n-1];

};

const grid = [[1,3,1],[1,5,1],[4,2,1]];
const result = minPathSum(grid);
console.log(result);
