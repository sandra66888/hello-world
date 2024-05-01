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
var findBottomLeftValue = function(root) {
  let queue = [root]
  let leftmost;
  while(queue.length){
      let levelSize = queue.length
      for(let i = 0; i < levelSize; i++){
          let currentNode = queue.shift()
          if(i === 0){
              leftmost = currentNode.val
          }
          currentNode.left && queue.push(currentNode.left)
          currentNode.right && queue.push(currentNode.right)
      }
  }
  return leftmost
};