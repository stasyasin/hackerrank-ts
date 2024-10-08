// Search Insert Position
// Easy
// Topics
// Companies
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//
//   You must write an algorithm with O(log n) runtime complexity.
//
//
//
//   Example 1:
//
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:
//
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:
//
// Input: nums = [1,3,5,6], target = 7
// Output: 4

function searchInsert(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) /2);

  while(start < end) {
    // todo write exit condition
    mid = Math.floor((start + end) /2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      start = mid+1;
    } else {
      end = mid-1;
    }
  }

  return start+1;
}

const input = [1,3,5,6];
const target = 5;
const result = searchInsert(input, target);
console.log(result);
