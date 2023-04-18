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