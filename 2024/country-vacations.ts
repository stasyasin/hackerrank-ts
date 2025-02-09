type Restriction = string[][];

/**
 * @input vacations - Мапа країн та кількості відпускних днів.
 * @input restrictions - Масив обмежень між країнами, де кожен елемент є парою країн, між якими подорож заборонена.
 * @return - Максимальна кількість відпускних днів за рік.
 */
export function maxVacation(vacations: Record<string, number>, restrictions: Restriction): number {
  const countries = Object.keys(vacations);
  const n = countries.length;

  // Створюємо таблицю обмежень (adjacency matrix) для зручного доступу до обмежень
  const restrictionMap: Record<string, Set<string>> = {};
  for (let country of countries) {
    restrictionMap[country] = new Set();
  }
  for (let [a, b] of restrictions) {
    restrictionMap[a].add(b);
    restrictionMap[b].add(a); // двосторонні обмеження
  }

  // DP масив, де dp[i] зберігає максимальну кількість відпускних днів для кожного місяця
  const dp = Array.from({ length: 12 }, () => new Array(n).fill(0));

  // Ініціалізуємо перший місяць (вибір найбільшої країни)
  for (let i = 0; i < n; i++) {
    dp[0][i] = vacations[countries[i]];
  }

  // Ітерація по місяцях
  for (let month = 1; month < 12; month++) {
    for (let i = 0; i < n; i++) {
      // Для кожної країни 'i' шукаємо максимальну кількість днів, де можна подорожувати
      for (let j = 0; j < n; j++) {
        // Ми не можемо подорожувати з країни 'j' в 'i', якщо є обмеження
        if (!restrictionMap[countries[j]].has(countries[i])) {
          dp[month][i] = Math.max(dp[month][i], dp[month - 1][j] + vacations[countries[i]]);
        }
      }
      if (dp[month][i] === 0) {
        dp[month][i] = dp[month - 1][i]; // Якщо не оновилось, беремо попереднє значення
      }
    }
  }

  // Повертаємо максимальну кількість днів за 12 місяців
  return Math.max(...dp[11]);
}


const inputVacations = { 'USA': 2, 'UK': 3, 'France': 1 , 'Ukraine': 5};
const inputRestrictions = [['USA', 'UK'], ['UK', 'France'], ['UK', 'Ukraine']];
const result = maxVacation(inputVacations, inputRestrictions);
console.log(result)
