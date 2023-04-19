// Node class is implemented for you, no need to look for bugs here!
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
        // Add node of val to head of linked list
        // Your code here
        const newHead = new SinglyLinkedNode(val);
        if (this.length === 0) {
            this.head = newHead;
        } else {
            const oldHead = this.head;
            newHead.next = oldHead;
            this.head = newHead;
        }
        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
        // O(1)
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
        this.length++
        return this;
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }


    removeFromHead() {
        // Remove node at head
        // Your code here
        if (!this.length) return undefined;
        const oldHead = this.head;
        const newHead = this.head.next;
        this.head = newHead;
        this.length--;
        return oldHead;
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromTail() {
        // Remove node at tail
        // Your code here
        if (!this.length) return undefined;
        let oldTail = this.head;
        let newTail;
        while (oldTail.next) {
            newTail = oldTail;
            oldTail = oldTail.next;
        }
        if (!newTail) {
            this.head = null;
        }
        else newTail.next = null;
        this.length--;
        return oldTail;
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    peekAtHead() {
        // Return the value of head node

        // Your code here
        if (!this.head) return
        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    print() {
        // Print out the linked list

        // Your code here
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}