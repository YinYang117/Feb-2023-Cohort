const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)

        // Your code here
        const newNode = new SinglyLinkedNode(val);
        if (this.length){
            const oldTail = this.tail;
            oldTail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++
        return this.length;
        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)

        // Your code here
        if (!this.length) return null;
        const oldHead = this.head;
        const newHead = oldHead.next;
        this.head = newHead;
        this.length--;
        if (!this.length) this.tail = null;
        return oldHead.value;
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}