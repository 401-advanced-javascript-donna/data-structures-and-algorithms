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
    if(!this.top) { this.top = node;
    } else {
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
  
}

module.exports = {
  Node,
  Stack,
};