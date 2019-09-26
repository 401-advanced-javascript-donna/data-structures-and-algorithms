let LinkedList = require('../linkedList/linked-list');
let linkedList;

const valOne = 1;
const valTwo = 2;
const valThree = 3;

describe('Linked List', () => {

  it('Can successfully instantiate an empty linked list', () => {
    linkedList = new LinkedList();
    expect(linkedList.head).toBe(null);
  });

  it('Can properly insert into the linked list', () => {
    linkedList.insert(valOne);
    expect(linkedList.head.value).toBe(valOne);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    linkedList.insert(valTwo);
    expect(linkedList.head.value).toBe(valTwo);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    linkedList.insert(valThree);
    expect(linkedList.head.value).toBe(valThree);
    expect(linkedList.head.next.value).toBe(valTwo);
    expect(linkedList.head.next.next.value).toBe(valOne);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    expect(linkedList.includes(valOne)).toBe(true);
    expect(linkedList.includes(valTwo)).toBe(true);
    expect(linkedList.includes(valThree)).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(linkedList.includes('non-existent-value')).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    expect(linkedList.toString()).toBe([valThree, valTwo, valOne].join(', '));
  });

});