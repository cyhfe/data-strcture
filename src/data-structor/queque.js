class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Queque {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueque(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
    }
    this.length++;
    return this;
  }

  dequeque() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.first = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;
  }
}

const instance = new Queque();
instance.enqueque("a");
instance.enqueque("b");
instance.enqueque("c");
instance.dequeque();
instance.dequeque();
instance.dequeque();

// array
class Stack {
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

//stack
class Queque2 {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  peek() {
    while (this.stack1.stack.length > 0) {
      let pop = this.stack1.pop();
      this.stack2.push(pop);
    }

    const pop = this.stack2.pop();
    this.stack2.push(pop);
    this.stack1.push(this.stack2.pop());
    return pop;
  }
  push(value) {
    this.stack1.push(value);
  }

  pop() {
    for (let i = 0; i < this.stack1.stack.length; i++) {
      this.stack2.push(this.stack1.pop());
    }
    const pop = this.stack2.pop();
    this.stack1.push(this.stack2.pop());
    return pop;
  }
}

const myQueue = new Queque2();

myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
debugger;
const a = myQueue.peek(); // return 1
const b = myQueue.pop(); // return 1, queue is [2]

console.log(a, b, myQueue.stack1);
