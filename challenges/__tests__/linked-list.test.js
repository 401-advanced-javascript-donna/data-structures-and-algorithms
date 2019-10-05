let { LinkedList } = require('../linkedList/linked-list');

describe('Linked List', () => {

  it('Instantiate an empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeFalsy;
  });


  it('Insert into the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    expect(linkedList.head.data).toBe(1);
  });

  it('Head property will properly point to the first node in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(4);
    const result = { data: 4, next: null };
    expect(linkedList.head).toEqual(result);

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

// Can successfully instantiate an empty linked list x
// Can properly insert into the linked list x
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list