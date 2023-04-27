// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    if (!this.root) return this.root = new TreeNode(val)
    if (val < currentNode.val) {
      if (!currentNode.left) return currentNode.left = new TreeNode(val);
      return this.insert(val, currentNode.left)
    } else {
      return currentNode.right ? this.insert(val, currentNode.right) : currentNode.right = new TreeNode(val);
    }
  } 

  search(val) {
    // Your code here
    // const queue = [this.root];
    // while (queue.length){
    //   const current = queue.shift();
    //   if (current.val === val) return true;
    //   // if (current.left) queue.push(current.left);
    //   // if (current.right) queue.push(current.right);
    //   if (val < current.val && current.left) queue.push(current.left);
    //   else if (current.right) queue.push(current.right);
    // }
    let current = this.root;
    while (current){
      if (current.val === val) return true;
      if (val < current.val) current = current.left;
      else current = current.right;
    }
    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }
  
  
  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }
  
  
  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    const q = [this.root];
    while (q.length){
      const current = q.shift();
      console.log(current.val);
      if (current.left) q.push(current.left)
      if (current.right) q.push(current.right)
    }
  }
  
  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    const stack = [this.root];
    while (stack.length){
      const current = stack.pop();
      console.log(current.val);
      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }
}
}

module.exports = { BinarySearchTree, TreeNode };