const { Stack } = require('../stacksAndQueues/stacks-and-queues');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(data) {
    this.stack1.push(data);
  }

  dequeue() {
    while(this.stack1.top.next) {
      const data = this.stack1.pop();
      this.stack2.push(data);
    }

    const result = this.stack1.pop();

    if(this.stack2.top) {
      while(this.stack2.top.next) {
        const data = this.stack2.pop();
        this.stack1.push(data);
      }
      this.stack1.push(this.stack2.pop());
    }
    return result;
  }
}

module.exports = {
  PseudoQueue
};