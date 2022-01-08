class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  remove(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.data.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

// 翻转字符串
function reverse(string) {
  const backward = [];
  const len = string.length;
  for (let i = len - 1; i >= 0; i--) {
    backward.push(string[i]);
  }
  return backward.join("");
}

function reverse2(string) {
  return string.split("").reverse().join("");
}

let string = "abc";
console.log(reverse(string));
