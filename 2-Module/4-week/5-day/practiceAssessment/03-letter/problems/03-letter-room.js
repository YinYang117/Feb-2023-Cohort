/******************************************

Before implementing the methods in this file, finish the methods in the
`LetterBin` class found in the `./problems/02-letter-bin.js` file.


The second class is called `LetterRoom`. `LetterRoom` should hold a queue of
`LetterBin`'s. There are methods on the class to add and remove a bin from the
queue. There are also methods to get the first and last bin in the queue without
removing them. Finally, there's a method to get the total number of bins in the
queue. Implement these methods.

******************************************/

const LetterBin = require('./02-letter-bin');

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LetterRoom {
    constructor() {
        // create an empty queue
        // Hint: you may create helper classes in this file to use
        // Your code here
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    getLastBin() {
        // return the last bin added to the queue
        // if there are no bins in the queue, return null
        // Your code here
        return this.length ? this.tail.value : null; 
        // if length is not 0, return the value of the node at tail (value being
        // the bin), else return null
    }

    getFirstBin() {
        // return the first bin added to the queue
        // if there are no bins in the queue, return null
        // Your code here
        return this.length ? this.head.value : null;
        // same logic as tail, but for head.
    }

    numBins() {
        // returns the number of bins in the queue
        // Your code here
        return this.length;
    }

    addBin() {
        // create a new bin and add it to the end of the queue
        // returns the newly created bin
        // WARNING: you cannot add properties to a LetterBin like .next
        // Your code here
        const bin = new LetterBin(); // make new bin
        const node = new Node(bin); // make new LL node, with bin as value
        if (!this.head) this.head = node; // if no head, add this node to head
        if (this.tail) this.tail.next = node; // if tail exists, point its next to new node 
        this.tail = node; // reassign tail pointer to new node 
        this.length++ // increment length
        return bin; // return new bin
    }

    removeBin() {
        // remove the bin at the beginning of the queue
        // returns the removed bin
        // Your code here
        if (!this.length) return null; // if empty queue, return null
        const head = this.head; // give pointer to head for removal
        this.head = head.next; // reass queue's head pointer to what's next 
        this.length--; // decrement length
        if (!this.length) this.tail = null; // update tail pointer if needed
        return head.value; // return bin that was at head
    }
}

module.exports = LetterRoom;