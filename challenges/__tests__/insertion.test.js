const insertionSort = require('../insertion/insertion');

describe('Insertion Sort', () => {
  it('should sort an array', () => {
    const arr = [3, 6, 1, 2, 4];
    expect(insertionSort(arr)).toEqual([1, 2, 3, 4, 6]);
  });
});