function linearSearch(arr, target) {

  // Can you solve this in one line?
  return arr.indexOf(target);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = arr.length - 1;
  // While high and low indices do not overlap...
  while (low <= high){

    // Find the midpoint between high and low indices
    const mid = Math.floor((low + high) / 2);
    // Compare the target value to the midpoint value
    const midVal = arr[mid];
    // If the target equals the midpoint...
    if (target === midVal) return mid;
    // Return the midpoint index
    // If the target is higher than the midpoint...
    else if (target > midVal) low = mid + 1;
    // Move the low pointer to midpoint + 1
    // If the target is less than the midpoint...
    // Move the high pointer to midpoint - 1
    else high = mid -1;
  }
    
  // Return -1 if the loop exits with overlapping pointers
  return -1;
}


module.exports = [linearSearch, binarySearch]