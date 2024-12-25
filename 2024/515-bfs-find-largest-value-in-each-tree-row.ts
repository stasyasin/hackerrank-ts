// // 515. Find Largest Value in Each Tree Row
// Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).
//
//
//
//   Example 1:
//
//
// Input: root = [1,3,2,5,3,null,9]
// Output: [1,3,9]
// Example 2:
//
// Input: root = [1,2,3]
// Output: [1,3]
//
//
// Constraints:
//
//   The number of nodes in the tree will be in the range [0, 104].
// -231 <= Node.val <= 231 - 1


/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

const arrayToTreeNode = (arr: number[]): TreeNode | null => {
  if (arr.length === 0) return null;

  const root = new TreeNode(arr[0]!);
  const queue: (TreeNode | null)[] = [root]; // Використовуємо чергу для рівневого побудування дерева

  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const current = queue.shift(); // Дістаємо поточний вузол з черги
    if (current) {
      if (arr[i] !== null) {
        current.left = new TreeNode(arr[i]!);
        queue.push(current.left); // Додаємо ліву дитину до черги
      }
      i++;

      if (i < arr.length && arr[i] !== null) {
        current.right = new TreeNode(arr[i]!);
        queue.push(current.right); // Додаємо праву дитину до черги
      }
      i++;
    }
  }

  return root;
}


function largestValues(root: TreeNode | null): number[] {
  if (!root) return [];

  const result: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let maxCurrentLevel = -Infinity;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      maxCurrentLevel = Math.max(maxCurrentLevel, node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(maxCurrentLevel);
  }

  return result;
};

const root = [1,3,2,5,3,null,9];
const tree = arrayToTreeNode(root);
const result = largestValues(tree);
console.log(result);
