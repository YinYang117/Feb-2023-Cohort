// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        let len = 0;
        let curr = this.head;
        while (curr) {
            len++;
            curr = curr.next;
        }
        return len;
        // Your code here
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // Your code here
        let sum = 0;
        let curr = this.head;
        while (curr) {
            sum += curr.value;
            curr = curr.next;
        }
        return sum;
        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes

        // Your code here
        return this.sumOfNodes() / this.listLength();
        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        // Your code here
        let idx = 0;
        let curr = this.head;
        while (idx !== n) {
            idx++;
            curr = curr.next;
        }
        return curr;
        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        // Your code here
        let mid = Math.floor((this.listLength() - 1) / 2)
        return this.findNthNode(mid)
        // Write your hypothesis on the time complexity of this method here
    }

    addToHead(val) {
        const newHead = new SinglyLinkedNode(val);
        const oldHead = this.head;
        this.head = newHead;
        newHead.next = oldHead;
    }

    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
        // Does the time complexity change? How about space complexity?

        // Your code here
        const rev = new SinglyLinkedList();
        let current = this.head;
        while (current) {
            rev.addToHead(current.value);
            current = current.next;
        }
        return rev;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here
        const length = this.listLength();
        let mid = Math.floor((length - 1) / 2)
        let offset = 0;
        while (offset <= mid) {
            const left = this.findNthNode(offset);
            const right = this.findNthNode(length - 1 - offset);
            const temp = right.value;
            right.value = left.value;
            left.value = temp;
            offset++;
        }
        // Write your hypothesis on the time complexity of this method here
    }

}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        // Your code here
        let left = this.head;
        let right = this.tail;
        while ((left !== right) && ((left.next !== right))) {
            right = right.prev;
            left = left.next;
        }
        return left;
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Your code here
        const rev = new DoublyLinkedList();
        let current = this.tail;
        while (current) {
            rev.addToTail(current.value);
            current = current.prev;
        }
        return rev;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here
        let left = this.head;
        let right = this.tail;
        while ((left !== right) && ((left.prev !== right))) {
            [right.value, left.value] = [left.value, right.value];
            right = right.prev;
            left = left.next;
        }
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}