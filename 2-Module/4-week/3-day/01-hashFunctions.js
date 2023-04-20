/*
What is a hash function?

A hash function maps arbitrary data to a deterministic, fixed-size output.

Let's break that into some parts so we can understand it a bit better. 

"A hash function maps arbitrary data..."

So a hash function is going to take in some input and map it. What do we mean 
by map in this context? In computer science, when we use the term "to map", 
we're talking about a process of converting or transforming a data that exists
in one form to another. 

In other words, our hash map is going to take in some input and transform it 
into some output. But what kind of output? Well, we'll need to break down the
next part of the sentence...

"...to a deterministic, fixed-size output."

OK so the "mapping" that happens takes in some input, and it comes out both
deterministic and fixed-size. Well, what does deterministic mean? In computer
science, deterministic translates to a process or algorithm that _always_ 
produces the same output for a given input. Makes sense, but this contrasts 
with non-deterministic processes that would rely on the state of the machine in
order to generate some output. In non-deterministic processes, we might get a
different output with the same input if the time is different or we've changed
the state of something in the environment where our input is being considered.

With that out of the way, we can understand that "deterministic" in this sense
refers to the idea that no matter how many times we put the same input into our
hashing function it will always return the same result. Nice and reliable.

What about fixed-size? This means that no matter what goes in, the output will
always take up the same amount of space as output from any other input. So no 
matter how large my input is, I can trust that my output will always be the 
same size.

So putting it all together, a hash function will take in some input and will
return some output. No matter how large the input is, the output will always be
the same size. Further, I can trust that my function will always return the 
same result from the same input. No matter how many times I feed my function
the same input it will always return the same output. Or, no matter how many
times I add 1 and 1 together I will always get 2.

Further, our hashing process is not reversible. It's a unidirectional operation
that cannot be undone. Given some hashed output, I should have no way of
figuring out what the input is. This is incredibly useful for security, as we
can safely compare hashed values to each other rather than sending sensitive
data between entities. Let's take a look at a hashing function in action. 
*/

function hash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        // Multiply the current hash value by 31 and add the Unicode code point
        // of the current character. Why 31? It's a very efficient prime number
        // to use! The exact reasons why go a little outside the scope of what
        // we're doing, but if you're curious do a little googling around why
        // the number 31 shows up in hash functions
        hash = hash * 31 + char
        // Modulo with 2^32 to ensure the hash value fits within a 32-bit integer
        hash = hash % 2**32; 
    }
    return hash;
}

let a = "banana";
let b = "The input has to be a string"
let c = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of light, it was the season of darkness, it was the spring of hope, it was the winter of despair."

console.log(hash(a))
console.log(hash(b))
console.log(hash(c))
/*
This hashing function will return an integer representation of our output. 
Further, our `hash = hash % 2 ** 32` will ensure that any hash we generate
will fit within the confines of a 32 bit integer. Pretty neat stuff, but,
with only 4,294,967,296 (~4.3 billion [a 32-bit integer's worth]) of possible
outputs, this might not be the _best_ hashing function we can work with. 
Instead, we'll let the cryptographic experts handle it for us. Let's take a 
look at how we can ask node to hash something for us using the sha256 hashing
algorithm
*/ 

const {createHash} = require('node:crypto')
function sha256(content) {  
    return createHash('sha256').update(content).digest('hex')
  }

console.log(sha256(a))
console.log(sha256(b))
console.log(sha256(c))

/*
This code imports the `createHash` function from node's crypto module, hashes
our input using the sha256 algorirthm and returns a hexadecimal representation
of our hash object when its all done. sha256 is a great hashing function that 
is both incredibly fast and incredibly secure. It's one of the main hashing
algorithms in use today. We won't worry about implementing it, but knowing a 
little about what it does is helpful for our understanding. 

So that's cool and all, but what are _we_ going to use it for?
*/