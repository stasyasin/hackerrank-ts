// // 2226. Maximum Candies Allocated to K Children
//
// You are given a 0-indexed integer array candies. Each element in the array denotes a pile of candies of size candies[i]. You can divide each pile into any number of sub piles, but you cannot merge two piles together.
//
//   You are also given an integer k. You should allocate piles of candies to k children such that each child gets the same number of candies. Each child can be allocated candies from only one pile of candies and some piles of candies may go unused.
//
//   Return the maximum number of candies each child can get.
//
//
//
//   Example 1:
//
// Input: candies = [5,8,6], k = 3
// Output: 5
// Explanation: We can divide candies[1] into 2 piles of size 5 and 3, and candies[2] into 2 piles of size 5 and 1. We now have five piles of candies of sizes 5, 5, 3, 5, and 1. We can allocate the 3 piles of size 5 to 3 children. It can be proven that each child cannot receive more than 5 candies.
//   Example 2:
//
// Input: candies = [2,5], k = 11
// Output: 0
// Explanation: There are 11 children but only 7 candies in total, so it is impossible to ensure each child receives at least one candy. Thus, each child gets no candy and the answer is 0.
//
//
// Constraints:
//
//   1 <= candies.length <= 105
// 1 <= candies[i] <= 107
// 1 <= k <= 1012

function maximumCandies(candies: number[], k: number): number {

// Знаходимо загальну кількість цукерок
  const totalCandies = candies.reduce((sum, candy) => sum + candy, 0);

  // Мінімальна кількість цукерок, яку можна дати кожному, це 0
  // Максимальна кількість цукерок, яку може отримати дитина, це найбільша кількість цукерок серед всіх дітей
  let left = 0;
  let right = Math.max(...candies);

  let result = 0;

  // Бінарний пошук для знаходження максимальної кількості цукерок, яку можна дати кожному з K дітей
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Перевіряємо, чи можна розподілити ці цукерки серед K дітей
    let count = 0;
    for (let candy of candies) {
      count += Math.floor(candy / mid); // Кількість дітей, які можуть отримати "mid" цукерок
    }

    // Якщо можна розподілити серед K дітей, пробуємо збільшити кількість
    if (count >= k) {
      result = mid; // Оновлюємо результат
      left = mid + 1; // Шукаємо більшу кількість
    } else {
      right = mid - 1; // Зменшуємо кількість
    }
  }

  return result;
};

const candies = [5,8,6], k = 3;
const result = maximumCandies(candies, k);
console.log(result);
