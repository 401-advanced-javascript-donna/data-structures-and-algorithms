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

  push(data) {
    const node = new Node(data);
    if(!this.top) this.top = node;
    else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    let result;
    if(this.top) {
      result = this.top.data;
      this.top = this.top.next;
    }
    else result = null;
    return result;
  }

  peek() {
    return this.top.data;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(data) {
    let newNode = new Node(data);
    let currentNode = this.front;
    if(!currentNode) {
      this.front = newNode;
    }
    else {

      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(data);
    }
  }

  dequeue() {
    let currentNode = this.front;
    let result;
    if(!currentNode) {
      return 'queue is empty';
    } else {
      result = currentNode.data;
      this.front = currentNode.next;
    }
    return result;
  }
}


  


module.exports = {
  Node,
  Stack,
  Queue,
};