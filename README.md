# Insert Shift Array
Insert and shift an array in middle at index

# Challenge
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the beginning index.

# Approach & Efficiency
I set the array.length to arr.length -1, then interated over the array, shifting each position to -1, then inserted the new value at position 0.

# Solution
![array shift](/challenges/assets/array-shift.png)

