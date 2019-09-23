# Array Binary Search
Binary search in a sorted, 1-dimensional array

## Challenge
Write a function called `BinarySearch` which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency
I decided to use a brute force approach to take a new, empty array, then loop through the given array, and finally copy the iterated array into the new array in reverse order. I did some looking at recurison and think that may be a more efficient approach, but I haven't quite worked out how to solve using recursion.

## Solution
![binary-search](/challenges/assets/binary-search.png)

