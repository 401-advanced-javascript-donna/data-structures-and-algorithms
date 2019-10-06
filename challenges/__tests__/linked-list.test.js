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

  it('Insert multiple nodes into the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.size).toBe(3);
  });

  it('Return true if the linked list has a value', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.includes(3)).toBe(true);
  });

  it('Return false if the linked list does not have a value', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.includes(4)).toBe(false);
  });

  it('Return a collection of all the values that exist in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('one');
    linkedList.insert('two');
    linkedList.insert('three');
    expect(linkedList.head.data.toString()).toBe('three', 'two', 'one');
  });

  it('Add a node to the end of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.append(4);
    expect(linkedList.size).toBe(4);
    expect(linkedList.head.next.next.next.data).toBe(4);
  });

  it('Add multiple nodes to the end of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.append(4);
    linkedList.append(5);
    expect(linkedList.size).toBe(5);
    expect(linkedList.head.next.next.next.data).toBe(4);
    expect(linkedList.head.next.next.next.next.data).toBe(5);
  });

  it('Insert a node before a node located in the middle of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insertBefore(2, 3);
    expect(linkedList.size).toBe(3);
    console.log(linkedList);
    expect(linkedList.head.next.data).toBe(3);
  });

});

// Can successfully add a node to the end of the linked list x
// Can successfully add multiple nodes to the end of a linked list x
// Can successfully insert a node before a node located i the middle of a linked list
// Can successfully insert a node before the first node of a linked list
// Can successfully insert after a node in the middle of the linked list
// Can successfully insert a node after the last node of the linked list