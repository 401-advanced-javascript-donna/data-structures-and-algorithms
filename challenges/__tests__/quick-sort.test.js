const quickSort = require('../quicksort/quick-sort');

describe('Quick Sort Algorithm', () => {
  it('should sort an array', () => {
    const arr = [5, 7, 2, 8, 43, 2, 6];
    expect(quickSort(arr, 0, arr.length - 1)).toEqual([2, 2, 5, 6, 7, 8, 43]);
  });
});