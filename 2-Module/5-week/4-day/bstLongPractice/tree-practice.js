const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  // Your code here
  while (rootNode.left) rootNode = rootNode.left;
  return rootNode.val;
}

function findMaxBST(rootNode) {
  // Your code here
  while (rootNode.right) rootNode = rootNode.right;
  return rootNode.val;
}

function findMinBT(rootNode) {
  // Your code here
  const q = [rootNode];
  let min = Infinity;
  while (q.length) {
    const current = q.shift();
    if (current.val < min) min = current.val;
    if (current.left) q.push(current.left)
    if (current.right) q.push(current.right)
  }
  return min;
}

function findMaxBT(rootNode) {
  // Your code here
  // if (!rootNode) return -Infinity;
  // return Math.max(rootNode.val, findMaxBT(rootNode.left), findMaxBT(rootNode.right))
  if (!rootNode) return null ?? undefined;
  const stack = [rootNode];
  let max = -Infinity;
  while (stack.length) {
    const current = stack.pop()
    if (current.val > max) max = current.val;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return max;
}

// function getHeight (rootNode, height = 0) {
//   // Your code here
//   if (!rootNode) return -1;
//   let left = height;
//   let right = height;
//   if (rootNode.left) left = getHeight(rootNode.left, height + 1)
//   if (rootNode.right) right = getHeight(rootNode.right, height + 1)
//   return Math.max(left, right)
// }

// function getHeight (rootNode){
//   if (!rootNode) return -1
//   return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right))
// }

const getHeight = rootNode => rootNode ? 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right)) : -1

// function balancedTree (rootNode) {
// Your code here
// if (!rootNode) return true;
// const left = balancedTree(rootNode.left);
// const right = balancedTree(rootNode.right);
// const leftHeight = getHeight(rootNode.left);
// const rightHeight = getHeight(rootNode.right);
// return Math.abs(leftHeight - rightHeight) <= 1 && left && right; 
// }

function balancedTree(rootNode) {
  const q = [rootNode];
  while (q.length) {
    const current = q.shift();
    const leftHeight = getHeight(current.left)
    const rightHeight = getHeight(current.right)
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    if (current.left) q.push(current.left)
    if (current.right) q.push(current.right)
  }
  return true;
}

// function countNodes (rootNode) {
//   // Your code here
//   let count = 0;
//   const stack = [rootNode];
//   while (stack.length){
//     count++;
//     const current = stack.pop();
//     if (current.left) stack.push(current.left);
//     if (current.right) stack.push(current.right);
//   }
//   return count;
// }

// function countNodes(rootNode){
//   if (!rootNode) return 0;
//   return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
// }

const countNodes = rootNode => rootNode ? 1 + countNodes(rootNode.left) + countNodes(rootNode.right) : 0

function getParentNode(rootNode, target) {
  // Your code here
  if (rootNode.val === target) return null;
  const q = [rootNode];
  while (q.length) {
    const current = q.shift();
    const { left, right } = current;
    if (left?.val === target || right?.val === target) return current;
    if (left) {
      // if (left.val === target) return current;
      q.push(left)
    }
    if (right) {
      // if (right.val === target) return current;
      q.push(right)
    }
  }
  return undefined;
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
  const stack = [rootNode];
  let last = null;
  const seen = new Set();
  while (stack.length) {
    const current = stack[stack.length - 1];
    if (current.left && !seen.has(current.left.val)) {
      seen.add(current.left.val)
      stack.push(current.left)
      continue;
    }
    stack.pop();
    if (current.val === target) return last;
    if (current.right) {
      stack.push(current.right);
    }
    last = current.val;
  }
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  const parent = getParentNode(rootNode, target);
  let node;
  const queue = [rootNode];
  while (queue.length) {
    const current = queue.shift();
    if (current.val === target) {
      node = current
      break;
    };
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }
  // Undefined if the target cannot be found
  if (!node) return;
  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null
  if (!parent && !node.left && !node.right) {
    return null;
  }
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  else if (parent && !node.left && !node.right) {
    parent.left === node ? parent.left = null : parent.right = null;
  }

  else if (node.left && node.right) {
    // Case 2: Two children:
    //  Set the value to its in-order predecessor, then delete the predecessor
    //  Replace target node with the left most child on its right side, 
    //  or the right most child on its left side.
    //  Then delete the child that it was replaced with.
    const pred = inOrderPredecessor(rootNode, target);
    deleteNodeBST(rootNode, pred);
    node.val = pred;

  }
  // Case 3: One child:
  //   Make the parent point to the child
  else if (parent && (node.left || node.right)) {
    if (parent.left === node) {
      node.left ? parent.left = node.left : parent.left = node.right;
    } else {
      node.left ? parent.right = node.left : parent.right = node.right;
    }
  }

}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}