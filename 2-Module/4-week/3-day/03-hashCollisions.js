/*
Most modern hashing functions are pretty great at generating unique hashes for
most any input. However, no hashing function can be absolutely perfrect. When
building a HashTable, we want to keep in mind the possibility that different
inputs can generate the same output.

Let's alter our hash function to use the one from the reading. This function
finds the total value of integer representations of the characters in our 
string. Trouble is, differing inputs will generate the same hashed output.
ABCDEF, ABBEEF and zbeT all produce a hashed value of 405. Even though we're
going to modulo that number by our length, we'll get the same index for each.

How do we solve this problem?

Enter: The Linked List

Rather than treating our buckets as landing zones for a single hashed item,
we can treat it as the head of a linked list. The simplest modification might
be to add a next key to our HashedData class, then modify our HashTable methods
to accomodate this alteration. Let's take a look
*/

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
  }

  // remove key-value pair
  remove(key) {
    const index = this.hash(key);
    let current = this.items[index];
    if (!current) return;
    let prev;
    while (current.key !== key){
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
myHashTable.put("ABCDEF", "first")
myHashTable.put("ABBEEF", "second")
myHashTable.put("zbeT", "third")
console.log(myHashTable)
console.log(myHashTable.items[0])
// we can see our linked list living in the first bucket, index 0
// Can we remove our middle node, with key ABBEEF and not break our list?
// Let's find out
console.log(myHashTable.has("ABBEEF"))
myHashTable.remove("ABBEEF")
console.log(myHashTable.items[0])
console.log(myHashTable.has("ABBEEF"))
// Nice!

/*
Linked lists coming in to save the day again! By modifying our HashTable to 
use our buckets like linked lists, we're able to account for Hash Collisions
and worry less about losing data in our table
*/