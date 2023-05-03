/*
Much like we translated our tree traversals into searches before, we'll be 
performing the same operations with graphs. When we find our target, we can take
some action or perform some calculation. Or, maybe we're just interested in
knowing whether or not we have a valid path to our node? Let's take a look at an
example:
*/

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}
/*
What's going on here? We can visualize the above as:

    5
   /|\
  1 | \   6
   \|  \
    2-3-4

Notice the 6 vertex has no edges with any other vertices/nodes. Let's take a 
look at how we might search/
*/

// We'll assume our function is scoped into our graph, and provide it with both
// a starting vertex and a target vertex. 
function graphBFS(start, target) {
    const queue = [start];
    const visited = new Set();
    visited.add(start);
    while (queue.length) {
        const current = queue.shift(); // shift out first node in queue
        console.log("Current Node:", current);
        if (current === target) return true;
        for (connection of adjList[current]) {
            if (!visited.has(connection)) {
                visited.add(connection);
                queue.push(connection)
            }
        }
    }
    return false;
}
console.log("========== Breadth-first ==========")
console.log(graphBFS(1, 4)) // true
console.log(graphBFS(4, 2)) // true
console.log(graphBFS(5, 6)) // false
console.log(graphBFS(6, 1)) // false 

// Before running the code, will we visit the entire graph when 6 is our start?
// Take a moment to parse the output from this function and consider the order
// we're seeing. Why did we visit the 5 node after the 3 node when we started
// at 4 and were looking for 2?


// Let's look at depth-first search:
// (again assuming our function is scoped into adjacency list)
function graphDFS(start, target) {
    const stack = [start];
    const visisted = new Set();
    visisted.add(start);
    while (stack.length) {
        const current = stack.pop();
        console.log("Current Node:", current);
        if (current === target) return true;
        for (const node of adjList[current]) {
            if (!visisted.has(node)) {
                visisted.add(node);
                stack.push(node);
            }
        }
    }
    return false;
}
console.log("==========  Depth-First  ==========")
// We'll call DFS with the same values:
console.log(graphDFS(1, 4)) // true
console.log(graphDFS(4, 2)) // true
console.log(graphDFS(5, 6)) // false
console.log(graphDFS(6, 1)) // false 

/*
Notice the order of our traversal changed between the two functions. At first,
we considered all members of a given connection level before moving to the next.
With DFS, we instead followed a path to completion before back tracking and 
looking elsewhere.
*/