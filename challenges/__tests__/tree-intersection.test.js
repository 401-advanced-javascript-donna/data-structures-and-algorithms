const treeIntersection = require('../treeIntersection/tree-intersection');
const { Node, BinarySearchTree } = require('../tree/tree');


describe('Testing Tree Intersection Function', () => {
  const tree = new BinarySearchTree;
  tree.root = new Node(15);
  tree.root.left = new Node(10);
  tree.root.right = new Node(25);
  tree.root.right.left = new Node(20);
  tree.root.right.right = new Node(35);
  tree.root.right.right.left = new Node(30);
  tree.root.right.right.right = new Node(50);
  tree.root.left.left = new Node(7);
  tree.root.left.right = new Node(16);
  tree.root.left.right.left = new Node(12);
  tree.root.left.right.right = new Node(17);

  const treeTwo = new BinarySearchTree;
  treeTwo.root = new Node(4);
  treeTwo.root.left = new Node(10);
  treeTwo.root.right = new Node(60);
  treeTwo.root.right.left = new Node(20);
  treeTwo.root.right.right = new Node(35);
  treeTwo.root.right.right.left = new Node(2);
  treeTwo.root.right.right.right = new Node(50);
  treeTwo.root.left.left = new Node(1);
  treeTwo.root.left.right = new Node(16);
  treeTwo.root.left.right.left = new Node(12);
  treeTwo.root.left.right.right = new Node(17);
  it('returns an array of values that appear in both tress', () => {
    expect(treeIntersection(tree, treeTwo)).toEqual([10, 16, 12, 17, 20, 35, 50]);
  });
});