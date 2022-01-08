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
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
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
    const fllower = leader.next;
    const newNode = new Node(value);
    newNode.prev = leader;
    fllower.prev = newNode;
    newNode.next = fllower;
    leader.next = newNode;
    this.length++;
  }
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const removedItem = leader.next;
    removedItem.next.prev = leader;
    leader.next = removedItem.next;
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
  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }

    this.head = prev;
    this.printList();
    return prev;
  }
}

const list = new LinkedList(1);
list.append(2);
list.append(3);
list.prepend(0);

list.printList();
list.reverse();

// console.log(list);
