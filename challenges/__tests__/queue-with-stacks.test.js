const { PseudoQueue } = require('../queueWithStacks/queue-with-stacks');

describe('Queue with Stacks Model', () => {
  it('enqueues a value into stack one', () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.inStack.push(10);
    pseudoQueue.inStack.push(9);
    pseudoQueue.inStack.push(8);
    pseudoQueue.enqueue(7);
    expect(pseudoQueue.inStack.top.data).toBe(8);
    expect(pseudoQueue.inStack.top.next.data).toBe(9);
    expect(pseudoQueue.inStack.top.next.next.data).toBe(10);
    expect(pseudoQueue.inStack.top.next.next.next.data).toBe(7);
  });

  it('dequeues a stack', () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.inStack.push(1);
    pseudoQueue.inStack.push(2);
    pseudoQueue.inStack.push(3);

    const result = pseudoQueue.dequeue();
    expect(pseudoQueue.inStack.top.data).toBe(3);
    expect(pseudoQueue.inStack.top.next.data).toBe(2);
    expect(pseudoQueue.inStack.top.next.next).toBe(null);
    expect(result).toBe(1);

  });
});