// Завдання: Кількість островів
// Уявіть собі карту у вигляді двовимірної сітки, де кожна клітинка може бути сушею (1) або водою (0). Острів утворюється з’єднаними сусідніми клітинками суші, і оточений водою. Ваша задача полягає в тому, щоб підрахувати кількість островів на цій карті.
//
//   Сусідніми вважаються клітинки, що з'єднані по горизонталі або вертикалі (не по діагоналі).
//
// Вхідні дані
// grid: двовимірний масив m x n, що складається з 1 (суша) і 0 (вода).
//   Вихідні дані
// Повернути кількість островів.
//   Приклад
// plaintext
// Copy code
// Вхід:
//   grid = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
//   ]
//
// Вихід:
//   3
// Пояснення:
//
//   Перший острів складається з двох рядків перших двох стовпців.
//   Другий острів — це одиночна клітинка в центрі.
//   Третій острів — це дві суміжні клітинки в нижньому правому куті.
//   Умови:
//
// Ви можете передбачити, що всі чотири краї сітки оточені водою.

function numIslandsDfs(grid: string[][]): number {
  if (grid.length === 0) return 0;

  let count = 0;

  const dfs = (i: number, j: number) => {
    // Виходимо за межі сітки або знайшли воду, зупиняємося
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') {
      return;
    }

    // Позначаємо клітинку як відвідану, змінюючи її на "0"
    grid[i][j] = '0';

    // Виконуємо рекурсію для всіх сусідніх клітинок (вгору, вниз, вліво, вправо)
    dfs(i - 1, j); // вверх
    dfs(i + 1, j); // вниз
    dfs(i, j - 1); // вліво
    dfs(i, j + 1); // вправо
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count++; // Знайдено новий острів
        dfs(i, j); // Відвідуємо всі клітинки, що належать цьому острову
      }
    }
  }

  return count;
}

const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
];

const result = numIslandsDfs(grid);
console.log(result); // Виведе 3