class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

// LinkedList
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) return null;
    const temp = this.top;
    this.top = this.top.next;
    this.length--;
    return temp;
  }
}

const instance = new Stack();

instance.push("a");
instance.push("b");
instance.push("c");
instance.pop();
console.log(instance);

// array
class Stack2 {
  constructor() {
    this.stack = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  push(value) {
    return this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }
}
