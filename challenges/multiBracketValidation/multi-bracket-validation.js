const { Stack } = require('../stacksAndQueues/stacks-and-queues');

function multiBracketValidation(input) {
  const regex = /[\{\}\[\]\(\)]/g;
  const result = input.match(regex);
  const dictionary = {
    '{': { type: 'curly', dir: 'open' },
    '}': { type: 'curly', dir: 'close' },
    '[': { type: 'box', dir: 'open' },
    ']': { type: 'box', dir: 'close' },
    '(': { type: 'par', dir: 'open' },
    ')': { type: 'par', dir: 'close' },
  };
  const stack = new Stack;
  for(let i = 0; i < result.length; i++) {
    const bracket = dictionary[result[i]];
    (bracket.dir === 'open') ? stack.push(bracket.type)
      : (stack.peek() === bracket.type) ? stack.pop()
        : false;
  }
  return stack.top === null ? true : false;
}

module.exports = {
  multiBracketValidation
};