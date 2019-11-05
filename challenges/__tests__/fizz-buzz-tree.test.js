const { Node, BinarySearchTree } = require('../tree/tree');
const fizzBuzzTree = require('../fizzBuzzTree/fizz-buzz-tree');


describe('Fizz Buzz Tree', () => {
  it('should replace tree value with Fizz, Buzz, or FizzBuzz', () => {
    const bst = new BinarySearchTree;
    bst.root = new Node(15);
    bst.root.left = new Node(7);
    bst.root.left.left = new Node(2);
    bst.root.left.right = new Node(6);
    bst.root.left.right.left = new Node(5);
    bst.root.left.right.right = new Node(11);
    bst.root.right = new Node(5);
    bst.root.right.right = new Node(9);
    bst.root.right.right.left = new Node(4);
    fizzBuzzTree(bst);
    expect(bst.root.value).toBe('FizzBuzz');
    expect(bst.root.left.value).toBe(7);
    expect(bst.root.left.right.value).toBe('Fizz');
    expect(bst.root.right.value).toBe('Buzz');
    expect(bst.root.right.right.value).toBe('Fizz');
    expect(bst.root.right.right.left.value).toBe(4);
  });
});