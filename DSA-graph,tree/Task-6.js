//Write a program to demonstrate undirected graph

class undirectedGraph {
  constructor() {
    this.node = {};
  }

  //adding of vertex
  addVertex(vertex) {
    if (!this.node[vertex]) {
      this.node[vertex] = [];
    }
  }

  //adding of edge
  addEdge(source, destination) {
    if (!this.node[source]) {
      this.addVertex(source);
    }
    this.node[source].push(destination);
  }
}


let alist = new undirectedGraph();
alist.addVertex(1);
alist.addVertex(2);
alist.addEdge(1, 2);
alist.addVertex(3);
alist.addEdge(1,3)
alist.addVertex(4);
alist.addEdge(3, 4);
alist.addEdge(2, 3);
console.log(alist);
