/*
Selection sort is a sorting algorithm that sorts an array by repeatedly finding 
the minimum element from the unsorted part of the array and putting it at the 
beginning of the sorted part of the array. 

Here's how it works by modifying the array in-place:

1. Start with the first element of the array, which is the first element of the 
   sorted part of the array, and the remaining part of the array is the unsorted 
   part.

2. Find the minimum element in the unsorted part of the array.

3. Swap the minimum element with the first element of the unsorted part of the 
   array, so that the minimum element is now the last element of the sorted part 
   of the array.

4. Repeat steps 2-3 for the remaining unsorted part of the array until the 
   entire array is sorted. 
   
To illustrate this algorithm, let's consider an example. Suppose we have the 
following array of numbers:

5, 3, 8, 6, 7, 2

We can use selection sort to sort this array as follows:

We start with the first element (5), which we will consider as the first member 
in the sorted part of the array, and consider the remaining part of the array 
(3, 8, 6, 7, 2) as the unsorted part.

We find the minimum element in the unsorted part of the array, which is 2.

We swap 2 with the first element of the unsorted part of the array (i.e., 5), 
so that the minimum element (2) is now the last element of the sorted part of 
the array. The array becomes:

2, 3, 8, 6, 7, 5

We repeat steps 2-3 for the remaining unsorted part of the array (3, 8, 6, 7, 5).

We find the minimum element in the unsorted part of the array, which is 3.

3 is already in place, so now our sorted elements are  (2, 3) and the unsorted
elements are (8, 6, 7, 5). The array stays as it was before:

2, 3, 8, 6, 7, 5

We repeat steps 2-3 for the remaining unsorted part of the array (8, 6, 7, 5).

We find the minimum element in the unsorted part of the array, which is 5.

We swap 5 with the first element of the unsorted part of the array (8), so that 
the minimum element (5) is now the last element of the sorted part of the array. 

The array becomes:

2, 3, 5, 6, 7, 8

We repeat steps 2-3, finding 6, which is already in place. The array does not
change

2, 3, 5, 6, 7, 8

We repeat steps 2-3 again, and again, finding that the rest of our array is now
in place.

Despite the fact that after we swapped places for 8 and 5, our algorithm is
written to believe that the sorted data ends with 5. It will continue to check
what the lowest number in the unsorted data set is, and then move it into place.
After the algorithm has finished its work, the array is sorted. 

Selection sort has a time complexity of O(n^2)
*/