// 2097 Valid Arrangement of Pairs
//
// You are given a 0-indexed 2D integer array pairs where pairs[i] = [starti, endi]. An arrangement of pairs is valid if for every index i where 1 <= i < pairs.length, we have endi-1 == starti.
//
//   Return any valid arrangement of pairs.
//
//   Note: The inputs will be generated such that there exists a valid arrangement of pairs.
//
//
//
//   Example 1:
//
// Input: pairs = [[5,1],[4,5],[11,9],[9,4]]
// Output: [[11,9],[9,4],[4,5],[5,1]]
// Explanation:
//   This is a valid arrangement since endi-1 always equals starti.
//   end0 = 9 == 9 = start1
// end1 = 4 == 4 = start2
// end2 = 5 == 5 = start3
// Example 2:
//
// Input: pairs = [[1,3],[3,2],[2,1]]
// Output: [[1,3],[3,2],[2,1]]
// Explanation:
//   This is a valid arrangement since endi-1 always equals starti.
//   end0 = 3 == 3 = start1
// end1 = 2 == 2 = start2
// The arrangements [[2,1],[1,3],[3,2]] and [[3,2],[2,1],[1,3]] are also valid.
//   Example 3:
//
// Input: pairs = [[1,2],[1,3],[2,1]]
// Output: [[1,2],[2,1],[1,3]]
// Explanation:
//   This is a valid arrangement since endi-1 always equals starti.
//   end0 = 2 == 2 = start1
// end1 = 1 == 1 = start2
//
//
// Constraints:
//
//   1 <= pairs.length <= 105
// pairs[i].length == 2
// 0 <= starti, endi <= 109
// starti != endi
// No two pairs are exactly the same.
//   There exists a valid arrangement of pairs.

function validArrangement(pairs: number[][]): number[][] {
  const outDegree: Record<number, number> = {};
  const inDegree: Record<number, number> = {};
  const outSet: Set<number> = new Set();
  const graph: Record<number, number[]> = {};
  let startPoint: number | null = null;
  const result: number[][] = [];
  const currentPath: number[] = [];

  // fill outDegree, inDegree, outSet, inSet, graph
  for (const pair of pairs) {
    const [a, b] = pair;
    outDegree[a] = outDegree[a] ? outDegree[a] + 1 : 1; // fill outDegree
    inDegree[b] = inDegree[b] ? inDegree[b] + 1 : 1; // fill inDegree
    outSet.add(a); // fil set of out values

    // fill graph
    if (!graph[a]) {
      graph[a] = [];
    }
    graph[a].push(b);
  }


  // searching for startPoint
  for (let outVal of Array.from(outSet)) {
    if ((outDegree[outVal] ?? 0) - (inDegree[outVal] ?? 0) === 1) {
      startPoint = outVal;
    }
  }

  if (startPoint === null) {
    startPoint = pairs[0][0]; // take first if startPoint not found
  }

  // find the path
  const dfs = (node: number) => {
    while (graph[node] && graph[node].length > 0) {
      const nextNode = graph[node].pop()!;
      dfs(nextNode);
    }
    currentPath.push(node);
  }

  dfs(startPoint!);

  // reverse path
  currentPath.reverse();

  // spit path to array of 2 values
  for (let i = 0; i < currentPath.length - 1; i++) {
    result.push([currentPath[i], currentPath[i + 1]]);
  }

  console.log('asd outDegree', outDegree);
  console.log('asd inDegree', inDegree);
  console.log('asd outSet', outSet);
  console.log('asd graph', graph);
  console.log('asd startPoint', startPoint);
  console.log('asd currentPath', currentPath);

  return result;


};

// Приклад використання
// const input = [[5,1],[4,5],[11,9],[9,4]];
// const input = [[1,3],[3,2],[2,1]];
const input = [[3,2],[5,1],[1,0],[2,3],[0,2],[2,5]];
const result = validArrangement(input); // [[11,9],[9,4],[4,5],[5,1]] , [[1,3],[3,2],[2,1]], [[3,2],[2,5],[5,1],[1,0],[0,2],[2,3]]

console.log(result); // 2
