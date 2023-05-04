/*
 * We'll want to keep three things in mind when solving graph based problems.
 * 
 * 1. Identify and define the type of graph
 * 2. Implement the getNeighbors function
 * 3. Traverse the graph
 * 
 * We'll apply this strategy to matrices. When given a matrix, we'll wnat to 
 * view it as a representation of a graph. The matrix has nodes, which are the
 * elements in the 2d array, and edges, which are represented by placing 
 * elements next to each other within the 2d array. 
 * 
 * Let's take a look at one to get a better handle on things
 */

const matrix = [
//    col 0  1  2  3  4    
/*row 0*/[0, 1, 0, 0, 1],
    /*1*/[1, 0, 0, 0, 1],
    /*2*/[1, 1, 0, 1, 1],
    /*3*/[0, 1, 1, 0, 0],
    /*4*/[0, 0, 0, 0, 0],
];

/*
 * When accessing nodes in our graph, we'll key in as matrix[row][col]. The row
 * will come first, which might feel a bit backwards if you're used to x,y
 * coordinates in math.
 * 
 * Next we'll want to define what does and does not count as a neighbor. 
 * Depending on the prompt being solved, we might have just our cardinal 
 * directions -- north, south, east, west. Or, up, down, right, left. Other 
 * times we might count adjacencies in the intermediate directions as well. That
 * would include things to the NE, NW, SE, SW (up-right, up-left, down-right, 
 * down-left). 
 * 
 * Let's see if we can write a function to find those neighbors! We'll catch all
 * neighbors in both cardinal and intermediate directions. 
 */

// matrix will be a reference to the  matrix and coords will be 
// an array of [row, col]
function findNeighbors(matrix, coords) {
    const [row, col] = coords; // destructure out coords
    const rowPositions = [row - 1, row, row + 1]; // setup possible rows
    const colPositions = [col - 1, col, col + 1]; // and possible cols
    const neighbors = []; // place to store neighbors
    for (const newRow of rowPositions){ // iterate through possible rows
        for (const newCol of colPositions){ // and possible cols
            // check for valid node at given position,
            // and make sure it's not the starting node.
            if (newRow >=0 && newRow <= matrix.length -1)
            if (matrix[newRow][newCol] && !(row === newRow && col === newCol)){
                neighbors.push([newRow, newCol])
            }
        }
    }
    return neighbors;
}

console.log(findNeighbors(matrix, [2, 1]));

/*
 * Now, we can use our findNeighbors function in problem solving. We'll write a
 * function that can find the longest path from a given starting node.   
 */

function longestPath(matrix, start){
    const queue = [[start]];
    const visited = new Set();
    visited.add(`${start}`);
    const traversed = [];
    while (queue.length){
        const currentPath = queue.shift();
        const currentCoords = currentPath[currentPath.length -1];
        traversed.push(currentPath);
        const neighbors = findNeighbors(matrix, currentCoords);
        for (const neighb of neighbors){
            if (!visited.has(`${neighb}`)){
                visited.add(`${neighb}`);
                queue.push([...currentPath, neighb])
            }
        }
    } 
    // comment in this log to see all the paths it takes!
    // console.log(traversed);
    return traversed.sort((a, b)=>{
        return b.length - a.length;
    })[0]
}

console.log(longestPath(matrix, [0, 4]));

