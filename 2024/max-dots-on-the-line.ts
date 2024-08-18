// Задача: Максимальна кількість точок на одній прямій
// Умова:
//   Дано набір точок на площині, представлений як масив координат цілих чисел points, де points[i] = [xi, yi]. Необхідно знайти максимальну кількість точок, які лежать на одній прямій.
//
//   Приклад:
// plaintext
// Copy code
// Вхід: points = [[1,1],[2,2],[3,3]]
// Вихід: 3
// Пояснення: Всі три точки лежать на одній прямій.
//   plaintext
// Copy code
// Вхід: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Вихід: 4
// Пояснення: Максимальна кількість точок на одній прямій — 4 (вони утворюють пряму з координатами [1,1], [3,2], [5,3], [4,1]).
// Пояснення:
//   Для того щоб знайти максимальну кількість точок на одній прямій, потрібно перевірити всі можливі прямі, які можна утворити з цих точок.
//   Пряма може бути описана рівнянням y = kx + b, але щоб уникнути проблем з точністю, краще використовувати кутовий коефіцієнт у вигляді відношення (тобто зберігати дробові значення, такі як dy/dx, замість дробу).
// Підказка:
//   Використовуйте хеш-таблицю (Map) для збереження кутових коефіцієнтів прямих і кількість точок, які лежать на кожній прямій, що має однаковий кутовий коефіцієнт.
//   Ця задача добре перевіряє розуміння алгоритмів та структури даних, а також вміння працювати з геометричними обчисленнями.

type Point = [number, number];

function maxDotsOnTheLine(points: Point[]): number {
  if(points.length === 1) return 0;
  if(points.length === 2) return 1;
  const dict = new Map<number, number>();
  let maxPoints = 0;
  let currentDots = 0;

  // Функція для обчислення найбільшого спільного кратного числового значення для двох чисел
  const gcd = (a: number, b: number): number  => {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  // Функція для отримання ключа для прямої, що проходить через дві точки
  const getLineKey = (p1: Point, p2: Point): string => {
    const dx = p2[0] - p1[0];
    const dy = p2[1] - p1[1];
    const g = gcd(dx, dy);
    const a = dx / g;
    const b = dy / g;
    // Завжди представимо лінію у вигляді (a, b) без негативних значень, інакше може бути неоднозначність
    return `${a}-${b}`;
  }

  for (let i = 0; i < points.length; i++) {
    const map = new Map<string, Set<number>>();
    let duplicates = 1;
    for (let j = i + 1; j < points.length; j++) {
      if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
        duplicates++;
        continue;
      }

      const lineKey = getLineKey(points[i], points[j]);
      if (!map.has(lineKey)) {
        map.set(lineKey, new Set<number>());
      }
      map.get(lineKey)!.add(i);
      map.get(lineKey)!.add(j);
    }

    maxPoints = Math.max(maxPoints, duplicates);
    for (const pointsSet of map.values()) {
      maxPoints = Math.max(maxPoints, pointsSet.size + duplicates - 1);
    }
  }

  return maxPoints;
}

const input: Point[] = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]];
const output = maxDotsOnTheLine(input);
console.log(output); // 4







