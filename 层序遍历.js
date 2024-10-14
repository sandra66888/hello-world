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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return []
  const queue = [root]
  const res = []
  while(queue.length){
    const curlen = queue.length
    const curArr = []
    for(let i = 0; i < curlen; i++){
      const node = queue.shift()
      curArr.push(node.val)

      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    } 
    res.push(curArr)
  }
  return res
};