// 3243. Shortest Distance After Road Addition Queries I
// You are given an integer n and a 2D integer array queries.
//
//   There are n cities numbered from 0 to n - 1. Initially, there is a unidirectional road from city i to city i + 1 for all 0 <= i < n - 1.
//
// queries[i] = [ui, vi] represents the addition of a new unidirectional road from city ui to city vi. After each query, you need to find the length of the shortest path from city 0 to city n - 1.
//
// Return an array answer where for each i in the range [0, queries.length - 1], answer[i] is the length of the shortest path from city 0 to city n - 1 after processing the first i + 1 queries.
//
//
//
//   Example 1:
//
// Input: n = 5, queries = [[2,4],[0,2],[0,4]]
//
// Output: [3,2,1]
//
// Explanation:
//
//
//
//   After the addition of the road from 2 to 4, the length of the shortest path from 0 to 4 is 3.
//
//
//
// After the addition of the road from 0 to 2, the length of the shortest path from 0 to 4 is 2.
//
//
//
// After the addition of the road from 0 to 4, the length of the shortest path from 0 to 4 is 1.
//
// Example 2:
//
// Input: n = 4, queries = [[0,3],[0,2]]
//
// Output: [1,1]
//
// Explanation:
//
//
//
//   After the addition of the road from 0 to 3, the length of the shortest path from 0 to 3 is 1.
//
//
//
// After the addition of the road from 0 to 2, the length of the shortest path remains 1.
//
//
//
// Constraints:
//
//   3 <= n <= 500
// 1 <= queries.length <= 500
// queries[i].length == 2
// 0 <= queries[i][0] < queries[i][1] < n
// 1 < queries[i][1] - queries[i][0]
// There are no repeated roads among the queries.

// function shortestDistanceAfterQueries(n: number, queries: number[][]): number[] {
//   const res = [];
//
//   const bfs = (currQueries: number[][]): number => {
//     const currN = currQueries.length;
//     const pathes: Record<number, number> = {};
//     let counter = 0;
//     let step = 0;
//
//     for (const query of currQueries) {
//       const [a, b] = query;
//       if (pathes[a]) {
//         pathes[a] = pathes[a] < b ? b: pathes[a];
//       } else {
//         pathes[a] = b;
//       }
//     }
//
//     while (step < n-1) {
//       if (pathes[step]) {
//         step = pathes[step];
//       } else {
//         step++;
//       }
//       counter++;
//     }
//
//     return counter;
//   }
//
//   for (let i= 1; i<= queries.length; i++) {
//     const currRes = bfs(queries.slice(0, i));
//     res.push(currRes);
//   }
//
//   return res;
// };

function shortestDistanceAfterQueries(n: number, queries: number[][]): number[] {
  // Створюємо граф у вигляді списку суміжності
  const graph: number[][] = Array.from({ length: n }, () => []);

  // Початкове з'єднання між сусідніми вершинами
  for (let i = 0; i < n - 1; ++i) {
    graph[i].push(i + 1);
  }

  // Функція для пошуку найкоротшого шляху з вузла i до n-1
  const bfs = (start: number): number => {
    const q: number[] = [start];
    const visited: boolean[] = Array(n).fill(false);
    visited[start] = true;

    let distance = 0; // Відстань від стартової точки

    // Виконуємо BFS для пошуку найкоротшого шляху
    while (q.length > 0) {
      const nq: number[] = [];
      for (const u of q) {
        if (u === n - 1) {
          return distance; // Якщо ми досягли n-1, повертаємо відстань
        }
        // Перевіряємо всі сусідні вершини
        for (const v of graph[u]) {
          if (!visited[v]) {
            visited[v] = true;
            nq.push(v);
          }
        }
      }
      q.splice(0, q.length, ...nq); // Оновлюємо чергу на нові вершини
      distance++;
    }

    return -1; // Якщо шляху не знайдено
  };

  const res: number[] = [];

  // Обробляємо кожен запит
  for (const [u, v] of queries) {
    graph[u].push(v); // Додаємо нове з'єднання в граф
    res.push(bfs(0)); // Проводимо BFS для пошуку шляху від 0 до n-1
  }

  return res;
}

// Приклад використання
// const n = 5;
// const input = [[2,4],[0,2],[0,4]];
const n = 6;
const input = [[1,4],[0,2]]
const result = shortestDistanceAfterQueries(n, input);

console.log(result); // [3,2,1]
