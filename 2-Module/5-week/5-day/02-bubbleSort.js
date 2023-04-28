/*
Bubble sort is a simple sorting algorithm that repeatedly iterates through a 
list of items, compares adjacent pairs of elements and swaps them if they are in 
the wrong order. This algorithm gets its name from the way smaller elements 
"bubble" to the top of the list during each iteration.

Bubble sort has a time complexity of O(n^2), where n is the number of elements 
in the list, which makes it inefficient for large lists. However, it has the 
advantage of being easy to understand and implement which makes it a perfect
starting place for our explorations.

Here's how the algorithm works:

1. Start at the beginning of the list.

2. Compare the first two elements. If the first element is greater than the 
   second element, swap them.

3. Move to the next pair of elements (i.e., the second and third elements), 
   and repeat step 2.

4. Continue in this manner until the end of the list is reached.

5. If any swaps were made in steps 2-4, repeat the process from the beginning of 
   the list again. Otherwise, the list is sorted.

During each pass through the list, the largest element "bubbles up" to the end 
of the list, which is why the algorithm is called "bubble sort."
*/