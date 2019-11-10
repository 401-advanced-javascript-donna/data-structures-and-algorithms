const repeatedWord = require('../repeated-word/repeatedWord');

describe('repeatedWord function', () => {
  it('should return the first repeated word in long string', () => {
    const jaberwocky1 = 'Twas brillig in the slithy toves, Did gyre and gimble in all the wabe';
    const jaberwocky2 = 'All mimsy were the borogroves, And the momewraths outgrabe';
    expect(repeatedWord(jaberwocky1)).toBe('in');
    expect(repeatedWord(jaberwocky2)).toBe('the');
  });
});