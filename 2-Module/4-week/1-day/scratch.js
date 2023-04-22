// Linked Lists!
class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addToHead(val){
        const node = new Node(val);
        const oldHead = this.head;
        node.next = oldHead;
        if (oldHead) oldHead.prev = node;
        this.head = node;
        if (!this.tail) this.tail = node;
    }

    addToTail(val){
        /* O(n) - no pointer to tail
        // const node = new Node(val);
        // let current = this.head;
        // while(current.next) current = current.next;
        // current.next = node;
        */
        // O(1) - with pointer to tail
        const node = new Node(val);
        const oldTail = this.tail;
        this.tail = node;
        node.prev = oldTail;
        if (oldTail) oldTail.next = node;
    }

    removeFromHead(){
        // O(1)
        const head = this.head;
        this.head = head.next;
        this.head.prev = null;
        if (head === this.tail) this.tail = null;
        return head;
    }

    removeFromTail(){
        // O(n)
        // const tail = this.tail;
        // let current = this.head;
        // while (current.next !== this.tail) current = current.next;
        // this.tail = current;
        // current.next = null;
        // return tail;
        const tail = this.tail;
        this.tail = tail.prev;
        this.tail.next = null;
        return tail;
    }

    traverse(){
        let current = this.head;
        while (current){
            process.stdout.write(current.value + " -> ")
            current = current.next;
        }
        // console.log(current)
    }
}

class Node {
    constructor(val){
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

const myLinkedList = new LinkedList();
myLinkedList.addToHead(0)
myLinkedList.addToHead(-1)
myLinkedList.addToHead(-2)
myLinkedList.addToTail(1)
myLinkedList.addToTail(2)
myLinkedList.addToTail(3)
myLinkedList.traverse();
// console.log(myLinkedList)
console.log(myLinkedList.removeFromHead())
console.log(myLinkedList.removeFromHead())
myLinkedList.traverse();
console.log(myLinkedList.removeFromTail())
console.log(myLinkedList.removeFromTail())
myLinkedList.traverse();
// Nodes: value, next -> node

// Linked List: head

//    node  next   node   next  node  next
//    A    ->      B     ->     C      ->    null

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// const A = new Node('A')
// const B = new Node('B')
// const C = new Node('C')


class LinkedList {
    constructor() {
        this.head = null
    }

    addToHead(value) {
        const newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode;
        } else {
            let oldHead = this.head;
            newNode.next = oldHead;
            this.head = newNode
        }
    }

    addToTail(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}



const newLL = new LinkedList()
newLL.addToHead('A')
newLL.addToTail('B')
console.log(newLL)

// console.log(A)

// const C = {
//     value: 'C',
//     next: null
// }

// const B = {
//     value: 'B',
//     next: C
// }

// const A = {
//     value: 'A',
//     next: // const B = {
//     value: 'B',
//     next: C
// }
//     prev:
// }


// const linkedList = {
//     head: A
// }


// console.log(linkedList.head.next.next.next)
