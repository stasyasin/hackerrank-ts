//2577. Minimum Time to Visit a Cell In a Grid

// You are given a m x n matrix grid consisting of non-negative integers where grid[row][col] represents the minimum time required to be able to visit the cell (row, col), which means you can visit the cell (row, col) only when the time you visit it is greater than or equal to grid[row][col].
//
//   You are standing in the top-left cell of the matrix in the 0th second, and you must move to any adjacent cell in the four directions: up, down, left, and right. Each move you make takes 1 second.
//
//   Return the minimum time required in which you can visit the bottom-right cell of the matrix. If you cannot visit the bottom-right cell, then return -1.
//
//
//
// Example 1:
//
//
//
// Input: grid = [[0,1,3,2],[5,1,2,5],[4,3,8,6]]
// Output: 7
// Explanation: One of the paths that we can take is the following:
//   - at t = 0, we are on the cell (0,0).
// - at t = 1, we move to the cell (0,1). It is possible because grid[0][1] <= 1.
// - at t = 2, we move to the cell (1,1). It is possible because grid[1][1] <= 2.
// - at t = 3, we move to the cell (1,2). It is possible because grid[1][2] <= 3.
// - at t = 4, we move to the cell (1,1). It is possible because grid[1][1] <= 4.
// - at t = 5, we move to the cell (1,2). It is possible because grid[1][2] <= 5.
// - at t = 6, we move to the cell (1,3). It is possible because grid[1][3] <= 6.
// - at t = 7, we move to the cell (2,3). It is possible because grid[2][3] <= 7.
// The final time is 7. It can be shown that it is the minimum time possible.
//   Example 2:
//
//
//
// Input: grid = [[0,2,4],[3,2,1],[1,0,4]]
// Output: -1
// Explanation: There is no path from the top left to the bottom-right cell.
//
//
//   Constraints:
//
// m == grid.length
// n == grid[i].length
// 2 <= m, n <= 1000
// 4 <= m * n <= 105
// 0 <= grid[i][j] <= 105
// grid[0][0] == 0

function minimumTime(grid: number[][]): number {
  // Check for immediate infeasibility.
  if (grid[0][1] > 1 && grid[1][0] > 1) {
    return -1; // just exit
  }

  const m = grid.length;
  const n = grid[0].length;

  // Initialize distance matrix with high values, representing 'infinite' distance.
  const distances: number[][] = Array.from({ length: m }, () =>
    Array(n).fill(Infinity));
  // Set the starting point's distance to 0.
  distances[0][0] = 0;

  // Initialize a min-heap priority queue.
  const pq: [number, number, number][] = [[0, 0, 0]];

  // Function to sort priority queue by first element (time).
  const sortPq = () => pq.sort((a, b) => a[0] - b[0]);

  // Direction offsets for facilitating traversal in 4 directions.
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  // While there are still elements in the priority queue.
  while (pq.length) {
    // Get the smallest time element and remove it from the queue.
    sortPq();
    const [currentTime, x, y] = pq.shift()!;

    // Return the time if we've reached the end.
    if (x === m - 1 && y === n - 1) {
      return currentTime;
    }

    // Explore in all four directions.
    for (let direction of directions) {
      const [dx, dy] = direction;
      const newX = x + dx, newY = y + dy;

      // If the new positions are within bounds, process them.
      if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
        let newTime = currentTime + 1;

        // Adjust the newTime if earlier than required time.
        if (newTime < grid[newX][newY]) {
          newTime = grid[newX][newY] + (grid[newX][newY] - newTime) % 2;
        }

        // Update the distance matrix and enqueue if found shorter path.
        if (newTime < distances[newX][newY]) {
          distances[newX][newY] = newTime;
          pq.push([newTime, newX, newY]);
        }
      }
    }
  }

  // This return statement should theoretically not be reached since the loop will exit upon reaching the end.
  return -1;

};


// Приклад використання
const input = [[0,1,3,2],[5,1,2,5],[4,3,8,6]];
// const input = [[0,2,4],[3,2,1],[1,0,4]];
const result = minimumTime(input);

console.log(result); // 7
