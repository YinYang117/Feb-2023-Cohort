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
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    // Your code here
    // console.log("+++++++++++++++++++++++++++++++++++")
    // console.log(sha256(key))
    // console.log("+++++++++++++++++++++++++++++++++++")
    const hash = sha256(key);
    const integer = parseInt(hash.slice(0, 8), 16)
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
    if (this.data[idx]){
      throw new Error("hash collision or same key/value pair already exists!")
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

    if (!this.data[idx]) this.data[idx] = newKV;
    else {
      newKV.next = this.data[idx];
      this.data[idx] = newKV;
    }
    this.count++;
  }
  
  insert(key, value) {
    // Your code here
    const idx = this.hashMod(key);

    let current = this.data[idx];

    while (current && current.key !== key) current = current.next;

    if(current) current.value = value;
    else {
      const newKV = new KeyValuePair(key, value);
      if (!this.data[idx]) this.data[idx] = newKV;
      else {
        newKV.next = this.data[idx];
        this.data[idx] = newKV;
      }
      this.count++;
    }
  }

}


module.exports = HashTable;