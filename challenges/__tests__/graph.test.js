const Graph = require('../graph/graph');

describe('Graphs', () => {
  it('should add node to graph', () => {
    const graph = new Graph();
    graph.addNode('a');
    expect(graph.nodeList.has('a')).toBeTruthy();
  });

  it('should add an edge to the graph', () => {
    const graph = new Graph();
    graph.addNode('a');
    graph.addNode('b');
    graph.addEdge('a', 'b', 'z');
    expect(graph.nodeList.get('a')).toEqual([{ b: 'z' }]);
    expect(graph.nodeList.get('b')).toEqual([{ a: 'z' }]);
  });

  it('should get all nodes in the graph', () => {
    const graph = new Graph();
    graph.addNode('a');
    graph.addNode('b');
    graph.addNode('z');
    expect(graph.getNodes()).toEqual(['a', 'b', 'z']);
  });

  it('should get neigbors', () => {
    const graph = new Graph();
    graph.addNode('a');
    graph.addNode('b');
    graph.addEdge('a', 'b', 'z');
    expect(graph.getNeighbors('a')).toEqual([{ b: 'z' }]);
  });

  it('should get size of graph', () => {
    const graph = new Graph();
    graph.addNode('a');
    graph.addNode('b');
    graph.addNode('z');
    expect(graph.size()).toBe(3);
  });
});