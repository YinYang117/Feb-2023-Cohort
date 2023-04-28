// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
// Do not change this
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor(root = null) {
        // Your code here
        this.root = root;
    }

    insert(val, currentNode = this.root) {
        // Your code here
        if (!this.root) return this.root = new TreeNode(val);
        if (val < currentNode.val) {
            if (!currentNode.left) {
                currentNode.left = new TreeNode(val);
                return;
            } else {
                return this.insert(val, currentNode.left)
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = new TreeNode(val);
                return;
            } else {
                return this.insert(val, currentNode.right)
            }
        }
    }

    search(val) {
        // Your code here
        const stack = [this.root]
        while (stack.length) {
            const current = stack.pop();
            if (current.val === val) return true;
            if (current.left && val < current.val) stack.push(current.left)
            else if (current.right) stack.push(current.right)
        }
        return false;
    }


    preOrderTraversal(currentNode = this.root) {
        // Your code here
        if (!currentNode) return;
        console.log(currentNode.val)
        this.preOrderTraversal(currentNode.left)
        this.preOrderTraversal(currentNode.right)
    }


    inOrderTraversal(currentNode = this.root) {
        // Your code here
        if (!currentNode) return;
        this.inOrderTraversal(currentNode.left)
        console.log(currentNode.val)
        this.inOrderTraversal(currentNode.right)
    }


    postOrderTraversal(currentNode = this.root) {
        // Your code here
        if (!currentNode) return;
        this.postOrderTraversal(currentNode.left)
        this.postOrderTraversal(currentNode.right)
        console.log(currentNode.val)
    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal(target) {
        // your code here
        const queue = [this.root]
        while (queue.length) {
            const current = queue.shift()
            console.log(current.val)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
        // your code here
        const stack = [this.root]
        while (stack.length) {
            const current = stack.pop()
            console.log(current.val)
            if (current.left) stack.push(current.left)
            if (current.right) stack.push(current.right)
        }
    }
}

module.exports = { BinarySearchTree, TreeNode };