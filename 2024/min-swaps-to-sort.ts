function minSwapsToSort(arr: number[]): number {
    const n = arr.length;
    let swaps = 0;

    // Створюємо масив пар [значення, індекс]
    const arrWithIndex = arr.map((value, index) => [value, index] as [number, number]);

    // Сортуємо масив за значеннями елементів
    arrWithIndex.sort((a, b) => a[0] - b[0]);

    // Створюємо масив, щоб відмічати відвідані елементи
    const visited = Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        // Якщо елемент уже на правильному місці або вже відвіданий
        if (visited[i] || arrWithIndex[i][1] === i) {
            continue;
        }

        // Обчислюємо довжину циклу
        let cycleSize = 0;
        let j = i;

        while (!visited[j]) {
            visited[j] = true;
            // Переходимо до наступного елемента в циклі
            j = arrWithIndex[j][1];
            cycleSize++;
        }

        // Якщо цикл містить більше одного елемента, додаємо кількість перестановок
        if (cycleSize > 1) {
            swaps += (cycleSize - 1);
        }
    }

    return swaps;
}

// Приклад використання
const arr = [4, 3, 1, 2];
console.log(minSwapsToSort(arr)); // Виведе 3
