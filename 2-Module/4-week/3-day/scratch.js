// HASH TABLES!

// Hashing

"A hash function maps arbitrary data..."

// map? -> convert or transform data in one form to another

"... to a deterministic, fixed-size output."

// deterministic ->  given the same input(s), will always generate the same output

// fixed-size -> no matter what goes in, the output will always be the same size

function hash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);

        hash = hash * 31 + char;

        hash = hash % 2 ** 32;
    }
    return hash;
}

let a = "banana";
let b = "the input has to be a string";
let c = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of light, it was the season of darkness, it was the spring of hope, it was the winter of despair.";

const hashTableData = new Array(20) // the length of our array that stores our pointers to our k:vs, will determine the
// possibility of a hash collision

// console.log(hash(a) % hashTableData.length)
// console.log(hash(b) % hashTableData.length)
// console.log(hash(c) % hashTableData.length)

class KV {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next;
    }
}

class HashTable {
    constructor(size) {
        this.items = new Array(size);
    }

    // hash function
    hash(str) {
        let hashValue = 0;

        for (let i = 0; i < str.length; i++) {
            hashValue += str.charCodeAt(i);
        }

        return hashValue % this.items.length;
    }

    // insert key-value pair
    put(key, value) {
        const index = this.hash(key);
        if (!this.items[index]) this.items[index] = new HashData(key, value);
        else {
            let current = this.items[index];
            while (current.next && current.next.key !== key) current = current.next;
            if (current.next) current.next.value = value; // if we already have a value with this key,
            // update this "node" to have the new value
            // so we don't break our linked list
            else current.next = new HashData(key, value); // if we don't already have a value at this
            // key, put a new node in our linked list.
        }
    }

    // get value by key
    get(key) {
        const index = this.hash(key);
        let current = this.items[index];
        while (current) {
            if (current.key === key) return current.value;
            current = current.next;
        }
        return current.value;
    }

    // remove key-value pair
    remove(key) {
        const index = this.hash(key);
        let current = this.items[index];
        if (!current) return;
        let prev;
        while (current.key !== key) {
            prev = current;
            current = current.next;
        }
        if (!prev && current.next) this.data[index] = current.next // reassign head to next if needed
        else if (!prev) delete this.data[index] // if no previous node (and, implicitly, no next)
        // delete the node at this bucket
        else {
            prev.next = current.next // remove current node from linked list
        }
    }

    // check if key exists
    has(key) {
        const index = this.hash(key);
        let current = this.items[index];
        while (current) {
            if (current.key === key) return true;
            current = current.next;
        }
        return false;
    }

}

class HashData {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

const myHashTable = new HashTable(3);
// "ABCDEF" "ABBEEF" "zbeT" -> collisions
console.log(myHashTable.hash("ABCDEF"))
console.log(myHashTable.hash("ABBEEF"))
console.log(myHashTable.hash("zbeT"))
myHashTable.put("ABCDEF", "first");
myHashTable.put("ABBEEF", "second");
myHashTable.put("zbeT", "third");
myHashTable.put("a", "different index")
console.log(myHashTable)
console.log(myHashTable.items[0])
console.log(myHashTable.has("ABBEEF"))
myHashTable.remove("ABBEEF")
console.log(myHashTable.items[0])
console.log(myHashTable.has("ABBEEF"))
