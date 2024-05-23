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
 * @return {boolean}
 */
var isValidBST = function(root) {
  const helper = (node,lower,upper) => {
      if(node === null) {
          return true
      }
      if(lower !== null && lower >= node.val){
          return false
      }
      if(upper !== null && upper <= node.val){
          return false
      }
      return helper(node.left,lower,node.val) && helper(node.right, node.val, upper)
  }
  return helper(root,null,null)
};