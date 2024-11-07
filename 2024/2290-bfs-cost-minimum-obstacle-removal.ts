// 2290. Minimum Obstacle Removal to Reach Corner
// You are given a 0-indexed 2D integer array grid of size m x n. Each cell has one of two values:
//
//   0 represents an empty cell,
//   1 represents an obstacle that may be removed.
//   You can move up, down, left, or right from and to an empty cell.
//
//   Return the minimum number of obstacles to remove so you can move from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1).
//
//
//
//   Example 1:
//
//
// Input: grid = [[0,1,1],[1,1,0],[1,1,0]]
// Output: 2
// Explanation: We can remove the obstacles at (0, 1) and (0, 2) to create a path from (0, 0) to (2, 2).
//   It can be shown that we need to remove at least 2 obstacles, so we return 2.
// Note that there may be other ways to remove 2 obstacles to create a path.
//   Example 2:
//
//
// Input: grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]]
// Output: 0
// Explanation: We can move from (0, 0) to (2, 4) without removing any obstacles, so we return 0.
//
//
// Constraints:
//
//   m == grid.length
// n == grid[i].length
// 1 <= m, n <= 105
// 2 <= m * n <= 105
// grid[i][j] is either 0 or 1.
// grid[0][0] == grid[m - 1][n - 1] == 0

// MY SOLUTION
// function minimumObstacles(grid: number[][]): number {
//   const m = grid.length;
//   const n = grid[0].length;
//   const visited = new Set<string>();
//   const deque: [number, number, number][] = [[0, 0, 0]]; // x, y, cost // deque because items could be added at the beginning and at the end
//   const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
//
//   while(deque.length > 0) {
//     const curr = deque.shift()!;
//     const [currX, currY, cost] = curr!;
//     if (visited.has(JSON.stringify(curr))) {
//       continue;
//     }
//     visited.add(JSON.stringify(curr));
//
//     // check if we reach the target
//     if (currX === m - 1 && currY === n - 1) {
//       return (grid[currX][currY] === 1) ? cost + 1 : cost;
//     }
//
//     for (let direction of directions) {
//       const [dx, dy] = direction;
//       const [newX, newY] = [dx + currX, dy + currY];
//       // check if new direction didnt exit the board
//       if (newX >= 0 && newX < m && newY >= 0 && newY < n && !visited.has(JSON.stringify([newX, newY]))) {
//         if (grid[newX][newY] === 0) {
//           deque.unshift([newX, newY, cost]);
//         } else {
//           deque.push([newX, newY, cost + 1]);
//         }
//       }
//     }
//   }
//   return -1;
// };


// CHATGBT solution
function minimumObstacles(grid: number[][]): number {
  const m = grid.length, n = grid[0].length;
  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  const deque: [number, number, number][] = [[0, 0, 0]]; // [x, y, cost]
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  while (deque.length > 0) {
    const [x, y, cost] = deque.shift()!;

    if (x === m - 1 && y === n - 1) return cost;

    for (const [dx, dy] of directions) {
      const newX = x + dx, newY = y + dy;

      if (newX >= 0 && newX < m && newY >= 0 && newY < n && !visited[newX][newY]) {
        visited[newX][newY] = true;
        if (grid[newX][newY] === 0) {
          deque.unshift([newX, newY, cost]);
        } else {
          deque.push([newX, newY, cost + 1]);
        }
      }
    }
  }

  return -1;
};

// RANDOM DUDE GITHUB SOLUTION THAT PASSED Time Limit Exceeded issue
// function minimumObstacles(grid: number[][]): number {
//   const m = grid.length, n = grid[0].length;
//   const visited = Array.from({ length: m }, () => Array(n).fill(false));
//   const deque: [number, number, number][] = [[0, 0, 0]]; // [x, y, cost]
//   const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
//
//   while (deque.length > 0) {
//     const [x, y, cost] = deque.shift()!;
//
//     if (x === m - 1 && y === n - 1) return cost;
//
//     for (const [dx, dy] of directions) {
//       const newX = x + dx, newY = y + dy;
//
//       if (newX >= 0 && newX < m && newY >= 0 && newY < n && !visited[newX][newY]) {
//         visited[newX][newY] = true;
//         if (grid[newX][newY] === 0) {
//           deque.unshift([newX, newY, cost]);
//         } else {
//           deque.push([newX, newY, cost + 1]);
//         }
//       }
//     }
//   }
//
//   return -1;
// };

// Приклад використання
const input = [[0,1,1],[1,1,0],[1,1,0]];
const result = minimumObstacles(input);

console.log(result); // 2
