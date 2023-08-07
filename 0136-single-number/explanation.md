# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To find the single number that appears only once, we can take advantage of the bitwise XOR operation. The bitwise XOR operator (^) compares the corresponding bits of two numbers and returns a new number where each bit is set to 1 if the corresponding bits of the two numbers are different, and 0 if they are the same.

Since the XOR operation has the property of being commutative and associative, we can XOR all the elements in the array together. The XOR operation will effectively cancel out all the duplicate numbers, leaving only the single number in the result.

# Approach
1. The reduce method is called on the nums array.
2. The callback function (acc, num) => acc ^ num is used. The ^ operator performs bitwise XOR, which effectively cancels out the numbers that appear twice, leaving only the single number in acc.
3. We start the reduction with an initial value of 0 by providing it as the second argument to reduce. This ensures that XORing with 0 doesn't change the value in acc.
4. The reduce method returns the final accumulated value, which is the single number that appears only once.

More on XORing: 

The bitwise XOR operator (^) is a binary operator that performs a bitwise exclusive OR operation between two binary numbers. It compares the corresponding bits of two numbers and returns a new number where each bit is set to 1 if the corresponding bits of the two numbers are different, and 0 if they are the same.

Given the array [2, 2, 1], we want to find the number that appears only once. We can use the bitwise XOR operator to cancel out the numbers that appear twice, leaving only the single number.

1. Initialize the acc (accumulator) with 0.
2. Start the reduction process by iterating through the array:
* First iteration: acc = 0 ^ 2. The binary representation of 0 is 0000, and the binary representation of 2 is 0010. The bitwise XOR of 0000 and 0010 gives 0010, which is 2.
* Second iteration: acc = 2 ^ 2. The bitwise XOR of 0010 and 0010 gives 0000, which is 0.
* Third iteration: acc = 0 ^ 1. The bitwise XOR of 0000 and 0001 gives 0001, which is 1.

After iterating through the array, the acc will be left with the value 1, which is the single number that appears only once in the array.

In essence, the XOR operation effectively cancels out the duplicate numbers because XORing a number with itself results in 0. The final result is the number that appears only once in the array, as all the duplicates have been eliminated.

This approach works because the bitwise XOR operation is both commutative and associative. So, no matter the order of the elements in the array, the result will always be the same, and the single number will be correctly isolated.
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
* The .reduce() method iterates through the entire array once.
* Each iteration involves a constant-time operation (bitwise XOR), which takes O(1) time.

The total time complexity is therefore O(n), where n is the number of elements in the input array.

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
* The solution uses a constant amount of additional space (the acc variable) to keep track of the bitwise XOR result.
* The space used does not depend on the size of the input array.

Hence, the space complexity is O(1), indicating that the solution is performing the operation in-place without using additional data structures that grow with the size of the input array.

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce((acc, num) => acc ^ num, 0);
}
```
