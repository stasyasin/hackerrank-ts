// Як працює цей код:
//   Ініціалізація: Ми створюємо масив visited, щоб відстежувати відвідані точки, і масив directions, щоб визначити напрямки для руху (вправо, вниз, вліво, вгору).
//   DFS Функція:
//   Для кожної точки перевіряємо, чи вона є рівнем моря (0). Якщо так — повертаємо true.
//   Інакше позначаємо поточну точку як відвідану.
//   Далі, ми рекурсивно викликаємо DFS для кожного сусіда, якщо він ще не відвіданий і висота сусіда не вища за поточну точку.
//   Якщо один із сусідів веде до рівня 0, повертаємо true, зупиняючи пошук.
//   Запуск DFS: Викликаємо DFS з таргетної точки і перевіряємо, чи існує шлях до 0.
function findPathToSeaDFS(matrix: number[][], targetRow: number, targetCol: number): boolean {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  // Функція для рекурсивного DFS
  function dfs(row: number, col: number): boolean {
    // Якщо досягли рівня моря
    if (matrix[row][col] === 0) {
      return true;
    }

    visited[row][col] = true;

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
        // Рекурсивний виклик dfs на сусідній клітинці
        if (dfs(newRow, newCol)) {
          return true; // Якщо знайдено шлях до 0, виходимо
        }
      }
    }

    return false; // Якщо немає шляху до 0
  }

  // Запускаємо DFS з початкової точки
  return dfs(targetRow, targetCol);
}

