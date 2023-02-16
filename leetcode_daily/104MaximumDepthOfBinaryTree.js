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
// var maxDepth = function(root) {
//     let max = 0;
//     const recursion = (root, level = 1) => {
//         if (!root) return;
//         max = Math.max(max, level);
//         recursion(root.left, level + 1);
//         recursion(root.right, level + 1);
//     }
//     recursion(root);
//     return max;
// };
// var maxDepth = function(root) {
//     return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0;
// };

var maxDepth = function(root) {
    const recursion = (level = 1, totalNode = 1, nodeAtLevel = 1) => {
        if (totalNode > root.length) return -1;
        if (totalNode === root.length) return level;
        return recursion(level + 1, totalNode + nodeAtLevel * 2, nodeAtLevel * 2);
    }
    return recursion();
};

console.log(maxDepth([3,9,20,null,null,15,7])); //3 
console.log(maxDepth([1,null,2])); //2