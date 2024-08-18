function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = medianOfThree(arr);
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function medianOfThree(arr: number[]): number {
  const first = arr[0];
  const middle = arr[Math.floor(arr.length / 2)];
  const last = arr[arr.length - 1];

  const median = [first, middle, last].sort((a, b) => a - b);
  return median[1]; // Середнє значення з трьох
}

// Приклад використання
const unsortedArray = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // [1, 1, 2, 3, 6, 8, 10]
