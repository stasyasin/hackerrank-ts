// Задача: Найменший підрядок, який містить всі унікальні символи
// Опис:
//   Дано рядок, що складається з будь-яких символів. Вам потрібно знайти довжину найменшого підрядка, який містить усі унікальні символи з початкового рядка.
//
//   Приклад:
// Вхід: "ADOBECODEBANC" Вихід: 4 Пояснення: Найменший підрядок, який містить усі унікальні символи — це "BANC", його довжина дорівнює 4.
//
// Вхід: "AABCBC" Вихід: 4 Пояснення: Найменший підрядок, який містить усі унікальні символи — це "BCBC", його довжина дорівнює 4.
//
// Підказка:
//   Використовуйте техніку sliding window з двома вказівниками, щоб знайти найбільший підрядок, який містить усі унікальні символи. Для цього можна використовувати хеш-мапу для відстеження кількості символів у вікні і порівнювати з унікальними символами з початкового рядка.
//
//   Завдання:
// Напишіть функцію на TypeScript, яка реалізує рішення цієї задачі.
//
//   Якщо потрібна допомога з реалізацією або більше деталей, дайте знати!


function longestSubArray(input: string): number {
  if (input.length === 0) return 0;
  if (input.length === 1) return 1;
  if (input.length === 2 && input[0]!==input[1]) return 2;

  let left = 0;
  let right = 0;
  const dict = new Set();
  let maxLength = 0;
  let currLength = 0;

  dict.add(input[0]);

  for (let i = 1; i < input.length; i++) {
    while(dict.has(input[i])) {
      dict.delete(input[left]);
      left++;
    }
    dict.add(input[i]);
    right++;
    maxLength = Math.max(maxLength, right - left +1);
  }


 return maxLength;
}



// Приклад використання
const input = "ADOBECODEBANC";
const output = longestSubArray(input);
console.log(output); // 4  - BANC
