

function selectionSort(arr) {

  // Copy the original array
  const copy = [...arr];
  // Create an array to store the sorted values
  const sorted = [];
  // While the array is not empty...
  while (copy.length) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    // const mindex = copy.indexOf(Math.min(...copy));
    // // Save and remove the value at the min index
    // const min = copy.splice(mindex, 1);
    // Add the min value to the end of the sorted array
    // sorted.push(...min);
    let min, mindex;
    for (let i = 0; i < copy.length; i++) {
      if (min === undefined || min > copy[i]) {
        min = copy[i]
        mindex = i;
      }
    }
    sorted.push(min)
    copy.splice(mindex, 1)
  }
  return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let sorted = 0;
  // Repeat while the unsorted half is not empty:
  while (sorted < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let min, mindex;
    for (let i = sorted; i < arr.length; i++) {
      if (min === undefined || min > arr[i]) {
        min = arr[i]
        mindex = i;
      }
    }
    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = mindex; i > sorted; i--) arr[i] = arr[i-1]
    // Put the min value at the divider
    arr[sorted] = min;
    // Increment the divider and repeat
    sorted++;
  }
  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];
