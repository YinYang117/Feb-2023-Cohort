function getNeighbors(row, col, matrix) {
  const neighbors = [];
  // Check top
  if (matrix[row - 1] && matrix[row - 1][col]) neighbors.push([row -1, col])
  // Check bottom
  if (matrix[row + 1] && matrix[row + 1][col]) neighbors.push([row + 1, col])

  // Check left
  if (matrix[row][col-1]) neighbors.push([row, col-1])
  // Check right
  if (matrix[row][col+1]) neighbors.push([row, col+1])

  // Return neighbors
  return neighbors;
  // Your code here
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set();
  // Create a stack, put the starting node in the stack
  const node = [row, col];
  visited.add(String(node))
  // Put the stringified starting node in visited
  const stack = [node];
  // Initialize size to 0
  let size = 0
  // While the stack is not empty,
  while (stack.length){

    // Pop the first node
    const [row, col] = stack.pop();
    // DO THE THING (increment size by 1)
    size++;
    const neighbos = getNeighbors(row, col, graph);
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    for (const n of neighbos){
      if (!visited.has(String(n))){
        visited.add(String(n))
        stack.push(n)
      }
    }
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    
  }
  // return size
  return size;
  // Your code here
}

module.exports = [getNeighbors, islandSize];