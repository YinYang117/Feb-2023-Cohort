// Matrix

const matrix = [
    //    col 0  1  2  3  4    
    /*row 0*/[0, 1, 0, 0, 1],
        /*1*/[1, 0, 0, 0, 1],
        /*2*/[1, 1, 0, 1, 1],
        /*3*/[0, 1, 1, 0, 0],
        /*4*/[0, 0, 0, 0, 0],
];

// matrix[row][col]

// const matrix2 = [[0, 1, 0, 0, 1],[1, 0, 0, 0, 1],[1, 1, 0, 1, 1],[0, 1, 1, 0, 0], [0, 0, 0, 0, 0],];

// neighbors?
//                             [row, col]
function findNeighbors(matrix, coords) {
    const [row, col] = coords;
    const neighbors = [];
    const rowPositions = [row - 1, row, row + 1];
    const colPositions = [col - 1, col, col + 1];
    for (const newRow of rowPositions) {
        for (const newCol of colPositions) {
            if (newRow >= 0 && newRow <= matrix.length - 1) {
                if (matrix[newRow][newCol] && !(row === newRow && col === newCol)) {
                    neighbors.push([newRow, newCol])
                }
            }
        }
    }
    
    return neighbors;
}

console.log(findNeighbors(matrix, [2, 1]));

function longestPath(matrix, start) {
    const queue = [[start]];
    const visited = new Set();
    visited.add(`${start}`);
    const traversed = [];
    while (queue.length) {
        const currentPath = queue.shift();
        const currCoords = currentPath.at(-1);
        traversed.push(currentPath);
        // console.log(traversed)
        const neighbors = findNeighbors(matrix, currCoords);
        for (const neighb of neighbors){
            if (!visited.has(`${neighb}`)){
                visited.add(`${neighb}`)
                queue.push([...currentPath, neighb])
            }
        }
    }
    return traversed.sort((a, b)  => b.length - a.length)[0];
}
console.log(longestPath(matrix, [0, 4]));