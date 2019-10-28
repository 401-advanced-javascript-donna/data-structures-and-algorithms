class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
  }


  add(value) {
    let newNode = new Node(value);

    // recursive function to search tree
    const searchTree = node => {
      if(value < node.value) {
        if(!node.left) {
          node.left = newNode;
        } 
        else {
          searchTree(node.left);
        }
      }
      else if(value > node.value) {
        if(!node.right) {
          node.right = newNode;
        }
        else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root);
  }

  contains(value) {
    let currentNode = this.root;

    while(currentNode) {
      if(value === currentNode.value) {
        return true;
      }
      if(value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  // Depth First Search

  // in order
  // left, root, right
  // 1, 3, 16, 32, 45

  inOrder() {
    let result = [];

    // recursive function to traverse tree
    const traverse = node => {
      if(node.left) traverse(node.left); // if left child exists, go left again
      result.push(node.value); // capture root node value
      if(node.right) traverse(node.right); // if right child exists, go right again
    };
    traverse(this.root);
    return result;
  }

  // pre-order
  // root, left, right
  // 16, 3, 1, 32, 45
  preOrder() {
    let result = [];
     // recursive function to traverse tree
    const traverse = node => {
      result.push(node.value); // capture root node value
      if(node.left) traverse(node.left); // if left child exists, go left again
      if(node.right) traverse(node.right); // if right child exists, go right again
    };
    traverse(this.root);
    return result;
  }

  // post order
  // left, right, root
  // 1, 3, 32, 45, 16

  postOrder() {
    let result = [];
      // recursive function to traverse tree
    const traverse = node => {
      if(node.left) traverse(node.left); // if left child exists, go left again
      if(node.right) traverse(node.right); // if right child exists, go right again
      result.push(node.value); // capture root node value
    };
    traverse(this.root);
    return result;
  }

}

module.exports = {
  Node,
  BinarySearchTree
};
