const adjList = {
    1: [2, 5, 7],
    2: [1, 3, 5, 7],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4],
    7: [2,1]
}
const directedAdjList = {
    1: {
        follows: [2, 5],
        followers: [7, 5],
    },
    2: {
        follows: [7, 2, 3],
        followers: [3, 1],
    },
    3: {
        follows: [2],
        followers: [2, 4],
    },
    4: {
        follows: [3, 5, 6],
        followers: [5, 6],
    },
    5: {
        follows: [1, 4],
        followers: [1, 2, 4],
    },
    6: {
        follows: [4],
        followers: [4],
    },
    7: {
        follows: [1],
        following: [2],
    },
}

const queue = [1]
const visited = new Set();
while (queue.length){
    const current = queue.shift();
    visited.add(current);
    console.log(current);
    for (const neighbor of adjList[current]){
        if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
        };
    }
}