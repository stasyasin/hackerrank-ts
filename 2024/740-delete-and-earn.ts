// // 740. Delete and Earn
// You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:
//
//   Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
// Return the maximum number of points you can earn by applying the above operation some number of times.
//
//
//
//   Example 1:
//
// Input: nums = [3,4,2]
// Output: 6
// Explanation: You can perform the following operations:
//   - Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
//   - Delete 2 to earn 2 points. nums = [].
//   You earn a total of 6 points.
//   Example 2:
//
// Input: nums = [2,2,3,3,3,4]
// Output: 9
// Explanation: You can perform the following operations:
//   - Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3].
//   - Delete a 3 again to earn 3 points. nums = [3].
//   - Delete a 3 once more to earn 3 points. nums = [].
//   You earn a total of 9 points.
//
//
//   Constraints:
//
// 1 <= nums.length <= 2 * 104
// 1 <= nums[i] <= 104

function deleteAndEarn(nums: number[]): number {
  if (nums.length === 0) return 0;

  // Підрахунок сум для кожного числа
  const points: Record<number, number> = {};
  for (const num of nums) {
    points[num] = (points[num] || 0) + num;
  }

  // Отримуємо всі унікальні числа та сортуємо їх
  const uniqueNums = Object.keys(points)
    .map(Number)
    .sort((a, b) => a - b);

  // Динамічне програмування
  let prev1 = 0; // Максимальна сума без поточного числа
  let prev2 = 0; // Максимальна сума до попереднього числа

  for (let i = 0; i < uniqueNums.length; i++) {
    const current = uniqueNums[i];
    const currentPoints = points[current];

    if (i > 0 && current === uniqueNums[i - 1] + 1) {
      // Якщо числа послідовні, вибираємо між пропуском або включенням
      const temp = prev1;
      prev1 = Math.max(prev1, prev2 + currentPoints);
      prev2 = temp;
    } else {
      // Якщо числа не послідовні, просто додаємо до суми
      const temp = prev1;
      prev1 = prev1 + currentPoints;
      prev2 = temp;
    }
  }

  return prev1;
}

const nums = [3, 4, 2];
const result = deleteAndEarn(nums);
console.log(result);
