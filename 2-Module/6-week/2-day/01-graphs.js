/*
Graphs

Up to this point we've explore a few different kinds of node and pointer based
data structures. These include linked lists, doubly linked lists, trees, binary
trees and binary search trees. We can consider all of these data structures
graphs, albeit very specific forms of graphs.

In a broad sense, graphs are an abstract data type that represent a collection 
of nodes and edges. We're pretty familiar with nodes, but haven't spent too much
time discussing edges. When we talk about edges, we're really talking about the
relationship between nodes. In linked lists we had next/prev, in trees we had
the idea of children and in binary trees we left and right. In graphs, we'll be
talking about the idea of neighbors or adjacency lists. You will hear terms like
vertex or vertices, but know that this concept is analogous to nodes. 

It's also important to note that nodes can be added to graphs without any 
connecting edges. 

We might be wondering how that really works, or what the point of that might 
even be. Well, let's consider what is perhaps the most ubiquitous implementation
of a graph: The Social Network. 

When you sign up for a social network, you are adding a node or vertex to the
graph. As you add friends to your network, you are creating edges between your
vertex and others. Or, you are adding them to your adjacency list. Using these
connections, we can begin to determine what level of connection is shared 
between nodes. If you've signed up for LinkedIn you may have noticed it telling
you about Second and Third level connections in your network. This is LinkedIn
telling you that someone in your adjacency list has this person in theirs 
(second level connection), or taking it a step further for third level
connections. Or, your adjacency lists's connection's adjacency lists's 
connection's adjacency list connection (gets a bit awkward to put it all into
plain language). 

We also use graphs to model street maps and the internet. Every address on a 
street can be thought of as a vertex on a graph, and traversing from one address
to another tasks us with figuring out how we can travel from one node to another
by following the edges that link them. Optimizing these traversals to find the
best path can depend on a multitude of factors, including the average speed of
traffic on a given route and the overall road distance traveled to get there.
When thinking about the internet, every device connected to it is itself part of
a local network, and that network is itself connected to the larger network of
the internet. 

Graphs are extremely powerful data structures that represent the relationships
between different data objects. As we've come to see, data can be related to 
each other in very to each other in many different ways. As a result, there will
be many different implementations of graphs. While working through this week's
content, we'll want to focus on understanding the generalities and _why_ a given 
strategy is being used.  

OK so, what the heck is a graph? What are some properties of a graph? Well, 
graphs can be directed vs. undirected. In an undirected graph, each edge
represents a 2-way relationship between the nodes. This means that all connected
nodes share a connection that goes both ways -- the adjacency lists of connected
nodes will both references to each other. A directed graph is a bit different. 
In these graphs, edges from one node point to another, and not necessarily back.
Think about the difference between adding a friend or connection on LinkedIn vs
following someone or having them follow you on something like Twitter or 
Instagram. Facebook and LinkedIn act as undirected graphs, where Twitter and 
Instagram are directed graphs. 

Graphs can also be cyclic vs acyclic. To revisit a concept that came up briefly
when discussing trees, a cycle is a path through a data structure that begins 
and ends that the same node or vertex and contains at least one edge. Acyclic
graphs are those that do not contain any cycles, meaning we can't start start at
any given vertex and traverse our way back.

There are also weighted and unweighted graphs. Weighted is the idea that 
traversing different edges can have a greater or lesser cost to them. Think 
about street maps that account for traffic conditions. While traffic is heavy, 
the weight of traversing a given route would be greater than traversing it at 
times when traffic is light. Adding weight to edges can help us make decisions 
about how we travel from our origin to our destination. 

We'll explore a few different ways to represent graphs in code, but one of the
most common is to write it as an adjacency list. In JavaScript, our adjacency 
list will be a plain old JavaScript object whose keys represent nodes or 
vertices and their associated value is an array representing all of the other
nodes they are directly connected to. You'll also see that array replaced with a
set, as graphs don't typically have any order applied to their nodes children or
neighbors. When adding edges in undirected graphs, its important to add both 
nodes to each other's adjacency lists. In directed graphs, we'll want to ensure
that only the proper adjacency list is modified. 
*/