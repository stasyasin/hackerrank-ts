// Задача: Знайти Перестановку, що Мінімізує Найбільшу Різницю Сусідніх Елементів
// Умова:
//
//   Дано масив цілих чисел arr. Твоя задача — знайти перестановку (перегрупування) цього масиву так, щоб найбільша різниця між сусідніми елементами в новому масиві була якомога меншою.
//
//   Приклад:
//
// typescript
// Copy code
// Input: [1, 3, 7, 9]
// Output: [1, 3, 7, 9] (Найбільша різниця між сусідніми елементами: 2)
// typescript
// Copy code
// Input: [10, 1, 5, 8, 12]
// Output: [1, 5, 8, 10, 12] (Найбільша різниця між сусідніми елементами: 3)
// Завдання:
//   Написати функцію, яка приймає масив цілих чисел і повертає новий масив, що мінімізує найбільшу різницю між сусідніми елементами.

// So I will sort it with quick sort!


function minSwapDifference(nums: number[]): number[] {
  if (nums.length <=1) {
    return nums;
  }

  const center = Math.floor(nums.length / 2);
  const leftArr: number[] = [];
  const rightArr: number[] = [];

  for (let i = 0; i<nums.length; i++) {
    if (i === center) {
      continue;
    }
    if (nums[i] < nums[center]) {
      leftArr.push(nums[i]);
    } else {
      rightArr.push(nums[i]);
    }

  }

  return [...minSwapDifference(leftArr), nums[center], ...minSwapDifference(rightArr)];
}


// Приклад використання
const input = [10, 1, 5, 8, 12];
const output = minSwapDifference(input);
console.log(output); // [1, 5, 8, 10, 12]
