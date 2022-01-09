class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    console.log(this.data.length);
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

// const myHashTable = new HashTable(50);
// myHashTable.set("grapes", 10000);
// myHashTable.set("grapes", 10000);
// myHashTable.get("grapes");
// myHashTable.set("apples", 9);
// myHashTable.get("apples");
// myHashTable.keys();

function findFirstRepeat(array) {
  const map = {};
  for (let i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      map[array[i]] = true;
    } else {
      return array[i];
    }
  }
  return undefined;
}

function findFirstRepeat2(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }
  return undefined;
}

const array = [1, 2, 3, 4, 4];
const ret1 = findFirstRepeat(array);
const ret2 = findFirstRepeat2(array);
console.log(ret1, ret2);
