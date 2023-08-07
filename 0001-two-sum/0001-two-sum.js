/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    let returnArray = [];
    for (let i=0; returnArray.length < 2; i++){
        let num1 = nums[i];
        let j = 1+i; 
        for(j; j<nums.length; j++){
            let num2 = nums[j];
            if(num1 + num2 == target){
                returnArray.push(i,j);
            }
        }
    }
    return returnArray; 
};