function mergeSort(arr: number[]): number[] {
  // Базовий випадок: якщо масив має один або нуль елементів, він вже відсортований.
  if (arr.length <= 1) {
    return arr;
  }

  // Розбиваємо масив на дві частини
  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  // Рекурсивно сортуємо кожну частину
  const sortedLeft = mergeSort(leftArr);
  const sortedRight = mergeSort(rightArr);

  // Об'єднуємо відсортовані частини
  return merge(sortedLeft, sortedRight);
}

function merge(leftArr: number[], rightArr: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Об'єднуємо елементи з двох масивів у відсортований порядок
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // Додаємо залишкові елементи
  return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

// Приклад використання
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);

console.log(sortedArray); // Виведе: [3, 9, 10, 27, 38, 43, 82]
