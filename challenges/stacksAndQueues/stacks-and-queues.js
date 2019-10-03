class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
}

push(data) {
  const node = new Node(data);
  if(!this.top) {
    this.top = Node;
  } else {
    node.next = this.top;
    this.top = node;
  }
}

module.exports = { Node, Stack }