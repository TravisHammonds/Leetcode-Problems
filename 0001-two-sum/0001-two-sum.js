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

