// // 916. Word Subsets
// You are given two string arrays words1 and words2.
//
//   A string b is a subset of string a if every letter in b occurs in a including multiplicity.
//
//   For example, "wrr" is a subset of "warrior" but is not a subset of "world".
//   A string a from words1 is universal if for every string b in words2, b is a subset of a.
//
//   Return an array of all the universal strings in words1. You may return the answer in any order.
//
//
//
//   Example 1:
//
// Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
// Output: ["facebook","google","leetcode"]
// Example 2:
//
// Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["l","e"]
// Output: ["apple","google","leetcode"]
//
//
// Constraints:
//
//   1 <= words1.length, words2.length <= 104
// 1 <= words1[i].length, words2[i].length <= 10
// words1[i] and words2[i] consist only of lowercase English letters.
//   All the strings of words1 are unique.


function wordSubsets(words1: string[], words2: string[]): string[] {
  const result = [];
  const dict: Record<string, number> = {}

  for (let word2 of words2) {
    const word2Dict: Record<string, number> = {};
    for (let char of word2) {
      word2Dict[char] = (word2Dict[char] || 0) + 1;
    }

    for (let char in word2Dict) {
      dict[char] = Math.max(dict[char] || 0, word2Dict[char]);
    }
  }

  for (let word1 of words1) {
    const word1Dict: Record<string, number> = {};
    for (let char of word1) {
      word1Dict[char] = (word1Dict[char] || 0) + 1;
    }

    let isUniversal = true;
    for (let char in dict) {
      if (!(char in word1Dict) || word1Dict[char] < dict[char]) {
        isUniversal = false;
        break;
      }
    }

    if (isUniversal) {
      result.push(word1);
    }
  }

  return result;
};

const words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"];
const result = wordSubsets(words1, words2);
console.log(result);
