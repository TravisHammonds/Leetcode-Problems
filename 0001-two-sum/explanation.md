# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To efficiently find two numbers that add up to the target, we can utilize a hash map (JavaScript object) to store the numbers we have encountered so far. As we iterate through the array, for each current number `num1`, we calculate its complement `complement = target - num1`. We then check if the `complement` exists in the hash map. If it does, we have found the pair of numbers that add up to the target. If not, we add `num1` to the hash map with its index as the value. This way, we can easily look up the complement of future numbers we encounter.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create an empty hash map called `numToIndexMap` to store the numbers and their indices.

2. Start a loop to iterate through the elements of the `nums` array. Let `num1` be the current element at index `i`.

3. Calculate the `complement` as `target` - `num1`.

4. Check if the `complement` exists in the `numToIndexMap`. If it does, we have found the two numbers that add up to the `target`. Return the indices `[numToIndexMap[complement], i]`.

5. If the `complement` does not exist in the `numToIndexMap`, add `num1` to the hash map with its index `i`.

6. Continue the loop until we find a pair that adds up to the `target` or exhaust all elements in the array.

7. If we don't find a solution after iterating through the entire array, return an empty array `[]`, indicating that no pair was found that adds up to the target.


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this optimized solution is O(n), where n is the number of elements in the input array. The loop iterates through the array once, and each operation inside the loop (accessing the hash map and performing hash map operations) takes constant time.

- Space complexity: 0(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n) since the hash map numToIndexMap can store at most n elements in the worst case, where n is the number of elements in the input array.

# Code
```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
  const numToIndexMap = {};
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];
    const complement = target - num1;
    if (numToIndexMap.hasOwnProperty(complement)) {
      return [numToIndexMap[complement], i];
    } else {}
    numToIndexMap[num1] = i;
  }
  return [];
};


```
