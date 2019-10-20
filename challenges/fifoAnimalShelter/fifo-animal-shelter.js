class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
  }

  enqueue(animal) {
    const node = new Node(animal);
    if(!this.front) {
      this.front = node;
    } else {

      let currentNode = this.front;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
  }

  dequeue(pref) {

    if(pref && pref !== 'cat' && pref !== 'dog') {
      return null;
    }
    if(this.front.data === pref || !pref) {
      const front = this.front;
      this.front = front.next;
      return front.data;
    }

    if(pref && this.front.data !== pref) {

      let currentNode = this.front;
      let nextNode = currentNode.next;

      while(nextNode.data !== pref) {
        currentNode = nextNode;
        nextNode = nextNode.next;
      }

      const result = nextNode;
      currentNode.next = nextNode.next;

      return result.data;
    }
  }
}

module.exports = {
  AnimalShelter
};