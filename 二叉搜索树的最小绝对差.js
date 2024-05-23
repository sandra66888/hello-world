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
 * @return {number}
 */
var getMinimumDifference = function(root) {
  // 记录上一个节点
  let prev = null
  let minDiff =  Infinity  // 初始化最小值为无穷大
  // 构造中序遍历辅助函数
  const inorderTraversal = (node) => {
      if(node === null){
          return null
      }
      inorderTraversal(node.left)
      if(prev !== null){
          minDiff = Math.min(minDiff,node.val - prev.val)
      }
      prev = node
      inorderTraversal(node.right)
  }
  inorderTraversal(root)
  return minDiff
};