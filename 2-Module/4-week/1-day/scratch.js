/// node: value: whatever, next: node


//list: head: null || node, length, tail, methods,

// node    next   node   next  node  next null
// A      ->      B     ->     C    ->    null


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class linkedList {
    constructor() {
        this.head = null;
    }

    addToHead(val) {
        let newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
    }

}


let newLL = new linkedList()

newLL.addToHead('A')
newLL.addToHead('B')
newLL.addToHead('C')

console.log(newLL)
// console.log(A)

// const C = { value: 'C', next: null }
// const B = { value: 'B', next: C }
// const A = { value: 'A', next: B }


// const linkedList = {
//     head: {
//         value: 'A',
//         next: {
//             value: 'B',
//             next: {
//                 value: 'C',
//                 next: null
//             }
//         }
//     }
// }

