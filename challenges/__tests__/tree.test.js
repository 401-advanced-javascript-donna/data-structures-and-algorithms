const { BinaryTree } = require('../tree/tree');

describe('Binary Tree', () => {
  it('can add new value to correct location in BST ', () => {
    const binaryTree = new BinaryTree;
    binaryTree.add(2);
    binaryTree.add(1);
    binaryTree.add(3);
    console.log(binaryTree.root);
    expect(binaryTree.root.value).toBe(2);
    expect(binaryTree.root.right.value).toBe(3);
    expect(binaryTree.root.left.value).toBe(1);
  });
})
