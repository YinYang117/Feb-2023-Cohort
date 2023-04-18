# Memory

## How do computers remember stuff

### A Mental Model

First, let's draw a distinction between storage and memory. Storage is long 
term allocation of space for specific entities. Things like your files, 
pictures, executables and applications are stored on your hard drive. If we 
think about our computer as a desk, we can think about storage as the drawers
of the desk. We can put things in the drawers that we want to keep and have 
access to later.

Working with that desk model, we can think of memory as the surface of our
desk. When we want to look at a picture, we can find the drawer it lives in and
place it on the surface of our desk. We've loaded that picture into our memory
and have access to it. 

The space on top of our desk is nice because it gives us immediate access to 
and use of anything on it. However, that space is limited. Once we begin to run
out, we'll probably start putting things back into drawers. But if we need to
access it again, it takes time to pull it out. Typically, we want to avoid 
this situation.

With our computers, we can avoid this by making sure we don't have too many
active applications or files running. Certain programs are particularly...
not great at managing this on their own (lookin' at you, Chrome!). If we notice
our computers begin to run slower when we've got many things running, we want 
to think about whether or not we can close some things (perhaps free ourselves
of the prison of our own making with all the tabs we've got open). Or, as a 
more expensive alternative, we can upgrade the memory in our computer if we're 
able (certain laptop manufacturers, like Apple, solder their computers together
and do not provide extra space for at home upgrades).

### MY COMPUTER HAS DRAWERS?

Well, no. And yes! You've got folders with all of your files and applications
in them. When you open those things up, they are loaded into your memory so 
that you can make use of them. Once their code has been loaded into memory, we 
can make use of them.

We do this all the time without even thinking about it -- when we launch our
editor with `code .` in our terminal, we're telling our computer to load the 
VSCode program into memory and execute it. We're also letting it know that it
should be opened from our current directory, and have access to whatever files
are inside. We can then read the contents of the files in that folder, say
`myFile.js` for example, load that into memory and alter its contents with our
editor. We'll cover this again when we get to transmitting data in the next
module, but the process of transforming data into different types (in this 
case memory objects and files on our hard drive) is called 
serialization/deserialization. We serialize our memory objects into files that
can be read later, and deserialize them back into an editable state when we 
open them. 

Thinking back to moving our files in and out of memory, we're doing the same 
thing when we type `node myFile.js` into our terminal. We're actually 
instructing the `node` program to load `myFile.js` into memory, turn the text 
in that file into usable JavaScript and execute the program/app/module 
contained with in using Just In Time Compilation. 

Pretty Nifty Stuff!

### Bill, why is this important? I don't care about drawers

That's a fair criticism, my wonderfully adept students! This is important 
because as we're engineering solutions to increasingly abstract and complex
problems, we need to consider how the computer will handle the instructions we
are giving it. The deeper our insight into the process our machines take to
execute the code we supply them, the better our ability to critique and improve
the code we write. 

## The actual process for how computer remember stuff

### A small bit on Turing Machines

When we get down to it, our computers are executing everything we're asking 
them to do by assesing truth and falsity. A never ending chains of if this
then that style reasoning. Read the value, perform basic arithmetic and
logic, work through the decision tree, iterate if needed. On and on, endlessly
and billions of times each second. 

This is essentially what Alan Turing hypothesized in a paper written in 1936.
He devised a machine with an endless strip of tape that could hold values, 
heads that could read the values on the strips, a state register that could 
temporarily hold values needed for calculations, and a list of actions that 
could be taken depending on what composed the state. 

Translating that to modern terms, we've got our storage, or hard drive, for
holding data, our I/O for reading data, RAM for storing it in the moment and
the instruction set on our CPU that holds all the actions we can take. 

When we run our code, it goes through a process that translates everything we
wrote into something our processor can understand. This process is pretty 
interesting, but goes fairly out of bounds for what we want to cover. Anyone
interested in learning more can check out this 
[post on medium](https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775).

### Bringing it all together

With all of the above in mind, we can think about of the memory in our computer
as a very long strip of cells. Each cell is either charged (1) or not charged 
(0). Cells are grouped into blocks called words, and the length of the word is
determined by the default data size of the processor. 8-bit architecture uses
8 cells to make a word, 16-bit would use 16 and so on and so forth. 

We can access words by accessing its index, or the memory address where it can 
be found. The terms memory pointer or memory reference will also be used for 
this index. 

### Reference... that sounds awfully familiar...

Good! It should! When we learned about reference vs primitive data types, much
of the clarifying information about those types may have been hard to grasp.
Now that we're talking about memory, we can begin to discuss what that
distinction means to your computer. Primitive values are those that make up the
basic building blocks of the language. Things like booleans, numbers and 
strings are all primitive values in JavaScript and can be considered our basic
units of composition. They exist on their own, and don't share any references
between each other. When a primitive is assigned to a new variable or passed
as an argument to a function a copy of that value is created. Changes to the 
copy do not affect the original.

Reference values are stored as a reference to the location in memory where the
actual data is stored. When a reference value is assigned to a new variable or
passed as an argument, a new reference to _the same memory location_ is 
created. Any changes to the data that the memory location affect all variables
that reference it.

When we relate that to memory, we can think of reference data types as those
that refer to a collection of other data. An object is a collection of values 
that can be found at other references within the object. In JavaScript, an 
array is basically a fancy object, where the values in the collection are 
assigned locations by follwing a set of rules, and extra methods exist to 
further manipulate the data structure. 

### So how does it all work?

When we create variables, we're really giving ourselves a human readble 
reference to some location in memory. We can then store different values in
that memory space to call upon and access later. Some of those values can be
stored in single memory units (words), some are stored accross many.

When we store values in memory, we're storing binary representations of what we
really want to have access to. Since our computer has no means of understanding
anything we don't explicitly define for it, the language we're working within
takes extra care to establish _what_ is stored where, so that it knows how to
translate the binary pulled from the memory address into something usable. 

Those x-bit words (however many bits our processor is -- usually 64-bit for 
most systems) will store the binary representation of the data we want to 
store. Floating point numbers will use all 64-bits in the word to represent
the value of the number, while other data types will allocate portions of the
64-bit word (with other organization elsewhere) to represent the values that 
we want to keep track of.

Whew! JavaScript sure does a lot to make things easy on us

# Arrays

## An array in any other language may not smell as sweet

### What an array is in computer science

An array, in simple terms, is a contiguous block of memory addresses used to
store elements of the same type. Notice that JavaScript doesn't seem to follow
those rules. What gives?

Well, JavaScript plays by its own rules 😎

So let's talk about the regular rules, then come back to JavaScript. Consider
an array containing four 32-bit integers. No, really, consider the process the
computer will need to take to actually perform that task. That statement comes
loaded with a lot of information. We want to store a collection, so we need a
reference to that collection. We want four things in that collection, so we 
need at least four more references to other locations that the original pointer
can find. And lastly, we've stated that we're storing 32-bit integers, so we 
need 4 bytes each (remembering 8 bits to the byte). 

That's a lot to take care of. But! When the computer knows that it is storing
data of a like type, it can make some assumptions about the structure of how it
can go about storing this data. In the reference to the array itself, we can 
store information about its length and what kinds of data it is storing. Then,
we can store the position of the first item in the array. Since we know how 
much space each item is taking up (determined by its type) and where the first
element is, we can instantly access anything else because we know how far ahead
to look to find the next thing. We don't waste any space in any of our stored 
values by pointing to where the next item can be found, instead we're relying
on the rules of the array structure to know where to find the next value.

Rather than needing to search for the next thing through memory addresses, 
arrays can instead rely on a calculation based on the size of the type stored
within it to figure out where the next thing is. This makes the array an 
incredibly space and time efficient data structure that wastes no space 
worrying about describing where to find its elements, and no time trying to
search for what we need. Instead, given an index, we can use a deterministic
calculation to find what we're looking for. 

### What an array is in JavaScript

Dynamically typed languages don't have the luxury of necessarily knowing what's
going to be stored in their references before run time. This makes the process 
of figuring out how an array should store its data particularly cumbersome. If
we want to maintain the time efficiency of an array, compromises will need to 
be made with space. In JavaScript, that means that each index is a pointer of 
the same memory size. Not incredibly efficient for storing a series of `true`
and `false`s within an array, but it allows us to store disparate datatypes 
without the need of telling our array what is going where beforehand. 

But wait there's more! JavaScript arrays are also basically just fancy objects
(or hash maps, if you want to get technical) that have extra rules and 
properties guiding their operations and lifespan. They're also not arrays in
the strictest of senses, they're more along the lines of what we'd call dynamic
arrays, or arrays that don't have a set size. 

For now though, it'll be best practice to treat arrays in JavaScript as if they
followed the rules of arrays in the traditional sense. For our own benefit 
though, we'll talk a bit about what a dynamic array is.

## Dynamic arrays and why that matters


### Is JavaScript just lazy?

Both yes and no. Choices were made when the language was created to better 
enable engineers to solve the problems at hand and ensure the code could be
executed across a wide body of systems. Arrays and array-like structures are
used for a wide variety of purposes, including keeping track of a collection
of dynamically rendered elements on a webpage. Imagine if you needed to know
the precise count of elements that were going to be in that collection before
you could even think about collecting them. That would add overhead to your 
code that necessitated taking more actions before the one you really wanted.
Instead, we can use dynamic arrays to keep track of n many things as we find
them. 

### What are some drawbacks of dynamic arrays?

Here's where it can get kind of tricky. JavaScript by default will try to 
overallocate what it thinks is a reasonable amount of memory for your array.
It does this so that it doesn't have to resize your array as it grows. In this
context, we want to think of resizing as copying your array into a bigger 
memory footprint so that it has space to continue growing.

However, it wants to try and be space efficient as well, so it won't go too 
crazy with space. The homework had a good example illustrating this point. If
we don't tell JavaScript how large our array should be when it creates it, we 
will eventually run into an operation where it needs to spend extra time moving
the array to a larger space in memory so that we can continue to add new 
elements. 

### Time efficiency of Dynamic Arrays

Mostly, this won't affect our ability to utilize the array as an efficient data
structure in problem solving. Adding elements to the end of the array will 
_typically_ be an O(1) operation. With JS overallocating the memory available 
to the array, chances are we'll have an empty spot to put our value in. Once 
our array grows sufficiently large, that will grow to an O(n) operation, as 
all previous values will need copied to new places in memory. 

We'll want to be mindful that the same efficiency does not apply to adding 
elements to the front of our array. As we add values to the front of the array, 
all later values must slide down a spot in the structure. What was index 0 is 
now index 1, index 1 is index 2, and so on and so on throughout the entire data
structure. 

The homework provides a good code example for testing this in JavaScript. If
you're feeling uncertain about any of these ideas, give that code a run and see
if you can start to understand why adding to the front of an array is less 
efficient than adding to the back

# The Stack
## Or Stacks, I guess
### Wait, stacks like call stack stack?

*Yep! The stack is a data structure that follows a simple rule. Last in, first 
out. Or first in last out. Whichever. All that really matters is that the most
recent addition to the stack will be the first thing removed from it.

Consider the stack of plates found at buffets. As new plates are added to the
top of the stack, hungry buffet goers will need to take plates off the top. The
most recently added plates are the ones that will be first used. 

Now let's relate that to the call stack. When we call functions, that's our way
of saying "Hey computer, I don't care what you were up to because I want you to
figure this out right now." We add the most recent function call to the top of 
the stack, and execution immediately shifts to that stack frame. This helps us
keep logical order to our code, that allows us to have orderly execution of the
code we write. What a pain it would be to need to wait for our current function
to finish before we could solve the problem at hand.

### Stacks are everywhere

We'll see stacks in other places, too. When your browser keeps track of your 
history, it's using a stack to figure out where you are and where you've been.

But why? You may be wondering. Well, stacks are incredibly efficient at what 
they do. Both operations we're executing on the stack, adding to it and 
removing from it, are constant time (O(1)) operations. There are worst case
scenarios for adding to the stack that might necessitate resizing it, turning
it to an O(n) operation. 

Further, since stacks have a logical order to the data contained within them,
it makes sense to store them in an array of available memory. This gives us
the added benefit fo the incredibly space efficient array when storing our 
stack. 

### So if I wanted to build one...

You could literally just use the built in array for JavaScript. The homework
provides an example built into its own class, but notice that its really just
manipulating the array stored at `this.data`. All we're ever doing is calling 
the push and pop methods and checking on the length if we want. 

### What about Queues?

Well, we've got to save _some_ info for another lesson.

