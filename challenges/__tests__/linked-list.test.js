let { LinkedList } = require('../linkedList/linked-list');

const valOne = 1;
const valTwo = 2;
const valThree = 3;

describe('Linked List', () => {
  let linkedList;

  it('instantiate an empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeFalsy;
  });


  it('insert at beginning of linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(valTwo);
    expect(linkedList.head.data).toBe(valTwo);
  });

  it.skip('return true when searching for a value within the linked list', () => {
    expect(linkedList.includes(valOne)).toBe(true);
    expect(linkedList.includes(valTwo)).toBe(true);
    expect(linkedList.includes(valThree)).toBe(true);
  });

  it.skip('return true when searching for a value within the linked list', () => {
    expect(linkedList.includes('non-existent-value')).toBe(false);
  });

});