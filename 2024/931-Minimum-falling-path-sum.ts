// // 931. Minimum Falling Path Sum
// Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.
//
//   A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).
//
//
//
//   Example 1:
//
//
// Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
// Output: 13
// Explanation: There are two falling paths with a minimum sum as shown.
//   Example 2:
//
//
// Input: matrix = [[-19,57],[-40,-5]]
// Output: -59
// Explanation: The falling path with a minimum sum is shown.
//
//
//   Constraints:
//
// n == matrix.length == matrix[i].length
// 1 <= n <= 100
// -100 <= matrix[i][j] <= 100

function minFallingPathSum(matrix: number[][]): number {
  const n = matrix.length;
  const dp = [...matrix[0]];

  for (let i=1; i<n; i++) {
    const prevDp = [...dp];
    for (let j=0; j<n; j++) {
      const prevVal =j - 1 >= 0 ? prevDp[j - 1] : Infinity;
      const nextVal = j + 1 < n ? prevDp[j + 1] : Infinity;
      const currMin = Math.min(matrix[i][j], (j - 1 >= 0 ? matrix[i][j-1] : Infinity) , ( j+1 <n ? matrix[i][j+1] : Infinity));
      dp[j] = matrix[i][j] + Math.min(prevDp[j], prevVal, nextVal);
    }
  }
  return Math.min(...dp);

};

const matrix = [[2,1,3],[6,5,4],[7,8,9]];
const result = minFallingPathSum(matrix);
console.log(result);
