// 1 - 2 - 3

// const ll = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
  insert(value, index) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }
    const leader = this.traverseToIndex(index - 1);
    const newNode = new Node(value);
    newNode.next = leader.next;
    leader.next = newNode;
    this.length++;
  }
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    this.leader.next = this.leader.next.next;
    this.length--;
  }

  traverseToIndex(index) {
    let target = this.head;
    let count = 0;
    while (count < index) {
      if (target.next === null) return undefined;
      target = target.next;
      count++;
    }
    return target;
  }
}

const list = new LinkedList(1);
list.append(2);
list.append(3);
list.prepend(9);
list.prepend(8);
list.insert(10, 3);
list.printList();
// console.log(list);
