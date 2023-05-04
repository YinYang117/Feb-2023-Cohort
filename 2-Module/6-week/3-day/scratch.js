/*
1. Identify and define the type of the graph
2. Implement a getNeighbors function
3. Traverse that graph
*/

const matrix = [
    //    col 0  1  2  3  4    
    /*row 0*/[0, 1, 0, 0, 1],
        /*1*/[1, 0, 0, 0, 1],
        /*2*/[1, 1, 0, 1, 1],
        /*3*/[0, 1, 1, 0, 0],
        /*4*/[0, 0, 0, 0, 0],
    ];

    // matrix[row][col]

    // const flatMatrix = [[0, 1, 0, 0, 1],[1, 0, 0, 0, 1],[1, 1, 0, 1, 1],[0, 1, 1, 0, 0], [0, 0, 0, 0, 0],];
//                             [row, col]
function findNeighbors(matrix, coordinates){
    const [row, col] = coordinates;
    const rowPositions = [row -1, row, row+1];
    const colPositions = [col -1, col, col +1];
    const neighbors = [];
    for (const newRow of rowPositions){
        for (const newCol of colPositions){
            if (newRow >= 0 && newRow < matrix.length ){
                if (matrix[newRow][newCol] && !(row === newRow && col === newCol)){
                    neighbors.push([newRow, newCol])
                }
            }
        }
    }
    return neighbors;
}

// console.log(findNeighbors(matrix, [0, 4]));

function adjListMaker(matrix, coords){
    const adjList = {};
    const q = [coords];
    const visited = new Set();
    visited.add( `${coords}`)
    while (q.length){
        const current = q.shift();
        const neighbs = findNeighbors(matrix, current);
        adjList[`${current}`] = neighbs;
        neighbs.forEach(neighbor =>{
            if (!visited.has(`${neighbor}`)){
                visited.add(`${neighbor}`);
                q.push(neighbor);
            }
        })
    }
    return adjList;
}

console.log(adjListMaker(matrix, [0, 1]))