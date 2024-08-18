// Задача: Найдовший підмасив з рівною кількістю парних і непарних чисел
// Умова:
//   Дано масив цілих чисел. Потрібно знайти найдовший підмасив, у якому кількість парних чисел дорівнює кількості непарних чисел.
//
//   Приклад:
//
// Вхід: [1, 2, 3, 4, 6, 7, 8]
// Вихід: 6
// Пояснення: Найдовший підмасив з рівною кількістю парних і непарних чисел — це [2, 3, 4, 6, 7, 8], його довжина дорівнює 6.

function longestSubArray(nums: number[]): number {
  const status = new Map();
  let count = 0;
  let maxLengh = 0;

  status.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    count += (nums[i] % 2 === 0 ? 1 : -1);

    if(status.has(count)) {
      maxLengh = Math.max(maxLengh, i - status.get(count)!);
    } else {
      status.set(count, i);
    }

  }

  return maxLengh;

}



// Приклад використання
const input = [1, 2, 3, 4, 6, 7, 8];
const output = longestSubArray(input);
console.log(output); // 6
