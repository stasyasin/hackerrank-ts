// 1861. Rotating the Box
// Medium
// Topics
// Companies
// Hint
// You are given an m x n matrix of characters box representing a side-view of a box. Each cell of the box is one of the following:
//
//   A stone '#'
// A stationary obstacle '*'
// Empty '.'
// The box is rotated 90 degrees clockwise, causing some of the stones to fall due to gravity. Each stone falls down until it lands on an obstacle, another stone, or the bottom of the box. Gravity does not affect the obstacles' positions, and the inertia from the box's rotation does not affect the stones' horizontal positions.
//
// It is guaranteed that each stone in box rests on an obstacle, another stone, or the bottom of the box.
//
//   Return an n x m matrix representing the box after the rotation described above.
//
//
//
//   Example 1:
//
//
//
// Input: box = [["#",".","#"]]
// Output: [["."],
//   ["#"],
//   ["#"]]
// Example 2:
//
//
//
// Input: box = [["#",".","*","."],
//   ["#","#","*","."]]
// Output: [["#","."],
//   ["#","#"],
//   ["*","*"],
//   [".","."]]
// Example 3:
//
//
//
// Input: box = [["#","#","*",".","*","."],
//   ["#","#","#","*",".","."],
//   ["#","#","#",".","#","."]]
// Output: [[".","#","#"],
//   [".","#","#"],
//   ["#","#","*"],
//   ["#","*","."],
//   ["#",".","*"],
//   ["#",".","."]]
//
//
// Constraints:
//
//   m == box.length
// n == box[i].length
// 1 <= m, n <= 500
// box[i][j] is either '#', '*', or '.'.


function rotateTheBox(box: string[][]): string[][] {
  // Функція для повороту матриці на 90 градусів за годинниковою стрілкою
  const rotateMatrix = (matrix: string[][]): string[][] => {
    const m = matrix.length;
    const n = matrix[0].length;

    const rotatedMatrix: string[][] = Array.from({ length: n }, () => Array(m).fill('.'));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        rotatedMatrix[j][m - 1 - i] = matrix[i][j];
      }
    }

    return rotatedMatrix;
  };

  // Падіння каменів для вже повернутої матриці
  const m = box.length;
  const n = box[0].length;

  // Спочатку симулюємо падіння в оригінальній коробці
  for (let i = 0; i < m; i++) {
    let lastEmpty = n - 1; // позиція останнього доступного порожнього місця
    for (let j = n - 1; j >= 0; j--) {
      if (box[i][j] === '*') {
        lastEmpty = j - 1; // стіна блокує падіння
      } else if (box[i][j] === '#') {
        box[i][j] = '.'; // очищаємо попереднє місце каменя
        box[i][lastEmpty] = '#'; // переміщуємо камінь до останнього доступного місця
        lastEmpty--; // зменшуємо доступний індекс
      }
    }
  }

  // Ротуємо коробку після обробки падіння
  return rotateMatrix(box);

};

// Приклад використання
// const input = [["#",".","*","."],["#","#","*","."]];
const input = [["#","#","*",".","*","."],["#","#","#","*",".","."],["#","#","#",".","#","."]];
const result = rotateTheBox(input);

// console.log(result); // [["#","."],["#","#"],["*","*"],[".","."]]
console.log(result); // [[".","#","#"],[".","#","#"],["#","#","*"],["#","*","."],["#",".","*"],["#",".","."]]
