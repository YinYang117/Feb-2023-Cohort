const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    // Your code here
    // console.log("+++++++++++++++++++++++")
    // console.log(sha256(key))
    // console.log("+++++++++++++++++++++++")
    const hashResult = sha256(key);
    const integer = parseInt(hashResult.slice(0, 8), 16)
    // console.log(integer)
    return integer;
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    const idx = this.hashMod(key);

    if (this.data[idx]) {
      throw Error("hash collision or same key/value pair already exists!")
    } else {
      const newKV = new KeyValuePair(key, value);
      this.data[idx] = newKV;
      this.count++;
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const idx = this.hashMod(key);
    const newKV = new KeyValuePair(key, value);

    if (this.data[idx]) {
      const oldHead = this.data[idx];
      newKV.next = oldHead;
      this.data[idx] = newKV;
    } else this.data[idx] = newKV;
    this.count++;
  }

  insert(key, value) {
    // Your code here
    const idx = this.hashMod(key);

    if (this.data[idx]) {
      const oldHead = this.data[idx]
      let current = this.data[idx];

      while (current && current.key !== key) current = current.next

      if (current) {
        current.value = value;
        return;
      } else {
        this.data[idx] = new KeyValuePair(key, value);
        this.data[idx].next = oldHead;
      }
    } else {
      this.data[idx] = new KeyValuePair(key, value)
    }
    this.count++;
  }

}


module.exports = HashTable;