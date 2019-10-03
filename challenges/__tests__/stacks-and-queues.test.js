const { Stack } = require('../../challenges/stacksAndQueues/stacks-and-queues');

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
});