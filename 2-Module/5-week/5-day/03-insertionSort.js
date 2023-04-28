/*
Insertion sort is a sorting algorithm that is based on the idea of maintaining a 
sorted portion of the list and inserting each new element into its correct 
position within the sorted portion.

Here's a step-by-step breakdown of doing this in-place:

1. Start by considering the first element of the list as the sorted portion.

2. Move to the next element of the list and compare it with the previous 
   element(s) in the sorted portion.

3. If the current element is smaller than the previous element(s), shift the 
   previous element(s) one position to the right to make space for the current 
   element, and insert the current element in its correct position within the 
   sorted portion.

4. Repeat steps 2-3 for all remaining elements in the list.

5. At the end of the algorithm, the list will be sorted in ascending order.

To illustrate this algorithm, let's consider an example. Suppose we have the 
following list of numbers:

5, 3, 8, 6, 7, 2

We can use insertion sort to sort this list as follows:

The first element (5) is already sorted, so we consider the second element (3).

Since 3 is smaller than 5, we shift 5 one position to the right to make space 
for 3, and insert 3 in its correct position within the sorted portion. The list 
becomes:

3, 5, 8, 6, 7, 2

Next, we consider the third element (8). Since 8 is greater than 5, it is 
already in its correct position within the sorted portion, so we move to the 
next element.

The fourth element (6) is smaller than 8 so we shift 8 one position to the right 
to make space for 6, and insert 6 in its correct position within the sorted 
portion. The list becomes:

3, 5, 6, 8, 7, 2

The fifth element (7) is greater than 6 and 5, but smaller than 8. We insert it 
in its correct position within the sorted portion. The list becomes:

3, 5, 6, 7, 8, 2

Finally, we consider the last element (2). Since 2 is smaller than all previous
elements, we shift them one position to the right and insert 2 at the beginning 
of the list. The list becomes:

2, 3, 5, 6, 7, 8

At the end of the algorithm, the list is sorted in ascending order. With all of
this removal and insertion, it sounds like an array method like splice might be
pretty useful when implementing this sorting function. 
*/