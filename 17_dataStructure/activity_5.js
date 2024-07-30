// graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add an edge between two vertices in the graph
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1); // Remove this line for a directed graph
    }
  }
  bfs(start) {
    const queue = [start];
    const explored = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      explored.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return explored;
  }
  bfsShortestPath(start, end) {
    const queue = [start];
    const visited = {};
    const parent = {};
    visited[start] = true;
    parent[start] = null;
    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      if (currentVertex === end) {
        return this.reconstructPath(parent, start, end);
      }
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          parent[neighbor] = currentVertex;
          queue.push(neighbor);
        }
      });
    }
    return null;
  }

  reconstructPath(parent, start, end) {
    const path = [];
    let current = end;
    while (current !== null) {
      path.unshift(current);
      current = parent[current];
    }
    return path;
  }

  // Display the adjacency list of the graph
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
    }
    console.log(this.adjacencyList);
  }
}

// Example usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

graph.display();
console.log(graph.bfs("C"));
// Output:
// A -> B, C
// B -> A, D
// C -> A
// D -> B

const shortestPath = graph.bfsShortestPath("A", "D");
console.log(shortestPath);