// tree traversal
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
function inOrderTraversal(root) {
  if (root === null) {
    return [];
  }
  return [
    ...inOrderTraversal(root.left),
    root.value,
    ...inOrderTraversal(root.right),
  ];
}

const testCase1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
const testCase2 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6, new TreeNode(5), new TreeNode(7))
);
console.log(inOrderTraversal(testCase1));
console.log(inOrderTraversal(testCase2));


// depth of binary tree
function maxDepth(root) {
  if (root === null) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

console.log(maxDepth(testCase1));