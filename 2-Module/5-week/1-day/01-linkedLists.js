/*
What is this list and how do I link it? Or really, why?

When we learned about Arrays, we learned that an array is a sequence of 
elements of the same type stored in a contiguous block of memory. We also
learned that things are a bit whacky in Javascript. We've got dynamic arrays
that overallocate memory so we can shove any data type into the array and not
worry about overflowing any of our indices. 

OK but what If I wanted to be able to have some data stored in a line that
doesn't do that?

Enter the Linked List. A linked list lets us setup and allocate memory as 
needed for the values we want to store. However, since we can't immediately 
tell where the next item will begin, we need to set aside another pointer for
where we can find the next item in our list. Let's take a lookn at a simple
example
*/

class LinkedListBasic {
    constructor() {
        this.head = null;
    }
}

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

/*
Here we've got a LinkedList class and one for LinkedListNodes. We'll need to 
add some logic for adding things to our LinkedList, so we'll go ahead and add
that code in
*/

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(value) {
        const node = new LinkedListNode(value);
        node.next = this.head;
        this.head = node;
    }

    traverse() {
        let current = this.head.next;
        console.log("Value at head    : ", this.head.value)
        while (current) {
            console.log("The next value is: ", current.value)
            current = current.next;
        }
        console.log("The next value is: ", current)
    }
}

/*
We've abstracted away the need to create nodes, and instead let our addToHead 
method handle that for us. Let's go ahead and make a list!
*/

const myList = new LinkedList();

myList.addToHead(2);
myList.addToHead(4);
myList.addToHead(6);

/*
Take a moment to think through what's happening here and visualize how our  
linked list current looks. What node is the head? What's its next value? Where
does it end?
*/

// myList
// 6 -> 4 -> 2 -> null

myList.traverse()

/*
Nifty stuff! But how might that all be stored in memory. Well, let's consider 
this:

192: ...
196: 220            // Linked List `head` pointer
200: 0b00000010     // First node added, last in the list
204: null
208: 0b00000100     // Second node added, second in the list
216: 200
220: 0b00000110     // Third node added, first in the list
224: 208
230: ...

We've got registers set aside to say "Here's where you can find a node",  and 
registers that hold the values. When we add new nodes, we need to update create
a new node, setting aside memory for the value of the node and where we can 
find the next one. Then, we update that node's next value to point to the 
list's current head, then the list's head to point to the new node.

While that might sound like a lot, it all collapses into O(1) time complexity.
Keep in mind that this only works when adding to the head. If we insert in the
middle of our list, we'll need to find the spot where we want to inser the 
node first, which will change it to an O(n) operation. 

The space complexity of a linked list is O(n) as the space needed to store the
list increases with each node added. Each node has a space complexity of O(1).
*/

