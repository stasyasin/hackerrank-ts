// 1639. Number of Ways to Form a Target String Given a Dictionary
//
// ou are given a list of strings of the same length words and a string target.
//
//   Your task is to form target using the given words under the following rules:
//
//   target should be formed from left to right.
//   To form the ith character (0-indexed) of target, you can choose the kth character of the jth string in words if target[i] = words[j][k].
//   Once you use the kth character of the jth string of words, you can no longer use the xth character of any string in words where x <= k. In other words, all characters to the left of or at index k become unusuable for every string.
//   Repeat the process until you form the string target.
//   Notice that you can use multiple characters from the same string in words provided the conditions above are met.
//
//   Return the number of ways to form target from words. Since the answer may be too large, return it modulo 109 + 7.
//
//
//
// Example 1:
//
// Input: words = ["acca","bbbb","caca"], target = "aba"
// Output: 6
// Explanation: There are 6 ways to form target.
// "aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("caca")
// "aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("caca")
// "aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("acca")
// "aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("acca")
// "aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("acca")
// "aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("caca")
// Example 2:
//
// Input: words = ["abba","baab"], target = "bab"
// Output: 4
// Explanation: There are 4 ways to form target.
// "bab" -> index 0 ("baab"), index 1 ("baab"), index 2 ("abba")
// "bab" -> index 0 ("baab"), index 1 ("baab"), index 3 ("baab")
// "bab" -> index 0 ("baab"), index 2 ("baab"), index 3 ("baab")
// "bab" -> index 1 ("abba"), index 2 ("baab"), index 3 ("baab")
//
//
// Constraints:
//
//   1 <= words.length <= 1000
// 1 <= words[i].length <= 1000
// All strings in words have the same length.
// 1 <= target.length <= 1000
// words[i] and target contain only lowercase English letters.

function numWays(words: string[], target: string): number {
  const MOD = 1e9 + 7;
  const n = words[0].length;
  const m = target.length;
  const dp = Array.from({length: n + 1}, (_, index) =>
    Array(m + 1).fill(index === 0 ? 1 : 0)
  );
  // console.log(dp);

  const cnt = new Array(n).fill(0).map(() => new Array(26).fill(0));
  for (const w of words) {
    for (let j = 0; j < n; ++j) {
      ++cnt[j][w.charCodeAt(j) - 97];
    }
  }
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j - 1] * cnt[j - 1][target.charCodeAt(i - 1) - 97];
      dp[i][j] %= MOD;
    }
  }
  // console.log(dp);
  return dp[m][n];
};

const words = ["acca","bbbb","caca"], target = "aba";
const result  = numWays(words, target);
console.log(result);

// function numWays(words: string[], target: string): number {
// todo why this do not work? because I use index in dp filling ?
// //      const MOD = 1e9 + 7;
// //   const n = words[0].length;
// //   const m = target.length;
// //   const dp = Array.from({length: n + 1}, (_, index) =>
// //     Array(m + 1).fill(index === 0 ? 1 : 0)
// //   );
// //   // console.log(dp);
//
// //   const cnt = new Array(n).fill(0).map(() => new Array(26).fill(0));
// //   for (const w of words) {
// //     for (let j = 0; j < n; ++j) {
// //       ++cnt[j][w.charCodeAt(j) - 97];
// //     }
// //   }
// //   for (let i = 1; i <= m; ++i) {
// //     for (let j = 1; j <= n; ++j) {
// //       dp[i][j] = dp[i][j - 1] + dp[i - 1][j - 1] * cnt[j - 1][target.charCodeAt(i - 1) - 97];
// //       dp[i][j] %= MOD;
// //     }
// //   }
// //   // console.log(dp);
// //   return dp[m][n];
//   const m = target.length;
//   const n = words[0].length;
//   const f = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
//   const mod = 1e9 + 7;
//   for (let j = 0; j <= n; ++j) {
//     f[0][j] = 1;
//   }
//   const cnt = new Array(n).fill(0).map(() => new Array(26).fill(0));
//   for (const w of words) {
//     for (let j = 0; j < n; ++j) {
//       ++cnt[j][w.charCodeAt(j) - 97];
//     }
//   }
//   for (let i = 1; i <= m; ++i) {
//     for (let j = 1; j <= n; ++j) {
//       f[i][j] = f[i][j - 1] + f[i - 1][j - 1] * cnt[j - 1][target.charCodeAt(i - 1) - 97];
//       f[i][j] %= mod;
//     }
//   }
//   return f[m][n];
// };


// function numWays(words: string[], target: string): number {
//   const MOD = 1e9 + 7;
//   const n = words[0].length;
//   const m = target.length;
//
//   const dictArr: Array<{[key:string]: number}> = Array.from({length: n}, () => ({}));
//
//   for (let i = 0; i< n; i++) {
//     for (const word of words ) {
//       const char = word.charAt(i);
//       dictArr[i][char] = (dictArr[i][char] || 0) + 1;
//     }
//   }
//   console.log(dictArr);
//
//
//   const dp = Array.from({length: n + 1}, (_, index) =>
//     Array(m + 1).fill(index === 0 ? 1 : 0)
//   );
//   console.log(dp);
//
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j <= m; j++) {
//       dp[i][j] = dp[i - 1][j];
//
//       if (j > 0) {
//         const currChar = target[j - 1];
//         if (dictArr[i - 1][currChar]) {
//           dp[i][j] = (dp[i][j] + dp[i - 1][j - 1] * dictArr[i - 1][currChar]) % MOD;
//         }
//       }
//     }
//   }
//
//
//   console.log(dp);
//   return dp[n][m];
// };

