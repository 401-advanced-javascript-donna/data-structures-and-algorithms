const fizzBuzzTree = tree => {
  return treeHelper(tree.root, tree);
};

const treeHelper = (root, tree) => {
  if(root) {
    if(root.value % 5 === 0 && root.value % 3 === 0) root.value = 'FizzBuzz';
    if(root.value % 3 === 0) root.value = 'Fizz';
    if(root.value % 5 === 0) root.value = 'Buzz';
    if(root.left) treeHelper(root.left);
    if(root.right) treeHelper(root.right);
  }
  return tree;
};

module.exports = fizzBuzzTree;