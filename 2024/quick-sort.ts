function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr; // Базовий випадок: масив вже відсортований
  }

  // Вибір опорного елемента (pivot)
  const pivot = arr[Math.floor(arr.length / 2)];

  // Масиви для розділення
  const left: number[] = [];
  const right: number[] = [];

  // Розділення масиву на дві частини
  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) continue; // Пропускаємо pivot елемент

    if (arr[i] < pivot) {
      left.push(arr[i]); // Елементи менші за pivot
    } else {
      right.push(arr[i]); // Елементи більші за pivot
    }
  }

  // Рекурсивний виклик для підмасивів та з'єднання результатів
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Приклад використання
const unsortedArray = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // [1, 1, 2, 3, 6, 8, 10]
