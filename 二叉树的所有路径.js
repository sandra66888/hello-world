// 给定一个二叉树，返回所有从根节点到叶子节点的路径。
// 说明: 叶子节点是指没有子节点的节点。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const paths = []
  const dfs = (node, path) => {
      if (node) {
          path.push(node.val)
          if (!node.left && !node.right) {
              paths.push(path.join('->'))
          } else {
              dfs(node.left, [...path])
              dfs(node.right, [...path])
          }
      }
  }
  dfs(root, [])
  return paths
};