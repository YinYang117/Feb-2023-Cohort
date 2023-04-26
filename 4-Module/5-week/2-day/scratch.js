// // // LOGARITHM?

// // function logBase10(num) {
// //     if (num === 1) return 0;
// //     if (num % 10 !== 0 || num <= 0) return "Invalid input"
// //     else return 1 + logBase10(num/10);  
// // }

// // // console.log(logBase10(10000))

// // function logBase2(num) {
// //     if (num === 1) return 0;
// //     if (num % 2 !== 0 || num <= 0) return "Invalid input"
// //     else return 1 + logBase2(num/2);  
// // }
// // // 1    2    3     4     5     6
// // // 2 -> 4 -> 8 -> 16 -> 32 -> 64

// // console.log(logBase2(256))

// class TreeNode{
//     constructor(val){
//         this.val = val;
//         this.children = [];
//         this.parent = null;
//     }

//     addChild(node){
//         node.parent = this;
//         this.children.push(node)
//     }
// }

// const one = new TreeNode(1)
// const two = new TreeNode(2)
// const three = new TreeNode(3)
// const four = new TreeNode(4)
// const five = new TreeNode(5)
// const six = new TreeNode(6)
// one.addChild(two)
// one.addChild(three)
// one.addChild(four)
// two.addChild(five)
// four.addChild(six)

// let queue = [one];
// while (queue.length){
//     const current = queue.shift();
//     if (current.children.length){
//         queue.push(...current.children)
//     }
//     console.log(current.val);
// }

// console.log()

// let stack = [one];
// while (stack.length){
//     const current = stack.pop();
//     if (current.children.length){
//         stack.push(...current.children)
//     }
//     console.log(current.val)
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
    }

    addToTree(val, node = this.root) {
        if (!this.root) return this.root = new BinaryTreeNode(val);

        if (val >= node.val) {
            if (!node.right) node.right = new BinaryTreeNode(val)
            else this.addToTree(val, node.right)
        };
        if (val < node.val) {
            if (!node.left) node.left = new BinaryTreeNode(val)
            else this.addToTree(val, node.left)
        };
    }

    bft() {
        const queue = [this.root];
        while (queue.length) {
            const current = queue.shift();
            console.log(current.val);
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
    }

    bfs(target) {
        const queue = [this.root];
        while (queue.length) {
            const current = queue.shift();
            console.log(current.val);
            if (current.val === target) return true;
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        return false;
    }

    dft(){
        const stack = [this.root];
        while (stack.length){
            const current = stack.pop()
            console.log(current.val)
            if (current.right) stack.push(current.right);
            if (current.left) stack.push(current.left)
        }
    }

    recursiveDft(current = this.root){
        console.log(current.val)
        if (current.left) this.recursiveDft(current.left)
        if (current.right) this.recursiveDft(current.right)
    }

    improvedSearch(target) {
        const queue = [this.root];
        while (queue.length) {
            const current = queue.shift();
            console.log(current.val);
            if (current.val === target) return true;
            if (target < current.val && current.left) queue.push(current.left)
            else if (target >= current.val && current.right) queue.push(current.right)
        }
        return false;
    }

    recursiveImprovedSearch(target, current = this.root){
        console.log(current.val)
        if (current.val === target) return true
        if (!current) return false;
        if (target < current.val){
            return this.recursiveImprovedSearch(target, current.left)
        }
        else return this.recursiveImprovedSearch(target, current.right)
    }
}

const myBST = new BinarySearchTree();
myBST.addToTree(4);
myBST.addToTree(6);
myBST.addToTree(2);
myBST.addToTree(3);
myBST.addToTree(5);
myBST.addToTree(1);
myBST.addToTree(7);
// // console.log(myBST)
// myBST.bft()
// console.log("~~~~~~~~~~~~~~~~~~~~~")
// console.log(myBST.improvedSearch(3.5))
console.log(myBST.recursiveImprovedSearch(3))