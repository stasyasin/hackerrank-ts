// // 5. Longest Palindromic Substring
// Given a string s, return the longest
// palindromic
//
// substring
// in s.
//
//
//
//   Example 1:
//
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
//   Example 2:
//
// Input: s = "cbbd"
// Output: "bb"

function longestPalindrome(s: string): string {
  const n = s.length;
  if (n === 0) return "";

  const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false));

  let start = 0, maxLength = 1;

  // Кожен символ - це паліндром
  for (let i = 0; i < n; i++) dp[i][i] = true;

  // Перевіряємо підрядки довжини 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        start = i;
        maxLength = len;
      }
    }
  }

  return s.substring(start, start + maxLength);
}


// better solution
// function longestPalindrome(s: string): string {
//     if (s.length < 2) return s;
//
//     let start = 0, maxLength = 1;
//
//     function expandAroundCenter(left: number, right: number) {
//       while (left >= 0 && right < s.length && s[left] === s[right]) {
//         left--;
//         right++;
//       }
//       let length = right - left - 1;
//       if (length > maxLength) {
//         start = left + 1;
//         maxLength = length;
//       }
//     }
//
//     for (let i = 0; i < s.length; i++) {
//       expandAroundCenter(i, i);     // Непарний паліндром
//       expandAroundCenter(i, i + 1); // Парний паліндром
//     }
//
//     return s.substring(start, start + maxLength);
//
//
// };

const s = "babad";
const result = longestPalindrome(s);
console.log(result)
