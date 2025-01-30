// // 221. Maximal Square
// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
//
//
//
// Example 1:
//
//
// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 4
// Example 2:
//
//
// Input: matrix = [["0","1"],["1","0"]]
// Output: 1
// Example 3:
//
// Input: matrix = [["0"]]
// Output: 0
//
//
// Constraints:
//
//   m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 300
// matrix[i][j] is '0' or '1'.
function maximalSquare(matrix: string[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = Array.from({length: m}, () => Array(n).fill(0));
  let currMax = 0;

  for (let i=0; i < m; i++) {
    for (let j=0; j < n; j++) {
      if (matrix[i][j] === '1' && i !==0 && j!==0) {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) +1;
      } else {
        dp[i][j]=Number(matrix[i][j]);
      }
      currMax = Math.max(currMax, dp[i][j]);
    }
  }
  return currMax* currMax;
};

const matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
const result = maximalSquare(matrix);
console.log(result);
