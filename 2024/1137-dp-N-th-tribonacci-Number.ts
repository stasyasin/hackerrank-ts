// 1137. N-th Tribonacci Number

// The Tribonacci sequence Tn is defined as follows:
//
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
//
//   Given n, return the value of Tn.
//
//
//
//   Example 1:
//
// Input: n = 4
// Output: 4
// Explanation:
//   T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// Example 2:
//
// Input: n = 25
// Output: 1389537

function  tribonacci(n: number): number {
  if (n===0) return 0;
  if (n===1) return 1;
  if (n===2) return 1;
  const dp = [0,1,1];
  for (let i=3; i<=n; i++) {
    const n = dp.length;
    const curr = dp[n-1] + dp[n-2]+dp[n-3];
    dp.push(curr);
  }

  return dp[dp.length-1];

};

const n = 25;
const result = tribonacci(n);
console.log(result);
