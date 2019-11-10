class Graph {
  constructor() {
    this.nodeList = new Map();
  }

  addNode(val) {
    this.nodeList.set(val, []);
    return this.nodeList.get(val);
  }

  addEdge(node1, node2, weight) {
    this.nodeList.get(node1).push({ [node2]: weight });
    this.nodeList.get(node2).push({ [node1]: weight });
  }

  getNodes() {
    let arr = [];
    const iterable = this.nodeList.keys();
    for(let key of iterable) {
      arr.push(key);
    }
    return arr;
  }

  getNeighbors(val) {
    return this.nodeList.get(val);
  }

  size() {
    return this.nodeList.size;
  }
}

module.exports = Graph;
