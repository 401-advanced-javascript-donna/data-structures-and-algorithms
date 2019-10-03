const { Node, Stack } = require('../../challenges/stacksAndQueues/stacks-and-queues');

describe('Stacks and Queues', () => {
  it('pushes node to top of stack', () => {
    const stack = new Stack();
    stack.push('word');
    expect(stack.top.data).toBe('word');
  });
});