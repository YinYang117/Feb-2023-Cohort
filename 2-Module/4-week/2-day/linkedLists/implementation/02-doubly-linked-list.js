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

        if (this.length){
            const oldTail = this.tail;
            oldTail.next = newTail;
            newTail.prev = oldTail;
            this.tail = newTail;
        } else {
            this.head = newTail;
            this.tail = newTail;
        }
        this.length++;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        // Your code here
        if (!this.length) return;
        const oldHead = this.head;
        const newHead = this.head.next;
        if (newHead) newHead.prev = null;
        this.head = newHead;
        this.length--
        return oldHead.value;
        
        // Write your hypothesis on the time complexity of this method here
    }
    
    removeFromTail() {
        // Remove node at tail
        
        // Your code here
        if (this.length === 0) return;
        const oldTail = this.tail;
        const newTail = oldTail.prev;
        this.tail = newTail;
        if (newTail) newTail.next = null;
        this.length--
        return oldTail.value;
        // Write your hypothesis on the time complexity of this method here
    }
    
    peekAtHead() {
        // Return value of head node
        
        // Your code here
        //     statement ? thisIfTruthy : thisIfFalsy;
        return this.head ? this.head.value : undefined;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node

        // Your code here
        if (this.tail) return this.tail.value
        else return undefined;
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}