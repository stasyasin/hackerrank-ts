// // 2054. Two Best Non-Overlapping Events
// You are given a 0-indexed 2D integer array of events where events[i] = [startTimei, endTimei, valuei]. The ith event starts at startTimei and ends at endTimei, and if you attend this event, you will receive a value of valuei. You can choose at most two non-overlapping events to attend such that the sum of their values is maximized.
//
//   Return this maximum sum.
//
//   Note that the start time and end time is inclusive: that is, you cannot attend two events where one of them starts and the other ends at the same time. More specifically, if you attend an event with end time t, the next event must start at or after t + 1.
//
//
//
// Example 1:
//
//
// Input: events = [[1,3,2],[4,5,2],[2,4,3]]
// Output: 4
// Explanation: Choose the green events, 0 and 1 for a sum of 2 + 2 = 4.
// Example 2:
//
// Example 1 Diagram
// Input: events = [[1,3,2],[4,5,2],[1,5,5]]
// Output: 5
// Explanation: Choose event 2 for a sum of 5.
// Example 3:
//
//
// Input: events = [[1,5,3],[1,5,1],[6,6,5]]
// Output: 8
// Explanation: Choose events 0 and 2 for a sum of 3 + 5 = 8.
//
//
// Constraints:
//
//   2 <= events.length <= 105
// events[i].length == 3
// 1 <= startTimei <= endTimei <= 109
// 1 <= valuei <= 106


function maxTwoEvents(events: number[][]): number {
  let result = 0;
  let maxPrevious = 0;
  events.sort((a,b) => a[1]-b[1]);
  const n = events.length;
  const dp: number[][] = [];

  for (let i = 0; i< n; i++) {
    const [start, end ,value] = events[i];
    let left = -1;
    let right = i-1;

    while (left < right ) {
      const mid = Math.floor((left+right+1)/2);
      if (events[mid][1] < start) {
        left = mid;
      } else {
        right = mid-1;
      }
    }

    const bestPreviousValue = left >= 0 ? dp[left][1] : 0;

    result = Math.max(result, value + bestPreviousValue);

    maxPrevious = Math.max(maxPrevious, value);
    dp.push([end, maxPrevious]);

  }

  return result;
};

const events = [[10,83,53],[63,87,45],[97,100,32],[51,61,16]]; //[[1,3,2],[4,5,2],[2,4,3]];
const result = maxTwoEvents(events);
console.log(result);

// let result = 0;
// let maxPrevious = 0;
// events.sort((a,b) => a[1]-b[1]);
// const n = events.length;
//
// for (let i = 0; i< n; i++) {
//   const [start, end ,value] = events[i];
//   let left = -1;
//   let right = i-1;
//
//   while (left < right ) {
//     const mid = Math.floor((left+right+1)/2);
//     if (events[mid][1] < start) {
//       left = mid;
//     } else {
//       right = mid-1;
//     }
//   }
//
//   const currVal = value + (left >= 0 ? maxPrevious : 0);
//   result = Math.max(maxPrevious,result);
//   maxPrevious = Math.max(maxPrevious, value);
//
// }
//
// return result;
