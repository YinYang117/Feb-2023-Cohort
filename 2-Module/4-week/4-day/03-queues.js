/*
In an earlier lesson, we learned that implementing a queue usiong an array
might not be the most efficient way to build that data structure. Let's take
a look at building one with a linked list
*/

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value) {
        const node = new QueueNode(value);
        node.next = this.head;
        this.head = node;
    }

    dequeue() {
        const head = this.head;
        this.head = head.next;
        if (this.tail === head) this.tail = null;
        return head;
    }
}

class QueueNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

/* 
Looks an awful lot like a linked list 🤔

Utilizing the techniques from our exploration of Linked Lists, we can build a 
queue that has an O(1) enqueue and dequeue time!

But is it practicable?

Well. Maybe. Give the code from the homework a try and see how effecient the code
_really_ is. Arrays perform pretty well even if they're not -technically- the 
best data structure to use for these operations. The question comes down to how
large our data sets are, and how much time we really need to save.

We want to avoid paralysis via over analysis, and above all else ensure that we
are writing comprehensible, maintainable code. We will always want to keep 
efficiency in mind, but we shouldn't sacrifice the ability to maintain our apps
in order to achieve it.
*/