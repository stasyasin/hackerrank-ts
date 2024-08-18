function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    // Переміщуємо елементи arr[0..i-1], які більше за current,
    // на одну позицію вперед від їхньої поточної позиції
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Вставляємо поточний елемент у правильну позицію
    arr[j + 1] = current;
  }

  return arr;
}

// Приклад використання
const unsortedArray = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(unsortedArray);

console.log(sortedArray); // Виведе: [5, 6, 11, 12, 13]
