// You are given a string s. You can convert s to a
// palindrome
// by adding characters in front of it.
//
//   Return the shortest palindrome you can find by performing this transformation.
//
//
//
//   Example 1:
//
// Input: s = "aacecaaa"
// Output: "aaacecaaa"
// Example 2:
//
// Input: s = "abcd"
// Output: "dcbabcd"

function shortestPalindrome(s: string): string {
  const n = s.length;
  if (n <= 1) return s;
  const reverse = s.split('').reverse().join('');

  for (let i = 0; i < n; i++) {
    if (s.substr(0, n - i) === reverse.substr(i)) {
      return reverse.substr(0, i) + s; // додаємо зворотну частину
    }
  }
  return '';

}

const input = 'aacecaaa';
const result = shortestPalindrome(input);
console.log(result);
