let { LinkedList } = require('../linkedList/linked-list');

describe('Linked List', () => {

  it('instantiate an empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeFalsy;
  });


  it('insert at beginning of linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    expect(linkedList.head.data).toBe(1);
  });

  it('return true if the linked list has a value', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.includes(3)).toBe(true);
  });

  it('return false if the linked list does not have a value', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.includes(4)).toBe(false);
  });

  it('returns a string of all the values in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.toString()).toBe('1, 2, 3');
  });

});