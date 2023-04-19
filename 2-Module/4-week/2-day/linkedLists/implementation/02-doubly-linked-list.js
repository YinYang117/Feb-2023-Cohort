// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        // Your code here
        const newTail = new DoublyLinkedNode(val);
        if (!this.tail){
            this.tail = newTail;
            this.head = newTail;
        } else {
            const oldTail = this.tail;
            oldTail.next = newTail;
            newTail.prev = oldTail;
            this.tail = newTail;
        }
        this.length++

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        // Your code here
        const oldHead = this.head;
        if (!oldHead) return undefined;
        const newHead = oldHead.next;
        if (newHead) newHead.prev = null;
        this.head = newHead;
        this.length--;
        if (!this.length) this.tail = null;
        return oldHead.value;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here
        const oldTail = this.tail;
        if (!oldTail) return;
        const newTail = oldTail.prev;
        this.tail = newTail;
        if (newTail) newTail.next = null;
        this.length--;
        if (!this.length) this.head = null;
        return oldTail.value;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node

        // Your code here

        // Write your hypothesis on the time complexity of this method here
        //     condition ? valueIfTruthy : valueIfFalsy
        return this.head ? this.head.value : undefined;
    }

    peekAtTail() {
        // Return value of tail node

        // Your code here

        // Write your hypothesis on the time complexity of this method here
        if (this.tail) return this.tail.value;
        else return undefined;
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}