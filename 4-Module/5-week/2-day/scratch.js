// // LOGARITHMS!

// function logBase10(num){
//     if (num === 1) return 0;
//     if (num % 10 !== 0 || num <= 0) return "Invalid Input";
//     else return 1 + logBase10(num/10);
// }

// // console.log(logBase10(1));


// function logBase2(num){
//     if (num === 1) return 0;
//     if (num % 2 !== 0 || num <= 0) return "Invalid Input";
//     else return 1 + logBase2(num/2);
// }
// // 1 -> 2 -> 4 -> 8 -> 16 -> 32 -> 64 -> 128 -> 256
// console.log(logBase2(256))

// TREES!

class TreeNode {
    constructor(val) {
        this.val = val;
        this.children = [];
        this.parent = null;
    }

    addChild(node) {
        node.parent = this;
        this.children.push(node);
    }
}

const one = new TreeNode(1)
const two = new TreeNode(2)
const three = new TreeNode(3)
const four = new TreeNode(4)
const five = new TreeNode(5)
const six = new TreeNode(6)
one.addChild(two)
one.addChild(three)
one.addChild(four)
two.addChild(five)
four.addChild(six)

// Breadth First Traversal
// const queue = [one];
// while (queue.length){
//     const current = queue.shift();
//     console.log(current.val);
//     if (current.children.length) queue.push(...current.children)
// }

// console.log("###############################")

// // Depth First Traversal
// const stack = [one];
// while (stack.length){
//     const current = stack.pop();
//     console.log(current.val)
//     if (current.children.length) stack.push(...current.children)
// }

class BinaryTreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.members = new Set();
    }

    addNode(val, current = this.root) {
        if (this.members.has(val)) return "No"
        if (!this.root) return this.root = new BinaryTreeNode(val);
        if (val < current.val) {
            if (!current.left) return current.left = new BinaryTreeNode(val) && this.members.add(val);
            else this.addNode(val, current.left)
        }
        else current.right ? this.addNode(val, current.right) : current.right = new BinaryTreeNode(val) && this.members.add(val);
    }

    breadthFirstTraversal(){
        const queue = [this.root];
        while (queue.length){
            const current = queue.shift();
            console.log(current.val);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }

    depthFirstTraversal(){
        const stack = [this.root];
        while (stack.length){
            const current = stack.pop();
            console.log(current.val)
            if (current.right) stack.push(current.right);
            if (current.left) stack.push(current.left);
        }
    }

    recursiveDFT(current = this.root){
        if (!current) return;
        console.log(current.val);
        this.recursiveDFT(current.left);
        this.recursiveDFT(current.right);
    }

    regularSearch(target){
        const stack = [this.root];
        while (stack.length){
            const current = stack.pop();
            console.log(current.val);
            if (current.val === target) return true;
            if (current.right) stack.push(current.right);
            if (current.left) stack.push(current.left);
        }
        return false;
    }
    
    goodSearch(target){
        const stack = [this.root];
        while (stack.length){
            const current = stack.pop();
            console.log(current.val);
            if (current.val === target) return true;
            if (target < current.val && current.left) stack.push(current.left)
            if (target > current.val && current.right) stack.push(current.right) 
        }
        return false;

    }
}

const myBST = new BinarySearchTree();
myBST.addNode(6);
myBST.addNode(3);
myBST.addNode(9);
myBST.addNode(5);
myBST.addNode(7);
myBST.addNode(1);
myBST.addNode(9000); 
console.log(myBST)
// myBST.breadthFirstTraversal();
// console.log("$$$$$$$$$$$$$$$$$$$$$$$")
// myBST.depthFirstTraversal();
// console.log("`````````````````````````")
myBST.recursiveDFT();
console.log(myBST.regularSearch(5));
// console.log(myBST.regularSearch(9000));
console.log(myBST.goodSearch(5));