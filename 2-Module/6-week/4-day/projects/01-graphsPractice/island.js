function getNeighbors(row, col, graph) {
  const neighbors = [];
  // Check top
  if (graph[row - 1] && graph[row - 1][col]) neighbors.push([row - 1, col])
  // Check bottom
  if (graph[row + 1] && graph[row + 1][col]) neighbors.push([row + 1, col])

  // Check left
  if (graph[row][col - 1]) neighbors.push([row, col - 1])
  // Check right
  if (graph[row][col + 1]) neighbors.push([row, col + 1])

  // Return neighbors
  return neighbors;
  // Your code here
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set();
  // Create a stack, put the starting node in the stack
  const node = [row, col];
  const stack = [node];
  // Put the stringified starting node in visited
  visited.add(String(node));
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while(stack.length){

    // Pop the first node
    const [row, col] = stack.pop()
    // DO THE THING (increment size by 1)
    size++
    // HINT: This is what your helper function `getNeighbors` is for
    const neighbs = getNeighbors(row, col, graph)
    neighbs.forEach(n => {
      // Then push all the UNVISITED neighbors on top of the stack
      // and mark them as visited
      if (!visited.has(String(n))){
        visited.add(String(n));
        stack.push(n)
      }
    })
    // HINT: Remember, you're storing your visited nodes as strings!
  }

  // return size
  return size
  // Your code here
}

module.exports = [getNeighbors, islandSize];