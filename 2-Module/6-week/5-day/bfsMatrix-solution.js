function findNeighbors(node, matrix) {

    const [row, col] = node;

    const neighbors = [

        //top
        [row - 1, col],

        //bottom
        [row + 1, col],
        //right
        [row, col + 1],

        //left
        [row, col - 1],

    ]

    return neighbors.filter(neighbor => {
        const [r, c] = neighbor;
        return matrix[r] && matrix[r][c]
    })

}



function bfsPath(matrix, startNode, endValue) {
    const q = [startNode];
    const path = [];
    const visited = new Set();
    visited.add(String(startNode));

    while (q.length) {
        const curr = q.shift();
        path.push(curr);

        //DO THE THING
        const [r, c] = curr;

        if (matrix[r][c] === endValue) {
            // console.log(path)
            return path;
        }
        const neighbors = findNeighbors(curr, matrix);

        for (let neighbor of neighbors) {
            if (!visited.has(String(neighbor))) {
                visited.add(String(neighbor));
                q.push(neighbor)
            }
        }
    }

    return false;

}
