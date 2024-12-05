// 2257 Count Unguarded Cells in the Grid
//
// You are given two integers m and n representing a 0-indexed m x n grid. You are also given two 2D integer arrays guards and walls where guards[i] = [rowi, coli] and walls[j] = [rowj, colj] represent the positions of the ith guard and jth wall respectively.
//
//   A guard can see every cell in the four cardinal directions (north, east, south, or west) starting from their position unless obstructed by a wall or another guard. A cell is guarded if there is at least one guard that can see it.
//
//   Return the number of unoccupied cells that are not guarded.
//
//
//
//   Example 1:
//
//
// Input: m = 4, n = 6, guards = [[0,0],[1,1],[2,3]], walls = [[0,1],[2,2],[1,4]]
// Output: 7
// Explanation: The guarded and unguarded cells are shown in red and green respectively in the above diagram.
//   There are a total of 7 unguarded cells, so we return 7.
// Example 2:
//
//
// Input: m = 3, n = 3, guards = [[1,1]], walls = [[0,1],[1,0],[2,1],[1,2]]
// Output: 4
// Explanation: The unguarded cells are shown in green in the above diagram.
//   There are a total of 4 unguarded cells, so we return 4.
//
//
// Constraints:
//
//   1 <= m, n <= 105
// 2 <= m * n <= 105
// 1 <= guards.length, walls.length <= 5 * 104
// 2 <= guards.length + walls.length <= m * n
// guards[i].length == walls[j].length == 2
// 0 <= rowi, rowj < m
// 0 <= coli, colj < n
// All the positions in guards and walls are unique.


// TODO Solutions is not working
function bfsCountUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
  let count = 0;
  const queue: number[][] = [];
  const visited = new Set();
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  queue.push([0, 0]);
  const grid:any[][] = Array.from({length: m}, () => Array.from({length: n}, () => 0));
  console.log(grid);

  for (const guard of guards) {
    const [x, y] = guard;
    grid[x][y] = 'G';
  }
  for (const wall of walls) {
    const [x, y] = wall;
    grid[x][y] = 'W';
  }
  console.log(grid);

  while (queue.length > 0) {
    const curr = queue.shift()!;
    const [x, y] = curr;
    if (visited.has(`${x},${y}`)) {
      continue;
    }
    visited.add(`${x},${y}`);

    for (const direction of directions) {
      const [dx, dy] = direction;
      const [newX, newY] = [x + dx, y + dy];

      if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
        if (grid[x][y]==='G' && grid[newX][newY]===0) {
          grid[newX][newY] = 1;
        }

        queue.push([newX, newY]);
      }

    }

  }

  console.log(grid);


  return count;
};

const mIn = 4, nIn = 6, guardsIn = [[0,0],[1,1],[2,3]], wallsIn = [[0,1],[2,2],[1,4]];
const result = bfsCountUnguarded(mIn, nIn, guardsIn, wallsIn);
console.log(result);
