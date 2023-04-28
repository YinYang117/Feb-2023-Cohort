/*
We're about to embark upon the wonderful world of sorting algorithms! Everyone
will have their favorite (quick sort), but working your way through all of the
different algorithms will be an instructive lesson in problem solving. As we 
work through sorts, I'll be providing some information about how each sort is
supposed to work, but I won't be providing any code beforehand.

Part of learning good problem solving techniques is being able to translate a
process from an outline to working code. There will be easy to find solutions
for all of the sorting problems we'll be working through. Please, do _not_ 
look them up. Instead, try to work through these problems on your own. This 
will help you sharpen your critical thinking and problem solving skills. Most
interviewers will not care if you can regurgitate a given sorting function
during your interview, what they'll be interested in seeing is your problem
solving skills and ability to think through and discuss a problem. Part of 
growing stronger in that area is working through these problems on your own.
As you write through more solves, you'll hone your skills and grow more adept
at seeing the next steps for any problem you hope to solve.

Why would I write my own sort when every language I'll work in has its own 
sorting function that is very efficient? Mostly, for all the reasons outlined
above. JavaScripts .sort will be a very useful tool throughout your career,
however the problem solving skills you build working through these problems 
will help make sure you have that career.

Many of these sorts will incorporate problem solving techniques that will be 
useful when approaching other problems as well. Getting practice with applying
these techniques in a straightforward sort will help you feel more comfortable
when needing to apply them in other situations. As you gain fluency with these
techniques, you will find that devising plans for solving problems becomes
easier. 

Implementing these solutions will also help bridge the technical gap between
figuring out the plan to solve the problem and actually executing them. Working
through these algorithms will help build connections in your mind, and you'll
begin to know instinctively where to start when solving novel problems.

This will also sharpen your instincts for knowing when an algorithm might not
be as effective as it otherwise could be. As you write implementations of 
these algorithms, you will find that many of them are terribly ineffecient. 
The tradeoff, is that they also act as good examples for powerful techniques.

Some common techniques we'll see are shifting and swapping, let's take a quick
peek at some code that can help remind us of how these techniques work. 
*/

// Swapping
// We have a couple of ways of swapping values in an array. We can create a 
// temporary variable to hold one of our values, or, we can use array 
// destructuring. Let's take a look at some exmaples:

const arr = [0, 1, 2, 3, 4, 5, 6];

// Swap two values with a temporary variable
let tmp = arr[1];
arr[1] = arr[2];
arr[2] = tmp;

console.log(arr); // [0, 2, 1, 3, 4, 5, 6]

// Swap two values with destructured array assignment
[arr[4], arr[6]] = [arr[6], arr[4]];

console.log(arr); // [0, 2, 1, 3, 6, 5, 4]

// Shifting
// When shifting values in an array to the right, the direction of our 
// iteration matters. If we're starting at the beginning, we'll find that we've
// overwritten all of the values in our array. Instead, we should start at the 
// back

const arr1 = [0, 1, 2, 3, 4, 5];
const arr2 = [0, 1, 2, 3, 4, 5];

// If you want to shift the array to the right by 1...

// Shifting from front to back will overwrite all values
for (let i = 1 ; i < arr1.length ; i++) {
    arr1[i] = arr1[i-1];
}

console.log(arr1); // [ 0, 0, 0, 0, 0, 0 ]


// Instead, start from the back and shift backwards
for (let i = arr2.length - 1 ; i > 0 ; i--) {
    arr2[i] = arr2[i-1];
}

console.log(arr2); // [ 0, 0, 1, 2, 3, 4 ]