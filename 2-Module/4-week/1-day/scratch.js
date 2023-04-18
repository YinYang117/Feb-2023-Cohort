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

// --------------------- Lecture
class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addToHead(val){
        const node = new Node(val);
        const temp = this.head;
        this.head = node;
        node.next = temp;
        if (!this.tail) this.tail = node;
    }

    addToTail(val){
        const node = new Node(val);
        this.tail.next =  node;
        this.tail = node;
        if (!this.head) this.head = node;
    }

    removeFromHead(){
        const head = this.head;
        this.head = head.next;
        if (this.tail === head) this.tail = null;
        return head;
    }

    removeFromTail(){
        const tail = this.tail;
        if (this.tail === this.head){
            this.head = null;
            this.tail = null;
            return tail;
        }
        let current = this.head;
        while (current.next !== this.tail){
            current = current.next;
        }
        current.next = null;
        this.tail = current;
        return tail;
    }

    traverse(){
        let current = this.head.next;
        console.log("Value at head    :", this.head.val)
        while(current){
            console.log("The next value is:", current.val)
            current = current.next; 
        }
        console.log("The next value is:", current)
    }

    find(val){
        let current = this.head;
        while (current){
            if (current.val === val) return true;
            current = current.next;
        }
        return false;
    }
}

class Node {
    constructor(val, next=null, previous=null){
        this.val = val;
        this.next = next;
        this.previous = previous;
    }
}

const myList = new LinkedList();
myList.addToHead(6);
myList.addToHead(4);
myList.addToHead(2);

// console.log(myList)
// console.log(myList.find(6));
// console.log(myList.find(20));
myList.addToTail(8);
myList.traverse();
// console.log(myList.removeFromHead())
// console.log(myList.removeFromHead())
// console.log(myList.removeFromHead())
// console.log(myList.removeFromHead())
console.log(myList)
console.log(myList.removeFromTail());
console.log(myList.removeFromTail());
console.log(myList.removeFromTail());
console.log(myList.removeFromTail());
console.log(myList)
