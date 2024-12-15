// // 1792. Maximum Average Pass Ratio
// There is a school that has classes of students and each class will be having a final exam. You are given a 2D integer array classes, where classes[i] = [passi, totali]. You know beforehand that in the ith class, there are totali total students, but only passi number of students will pass the exam.
//
//   You are also given an integer extraStudents. There are another extraStudents brilliant students that are guaranteed to pass the exam of any class they are assigned to. You want to assign each of the extraStudents students to a class in a way that maximizes the average pass ratio across all the classes.
//
//   The pass ratio of a class is equal to the number of students of the class that will pass the exam divided by the total number of students of the class. The average pass ratio is the sum of pass ratios of all the classes divided by the number of the classes.
//
//   Return the maximum possible average pass ratio after assigning the extraStudents students. Answers within 10-5 of the actual answer will be accepted.
//
//
//
//   Example 1:
//
// Input: classes = [[1,2],[3,5],[2,2]], extraStudents = 2
// Output: 0.78333
// Explanation: You can assign the two extra students to the first class. The average pass ratio will be equal to (3/4 + 3/5 + 2/2) / 3 = 0.78333.
//   Example 2:
//
// Input: classes = [[2,4],[3,9],[4,5],[2,10]], extraStudents = 4
// Output: 0.53485
//
//
// Constraints:
//
//   1 <= classes.length <= 105
// classes[i].length == 2
// 1 <= passi <= totali <= 105
// 1 <= extraStudents <= 105

function maxAverageRatio(classes: number[][], extraStudents: number): number {
  const improvement = (pass: number, total: number): number => {
    return (pass + 1) / (total + 1) - pass / total;
  }
  const classesWithAvarage = classes.map((classVal) => [-improvement(classVal[0],classVal[1]), classVal[0], classVal[1]]);
  classesWithAvarage.sort((a, b) => a[0]-b[0]);

  for (let i = 0; i < extraStudents; i++) {
    const shifted = classesWithAvarage.shift();
    if (shifted) {
      const [ratio, pass, total] = shifted;
      const newPass = pass + 1;
      const newTotal = total + 1;
      classesWithAvarage.push([-improvement(newPass, newTotal), newPass, newTotal]);
      classesWithAvarage.sort((a, b) => a[0]-b[0]);
    }
  }
  const sum = classesWithAvarage.reduce((acc, [_, pass, total]) => acc + pass / total, 0);
  return sum / classesWithAvarage.length;

};

function maxAverageRatio(classes: number[][], extraStudents: number): number {
  const improvement = (pass: number, total: number): number =>
    (pass + 1) / (total + 1) - pass / total;

  // Ініціалізація макс-хіпу
  const maxHeap: [number, number, number][] = [];
  for (const [pass, total] of classes) {
    maxHeap.push([-improvement(pass, total), pass, total]);
  }

  // Перетворюємо масив на хіп
  maxHeap.sort((a, b) => a[0] - b[0]);

  // Додаємо студентів
  for (let i = 0; i < extraStudents; i++) {
    const [_, pass, total] = maxHeap.shift()!;
    const newPass = pass + 1;
    const newTotal = total + 1;
    const newImprovement = -improvement(newPass, newTotal);

    // Вставка з підтримкою хіпу
    let pos = maxHeap.findIndex(([imp]) => imp > newImprovement);
    if (pos === -1) pos = maxHeap.length;
    maxHeap.splice(pos, 0, [newImprovement, newPass, newTotal]);
  }

  // Обчислення підсумку
  const sum = maxHeap.reduce((acc, [_, pass, total]) => acc + pass / total, 0);
  return sum / classes.length;
}


const classes = [[1,2],[3,5],[2,2]], extraStudents = 2;
const result = maxAverageRatio(classes, extraStudents);
console.log(result);
