class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
export class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this.root;
    }
    let curr = this.root;
    while (curr) {
      if (newNode.value === curr.value) return null;
      if (newNode.value > curr.value) {
        if (curr.right) {
          curr = curr.right;
        } else {
          curr.right = newNode;
        }
      } else {
        if (curr.left) {
          curr = curr.left;
        } else {
          curr.left = newNode;
        }
      }
    }
    return this.root;
  }
  find(val) {
    if (!this.root) return false;
    let curr = this.root;
    while (curr) {
      if (curr.value === val) return true;
      if (curr.value > val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return false;
  }
  //   breadth first search
  bfs() {
    let queue = [];
    queue.push(this.root);
    let data = [];
    while (queue.length) {
      let node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  //  depth first search pre order
  dfsPre() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  //    deapth first post order
  dfsPost() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  //    deapth first in order
  dfsInOrder() {
      let data = [];
      function traverse(node) {
        if (node.left) traverse(node.left);
        data.push(node.value);
        if (node.right) traverse(node.right);
      }
      traverse(this.root);
      return data;
  }
}
