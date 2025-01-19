// // 407. Trapping Rain Water II
// Given an m x n integer matrix heightMap representing the height of each unit cell in a 2D elevation map, return the volume of water it can trap after raining.
//
//
//
//   Example 1:
//
//
// Input: heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
// Output: 4
// Explanation: After the rain, water is trapped between the blocks.
//   We have two small ponds 1 and 3 units trapped.
//   The total volume of water trapped is 4.
// Example 2:
//
//
// Input: heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]
// Output: 10
//
//
// Constraints:
//
//   m == heightMap.length
// n == heightMap[i].length
// 1 <= m, n <= 200
// 0 <= heightMap[i][j] <= 2 * 104

function trapRainWater(heightMap: number[][]): number {
  const rows = heightMap.length;
  const cols = heightMap[0].length;

  // Якщо розмір матриці менший за 3x3, вода не може утримуватись
  if (rows < 3 || cols < 3) return 0;

  // Мін-купа для зберігання клітинок з висотою
  const minHeap: [number, number, number][] = []; // [height, row, col]

  // Відвідані клітини
  const visited: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));

  // Додаємо всі клітини з периметру до купи
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
        minHeap.push([heightMap[r][c], r, c]);
        visited[r][c] = true;
      }
    }
  }

  // Функція для перетворення масиву у мін-купу
  minHeap.sort((a, b) => a[0] - b[0]);

  // Напрями для сусідів (вгору, вниз, вліво, вправо)
  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
  ];

  let waterTrapped = 0;

  // BFS з мін-купою
  while (minHeap.length > 0) {
    const [height, row, col] = minHeap.shift()!;

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      // Перевіряємо, чи сусід в межах матриці та ще не відвіданий
      if (
        newRow >= 0 && newRow < rows &&
        newCol >= 0 && newCol < cols &&
        !visited[newRow][newCol]
      ) {
        visited[newRow][newCol] = true;

        // Якщо сусід нижчий за поточну висоту, вода утримується
        const water = Math.max(0, height - heightMap[newRow][newCol]);
        waterTrapped += water;

        // Оновлюємо висоту сусіда і додаємо його до купи
        minHeap.push([
          Math.max(height, heightMap[newRow][newCol]),
          newRow,
          newCol
        ]);
        minHeap.sort((a, b) => a[0] - b[0]); // Пересортувати купу
      }
    }
  }

  return waterTrapped;
};

const heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]];
const result =  trapRainWater(heightMap);
console.log(result);
