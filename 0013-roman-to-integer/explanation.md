# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Roman numerals consist of combinations of specific letters that represent different values. To convert a Roman numeral to an integer, we need to consider the unique combinations that represent specific numbers. The given solution provides a straightforward approach to this problem by using a hash map to store the Roman numerals and their corresponding integer values.



# Approach
<!-- Describe your approach to solving the problem. -->
1. Define a hash map called romans, where each Roman numeral is a key, and its corresponding integer value is the value.

2. Create an array called `subtractions` containing Roman numerals that represent subtraction cases (e.g., IV, IX, XL, XC, CD, CM).

3. Define the function romanToInt that takes a Roman numeral string s as input.

4. Split the Roman numeral string s into an array of characters using `s.split("")`. This step allows us to work with individual Roman numeral characters.

5. Initialize a variable sum to store the total integer value of the Roman numeral.

6. Start a loop to iterate through the characters in the array.

7. Check if the current Roman numeral combined with the next Roman numeral forms a subtraction case. To do this, use `subtractions.includes(num[i] + num[i+1])`.

8. If it is a subtraction case, concatenate the current and next Roman numerals into a string str. Add the integer value of str to the sum, and increment the loop index by one `(i++)`. This accounts for the fact that we have already considered two Roman numerals in the subtraction case.

9. If it is not a subtraction case, directly add the integer value of the current Roman numeral to the sum.

10. Continue the loop until all characters in the Roman numeral string have been processed.

11. After the loop, return the final value of sum, which represents the integer equivalent of the Roman numeral.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
he time complexity of this solution is O(n), where n is the number of characters in the Roman numeral string `s`. The loop iterates through each character once.

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1) because the hash map romans and `subtractions` array have constant space. The space used for the input `s` and other variables is negligible and does not depend on the input size.

# Code
```
/**
 * @param {string} s
 * @return {number}
 */
 let romans = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    } 
    
let subtractions =["IV","IX","XL","XC","CD","CM"];

var romanToInt = function(s) {
    let num = s.split(""); 
    let sum = 0;
    for (let i=0; i<num.length; i++){
        if(subtractions.includes(num[i]+num[i+1])){
            let str = num[i]+num[i+1].toString(); 
            sum += romans[str];
            i++;
        } else {
        sum += romans[num[i]];
        }
    }
    return sum; 
};


```
