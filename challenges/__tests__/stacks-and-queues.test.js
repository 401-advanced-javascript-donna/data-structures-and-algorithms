const { Node, Stack, Queue } = require('../../challenges/stacksAndQueues/stacks-and-queues');

describe('Stacks and Queues', () => {
  it('pushes node to top of stack', () => {
    const stack = new Stack();
    stack.push('word');
    expect(stack.top.data).toBe('word');
  });

  it('pushes multiple nodes onto a stack', () => {
    const testStack = new Stack();
    testStack.push('once');
    testStack.push('upon');
    testStack.push('time');
    expect(testStack.top.data).toBe('time');
    expect(testStack.top.next.data).toBe('upon');
    expect(testStack.top.next.next.data).toBe('once');
  });

  it('pops a node off the top of a stack', () => {
    const stack = new Stack();
    stack.push('once');
    stack.push('upon');
    stack.push('time');
    const result = stack.pop();
    expect(result).toBe('time');
  });

  it('empties a stack after multiple pops', () => {
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

  it('peeks the top value of a stack', () => {
    const testStack = new Stack();
    testStack.push('hello');
    testStack.push('goodbye');
    testStack.push('sir');
    expect(testStack.peek()).toBe('sir');
  });

  it('can instantiate a new stack', () => {
    const stack = new Stack();
    expect(stack.top).toBe(null);
    
  });

  it('enqueues a new node into queue', () => {
    const queue = new Queue();
    queue.enqueue('twas');
    expect(queue.front.data).toBe('twas');
  });

  it('Can successfully enqueue multiple into a queue', () => {
    const queue = new Queue();
    queue.enqueue('twas');
    queue.enqueue('brillig');
    expect(queue.front.data).toBe('twas');
    expect(queue.front.next.data).toBe('brillig');
  });
});