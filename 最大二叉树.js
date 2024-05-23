/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if(nums.length === 0){
      return null;
  }
  // 先找到最大值，和最大值索引
  let maxValue = -Infinity
  let maxIndex = -1
  for(let i = 0; i < nums.length; i++){
      if(nums[i] >= maxValue){
          maxValue = nums[i]
          maxIndex = i
      }
  }
  // 构建二叉树
  const root = new TreeNode(maxValue)
  root.left = constructMaximumBinaryTree(nums.slice(0,maxIndex));
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex+ 1))
  return root
};