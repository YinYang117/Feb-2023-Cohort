/*
We're about to begin exploring some wonderful new algorithms. Many of the 
algorithms that we're going to see in the coming two weeks will be widely 
available on the internet. Don't focus on memorizing the solutions, instead
the focus for the coming weeks should be on _understanding_ what's being done
and why. 

You'll notice a shift in how problem solving will work as we move forward. 
Rather than asking you to come up with the plan for a solution, we'll instead
be providing that plan. Your job will be to follow that plan and implement it.
As you go through the process of writing those solutions, think about why
a choice was made and what is being done. Think about what the efficiency of
this problem solving technique is, and begin to wonder if there are any ways of
improving it.

Remember to continue to implement Polya's problem solving method and 
                                ASK QUESTIONS
We're always happy to try and explain things another way, or to try and help
walk through some tricky logic to explain the hows and whys of what's going on.
Remember that a good question is specific, clear, concise and shows that you've
already put some work into solving it. We should be able to take the next step
together, rather than forge the path for you.

Remember the goal at the end of this program is to get a job working as a 
software engineer. The more time you put into place dissecting problems and 
understanding them now, the easier time you'll have relating your issues to 
your senior engineer. Build the good habits while you're with us so you can go
in and immediately wow your new team.
*/

// LOGARITHMS
/*
We can think of logarithms as the inverse to exponent operations. When we're 
looking for the log or logarithmic value of a number, we'll also need to 
consider what logarithmic base we're using. Let's start at base 10.
*/

// We'll build a naive logarithmic function that will only take input cleanly
// divisible by 10. Makes our lives a little easier
console.log("Log base 10 output -------------------------")
function logBase10(num){
    if (num === 1) return 0;
    if (num % 10 !== 0 || num <= 0) return "Invalid input";
    else return 1 + logBase10(num/10);
}

console.log(logBase10(100)) // 2
console.log(logBase10(10)) // 1
console.log(logBase10(1)) // 0
console.log(logBase10(1000)) // 3

// Before we get into the explanation of this function, think about how it's 
// working. 


/*
The above function works by first checking to see if our number is 1, and 
returning 0. Any number raised to the 0th power is 1. For questions related to
why that is, please consult your local Math Person(tm). 

If the number is not 1, we check to make sure our number is valid input. If it
is, we start our recursive loop of returning 1 + the result of calling our
function with our input number divided by 10. Eventually, we'll get the log 
base 10 value of anything we put in.

Let's do it again with log base 2!
*/

console.log("Log base 2 output --------------------------")
function logBase2(num){
    if (num === 1) return 0;
    if (num % 2 !== 0 || num <= 0) return "Invalid input";
    else return 1 + logBase2(num/2);
}

console.log(logBase2(4)) // 2
console.log(logBase2(2)) // 1
console.log(logBase2(1)) // 0
console.log(logBase2(256)) // 8
console.log(logBase2(32)) // 5

/*
So that's nifty and all, but why does that matter for us? Well, many of the 
algorithms we'll be writing can be improved to a logarithmic time factor. 
Consider looking up a definition in a dictionary. I don't need to look at every
word in the dictionary to find my definition. Instead, I can eliminate half of
the dictionary every time I try to find the page my word is on because the 
words in the dictionary are sorted in alphabetical order.

As these weeks continue, we'll start to see why sorted data is so important. 
Sorted data enables us to solve problems very efficiently and effectively. This
coming Saturday, we'll begin to explore how to sort data to ensure we can use
in this way.
*/
