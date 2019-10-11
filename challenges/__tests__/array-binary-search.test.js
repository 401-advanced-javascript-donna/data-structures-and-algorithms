const binarySearch = require('../../challenges/arrayBinarySearch/array-binary-search');

describe('binary search', () => {
  const arr1 = [4, 8, 15, 16, 23, 42];
  const arr2 = [11, 22, 33, 44, 55, 66, 77];

  it('finds the value', () => {
    expect(binarySearch(arr1, 15)).toBe(2);
  });

  it('does not find the value', () => {
    expect(binarySearch(arr2, 90)).toBe(-1);
  });
});