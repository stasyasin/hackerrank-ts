// // 2818. Apply Operations to Maximize Score
// You are given an array nums of n positive integers and an integer k.
//
//     Initially, you start with a score of 1. You have to maximize your score by applying the following operation at most k times:
//
//     Choose any non-empty subarray nums[l, ..., r] that you haven't chosen previously.
// Choose an element x of nums[l, ..., r] with the highest prime score. If multiple such elements exist, choose the one with the smallest index.
//     Multiply your score by x.
//     Here, nums[l, ..., r] denotes the subarray of nums starting at index l and ending at the index r, both ends being inclusive.
//
//     The prime score of an integer x is equal to the number of distinct prime factors of x. For example, the prime score of 300 is 3 since 300 = 2 * 2 * 3 * 5 * 5.
//
// Return the maximum possible score after applying at most k operations.
//
//     Since the answer may be large, return it modulo 109 + 7.
//
//
//
// Example 1:
//
// Input: nums = [8,3,9,3,8], k = 2
// Output: 81
// Explanation: To get a score of 81, we can apply the following operations:
//     - Choose subarray nums[2, ..., 2]. nums[2] is the only element in this subarray. Hence, we multiply the score by nums[2]. The score becomes 1 * 9 = 9.
//     - Choose subarray nums[2, ..., 3]. Both nums[2] and nums[3] have a prime score of 1, but nums[2] has the smaller index. Hence, we multiply the score by nums[2]. The score becomes 9 * 9 = 81.
// It can be proven that 81 is the highest score one can obtain.
//     Example 2:
//
// Input: nums = [19,12,14,6,10,18], k = 3
// Output: 4788
// Explanation: To get a score of 4788, we can apply the following operations:
//     - Choose subarray nums[0, ..., 0]. nums[0] is the only element in this subarray. Hence, we multiply the score by nums[0]. The score becomes 1 * 19 = 19.
//     - Choose subarray nums[5, ..., 5]. nums[5] is the only element in this subarray. Hence, we multiply the score by nums[5]. The score becomes 19 * 18 = 342.
//     - Choose subarray nums[2, ..., 3]. Both nums[2] and nums[3] have a prime score of 2, but nums[2] has the smaller index. Hence, we multipy the score by nums[2]. The score becomes 342 * 14 = 4788.
// It can be proven that 4788 is the highest score one can obtain.
//
//
//     Constraints:
//
// 1 <= nums.length == n <= 105
// 1 <= nums[i] <= 105
// 1 <= k <= min(n * (n + 1) / 2, 109)
// Seen this question in a real interview before?
//     1/5
//     Yes
// No
// Accepted
// 50.1K
// Submissions
// 94.4K
// Acceptance Rate
// 53.1%
// Topics
// Companies
// Hint 1
// Calculate nums[i]'s prime score s[i] by factoring in O(sqrt(nums[i])) time.
// Hint 2
// For each nums[i], find the nearest index left[i] on the left (if any) such that s[left[i]] >= s[i]. if none is found, set left[i] to -1. Similarly, find the nearest index right[i] on the right (if any) such that s[right[i]] > s[i]. If none is found, set right[i] to n.
//     Hint 3
// Use a monotonic stack to compute right[i] and left[i].
//     Hint 4
// For each index i, if left[i] + 1 <= l <= i <= r <= right[i] - 1, then s[i] is the maximum value in the range [l, r]. For this particular i, there are ranges[i] = (i - left[i]) * (right[i] - i) ranges where index i will be chosen.
//     Hint 5
// Loop over all elements of nums by non-increasing prime score, each element will be chosen min(ranges[i], remainingK) times, where reaminingK denotes the number of remaining operations. Therefore, the score will be multiplied by s[i]^min(ranges[i],remainingK).
//     Hint 6
// Use fast exponentiation to quickly calculate A^B mod C.


function maximumScore(nums: number[], k: number): number {
  const  qpow = (a: bigint, n: number, mod: number): bigint => {
    let ans = 1n;
    for (; n; n >>>= 1) {
      if (n & 1) {
        ans = (ans * a) % BigInt(mod);
      }
      a = (a * a) % BigInt(mod);
    }
    return ans;
  }

  const primeFactors= (n: number): number =>  {
    let i = 2;
    const s: Set<number> = new Set();
    while (i * i <= n) {
      while (n % i === 0) {
        s.add(i);
        n = Math.floor(n / i);
      }
      ++i;
    }
    if (n > 1) {
      s.add(n);
    }
    return s.size;
  }
  const mod = 10 ** 9 + 7;
  const n = nums.length;
  const arr: number[][] = Array(n)
      .fill(0)
      .map(() => Array(3).fill(0));
  const left: number[] = Array(n).fill(-1);
  const right: number[] = Array(n).fill(n);
  for (let i = 0; i < n; ++i) {
    arr[i] = [i, primeFactors(nums[i]), nums[i]];
  }
  const stk: number[] = [];
  for (const [i, f, _] of arr) {
    while (stk.length && arr[stk.at(-1)!][1] < f) {
      stk.pop();
    }
    if (stk.length) {
      left[i] = stk.at(-1)!;
    }
    stk.push(i);
  }
  stk.length = 0;
  for (let i = n - 1; i >= 0; --i) {
    const f = arr[i][1];
    while (stk.length && arr[stk.at(-1)!][1] <= f) {
      stk.pop();
    }
    if (stk.length) {
      right[i] = stk.at(-1)!;
    }
    stk.push(i);
  }
  arr.sort((a, b) => b[2] - a[2]);
  let ans = 1n;
  for (const [i, _, x] of arr) {
    const l = left[i];
    const r = right[i];
    const cnt = (i - l) * (r - i);
    if (cnt <= k) {
      ans = (ans * qpow(BigInt(x), cnt, mod)) % BigInt(mod);
      k -= cnt;
    } else {
      ans = (ans * qpow(BigInt(x), k, mod)) % BigInt(mod);
      break;
    }
  }
  return Number(ans);
}


const nums = [8,3,9,3,8], k = 2;
const result = maximumScore(nums, k);
console.log(result);
