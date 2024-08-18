// Задача: "Container With Most Water"
// Опис:
//
//   Дано масив height[], де кожен елемент представляє висоту вертикальної лінії на графіку. Кожна лінія накреслена на різних позиціях на x-осі, і відстань між двома сусідніми лініями дорівнює 1.
//
// Знайдіть дві лінії, які разом з x-осью утворюють контейнер, що вміщує найбільшу кількість води.

function maxWaterContainer(heights: number[]): number {
  // Перевіряємо, чи масив порожній
  if (heights.length === 0) return 0;

  let maxTank = 0;
  const n = heights.length;
  let leftPointer = 0;
  let rightPointer = n-1;

  // рахуємо перший самий довгий контейнер
  maxTank = Math.min(heights[leftPointer], heights[rightPointer]) * (rightPointer - leftPointer);

  // двигаємо бігунки
  while(leftPointer < rightPointer) {
    const currentTank = Math.min(heights[leftPointer], heights[rightPointer]) * (rightPointer - leftPointer);
    if (currentTank > maxTank) {
      maxTank = currentTank;
    }
    if (heights[leftPointer] < heights[rightPointer]) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }


  return maxTank;
}

// Приклад використання функції
const heights = [1,8,6,2,5,4,8,3,7]
console.log(maxWaterContainer(heights)); // Виведе 49 : Лінії на позиціях 1 і 8 утворюють контейнер з найбільшим об'ємом води, який може вмістити 49 одиниць.
