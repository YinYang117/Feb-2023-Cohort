function getNeighbors(row, col, matrix) {


  const neigbors = [
    // Check top
    [row - 1, col],
    // Check top right
    [row - 1, col + 1],
    // Check right
    [row, col + 1],
    // Check bottom right
    [row + 1, col + 1],
    // Check bottom
    [row + 1, col],
    // Check bottom left
    [row + 1, col - 1],
    // Check left
    [row, col - 1],
    // Check top left
    [row - 1, col - 1]
  ]
  // Return neighbors
  return neigbors.filter(neigbor => {
    const [row, col] = neigbor;
    return matrix[row] && matrix[row][col]
  })
  // Your code here
}

function countIslands(matrix) {

  // Create a visited set to store visited nodes
  const visited = new Set();
  // Initialize count to 0
  let count = 0;
  // Iterate through all indices in matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // If an index contains a 1 and has not been visited, 
      if (matrix[row][col] && !visited.has(String([row, col]))) {
        // increment island count and start traversing neighbors
        count++;
        // DO THE THING (increment island count by 1)
        // Initialize a stack with current index
        // Add stringified version of current index to the visited set
        visited.add(String([row, col]));
        const stack = [[row, col]];
        // While stack contains elements
        while (stack.length) {
          // Pop element from stack
          const [row, col] = stack.pop();
          // Get valid neighbors of current element
          const neighbs = getNeighbors(row, col, matrix);
          // Iterate over neigbors
          for (const n of neighbs) {
            // If neighbor has not been visited
            if (!visited.has(String(n))) {
              // Mark neighbor as visited
              visited.add(String(n));
              // Add neighbor to stack
              stack.push(n)
            }
          }
        }
      }
    }
    // Return island count
  }
  return count;

  // Your code here
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];