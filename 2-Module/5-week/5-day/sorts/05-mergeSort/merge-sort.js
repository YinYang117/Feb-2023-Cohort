// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Divide the array in half
  const mid = parseInt(arr.length / 2);
  // Recursively sort the left half
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  // Recursively sort the right half

  // Merge the halves together and return
  return merge(left, right)
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  const merged = [];
  // Point to the first value of each array
  // While there are still values in each array...
  while (arrA.length && arrB.length){
    if (arrA[0] < arrB[0]) merged.push(arrA.shift())
    else merged.push(arrB.shift())
  }
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array
  return merged.concat(arrA, arrB);
}

module.exports = [merge, mergeSort];

