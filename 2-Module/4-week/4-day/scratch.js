// Sets!

// sets are used to collect unique and unordered values
// well, it contains unique values that are typically unordered
// also, it has constant lookup time

function findSharedValues(arr1, arr2){
  return arr1.filter(ele => arr2.includes(ele))
}

const nums1 = [1, 1.1, 2, 3, 4, 7, 10, 11, 100, 1230, 123, 600, 700, 564];
const nums2 = [1.1, 3, 4, 7, 8, 100, 11, 564, 565, 1200, 17872, 18971, 126, 753];

console.log(findSharedValues(nums1, nums2))

// const mySet = new Set("a string as an arg for my const");

function findSharedValuesSet(arr1, arr2){
  const seen = new Set(arr1);
  return arr2.filter(ele => seen.has(ele))
}

// console.log(mySet)
console.log(findSharedValuesSet(nums1, nums2))
const arr = ["a", "b", 1, 7, "d", "a", 7, "c", 1.776, "b", "z", "x", "g", "66", 66, 55, 22, 45];
const str = "This is a string that definitely contains some characters that appear more than once."

const findUniques = input => new Set(input);

console.log(findUniques(arr))
console.log(findUniques(str))

const mySet = new Set([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]);
console.log(mySet)

const stuff = [1,2,3,1,2,3,1,2,3]
// const uniques = [];
const uniques = new Set();
for (let i = 0; i < stuff.length; i++){
  const current = stuff[i];
  // if (!uniques.includes(current)){
  //   uniques.push(current)
  // }
  // if (!uniques.has(current)) 
  uniques.add(current)
}
console.log(uniques)

// caching
/*
Remembering problems we've already solved and using those results in place of having to solve the same problem again
*/

function mostFrequentChar(str){
  // let most;
  // let mostCount;
  // for (let i = 0; i < str.length; i++){
  //   let currChar = str[i];
  //   let currCount = 0;
  //   if (currChar === " ") continue;
  //   for (let j = 0; j < str.length; j++){
  //     let innerChar = str[j]
  //     if (currChar === innerChar) currCount++
  //   }
  //   if (!mostCount || mostCount < currCount){
  //     mostCount = currCount;
  //     most = currChar;
  //   }
  // }
  // return most;
  const count = {};
  for (const char of str) {
    if (char === " ") continue;
    count[char] ? count[char]++ : count[char] = 1;
  }
  let most = str[0];
  for (const key in count){
    if (count[key] > count[most]) most = key;
  }
  return most;
}

console.log(mostFrequentChar("What is the most frequent character in this string that I have typed into this file?"))

function fibonacci(n){
  if (n <= 1) return n;
  return fibonacci(n-2) + fibonacci(n-1);
}

// console.log(fibonacci(44))

function fibTab(n, fibs = [0,1,1]){
  if (fibs[n]) return fibs[n];
  return fibs[n] = fibTab(n-1, fibs) + fibTab(n-2, fibs)
}

console.log(fibTab(1477))