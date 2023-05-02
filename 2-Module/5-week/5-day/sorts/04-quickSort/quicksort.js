function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Pick the first value as the pivot
  const pivot = arr[0];
  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right
  const left = arr.filter(ele => ele < pivot);
  const right = arr.filter((ele, i) => (ele >= pivot) && (i !== 0));
  // Recursively sort the left
  // Recursively sort the right

  // Return the left, pivot and right in sorted order
  return [...quicksort(left), pivot, ...quicksort(right)]
}


module.exports = [quicksort];
