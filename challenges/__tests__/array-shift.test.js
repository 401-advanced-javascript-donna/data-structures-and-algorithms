const insertShiftArray = require('../arrayShift/array-shift');

describe('array shift', () => {
  const arr = [1, 2, 3, 4];
  const val = 5;

  it.skip('inserts new value to beginning of array', () => {
    expect(insertShiftArray(arr, val)).toEqual([5, 1, 2, 3, 4]);
  });
});