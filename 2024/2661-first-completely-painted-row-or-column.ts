// // 2661. First Completely Painted Row or Column
// You are given a 0-indexed integer array arr, and an m x n integer matrix mat. arr and mat both contain all the integers in the range [1, m * n].
//
//   Go through each index i in arr starting from index 0 and paint the cell in mat containing the integer arr[i].
//
//   Return the smallest index i at which either a row or a column will be completely painted in mat.
//
//
//
//   Example 1:
//
// image explanation for example 1
// Input: arr = [1,3,4,2], mat = [[1,4],[2,3]]
// Output: 2
// Explanation: The moves are shown in order, and both the first row and second column of the matrix become fully painted at arr[2].
//   Example 2:
//
// image explanation for example 2
// Input: arr = [2,8,7,4,1,3,5,6,9], mat = [[3,2,5],[1,4,6],[8,7,9]]
// Output: 3
// Explanation: The second column becomes fully painted at arr[3].
//
//
//   Constraints:
//
// m == mat.length
// n = mat[i].length
// arr.length == m * n
// 1 <= m, n <= 105
// 1 <= m * n <= 105
// 1 <= arr[i], mat[r][c] <= m * n
// All the integers of arr are unique.
//   All the integers of mat are unique.

function firstCompleteIndex(arr: number[], mat: number[][]): number {
  const m = mat.length;
  const n = mat[0].length;

  // Мапа для зберігання позицій кожного елемента у матриці
  const positionMap = new Map<number, [number, number]>();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      positionMap.set(mat[i][j], [i, j]);
    }
  }

  // Масиви для підрахунку фарбування рядків і стовпчиків
  const rowCounts = new Array(m).fill(0);
  const colCounts = new Array(n).fill(0);

  // Проходимо по послідовності фарбувань
  for (let index = 0; index < arr.length; index++) {
    const value = arr[index];
    const [row, col] = positionMap.get(value)!;

    // Оновлюємо лічильники
    rowCounts[row]++;
    colCounts[col]++;

    // Перевіряємо, чи рядок або стовпчик пофарбований повністю
    if (rowCounts[row] === n || colCounts[col] === m) {
      return index;
    }
  }

  // Якщо нічого не знайшли, повертаємо -1 (малоймовірний випадок)
  return -1;
}

const arr = [1,3,4,2], mat = [[1,4],[2,3]]
const result = firstCompleteIndex(arr, mat);
console.log(result);
