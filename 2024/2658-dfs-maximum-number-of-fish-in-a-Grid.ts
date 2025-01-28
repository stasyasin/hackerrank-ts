// // 2658. Maximum Number of Fish in a Grid
// You are given a 0-indexed 2D matrix grid of size m x n, where (r, c) represents:
//
//   A land cell if grid[r][c] = 0, or
//   A water cell containing grid[r][c] fish, if grid[r][c] > 0.
//   A fisher can start at any water cell (r, c) and can do the following operations any number of times:
//
//   Catch all the fish at cell (r, c), or
// Move to any adjacent water cell.
//   Return the maximum number of fish the fisher can catch if he chooses his starting cell optimally, or 0 if no water cell exists.
//
//   An adjacent cell of the cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) or (r - 1, c) if it exists.
//
//
//
//   Example 1:
//
//
// Input: grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]
// Output: 7
// Explanation: The fisher can start at cell (1,3) and collect 3 fish, then move to cell (2,3) and collect 4 fish.
//   Example 2:
//
//
// Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]
// Output: 1
// Explanation: The fisher can start at cells (0,0) or (3,3) and collect a single fish.
//
//
//   Constraints:
//
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// 0 <= grid[i][j] <= 10

function findMaxFish(grid: number[][]): number {
  let result =0;
  const m = grid.length;
  const n = grid[0].length;
  const directions = [[0, 1], [1,0], [0, -1], [-1, 0]];
  const visited = Array.from({length: m}, () => Array(n).fill(false));

  const dfs = (i: number, j: number): number => {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0 || visited[i][j]) {
      return 0;
    }
    visited[i][j]=true;

    let totalFish = grid[i][j];

    for (const direction of directions) {
      const [dx, dy] = [...direction];
      const newX = i + dx;
      const newY = j + dy;
      totalFish += dfs(newX, newY);
    }
    return totalFish;

  }

  for (let i=0; i< m; i++) {
    for (let j=0; j< n; j++) {
      const currRes = dfs(i, j);
      result = Math.max(result, currRes);
    }
  }

  return result;
};


const grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]];
const result = findMaxFish(grid);
console.log(result);
