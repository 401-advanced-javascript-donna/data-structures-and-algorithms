# FizzBuzzTree
## Challenge
Write a function called `FizzBuzzTree` which takes a tree as an argument.
Without utilizing any of the built-in methods available to your language, determine weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes:
* If the value is divisible by 3, replace the value with “Fizz”
* If the value is divisible by 5, replace the value with “Buzz”
* If the value is divisible by 3 and 5, replace the value with “FizzBuzz”

Return the tree with its new values.

## Aproach
I used the existing BST, then created a function using the modulo to check for values divisible by 3, 5, or 3 & 5, and replaced the value with "Fizz", "Buzz", or "FizzBuzz" accordingly.
