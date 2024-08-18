// Задача: Знайти найдовший підрядок без повторюваних символів
// Умова: Дано рядок s. Потрібно знайти довжину найдовшого підрядка, який не містить повторюваних символів.
//
//   Приклад:
//
// Вхід: s = "abcabcbb"
// Вихід: 3
// Пояснення: Найдовший підрядок без повторюваних символів — це "abc", який має довжину 3.
//
// Приклад 2:
//
// Вхід: s = "bbbbb"
// Вихід: 1
// Пояснення: Найдовший підрядок без повторюваних символів — це "b", який має довжину 1.
//
// Приклад 3:
//
// Вхід: s = "pwwkew"
// Вихід: 3
// Пояснення: Найдовший підрядок без повторюваних символів — це "wke", який має довжину 3. Зверніть увагу, що відповідь повинна бути підрядком, а не підпослідовністю.

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
const input = "abcabcbb";
const output = longestSubArray(input);
console.log(output); // 3
