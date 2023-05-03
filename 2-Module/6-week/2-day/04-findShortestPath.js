/*
 * Something that we'll be using a breadth-first search to figure out is how to
 * find a shortest path between nodes. Notice I did not specifically say _the_
 * shortest path, but simply _a_ shortest path. In unweighted graphs, or even
 * weighted, there may be multiple shortest paths between nodes.
 * 
 * We'll write something that looks pretty close to our BFS algorithm, but 
 * modify it in some key ways. Here's a breakdown (from the homework) of what 
 * we'll be doing
 * 
 *  1. Create a queue. Create a separate array containing the starting node. 
 *     Enqueue this array. The enqueued array is the current path.
 *  
 * 2. Create a set to store visited nodes
 * 
 * 3. While the queue is not empty, repeat steps 4-6
 * 
 * 4. Dequeue the first path, and save it in a variable
 * 
 * 5. Save the last node in the path in a variable (DO NOT pop it)
 * 
 * 6. IS THIS NODE THE THING? If so, stop and return a result. Else, continue.
 * 
 * 7. For each unvisited neighbor of the last node:
 *    i. Add it to the visited nodes set
 *   ii. Copy the saved path, and add the neighbor to the end. Enqueue this new 
 *       path
 *  
 * 8. If the queue has become empty without finding the thing, then the thing 
 *    has not been found. Return false, an error, or a message as appropriate 
 *    for the problem you are solving.
 * 
 * Let's get an adjacency list setup to work through!
 */

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
};
/*
That graph _could_ look like:
    5
   /|\
  1 | \   6
   \|  \
    2-3-4
But there are many ways to illustrate it.
*/

// we'll write our function assuming we're scoped into the adjacency list
function shortestPath(start, target) {
    const queue = [[start]];
    const visited = new Set();
    visited.add(start);
    while (queue.length) {
        const currentPath = queue.shift();
        const currentNode = currentPath[currentPath.length - 1];
        if (currentNode === target) return currentPath;
        for (const neighbor of adjList[currentNode]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...currentPath, neighbor]);
            }
        }
    }
    return "No Path Found";
}

console.log(shortestPath(1, 3)) // [1, 2, 3]
console.log(shortestPath(4, 1)) // [4, 5, 1]
console.log(shortestPath(1, 6)) // "No Path Found"