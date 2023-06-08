class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here
    if (this.count / this.capacity > .7) this.resize();
    const idx = this.hashMod(key);
    const oldHead = this.data[idx];
    if (!oldHead){
      this.data[idx] =  new KeyValuePair(key, value);
      this.count++;
      return;
    }
    let current = oldHead;
    while (current && current.key !== key) current = current.next;
    if (current){
      current.value = value;
      return
    }
    this.data[idx] = new KeyValuePair(key, value);
    this.data[idx].next = oldHead;
    this.count++;
  }


  read(key) {
    // Your code here
    const idx = this.hashMod(key);
    let current = this.data[idx];
    if (!current) return undefined;
    while (current){
      if(current.key === key) return current.value;
      current = current.next;
    }
  }


  resize() {
    // Your code here
    const oldData = this.data;
    this.capacity *= 2;
    this.count = 0;
    this.data = new Array(this.capacity).fill(null);
    for (let bucket of oldData){
      while(bucket){
        this.insert(bucket.key, bucket.value);
        bucket = bucket.next;
      }
    }

  }


  delete(key) {
    // Your code here
    const idx = this.hashMod(key);
    let current = this.data[idx];
    if (!current) return "Key not found";
    let prev;
    while (current && current.key !== key){
      prev = current;
      current = current.next; 
    }
    if (!current) return "Key not found";
    else if (!prev) this.data[idx] = current.next;
    else prev.next = current.next;
    this.count--;
  }
}


module.exports = HashTable;