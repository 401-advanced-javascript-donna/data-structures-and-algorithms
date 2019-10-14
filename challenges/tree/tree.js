class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  add(value) {
    this.count ++;

    let newNode = new Node(value);

    const searchTree = node => {
      // 
      if(value < node.value) {
        if(!node.left) {
          node.left = newNode;
        } else {
          searchTree.left;
        }
      } else if(value > node.value) {
        if(!node.right) {
          node.right = newNode;
        } else {
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

  preOrder() {
    let result = [];

    const traverse = node => {
      // capture root node value
      result.push(node.value);
      // if child exists, go left again
      if(node.left) traverse(node.left);
      // if right child exists, go right again
      if(node.right) traverse(node.right);
    }
    traverse(this.root);

    return result;
  }

  inOrder() {
    let result = [];

    const traverse = node => {
      // if child exists, go left again
      if(node.left) traverse(node.left);
      // capture root node value
      result.push(node.value);
      // if child exists, go right again
      if(node.right) traverse(node.right);
    };
    traverse(this.root);

    return result;
  }

  postOrder() {
    let result = [];

    const traverse = node => {
      // if child exists, go left again
      if(node.left) traverse(node.left);
      // if child exists, go right again
      if(node.right) traverse(node.right);
      // capture root node value
      result.push(node.value);
    };
    traverse(this.root);

    return result;
  }

}

module.exports = {
  BinaryTree
};