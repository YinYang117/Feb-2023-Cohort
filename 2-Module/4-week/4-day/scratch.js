// // sets!

// // sets are used to collect unique, unordered* values

// // Why sets?

// // Constant lookup times for any value in that set

// // const mySet = new Set("abcdefazbcdefz");

// // console.log(mySet);

// // console.log(mySet.has("g"))

// function findSharedValues(arr1, arr2){
//     const seen = new Set(arr1);
//     return arr2.filter(ele => seen.has(ele))
// }

// const nums1 = [1, 1.1, 2, 3, 4, 7, 10, 11, 100, 1230, 123, 600, 700, 564];
// const nums2 = [1.1, 3, 4, 7, 8, 100, 11, 564, 565, 1200, 17872, 18971, 126, 753];

// console.log(findSharedValues(nums1, nums2))

// const findUniques = input => new Set(input);

// const str = "This is a string that definitely contains some characters that appear more than once."

// console.log(findUniques(str))

// const stringSet = new Set();
// stringSet.add(str);
// console.log(stringSet);

// caching

function mostFrequentChar(str) {
    // let most, mostCount;

    // for(let i = 0; i < str.length; i++){
    //     let currChar = str[i];
    //     if (currChar === " ") continue;
    //     let currCount = 0;
    //     for (let j = 0; j < str.length; j++){
    //         let innerChar = str[j];
    //         if (currChar === innerChar) currCount++;
    //     }
    //     if (!most || !mostCount || currCount > mostCount){
    //         most = currChar;
    //         mostCount = currCount;
    //     }
    // }

    // return most;

    const cache = {};
    
    for (const char of str) char === " " ? null : cache[char] ? cache[char]++ : cache[char] = 1;

    let most = str[0];

    for (const char in cache) {
        if (cache[char] > cache[most]) most = char;
    }

    return most;
}

// console.log(mostFrequentChar("What is the most frequent character in this string?"));

function fibonacci(n){
    if (n <= 1) return n
    return fibonacci(n-1) + fibonacci(n-2)
}

// console.log(fibonacci(43))

function fibTab(n, fibs=[0,1,1]){
    if (fibs[n]) return fibs[n]
    return fibs[n] = fibTab(n-1, fibs) + fibTab(n-2, fibs)
}

console.log(fibTab(1477))