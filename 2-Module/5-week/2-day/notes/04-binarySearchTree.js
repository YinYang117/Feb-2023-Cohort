class BinarySearchTree {
    constructor(){
        this.root = null; 
    }

    addNode(val, node = this.root){
       if (!this.root) return this.root = new BSTNode(val);
       if (val < node.value){
        if (!node.left) return node.left = new BSTNode(val);
        return this.addNode(val, node.left);
       } else {
        if (!node.right) return node.right = new BSTNode(val);
        return this.addNode(val, node.right);
       }
    }

    depthFirstTraverse(node = this.root){
        console.log(node.value);
        if (node.left) this.depthFirstTraverse(node.left)
        if (node.right) this.depthFirstTraverse(node.right)
    }

    breadthFirstTraverse(node = this.root){
        const queue = [node];
        while (queue.length){
            const current = queue.shift();
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
            console.log(current.value)
        }
    }
}

class BSTNode {
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

const myBST = new BinarySearchTree();

myBST.addNode(6)
myBST.addNode(3)
myBST.addNode(9)
myBST.addNode(7)
myBST.addNode(10)
myBST.addNode(4)
myBST.addNode(2)
myBST.depthFirstTraverse();
console.log("*******************************")
myBST.breadthFirstTraverse();


