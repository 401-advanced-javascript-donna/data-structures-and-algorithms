const mergeSort = require('../mergesort/merge-sort');

describe('Merge sort', () => {
  it('should merge and sort an array', () => {
    const array = [7, 3, 11, 0, 4, 2, 8, 9];
    expect(mergeSort(array)).toEqual([0, 2, 3, 4, 7, 8, 9, 11]);
  });
});