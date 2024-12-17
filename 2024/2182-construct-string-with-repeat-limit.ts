// // 2182. Construct String With Repeat Limit
// You are given a string s and an integer repeatLimit. Construct a new string repeatLimitedString using the characters of s such that no letter appears more than repeatLimit times in a row. You do not have to use all characters from s.
//
//   Return the lexicographically largest repeatLimitedString possible.
//
//   A string a is lexicographically larger than a string b if in the first position where a and b differ, string a has a letter that appears later in the alphabet than the corresponding letter in b. If the first min(a.length, b.length) characters do not differ, then the longer string is the lexicographically larger one.
//
//
//
//   Example 1:
//
// Input: s = "cczazcc", repeatLimit = 3
// Output: "zzcccac"
// Explanation: We use all of the characters from s to construct the repeatLimitedString "zzcccac".
//   The letter 'a' appears at most 1 time in a row.
//   The letter 'c' appears at most 3 times in a row.
//   The letter 'z' appears at most 2 times in a row.
//   Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
//   The string is the lexicographically largest repeatLimitedString possible so we return "zzcccac".
//   Note that the string "zzcccca" is lexicographically larger but the letter 'c' appears more than 3 times in a row, so it is not a valid repeatLimitedString.
//   Example 2:
//
// Input: s = "aababab", repeatLimit = 2
// Output: "bbabaa"
// Explanation: We use only some of the characters from s to construct the repeatLimitedString "bbabaa".
//   The letter 'a' appears at most 2 times in a row.
//   The letter 'b' appears at most 2 times in a row.
//   Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
//   The string is the lexicographically largest repeatLimitedString possible so we return "bbabaa".
//   Note that the string "bbabaaa" is lexicographically larger but the letter 'a' appears more than 2 times in a row, so it is not a valid repeatLimitedString.
//
//
//   Constraints:
//
// 1 <= repeatLimit <= s.length <= 105
// s consists of lowercase English letters.

function repeatLimitedString(s: string, repeatLimit: number): string {
  const dict: Record<string, number> = {};
  let res = '';

  for (let i = 0; i < s.length; i++) {
    dict[s[i]] = (dict[s[i]] || 0) + 1;
  }

  const sortedKeys = Object.keys(dict).sort((a,b) => b.localeCompare(a));

  for (let i = 0; i < sortedKeys.length; i++) {
    let j = 0;
    const key = sortedKeys[i];
    if (dict[key]===0) {
      continue;
    }

    let count = Math.min(dict[key], repeatLimit);
    res += key.repeat(count);
    dict[key] -= count;


    if (dict[key] !== 0) {
      let nextInd = i + 1;
     if (nextInd< sortedKeys.length) {
       while (dict[sortedKeys[nextInd]] === 0 ) {
         nextInd++;
       }
       const nextKey = sortedKeys[nextInd];
       if (nextKey) {
         res += nextKey;
         dict[nextKey] -= 1;
         i--;
       }
     }
    }
  }

  return res;

};

const s = "bplpcfifosybmjxphbxdltxtfrjspgixoxzbpwrtkopepjxfooazjyosengdlvyfchqhqxznnhuuxhtbrojyhxwlsrklsryvmufoibgfyxgjw", repeatLimit = 1;
// const s = "xyutfpopdynbadwtvmxiemmusevduloxwvpkjioizvanetecnuqbqqdtrwrkgt", repeatLimit = 1;
// const s = "cczazcc", repeatLimit = 3;
const result = repeatLimitedString(s, repeatLimit);
console.log(result);
