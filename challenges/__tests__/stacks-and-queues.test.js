const { Stack, Queue } = require('../../challenges/stacksAndQueues/stacks-and-queues');

describe('Stacks and Queues', () => {
  it('Pushes node to top of stack', () => {
    const stack = new Stack();
    stack.push('word');
    expect(stack.top.data).toBe('word');
  });

  it('Pushes multiple nodes onto a stack', () => {
    const testStack = new Stack();
    testStack.push('once');
    testStack.push('upon');
    testStack.push('time');
    expect(testStack.top.data).toBe('time');
    expect(testStack.top.next.data).toBe('upon');
    expect(testStack.top.next.next.data).toBe('once');
  });

  it('Pops a node off the top of a stack', () => {
    const stack = new Stack();
    stack.push('once');
    stack.push('upon');
    stack.push('time');
    const result = stack.pop();
    expect(result).toBe('time');
  });

  it('Empties a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push('once');
    stack.push('upon');
    stack.push('time');
    stack.pop();
    stack.pop();
    stack.pop();
    const result = stack.pop();
    expect(result).toBe(null);
  });

  it('Peeks the top value of a stack', () => {
    const testStack = new Stack();
    testStack.push('hello');
    testStack.push('goodbye');
    testStack.push('sir');
    expect(testStack.peek()).toBe('sir');
  });

  it('Instantiate a new stack', () => {
    const stack = new Stack();
    expect(stack.top).toBe(null);
    
  });

  it('Enqueues a new node into queue', () => {
    const queue = new Queue();
    queue.enqueue('twas');
    expect(queue.front.data).toBe('twas');
  });

  it('Enqueue multiple into a queue', () => {
    const queue = new Queue();
    queue.enqueue('twas');
    queue.enqueue('brillig');
    expect(queue.front.data).toBe('twas');
    expect(queue.front.next.data).toBe('brillig');
  });

  it('Dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue('twas');
    queue.enqueue('brillig');
    queue.dequeue();
    expect(queue.front.data).toBe('brillig');
  });

  it('Peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue('jabberwocky');
    expect(queue.front.data).toBe('jabberwocky');
  });

  it('Empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue('slithy');
    queue.enqueue('toves');
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBe(null);
  });

  it('Instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.front).toBe(null);
  });
});