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

  toString() {
    let current = this.head;
    let result = [];
    while(current) {
      result.push(current.data);
      current = current.next;
    }
    return result.join(', ');
  }

}

module.exports = { LinkedList, Node };