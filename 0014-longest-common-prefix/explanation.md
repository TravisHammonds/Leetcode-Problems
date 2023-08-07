# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires finding the longest common prefix among a given array of strings strs. To efficiently find the common prefix, we can adopt an optimized horizontal scanning approach. By comparing the characters of each string with the first string, we can progressively narrow down the common prefix.


# Approach
<!-- Describe your approach to solving the problem. -->
1. Check if the input `strs` array is empty. If it is, return an empty string as there is no common prefix.

2. Initialize the `prefix` variable as the first string in the strs array. We use this string as the initial common prefix candidate.

3. Loop through the rest of the strings in the `strs` array.

4. For each string, find the index where the current prefix is a substring using the `indexOf` method.

5. If the index is greater than 0, update the `prefix` to be the common prefix up to that index using `prefix.slice(0, prefix.length - 1)`. This effectively narrows down the common prefix.

6. Continue the loop until all strings have been processed.

7. After the loop, return the `prefix` as the longest common prefix found.

# Complexity
- Time complexity: O(n*m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this optimized solution is O(N*M), where N is the number of strings in the array `strs`, and M is the length of the longest string in `strs`. The solution involves a loop that iterates through each string's characters to find the common prefix.

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of the solution is O(1) since the space used is constant. The additional space is only used for the `prefix` variable to store the common prefix found so far, and it does not depend on the input size.

# Conclusion
This optimized horizontal scanning approach efficiently determines the longest common prefix among the given set of strings. It minimizes unnecessary iterations and provides a concise and effective approach to solving the problem. The function works correctly even with edge cases where the input array is empty or contains a single element.





# Code
```
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
    }

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
        }
    }

    return prefix;
};



```
