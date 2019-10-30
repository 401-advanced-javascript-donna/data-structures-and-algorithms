# Merge Sort Algorithm
## Challenge and Approach
Merge sort is a divide and conquer sort algorithm. When considering O(n log n), it is considered a well respected algorithm. 

In short, merge sort divides an array into equal halves, then recombines them into sorted order.

### Steps:
1. If there is only one element in the list, it is, by default, already sorted, and can be returned
1. If there is more than one element in the list, recursively divide the list into two halves until it can no longer be divided
1. Merge the smaller lists into a new list in sorted order

