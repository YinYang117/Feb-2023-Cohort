class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

addToHead(val) {
    let newNode = new SinglyLinkedNode(val);
    //if the LL is empty add the first node
    if (!this.head) {
        this.head = newNode;
    } else { //linked list already has an item in the head
        let oldHead = this.head;
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
    return this

    // Add node of val to head of linked list

    // Your code here

    // Write your hypothesis on the time complexity of this method here
}

addToTail(val) {
    // There are bugs in this method! Fix them!!!

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
        this.head = newNode;
    } else {
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

    }
    this.length++;
    return this;
    // Write your hypothesis on the time complexity of this method here
}

removeFromHead() {
    // Remove node at head
    if (!this.head) {
        return undefined
    } else {
        let oldHead = this.head;
        let newHead = this.head.next;
        this.head = newHead;
        this.length--;
        return oldHead
    }
    // Your code here

    // Write your hypothesis on the time complexity of this method here
}

removeFromTail() {
    // Remove node at tail
    //if there no items in the ll, return undefined
    if (!this.head) {
        return undefined
    } else if (this.length === 1) { //if there is only one item in the ll
        this.length--;
        let oldHead = this.head;
        this.head = null;
        return oldHead;
    } else { //there is more than 1 item
        this.length--;
        let curr = this.head;
        let prev;
        while (curr.next) {
            prev = curr;
            curr = curr.next
        }
        prev.next = null;
        return curr;
    }
    // Your code here

    // Write your hypothesis on the time complexity of this method here
}

peekAtHead() {
    if (!this.head) {
        return undefined;
    } else {
        return this.head.value;
    }


    // Return the value of head node

    // Your code here

    // Write your hypothesis on the time complexity of this method here
}

print() {
    if (!this.head) {
        return;
    } else {
        let curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }


    }
    // Print out the linked list

    // Your code here

    // Write your hypothesis on the time complexity of this method here
}
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}