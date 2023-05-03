const undirectedAdjList = {
    1: [3, 2],
    2: [1, 3, 4, 6],
    3: [1, 2, 5, 6],
    4: [2],
    5: [3],
    6: [2, 3]
}

const directedAdjList = {
    1: {
        following: [2],
        followers: [3, 2],
       },
    2: {
        following: [3, 4, 1],
        followers: [1, 6],
       },
    3: {
        following: [1, 6],
        followers: [5, 6, 2],
       },
    4: {
        following: [],
        followers: [2],
       },
    5: {
        following: [3],
        followers: [],
       },
    6: {
        following: [3, 2],
        followers: [3],
       },
}; 

const queue = [5];
const visited = new Set();
visited.add(5);
while (queue.length){
    const current = queue.shift();
    visited.add(current);
    console.log(current);
    for (const neighbor of undirectedAdjList[current]){
        if (!visited.has(neighbor)){
            queue.push(neighbor);
            visited.add(neighbor);
        }
    }
}