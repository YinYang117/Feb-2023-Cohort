/*
So hashes sound cool and all, but what are we going to use them for? Well, 
since a hashing function will returns deterministic, fixed-size output, we can
use that output to find a place in an array to store our data. Once we have our
hashed value, we can modulo our hash by the length of our array to find an 
index. Once we have that index, we can store our data there. We'll call this 
location in our array, and we'll call this location a data bucket.

Data buckets will be a datatype defined by the engineer, but once we have one
determined we can trust that all databuckets will occupy the same amount of 
memory. This means that we can make our array very memory efficient, and thus
our hash table too!

Let's take a look at am implementation of a HashTable that makes use of 
JavaScript's built-in array. 
*/

class HashTable {
    constructor(size) { // the number of buckets we should set aside
        this.items = new Array(size); // generating an array with that many 
                                      // buckets set aside
    }

    // hash function
    hash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            // Multiply the current hash value by 31 and add the Unicode code point
            // of the current character. Why 31? It's a very efficient prime number
            // to use! The exact reasons why go a little outside the scope of what
            // we're doing, but if you're curious do a little googling around why
            // the number 31 shows up in hash functions
            hash = hash * 31 + char
            // Modulo with the size of our array to ensure the hash value stays in 
            // bounds of our array
            hash = hash % this.items.length;
        }
        return hash;
    }

    // insert key-value pair
    put(key, value) {
        const index = this.hash(key);
        this.items[index] = new HashData(key, value)
    }

    // get value by key
    get(key) {
        const index = this.hash(key);
        return this.items[index].value;
    }

    // remove key-value pair
    remove(key) {
        const index = this.hash(key);
        delete this.items[index];
    }

    // check if key exists
    has(key) {
        const index = this.hash(key);
        return this.items[index] !== undefined;
    }
}

class HashData { // what we'll put into our buckets
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

/*
We've got two classes in use. Our HashTable, which contains all the logic for
our parent data structure. And our HashData, which is how we'll store the data
that we want in our array. 

Taking a look at our methods, we've got a method for hashing keys, putting data
into our data structure, getting data out of it, removing data and checking to
see whether or not we've got something stored with a given key. Let's put it to use!
*/

const myHashTable = new HashTable(1200); // creating a new HashTable with 1200 buckets
myHashTable.put("a", "banana") // put value "banana" at key "a"
myHashTable.put("b", "papaya") // put value "papaya" at key "b"
console.log(myHashTable.get("a")) // "banana" 
console.log(myHashTable.get("b")) // "papaya"
let bigStr = "I am the very model of a modern major general"
myHashTable.put(bigStr, "I've information animal, vegetable and mineral")
console.log(myHashTable.get(bigStr)) // :D 

/*
When we interact with Objects in JavaScript, we're interacting with a data 
structure that's taking these actions for us. All of that is abstracted away
for us into a much more manageable format. We can use the much more 
approachable syntax of obj["key"] = "value"; rather than calling setter methods
when we want to add values. Similarly, we can use the same access pattern to 
get data out of our objects, rather than calling some getter method and passing
in the key for our data. 
*/
