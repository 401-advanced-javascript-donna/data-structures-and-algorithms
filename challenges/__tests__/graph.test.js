const Graph = require('../graph/graph');

describe('Graphs', () => {
  const graph = new Graph();
  it('should add node to graph', () => {
    graph.addNode(1);
    expect(graph.nodeList.has(1)).toBeTruthy();
  });

  it('should add an edge to the graph', () => {
    graph.addNode('a');
    graph.addNode('b');
    graph.addEdge('a', 'b', 4);
    expect(graph.nodeList.get('a')).toEqual([{ b: 4 }]);
    expect(graph.nodeList.get('b')).toEqual([{ a: 4 }]);
  });
});