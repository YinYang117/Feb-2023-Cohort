
// function bubbleSort(arr) {
//   let swapped = true;
//   while (swapped) {
//     swapped = false;
//     // Iterate through the array
//     for (let i = 0; i < arr.length; i++) {

//       // If the current value is greater than its neighbor to the right
//       // Swap those values
//       if (arr[i] > arr[i + 1]) {
//         swapped = true;
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         // let tmp = arr[i];
//         // arr[i] = arr[i + 1];
//         // arr[i + 1] = tmp;
//         console.log(arr.join(","));
//       }
//       // Do not move this console.log

//       // If you get to the end of the array and no swaps have occurred, return

//       // Otherwise, repeat from the beginning
//     }
//   }
//   return arr;

// }

function bubbleSort(arr) {
  let swapped = false;
  // Iterate through the array
  for (let i = 0; i < arr.length; i++){
    // If the current value is greater than its neighbor to the right
    if (arr[i] > arr[i +1]){
      swapped = true;
      // Swap those values
      [[arr[i], arr[i+1]] = [arr[i+1], arr[i]]]
      // Do not move this console.log
      console.log(arr.join(","));
    }
  }
  // If you get to the end of the array and no swaps have occurred, return
  if (swapped === false) return arr
  // Otherwise, repeat from the beginning
  else bubbleSort(arr);
}

module.exports = bubbleSort;