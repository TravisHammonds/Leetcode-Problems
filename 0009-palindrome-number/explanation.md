# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
A palindrome number is a number that reads the same backward as forward. To determine if a given integer x is a palindrome, we can convert it into a string, reverse the string, and then compare it with the original string. If the reversed string is the same as the original string, then the number is a palindrome. Otherwise, it is not a palindrome.

By converting the integer x to a string, we can easily manipulate its digits and check for palindromic properties. The conversion to a string allows us to use string-specific methods like split(), reverse(), and join() to work with the digits efficiently. After reversing the string, we convert it back to an integer to compare it with the original integer x. This approach allows us to avoid complex mathematical operations on the number itself.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Define the function `isPalindrome` that takes an integer `x` as input.

2. Convert the integer `x` to a string using the `toString() `method. This conversion enables us to work with individual digits as characters.

3. Split the string into an array of characters using the `split("")` method. This step breaks the number into its individual digits.

4. Reverse the array of characters using the `reverse()` method. This step effectively reverses the order of digits.

5. Join the reversed array of characters back into a string using the `join("")` method. This step reconstructs the reversed number as a string.

6. Convert the reversed string back to a number using `Number()` and store it in the `reverse` variable.

7. Compare the reversed number `reverse` with the original number `x`. If they are equal, it means the number is a palindrome, and the function returns `true`. Otherwise, it returns `false`.

The approach uses string manipulation techniques to determine if the given integer is a palindrome number, providing an efficient and straightforward solution to the problem.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this solution is O(n), where n is the number of digits in the integer `x`. The operations involve converting the number to a string, reversing the string, and comparing the reversed number with the original number. These operations take linear time based on the number of digits.

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n) as well, where n is the number of digits in the integer `x`. The space is used to store the reversed string.

# Code
```
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = x.toString().split("").reverse().join("");
    return (reverse == x); 
};

```
