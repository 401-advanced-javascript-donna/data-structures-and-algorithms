class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(data) {
    const node = new Node(data, this.head);
    this.head = node;
    this.size++;
  }

  includes(data) {
    let current = this.head;
    while(current) {
      if(current.data === data) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  append(data) {
    const node = new Node(data);
    if(this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.size++;
    }
  }

  insertBefore(data, newData) {
    const node = new Node(newData);
    if(this.head === null) {
      this.head = node;
      this.size++;
    } else if(this.head.data === data) {
      node.next = this.head;
      this.head = node; 
    }
    let currentNode = this.head;
    while(currentNode.next.data !== data) {
      currentNode.next = currentNode;
    }
    node.next = currentNode.next;
    currentNode.next = node;
    this.size++;
  }
}

module.exports = { LinkedList, Node };