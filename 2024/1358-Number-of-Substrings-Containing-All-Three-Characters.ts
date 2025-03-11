// // 1358. Number of Substrings Containing All Three Characters
// Given a string s consisting only of characters a, b and c.
//
//   Return the number of substrings containing at least one occurrence of all these characters a, b and c.
//
//
//
//   Example 1:
//
// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again).
//   Example 2:
//
// Input: s = "aaacb"
// Output: 3
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb".
//   Example 3:
//
// Input: s = "abc"
// Output: 1
//
//
// Constraints:
//
//   3 <= s.length <= 5 x 10^4
// s only consists of a, b or c characters.

function numberOfSubstrings(s: string): number {
  let vowels: Record<string, number> = { a: 0, b: 0, c: 0 };
  let left = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    vowels[s[right]]++;

    while (vowels.a > 0 && vowels.b > 0 && vowels.c > 0) {
      result += s.length - right;
      vowels[s[left]]--;
      left++;
    }
  }

  return result;
};

const s = "abcabc";
const result = numberOfSubstrings(s);
console.log(result);
