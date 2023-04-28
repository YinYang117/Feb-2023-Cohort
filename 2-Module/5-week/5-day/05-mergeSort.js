/*
Merge sort is a sorting algorithm that uses the divide-and-conquer approach to 
sort an array. It works by recursively dividing the array into two halves, 
sorting each half, and then merging the sorted halves back together. 

Here's how it works:

1.  Divide the unsorted array into two halves.

2.  Recursively sort the first half of the array.

3.  Recursively sort the second half of the array.

4.  Merge the two sorted halves back together to form the sorted array.

To illustrate this algorithm, let's consider an example. Suppose we have the 
following unsorted array of numbers:

5, 3, 8, 6, 7, 2
We can use merge sort to sort this array as follows:

We divide the array into two halves:

5, 3, 8     6, 7, 2
We recursively call our function on the first half of the array:

5, 3, 8
We divide this half into two halves:

5, 3      8
We recurse again on the first half:

5, 3
We divide this half into two halves:

5      3

Since both halves have only one element, they are considered sorted. 
We then merge the two sorted halves back together, ensuring that our merge
function takes care to put them back together in sorted order:

3, 5

Since the other half of the set was only a single element, it is already sorted.
We call our merge again, making sure our numbers come back together in a sorted
order. This gives us the sorted first half:

3, 5, 8
We repeat the process on the original second half of the array:

6, 7, 2
We divide this half into two halves:

 6, 7     2
We recursively sort the first half:

6, 7
We divide this half into two halves:

6      7
Since both halves have only one element, they are considered sorted. 
We then merge the two sorted halves back together:

6, 7
We merge back in the other part, giving us the sorted second half:

2, 6, 7
We merge the two sorted halves (3, 5, 8 and 2, 6, 7) back together to form the 
final sorted array:

2, 3, 5, 6, 7, 8
Merge sort has a time complexity of O(n log n), where n is the number of 
elements in the array
*/