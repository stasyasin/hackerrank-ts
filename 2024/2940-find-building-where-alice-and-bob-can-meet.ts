// // 2940. Find Building Where Alice and Bob Can Meet
// You are given a 0-indexed array heights of positive integers, where heights[i] represents the height of the ith building.
//
//     If a person is in building i, they can move to any other building j if and only if i < j and heights[i] < heights[j].
//
//     You are also given another array queries where queries[i] = [ai, bi]. On the ith query, Alice is in building ai while Bob is in building bi.
//
//     Return an array ans where ans[i] is the index of the leftmost building where Alice and Bob can meet on the ith query. If Alice and Bob cannot move to a common building on query i, set ans[i] to -1.
//
//
//
// Example 1:
//
// Input: heights = [6,4,8,5,2,7], queries = [[0,1],[0,3],[2,4],[3,4],[2,2]]
// Output: [2,5,-1,5,2]
// Explanation: In the first query, Alice and Bob can move to building 2 since heights[0] < heights[2] and heights[1] < heights[2].
//     In the second query, Alice and Bob can move to building 5 since heights[0] < heights[5] and heights[3] < heights[5].
//     In the third query, Alice cannot meet Bob since Alice cannot move to any other building.
//     In the fourth query, Alice and Bob can move to building 5 since heights[3] < heights[5] and heights[4] < heights[5].
//     In the fifth query, Alice and Bob are already in the same building.
//     For ans[i] != -1, It can be shown that ans[i] is the leftmost building where Alice and Bob can meet.
//     For ans[i] == -1, It can be shown that there is no building where Alice and Bob can meet.
//     Example 2:
//
// Input: heights = [5,3,8,2,6,1,4,6], queries = [[0,7],[3,5],[5,2],[3,0],[1,6]]
// Output: [7,6,-1,4,6]
// Explanation: In the first query, Alice can directly move to Bob's building since heights[0] < heights[7].
// In the second query, Alice and Bob can move to building 6 since heights[3] < heights[6] and heights[5] < heights[6].
//     In the third query, Alice cannot meet Bob since Bob cannot move to any other building.
//     In the fourth query, Alice and Bob can move to building 4 since heights[3] < heights[4] and heights[0] < heights[4].
//     In the fifth query, Alice can directly move to Bob's building since heights[1] < heights[6].
// For ans[i] != -1, It can be shown that ans[i] is the leftmost building where Alice and Bob can meet.
//     For ans[i] == -1, It can be shown that there is no building where Alice and Bob can meet.
//
//


function leftmostBuildingQueries(heights: number[], queries: number[][]): number[] {
  const n = heights.length;
  const stack = [];
  const nextHigher = new Array(n).fill(n);
  const maxHeight = new Array(n).fill(0);
  for (let i = n-1; i >= 0; i--) {
    const item = heights[i];
    while (stack.length && heights[stack[stack.length - 1]] <= item) {
      stack.pop();
    }
    if (stack.length) {
      nextHigher[i] = stack[stack.length - 1];
      maxHeight[i] = Math.max(heights[nextHigher[i]], maxHeight[nextHigher[i]]);
    }
    stack.push(i);
  }
  const qLength = queries.length;
  const result = new Array(qLength).fill(-1);
  for (let i = 0; i < qLength; i++) {
    const [a1, b1] = queries[i];
    const a = Math.min(a1, b1), b = Math.max(a1, b1);
    if (heights[a] < heights[b] || a === b) {
      result[i] = b;
      continue;
    }
    const flag = Math.max(heights[a], heights[b]);
    let m = Math.max(nextHigher[a], nextHigher[b]);
    while (m < n) {
      if (heights[m] > flag) {
        result[i] = m;
        break;
      }
      if (maxHeight[m] <= flag) break;
      m = nextHigher[m];
    }
  }
  return result;
};

const heights = [5,3,8,2,6,1,4,6], queries = [[0,7],[3,5],[5,2],[3,0],[1,6]]
const result = leftmostBuildingQueries(heights, queries);
console.log(result);
