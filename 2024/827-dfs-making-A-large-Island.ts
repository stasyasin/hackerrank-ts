// // 827. Making A Large Island
// ou are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.
//
// Return the size of the largest island in grid after applying this operation.
//
//   An island is a 4-directionally connected group of 1s.
//
//
//
//   Example 1:
//
// Input: grid = [[1,0],[0,1]]
// Output: 3
// Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
//   Example 2:
//
// Input: grid = [[1,1],[1,0]]
// Output: 4
// Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.
//   Example 3:
//
// Input: grid = [[1,1],[1,1]]
// Output: 4
// Explanation: Can't change any 0 to 1, only one island with area = 4.
//
//
// Constraints:
//
//   n == grid.length
// n == grid[i].length
// 1 <= n <= 500
// grid[i][j] is either 0 or 1.

function largestIsland(grid: number[][]): number {
  const n = grid.length;
  const parrentArr = Array.from({ length: n }, () => Array(n).fill(0));
  const islandsSizeArr = Array(n * n + 1).fill(0);
  const dirs = [-1, 0, 1, 0, -1];
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let root = 0;
  let result = 0;

  const dfs = (i: number, j: number): number => {
    parrentArr[i][j] = root;
    islandsSizeArr[root]++;
    for (const [dr, dc] of directions) {
      const dx = i + dr;
      const dy = j + dc;
      if (dx >= 0 && dx < n && dy >= 0 && dy < n && grid[dx][dy] === 1 && parrentArr[dx][dy] === 0) {
        dfs(dx, dy);
      }
    }
    return islandsSizeArr[root];
  };

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === 1 && parrentArr[i][j] === 0) {
        root++;
        result = Math.max(result, dfs(i, j));
      }
    }
  }

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === 0) {
        const s = new Set<number>();
        for (const [dr, dc] of directions) {
          const dx = i + dr;
          const dy = j + dc;
          if (dx >= 0 && dx < n && dy >= 0 && dy < n) {
            s.add(parrentArr[dx][dy]);
          }
        }
        let t = 1;
        for (const x of s) {
          t += islandsSizeArr[x];
        }
        result = Math.max(result, t);
      }
    }
  }
  return result;
};

const grid = [[1,0],[0,1]];
const result = largestIsland(grid);
console.log(result);
