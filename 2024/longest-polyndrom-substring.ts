// Вхід: s = "babad"
// Вихід: "bab"
// Примітка: "aba" також є правильною відповіддю.
//
//   Вхід: s = "cbbd"
// Вихід: "bb"


function longestPolyndromSubstring(s: string): string {
  const n = s.length;
  if (n === 0) {
    return '';
  }
  if (n === 1) {
    return s;
  }
  if (n === 2) {
    return s.charAt(0)===s.charAt(1) ? s : '';
  }
  let result = '';
  const findLongestPolyndrom = (ind: number): string => {
    let currentPol = '';
    let flag = true;
    let leftInd = ind;
    let rightInd = ind;
    while (flag) {
      leftInd = leftInd -1;
      rightInd = rightInd + 1;
      if (leftInd < 0 || rightInd > n - 1) {
        flag = false;
      }
      if (flag) {
        if (s.charAt(leftInd) !== s.charAt(rightInd)) {
          flag = false;
        } else {
          currentPol = s.substring(leftInd, rightInd+1);
        }
      }
    }
    return currentPol;
  }

  for (let i = 0; i < s.length; i++) {
    const current = findLongestPolyndrom(i);
    result =  current.length > result.length ? current : result;
  }


  return result ? result : s.charAt(0);
}

function longestPolyndromSubstringDual(s: string): string {
  if (s.length <= 1) return s;

  let start = 0;
  let maxLength = 1;

  const expandAroundCenter = (left: number, right: number): void => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLength = right - left + 1;
      if (currentLength > maxLength) {
        start = left;
        maxLength = currentLength;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    // Обробка непарної довжини паліндрома
    expandAroundCenter(i, i);
    // Обробка парної довжини паліндрома
    expandAroundCenter(i, i + 1);
  }

  return s.substring(start, start + maxLength);
}


const input = 'babad'
const result = longestPolyndromSubstring(input);
console.log(result); // Виведе 'bab' / 'aba'

// Приклад використання
const input1 = "babad";
const result1 = longestPolyndromSubstringDual(input1);
console.log(result1); // Виведе 'bab' або 'aba'

