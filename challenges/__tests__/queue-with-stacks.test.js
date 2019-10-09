const { PseudoQueue } = require('../queueWithStacks/queue-with-stacks');

describe('Queues and Stacks', () => {
  it('enqueues and dequeues fifo', () => {
    const queue = new PseudoQueue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);

  });
});