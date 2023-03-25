/*

Recursion is tough!! But there are some tips and tricks that can help.

1. Know that recursion is always working TOWARDS the basecase (also called 'end case')
    Just like your for loop was built with the ending in mind (Ex: i < arr.length)



2. Visualize what one single step each stack will need to take to get to the base case.
Example: If your base case is when an array is empty (we have gone through each element in that array),
then each stack will need to remove one item from that array at a time. Each new call to the same function
Will pass in either the modified, or clone of the data getting smaller and smaller each stack


3. Know when and what your data is doing at any given stack frame. This can be hard to visualize at first, which is why
debugger can come in handy. A general tip is that if it is working for the first stack (what we visually see as humans on vscode)
and it is working for the 2nd stack (what we can imagine will happen once the function is invoked again), then it should work
the same for the remainder of stacks.

''
'e' + 's' + 'u' + 'o' + 'h'


Below is a couple different ways to solve and visualize the recursion problem for reversing a string


*/














//Real recursion, not mutating the data
const recursionReverse = (str) => {
    //Base case: when the string is empty/ we have gone through each letter
    if (str.length === 0) return '';

    //otherwise, return one letter at a time + whatever happens in the next stacks (which is the same thing)
    let lastLetter = str[str.length - 1];
    console.log(str.slice(0, str.length - 1));
    return lastLetter + recursionReverse(str.slice(0, str.length - 1));
    // return lastLetter + recursionReverse(str);
}

// console.log(recursionReverse('house')) //esuoh











// Real recursion, mutating the data and turning string to Array in each call stack

const recursionReverseMutate = (strArr) => {
    //Base case: when the string is empty/ we have gone through each letter
    if (strArr.length === 1) return strArr.pop();

    let lastLetter = strArr.pop();


    return lastLetter + recursionReverseMutate(strArr)


}

// ['h']

// console.log(recursionReverseMutate(['h', 'o', 'u', 's', 'e'])) //esuoh


/*
DEFAULT PARAMETER RECURSION METHOD

*/




// const defaultReverse = (str, res = '') => {

//     if (str.length === 0) return res;

//     let lastLetter = str[str.length - 1]
//     res += lastLetter;

//     return defaultReverse(str.slice(0, str.length - 1), res)

// };



// console.log(defaultReverse('house')) // => 'esuoh'




const defaultArrReverse = (arr, res = []) => {

    if (arr.length === 0) return res.join('');

    let lastLetter = arr.pop();
    res.push(lastLetter);

    return defaultArrReverse(arr, res)

}


console.log(defaultArrReverse(['h', 'o', 'u', 's', 'e'])) //esuoh

















//NOT RECURSION BUT VISUAL EXAMPLE OF HARD CODING


// e + s +
function grabFirst(str) {
    let lastLetter = str[str.length - 1];
    return lastLetter + grabSecond('hous') //e
}


function grabSecond(str) { //'hous'
    let lastLetter = str[str.length - 1];
    return lastLetter + grabThird('hou') //s
}

function grabThird(str) {
    let lastLetter = str[str.length - 1];
    return lastLetter + grabFourth('ho') //u
}


function grabFourth(str) {
    let lastLetter = str[str.length - 1];
    return lastLetter + grabFifth('h') //o
}


function grabFifth(str) {
    let lastLetter = str[str.length - 1];
    return lastLetter + baseCase('') //h
}

function baseCase(str) {
    return ''
}

// console.log(grabFirst('house'))
