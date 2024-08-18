// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
//   An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
//   Open brackets must be closed in the correct order.
//   Every close bracket has a corresponding open bracket of the same type.
//
//
//   Example 1:
//
// Input: s = "()"
//
// Output: true
//
// Example 2:
//
// Input: s = "()[]{}"
//
// Output: true
//
// Example 3:
//
// Input: s = "(]"
//
// Output: false
//
// Example 4:
//
// Input: s = "([])"
//
// Output: true

function isValid(s: string): boolean {
  const stack = [];
  stack.push(s[0]);

  for(let i=1; i < s.length; i++) {
    if (s[i]==='(' || s[i]==='{' || s[i]==='[') {
      stack.push(s[i]);
      continue;
    }
    const n = stack.length;
    const last = stack[n-1];
    if (s[i]===')' && last!=='(') {
      return false;
    }
    if (s[i]==='}' && last!=='{') {
      return false;
    }
    if (s[i]===']' && last!=='[') {
      return false;
    }
    if (s[i]===')' && last==='(') {
      stack.pop();
    }
    if (s[i]==='}' && last==='{') {
      stack.pop();
    }
    if (s[i]===']' && last==='[') {
      stack.pop();
    }
  }

  return stack.length === 0;

}

const input = "([])";
const result = isValid(input);
console.log(result);
