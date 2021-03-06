/**
 * BFS Test
 */

const mocha = require("mocha");
const { expect } = require("chai");

const Node = require("../DataStructures/node");
const Graph = require("../DataStructures/graph");

// Call the Graph DS generator;
const { generateGraph, reconstructPath } = require("../utils");

// Function
const breadthFirstSearch = require("../Algorithms/breadthFirst");

describe("Breadth First", () => {
  let graph, node, start, end;

  before(done => {
    graph = generateGraph();
    start = graph.setStart("Emmanuel E");
    end = graph.setEnd("Emmanuel E");
    end2 = graph.setEnd("Mark Zuckerberg");
    done();
  });

  it("Start and End should be instances of Node. Graph should be of graph", done => {
    expect(graph).to.be.instanceof(Graph);
    expect(start).to.be.instanceof(Node);
    expect(end).to.be.instanceof(Node);
    done();
  });

  it("Expect value to be equal to start if the same", done => {
    let endvalue = breadthFirstSearch(start, end);
    expect(endvalue).to.be.equal("Emmanuel E");
    done();
  });

  it("Expect end value to match the goal", done => {
    let endvalue = breadthFirstSearch(start, end2);
    expect(endvalue).to.be.equal("Mark Zuckerberg");
    done();
  });

  it("Reconnstructs the path appropriately", done => {
    breadthFirstSearch(start, end2);
    let result = reconstructPath(end2);
    expect(result).to.be.a("String");
    done();
  });
});
