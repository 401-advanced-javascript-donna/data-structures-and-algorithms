const arrayReverse = require('../challenges/arrayReverse/array-reverse');

describe.skip('array to be reversed', () => {
  it('reverse array', () => {
    let newArr = arrayReverse.arr([1, 2, 3]);
    expect(newArr).toBe([3, 2, 1]);
  });
});