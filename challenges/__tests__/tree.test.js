const { Node, BinarySearchTree } = require('../tree/tree');

describe('Tree Class', () => {
  it('should create an empty tree', () => {
    const tree = new BinarySearchTree(null);
    expect(tree.root.left).toBe(null);
    expect(tree.root.right).toBe(null);
  });

  const bst = new BinarySearchTree(16);
  bst.add(3);
  bst.add(45);
  bst.add(1);
  bst.add(32);
  it('Adds a node', () => {
    expect(bst.root.value).toBe(16);
    expect(bst.root.left.value).toBe(3);
    expect(bst.root.left.left.value).toBe(1);
    expect(bst.root.right.value).toBe(45);
    expect(bst.root.right.left.value).toBe(32);
  });

  it('contains a node', () => {
    expect(bst.contains(3)).toBe(true);
    expect(bst.contains(99)).toBe(false);
  });

  it('should return the bst in order from left, root, right', () => {
    // eslint-disable-next-line array-bracket-spacing
    expect(bst.inOrder()).toEqual([ 1, 3, 16, 32, 45 ]);
  });

  it('should return the bst in pre order from root, left, right', () => {
    // eslint-disable-next-line array-bracket-spacing
    expect(bst.preOrder()).toEqual([ 16, 3, 1, 45, 32 ]);
  });

  it('should should return the bst in post order from left, right, root ', () => {
    // eslint-disable-next-line array-bracket-spacing
    expect(bst.postOrder()).toEqual([ 1, 3, 32, 45, 16 ]);
  });

  it('should search tree breadth first', () => {
    const tree = new BinarySearchTree;
    tree.root = new Node(2);
    tree.root.left = new Node(7);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
  });
});