// 773. Sliding Puzzle
// On an 2 x 3 board, there are five tiles labeled from 1 to 5, and an empty square represented by 0. A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.
//
//   The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].
//
//   Given the puzzle board board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.
//
//
//
// Example 1:
//
//
// Input: board = [[1,2,3],[4,0,5]]
// Output: 1
// Explanation: Swap the 0 and the 5 in one move.
//   Example 2:
//
//
// Input: board = [[1,2,3],[5,4,0]]
// Output: -1
// Explanation: No number of moves will make the board solved.
//   Example 3:
//
//
// Input: board = [[4,1,2],[5,0,3]]
// Output: 5
// Explanation: 5 is the smallest number of moves that solves the board.
//   An example path:
//   After move 0: [[4,1,2],[5,0,3]]
// After move 1: [[4,1,2],[0,5,3]]
// After move 2: [[0,1,2],[4,5,3]]
// After move 3: [[1,0,2],[4,5,3]]
// After move 4: [[1,2,0],[4,5,3]]
// After move 5: [[1,2,3],[4,5,0]]
//
//
// Constraints:
//
//   board.length == 2
// board[i].length == 3
// 0 <= board[i][j] <= 5
// Each value board[i][j] is unique.

function slidingPuzzle(board: number[][]): number {
  let res = 0;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const target = [[1,2,3],[4,5,0]];
  const visited = new Set<string>();
  const queue = [board];

  while(queue.length > 0) {
    const queueSize = queue.length;

    for (let i = 0; i < queueSize; i++) {
      const currBoard = queue.shift()!;

      // check if we reach the target
      if (JSON.stringify(currBoard) === JSON.stringify(target)) {
        return res;  // return steps
      }

      // Mark the current board as visited
      const currBoardString = JSON.stringify(currBoard);
      if (visited.has(currBoardString)) {
        continue; // if it was already visited -> skip
      }

      // add currBoard to visited to not repeat step again
      visited.add(currBoardString);

      // get size of the matrix
      const m = currBoard.length;
      const n = currBoard[0].length;

      // searching for 0 element in currBoard
      let curr0x = 0;
      let curr0y = 0;

      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (currBoard[i][j] === 0) {
            curr0x = i;
            curr0y = j;
          }
        }
      }

      // add new possible directions to queue
      for (let direction of directions) {
        const [dx, dy] = direction;
        const [newX, newY] = [dx + curr0x, dy + curr0y];
        // check if new direction didnt exit the board
        if (newX >= 0 && newX < currBoard.length && newY >= 0 && newY < currBoard[0].length) {
          const newBoard = currBoard.map(row => [...row]); // copying current board
          const temp = newBoard[newX][newY];
          newBoard[newX][newY] = newBoard[curr0x][curr0y];
          newBoard[curr0x][curr0y] = temp;

          // adding newBoard to queue
          queue.push(newBoard);
        }
      }

    }

    res++;
  }
  return -1;
};

// Приклад використання
// const input = [[4,1,2],[5,0,3]];
const input = [[1,2,3],[5,4,0]]
const result = slidingPuzzle(input);

console.log(result); // 5
