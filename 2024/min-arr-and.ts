// 3133. Minimum Array End
// You are given two integers n and x. You have to construct an array of positive integers nums of size n where for every 0 <= i < n - 1, nums[i + 1] is greater than nums[i], and the result of the bitwise AND operation between all elements of nums is x.
//
//   Return the minimum possible value of nums[n - 1].


function minEnd(n: number, x: number): number {
  --n;
  let ans: bigint = BigInt(x);
  for (let i = 0; i < 31; ++i) {
    if (((x >> i) & 1) ^ 1) {
      ans |= BigInt(n & 1) << BigInt(i);
      n >>= 1;
    }
  }
  ans |= BigInt(n) << BigInt(31);
  return Number(ans);
  // let currentAND = x;
  // let lastNum = x;
  //
  // for (let i = 1; i < n; i++) {
  //   let nextNum = lastNum + 1;
  //   while ((currentAND & nextNum) !== x) {
  //     nextNum++;
  //   }
  //   lastNum = nextNum;
  //   currentAND &= nextNum;
  // }
  //
  // return lastNum;

};

// Приклад використання
// const unsortedArray = [3,16,8,4,2];
const result = minEnd(6715154, 7193485);

console.log(result); // Виведе: [5, 6, 11, 12, 13]
