// // 2033. Minimum Operations to Make a Uni-Value Grid
// ou are given a 2D integer grid of size m x n and an integer x. In one operation, you can add x to or subtract x from any element in the grid.
//
//     A uni-value grid is a grid where all the elements of it are equal.
//
//     Return the minimum number of operations to make the grid uni-value. If it is not possible, return -1.
//
//
//
// Example 1:
//
//
// Input: grid = [[2,4],[6,8]], x = 2
// Output: 4
// Explanation: We can make every element equal to 4 by doing the following:
//     - Add x to 2 once.
// - Subtract x from 6 once.
// - Subtract x from 8 twice.
//     A total of 4 operations were used.
//     Example 2:
//
//
// Input: grid = [[1,5],[2,3]], x = 1
// Output: 5
// Explanation: We can make every element equal to 3.
// Example 3:
//
//
// Input: grid = [[1,2],[3,4]], x = 2
// Output: -1
// Explanation: It is impossible to make every element equal.
//
//
//     Constraints:
//
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 105
// 1 <= m * n <= 105
// 1 <= x, grid[i][j] <= 104
function minOperations(grid: number[][], x: number): number {
  // Збираємо всі елементи в один масив
  const flatGrid = grid.flat();

  // Перевіряємо, чи всі елементи можна привести до одного значення за допомогою x
  let remainder = flatGrid[0] % x;
  for (let num of flatGrid) {
    if (num % x !== remainder) {
      return -1; // Якщо решта при діленні на x різна для різних елементів, це неможливо
    }
  }

  // Якщо можна привести до одного значення, то проводимо операції
  // Можемо обчислити мінімальні операції для приведення всіх елементів до будь-якого значення
  // Підрахуємо різницю кожного елемента від решти при діленні на x
  const diffs = flatGrid.map(num => Math.abs(num - remainder) / x);

  // Сортуємо різниці і знаходимо мінімальну кількість операцій
  diffs.sort((a, b) => a - b);

  // Мінімальні операції - це середнє значення кількості операцій
  const median = diffs[Math.floor(diffs.length / 2)];
  let operations = 0;
  for (let diff of diffs) {
    operations += Math.abs(diff - median);
  }

  return operations;
}
