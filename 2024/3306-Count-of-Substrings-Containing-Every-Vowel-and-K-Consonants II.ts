// // 3306. Count of Substrings Containing Every Vowel and K Consonants II
//
// You are given a string word and a non-negative integer k.
//
//   Return the total number of substrings of word that contain every vowel ('a', 'e', 'i', 'o', and 'u') at least once and exactly k consonants.
//
//
//
//   Example 1:
//
// Input: word = "aeioqq", k = 1
//
// Output: 0
//
// Explanation:
//
//   There is no substring with every vowel.
//
//   Example 2:
//
// Input: word = "aeiou", k = 0
//
// Output: 1
//
// Explanation:
//
//   The only substring with every vowel and zero consonants is word[0..4], which is "aeiou".
//
//   Example 3:
//
// Input: word = "ieaouqqieaouqq", k = 1
//
// Output: 3
//
// Explanation:
//
//   The substrings with every vowel and one consonant are:
//
//   word[0..5], which is "ieaouq".
//   word[6..11], which is "qieaou".
//   word[7..12], which is "ieaouq".
//
//
//   Constraints:
//
// 5 <= word.length <= 2 * 105
// word consists only of lowercase English letters.
// 0 <= k <= word.length - 5

function countOfSubstrings(word: string, k: number): number {
  const solve = (limit: number): number => {
    let total = 0;
    let left = 0;
    let consonantCount = 0;
    const vowelMap = new Map<string, number>();

    const isVowel = (ch: string): boolean =>
      'aeiou'.includes(ch);

    for (const char of word) {
      if (isVowel(char)) {
        vowelMap.set(char, (vowelMap.get(char) || 0) + 1);
      } else {
        consonantCount++;
      }

      while (consonantCount >= limit && vowelMap.size === 5) {
        const leftChar = word[left++];
        if (isVowel(leftChar)) {
          vowelMap.set(leftChar, vowelMap.get(leftChar)! - 1);
          if (vowelMap.get(leftChar) === 0) {
            vowelMap.delete(leftChar);
          }
        } else {
          consonantCount--;
        }
      }

      total += left;
    }

    return total;
  };

  return solve(k) - solve(k + 1);
}



const word = "iqeaouqi"; const k = 2;
const result = countOfSubstrings(word, k);
console.log(result);

