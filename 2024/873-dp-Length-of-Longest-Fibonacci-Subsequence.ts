// // 873. Length of Longest Fibonacci Subsequence
// A sequence x1, x2, ..., xn is Fibonacci-like if:
//
// n >= 3
// xi + xi+1 == xi+2 for all i + 2 <= n
// Given a strictly increasing array arr of positive integers forming a sequence, return the length of the longest Fibonacci-like subsequence of arr. If one does not exist, return 0.
//
// A subsequence is derived from another sequence arr by deleting any number of elements (including none) from arr, without changing the order of the remaining elements. For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].
//
//
//
//   Example 1:
//
// Input: arr = [1,2,3,4,5,6,7,8]
// Output: 5
// Explanation: The longest subsequence that is fibonacci-like: [1,2,3,5,8].
//   Example 2:
//
// Input: arr = [1,3,7,11,12,14,18]
// Output: 3
// Explanation: The longest subsequence that is fibonacci-like: [1,11,12], [3,11,14] or [7,11,18].
//
//
//   Constraints:
//
// 3 <= arr.length <= 1000
// 1 <= arr[i] < arr[i + 1] <= 109

function lenLongestFibSubseq(arr: number[]): number {
    const n = arr.length;
    const indexMap = new Map<number, number>(); // arr[value] → index
    const dp: Map<number, number>[] = Array(n).fill(null).map(() => new Map());

    let maxLen = 0;

    // Заповнюємо indexMap для швидкого пошуку
    for (let i = 0; i < n; i++) {
      indexMap.set(arr[i], i);
    }

    // Два вкладені цикли для пошуку всіх пар (i, j)
    for (let j = 1; j < n; j++) {
      for (let i = 0; i < j; i++) {
        const prev = arr[j] - arr[i];

        if (prev < arr[i] && indexMap.has(prev)) {
          const k = indexMap.get(prev)!;
          const currLen = (dp[k].get(i) ?? 1) + 1;

          dp[i].set(j, currLen);
          maxLen = Math.max(maxLen, currLen);
        } else {
          dp[i].set(j, 2); // Мінімальна довжина — 2
        }
      }
    }

    return maxLen > 2 ? maxLen : 0; // Якщо не знайшли послідовність >2, повертаємо 0

};

const arr = [1,2,3,4,5,6,7,8];
const result = lenLongestFibSubseq(arr);
console.log(result);
