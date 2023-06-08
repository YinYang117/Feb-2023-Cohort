// Trees!
/*
What are trees? No, not the ones in the outside world, but the ones here, in
the computing world?  In basic terms, I could say that a tree is a graph that
doesn't contain any cycles. Well then what's a graph? Or even a cycle, for that
matter?

A graph is a collection of nodes, and any edges between those nodes. We started
working with very basic graphs when we learned about Linked Lists. A linked 
list is a graph made up of nodes that share edges between them, either a single
edge (singly linked list) or two edges (doubly linked). 

A cycle is when I can traverse from one node back to itself without repeating
any nodes along the way. Consider a singly linked list that has a head and a
tail. The graph begins with the head and ends with the tail. Starting at head
we can navigate our way to tail by following the chain of nexts present on each
node in the list. We know our list ends at the tail, because its next pointer 
is null. In this example, we do not have a cycle in our graph.  If, however, I 
made the tail's next pointer the head, I will have created a cycle. I could 
start at the head and work my way back just by following the series of nexts.

But Bill, what about Doubly Linked Lists? Do those have cycles? Great question,
me! No they don't, unless we update them in a similar fashion. A cycle only 
occurs when I don't repeat nodes/vertices in my traversal. Just because I have
a prev pointer does not mean I have a cycle. I would need to set head's prev to
tail and tail's next to head in order to create cycles within this doubly 
linked list.

We can think of Linked Lists as very specific kinds of trees, but we'll mostly
be interacting with them in a broader sense. For most trees, we won't have
next and prev, but rather children and parents.

           A
          /|\
         B C D

Here we've got a parent node A with child nodes A, B and C. We'll refer to A as
our root node, and B C and D as leaf nodes. The root is where our tree starts,
and the leaves are where it terminates. If we had more nodes connected to any
of our leaves, we might instead call them branches or sub-trees. Let's write 
some code!
*/

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

// Try to see if you can visualize this tree. One is our root node. What nodes
// are leaves, which ones are branches?


/*
              1
             /|\
            2 3 4
           /     \
          5       6

Our leaves are 3, 5, and 6 and our branches are 2 and 4. Thinking in a more
abstract sense, can we think of anything that we interact with that might be
organized as a tree? Where have we heard the term root before? 

If you said "My hard drive!" You are correct! Your file structure is stored as
a tree on your harddrive! Your folders/files are nodes, folders are typically
branches and files are leaves. When we're navigating through our file 
structure, we're traversing through nodes until we find what we're looking for.

So we've got a decent idea of what a tree is, but let's take it a step further
and add some rules to our tree. What if, rather than any number of child nodes,
we could only have two child nodes? Simply just a left and a right. Let's see
what that might look like!
*/ 

class BinaryTreeNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

let a = new BinaryTreeNode('a');
let b = new BinaryTreeNode('b');
let c = new BinaryTreeNode('c');
let d = new BinaryTreeNode('d');
let e = new BinaryTreeNode('e');
let f = new BinaryTreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/*
                A
               / \
              B   C
             / \   \
            D   E   F
*/

/*

*/