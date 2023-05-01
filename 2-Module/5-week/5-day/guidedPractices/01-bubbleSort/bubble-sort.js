
function bubbleSort(arr) {

  // Iterate through the array
  let swapped = false;
  // If the current value is greater than its neighbor to the right
  // Swap those values
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swapped = true;
        [[arr[i]], arr[i + 1]] = [[arr[i + 1]], arr[i]];
        console.log(arr.join(",")); //console.log after each swap
      };
    }
  } while (swapped)
  // Do not move this console.log

  // If you get to the end of the array and no swaps have occurred, return
  return arr;
  // Otherwise, repeat from the beginning

}

module.exports = bubbleSort;