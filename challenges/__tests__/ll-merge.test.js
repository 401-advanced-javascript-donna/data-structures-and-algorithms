const { mergeList } = require('../ll-merge/ll-merge');
let { LinkedList } = require('../linkedList/linked-list');

describe('Merge Linked Lists', () => {
  it('merge list of equal length', () => {
    const llOne = new LinkedList();
    llOne.append(2);
    llOne.append(4);
    llOne.append(6);
    const llTwo = new LinkedList();
    llTwo.append(1);
    llTwo.append(3);
    llTwo.append(5);

    const result = mergeList(llOne, llTwo);
    expect(result.head).toEqual({ 'data': 2, 'next': { 'data': 1, 'next': { 'data': 4, 'next': { 'data' : 3, 'next': { 'data': 6, 'next': { 'data': 5, 'next': null } } } } } });
  });

  it('merges list of different lengths', () => {
    const llOne = new LinkedList();
    llOne.append(1);
    llOne.append(3);
    llOne.append(5);
    const llTwo = new LinkedList();
    llTwo.append(2);
    llTwo.append(4);
    llTwo.append(6);
    llTwo.append(8);
    const result = mergeList(llOne, llTwo);
    expect(result.head).toEqual({ 'data': 1, 'next': { 'data': 2, 'next': { 'data': 3, 'next': { 'data' : 4, 'next': { 'data': 5, 'next': { 'data': 6, 'next': { 'data': 8, 'next': null } } } } } } });
  });
});