// Write a function to find the longest common prefix string amongst an array of strings.
//
//   If there is no common prefix, return an empty string "".
//
//
//
//   Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
//
//   Constraints:
//
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters


function longestCommonPrefix(strs: string[]): string {
  if (!strs || strs.length ===0) {
    return '';
  }
  let prefix = ''
  // let flag = true;
  // let i = 0;
  // while(flag){
  //     const chars =

  // }
  const firstWord = strs[0];
  let flag = true;
  let i = 0;
  while(true) {
    const char = firstWord?.[i];
    for (let j=0; j < firstWord.length; j++) {
      if (j < strs.length  && (!strs[j] || strs[j][i] !== char)) {
        return prefix
      }
    }
    prefix = prefix + char;
    i++;

  }

  return prefix;
}

const strs = ["flower","flow","flight"]
const result = longestCommonPrefix(strs);
console.log(result);
