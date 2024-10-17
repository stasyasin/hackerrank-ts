// Задача про пошук шляху від точки в матриці до рівня моря (0) часто підходить для вирішення як за допомогою BFS, так і DFS. Ось як можна їх порівняти:
//
//   BFS (ширина):
//
// Підходить краще для пошуку найкоротшого шляху, оскільки BFS гарантує, що знайдений перший шлях є найкоротшим.
//   У цій задачі, якщо ви хочете знайти мінімальну кількість кроків до нуля, то BFS забезпечить найкоротший шлях від таргета до 0.
// DFS (глибина):
//
// Може бути корисним для знаходження будь-якого шляху до нуля, без вимог щодо мінімальної кількості кроків.
//   DFS підходить, якщо не потрібен саме мінімальний шлях, а лише перевірка можливості дійти до 0.
// Отже, якщо на співбесіді вимагалось знайти найкоротший шлях від таргета до рівня моря, BFS був би кращим вибором. Проте якщо умова вимагала лише дістатися до 0, DFS також є цілком прийнятним варіантом.
//
//   Тепер щодо реалізації на TypeScript, ось приклад коду з використанням BFS для пошуку шляху від таргетної точки до нуля:

function findPathToSea(matrix: number[][], targetRow: number, targetCol: number): boolean {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  const queue = [[targetRow, targetCol]];
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  visited[targetRow][targetCol] = true;

  while (queue.length > 0) {
    const [row, col] = queue.shift()!;

    // Якщо знайдено 0, повертаємо true
    if (matrix[row][col] === 0) {
      return true;
    }

    // Проходимо по всіх сусідах
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (
        newRow >= 0 && newRow < rows &&
        newCol >= 0 && newCol < cols &&
        !visited[newRow][newCol] &&
        matrix[newRow][newCol] <= matrix[row][col]
      ) {
        queue.push([newRow, newCol]);
        visited[newRow][newCol] = true;
      }
    }
  }

  // Якщо не знайдено шлях до рівня 0
  return false;
}

const input = [
  [1, 2, 3],
  [4, 0, 5],
  [7, 8, 9]
];
const targetRow = 1;
const targetCol = 1;
const result = findPathToSea(input, targetRow, targetCol);
console.log(result);
