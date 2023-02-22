# Objects

Objects are a data type. We can store data in it in the form of Key-Value pairs.

Objects are the foundation of Javascript, as all things are made of objects in Javascript. This is due to something called prototyping(which is not important at this time)

## Building a Plain Old Javascript Object (pojo) or Object

```
let obj = {}
```

This declares an empty object assigned to the 'obj' variable

To assign a key-value pair, we can do:

```
obj['something'] = 'some value';
```

OR

```
obj.something = 'some value';
```

So what is the difference between bracket notation and dot notation?
Bracket notation is used when using references (like variables pointing to a key). Dot notation is used when you (as a developer) knows exactly what the key is called and know it wont change

Pro Tip: If you are iterating, you likely will be using bracket notation.

Our object should now look like this:

```
obj -> {something: 'some value'}

```

### What is the point of an object?

To store UNORDERED key values, where the key is a string to reference, and the value can be a almost any other data type (string, boolean, number, an array, a function, or even another object!!)

## Iterating through an object

The bread and butter of iterating through an object is using:

```
for(let keyVariable in objName){}
```

KeyVariable can be whatever you want it to be called, similar to how we use 'i' to mean whatever in for loops. objName is the name of the actual object you want to reference. It is important to note that we currently, do not have any type of reference to the values so we should build the next line to point to the values if needed. We will continue to use our fake 'obj' from before:

```
for(let key in obj){
    let value = obj[key]
}

```

notice how I used bracket notation? This is because I created a reference to all iterations of keys using the variable 'key'. Our obj does not have an actual key called 'key', it only has a key called 'something'. Dot notation would NOT work here.

I am also creating a reference variable pointing to each iterative value. now we can do whatever we want with either the key, or value.

## Adding a new key value pair OR updating an existing one

A common use case for objects is to track the count of a unique item, for example, how many times a letter appears in a word. Since keys are UNIQUE, if we encounter the same key during a loop we should increment the value. Otherwise, the key must not exist yet so we must create it

```
let string = 'apple';
let countObj = {};

for(let i = 0; i < string.length; i++){
    let char = string[i] //creating a variable for each letter in string
    if(countObj[char] !== undefinied){ //check if key exists
        countObj[char] ++ //if it does, update count
    } else { //otherwise (ELSE IS NEEDED)
        countObj[char] = 1 //create the key-value pair starting at one
    }
}

//after all iterations, our countObj should look like this
{
    a: 1,
    p: 2,
    l: 1,
    e: 1
}
```

## How do I get all the keys in an Object?

To get all the keys, we can use a built-in method called Object.keys()

Note: the capital O is very important!!!

If we wanted to get all the keys in our countObj from above, we would do:

```
let keysArray = Object.keys(countObj)
```

Notice I created a variable to save the keys into, and passed countObj into the function arguments

```
console.log(keysArray) // [a,p,l,e]
```

## How do I get all the values in an Object?

To get all the values, we can use a built-in method called Object.values()

Note: the capital O is very important!!!

If we wanted to get all the values in our countObj from above, we would do:

```
let valuesArray = Object.values(countObj)
```

## What if I want to see the key value pairs?

We can use Object.entries() to see both the key and value pairs.

PS. This is likely not something you will use as often as the two methods above, but it is important to note regardless.

```
let entries = Object.entries(countObj)
```

This returns an array of arrays with keys as index 0, and values at index 1

```
console.log(entries) // [ [ 'a', 1 ], [ 'p', 2 ], [ 'l', 1 ], [ 'e', 1 ] ]
```

## Still confused? Array in JS are Objects too!

We should never think of Arrays as Objects in the sense that Objects can hold different data types, and Arrays should only hold data of the same type. JS is weird, because arrays can technically add whatever they want (this is bad practice, never do this). But those arrays you have been working with so far have actually been objects this whole time!

example:

```
let appleArr = ['a','p','p','l','e']
```

While we see the 'a' in the first position, if we want the computer to grab that we do:

```
appleArr[0] // 'a'
```

hmmmm that bracket looks verrrry familiar to how we key into objects? Well under the hood, we can think of the array to look like this:

```
[0:'a', 1:'p', 2:'p', 3: 'l', 4:'e']

```

Since numbers are unique, we can have multiple 'p's as values, and we can index into them using their numerical key! Super cool!

Once you feel comfortable knowing this little fact, try to never think of arrays as the same as objects but know that this is what is happening under the hood only in Javascript.

## Differences between arrays and objects (real arrays)

     Arrays        |     Objects
     - ordered     | - order not guaranteed
     - same data   | - hold different data types
     - No Dot      | - dot notation &&
       notation    |   bracket notation
     - indexe-     | - key-value pairs
       values      |
