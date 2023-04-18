
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
