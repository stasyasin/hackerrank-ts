// Задача: Найдовший підмасив з рівною кількістю нулів і одиниць
// Дано масив, що складається лише з 0 і 1. Потрібно знайти найдовший підмасив, у якому кількість нулів дорівнює кількості одиниць.
//
//   Приклад:
//
// plaintext
// Copy code
// Вхід: [0, 1, 0, 0, 1, 1, 0]
// Вихід: 6
// Пояснення:
//
//   Найдовший підмасив з рівною кількістю нулів і одиниць — це [0, 1, 0, 0, 1, 1], його довжина дорівнює 6.

function longestSubArray(nums: number[]): number {
  const map = new Map<number, number>();
  map.set(0, -1);

  let maxLength = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    count += (nums[i] === 1 ? 1 : -1);

    if (map.has(count)) {
      maxLength = Math.max(maxLength, i - map.get(count)!);
    } else {
      map.set(count, i);
    }
  }

  return maxLength;
}



// Приклад використання
const input = [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1];
const output = longestSubArray(input);
console.log(output); // 14
