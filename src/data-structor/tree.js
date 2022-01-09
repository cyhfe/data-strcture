class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this.insertNode(this.root, newNode);
  }
  insertNode(root, node) {
    if (node.value < root.value) {
      if (!root.left) {
        root.left = node;
        return;
      }
      this.insertNode(root.left, node);
    } else {
      if (!root.right) {
        root.right = node;
        return;
      }
      this.insertNode(root.right, node);
    }
  }
  lookup(value) {
    if (this.root === null) {
      return false;
    }
    return this.searchNode(this.root, value);
  }

  searchNode(root, value) {
    let current = root;
    if (current.value === value) {
      return true;
    }
    if (value < current.value) {
      if (!current.left) return false;
      current = current.left;
      return this.searchNode(current, value);
    } else {
      if (!current.right) return false;
      current = current.right;
      return this.searchNode(current, value);
    }
  }
}

const ins = new BinarySearchTree();

ins.insert(6);
ins.insert(2);
ins.insert(5);
ins.insert(1);
ins.insert(9);

debugger;
const r2 = ins.lookup(2);
console.log(r2);
//     6
//   2    9
// 1   5

let r = traverse(ins.root);

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
