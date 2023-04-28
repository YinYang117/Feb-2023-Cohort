/*
Quick sort is sorting algorithm that uses the divide-and-conquer approach to
sort an array. It works by selecting a "pivot" element from the array, 
partitioning the array into two sub-arrays based on the pivot element, and then 
recursively sorting the two sub-arrays. Here's how it works:

1.  Choose a pivot element from the array. This element will be used to 
    partition the array into two sub-arrays.

2.  Partition the array into two sub-arrays: one sub-array containing all 
    elements less than or equal to the pivot, and another sub-array containing 
    all elements greater than the pivot.

3.  Recursively sort the sub-array containing elements less than or equal to the 
    pivot.

4.  Recursively sort the sub-array containing elements greater than the pivot.

5.  Concatenate the sorted sub-arrays back together to form the sorted array.

To illustrate this algorithm, let's consider an example. Suppose we have the 
following unsorted array of numbers:

5, 3, 8, 6, 7, 2
We can use quick sort to sort this array as follows:

We choose a pivot element from the array. Let's choose the first element, which 
is 5.

We partition the array into two sub-arrays:

3, 2     5     8, 6, 7
All elements less than or equal to 5 are placed in the left sub-array, and all 
elements greater than 5 are placed in the right sub-array.

We recursively sort the left sub-array (3, 2). To do this, we choose a new pivot 
element (3) and partition the array into two sub-arrays:

2     3
Both sub-arrays contain only one element, so they are considered sorted.

We recursively sort the right sub-array (8, 6, 7). To do this, we choose a new 
pivot element (8) and partition the array into two sub-arrays:

6, 7     8
We then recursively sort the left sub-array (6, 7) by choosing a new pivot 
element (6) and partitioning the array:

6     7
Both sub-arrays contain only one element, so they are considered sorted.

Next, we recursively sort the right sub-array (8) by considering it as a 
single-element array.

We concatenate the sorted sub-arrays back together to form the final sorted 
array:

2, 3, 5, 6, 7, 8
Quick sort has an average time complexity of O(n log n), where n is the number 
of elements in the array. However, its worst-case time complexity can be O(n^2) 
if the chosen pivot element consistently partitions the array into two 
sub-arrays of unequal size. Various techniques, such as choosing a random pivot 
element or using the median-of-three method, can be used to mitigate this issue.
*/