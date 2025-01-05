/*
Given an array of integers nums and an integer target,return indices of the two 
numbers such that they add up to target.You may assume that each input would 
have exactly one solution,and you may not use the same element twice.
*/

var twoSum = function(nums, target) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap[complement] !== undefined) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
    return null;
};

// function getSumIndex(nums,startIndex,searchIndex,length,target) {
//     if (searchIndex >= length) {
//         return getSumIndex(nums,startIndex + 1,startIndex + 2,length,target);
//     }
//     if (startIndex >= length) {
//         return 0;
//     }
//     console.log(startIndex,searchIndex);
//     console.log((nums[startIndex] + nums[searchIndex]));
//     if ((nums[startIndex] + nums[searchIndex]) == target ) {
//         console.log((nums[startIndex] + nums[searchIndex]));
//         return [startIndex, searchIndex]
//     }
//     return getSumIndex(nums,startIndex,searchIndex + 1,length,target);
// }

let nums = [2,7,11,15];
let target = 17;
console.log(twoSum(nums,target));