/*
Most graph problems will include some kind of traversal element. Luckily for us,
most of the techniques we've been using to traverse Linked Lists and Trees will
be applicable for graphs, too. We'll be adding an extra layer, however, to make
sure that we're not visitng nodes more than once or getting trapped in an 
endless cycle. In orde to make sure that the nodes we're visiting are unique,
we'll be tracking nodes that we've already seen with a Set. 

Let's think about Breadth-First traversals to start. We'll still be using a 
queue to provide the orderly travel in our graph. However, when it comes time to
add things to our queue, we'll first check to see if our set has that node. If 
it does not, we'll add it to our set and to the back of the queue. If it does,
we'll ignore it so we don't repeat the path. Let's take a look at an example.
*/

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

/*
We can visualize our graph as such:
      3-2-1
      |  \|
    6-4---5
*/

console.log("========== Breadth-first ==========")
const queue = [1]; // put our first node in the queue;
const visited = new Set(); // create new set to keep track of visited nodes
visited.add(1); // add first node to queue
while (queue.length){
    const current = queue.shift(); // shift out first node in queue
    console.log("Current Node:", current);
    for (connection of adjList[current]){
        if (!visited.has(connection)){
            visited.add(connection);
            queue.push(connection)
        }
    }
}

/*
As we can see from our output, each node is visited once as we progress through
our data structure. We're keeping track of which nodes we've seen in our set, 
making sure to add the first node before we even get into any loops. We can also
see that we're progressing through our Graph's connections in a fairly orderly
pattern. Starting at the 1 vertex, we visit each of its connections before 
moving deeper into those vertices' connections as well. We're visiting the 
breadth of connections between each node before moving onto the next level of
connections. 

Just like in priod breadth-first approaches, we used a queue to progress through
our data structure and keep track of where we need to go next. Similarly, we'll
use a stack to implement a Depth First traversal on our graph.

There are many ways to go depth-first through a graph, but the main point should
be ensuring that we follow a path to the end, before backtracking and trying
another. Again, we'll make use of a set to ensure that we're not adding in nodes
we've already seen to our stack.

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

3-2-1
|  \|
6-4-5

Let's perform a depth-first traversal.
*/

console.log("==========  Depth-First  ==========")
const stack = [1];
const seen = new Set();
seen.add(1);
while (stack.length){
    const current = stack.pop();
    console.log("Current Node:", current);
    for (const node of adjList[current]){
        if (!seen.has(node)){
            seen.add(node);
            stack.push(node);
        }
    }
}