// 139. Word Break
// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
//
//   Note that the same word in the dictionary may be reused multiple times in the segmentation.
//
//
//
//   Example 1:
//
// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:
//
// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
//   Example 3:
//
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false
function wordBreak(s: string, wordDict: string[]): boolean {
  const wordSet = new Set(wordDict); // використовуємо Set для швидкого пошуку
  const dp = new Array(s.length + 1).fill(false); // dp[i] означає, чи можна розділити s[0:i]
  dp[0] = true; // порожній рядок завжди можна розділити

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const word = s.slice(j, i); // обираємо слово з підрядка
      if (dp[j] && wordSet.has(word)) {
        dp[i] = true; // якщо s[0:j] можна розділити і word міститься у словнику, тоді s[0:i] можна розділити
        break; // переходимо до наступного i, бо знайшли розділення
      }
    }
  }

  return dp[s.length];

};

const s = "leetcode";
const wordDict = ["leet","code"];
const result = wordBreak(s, wordDict);
console.log(result);
