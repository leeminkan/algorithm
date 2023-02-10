/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0];
    let sumSubset = nums[0];
    for (let index = 1; index < nums.length; index++) {
        if (sumSubset < 0) {
            sumSubset = nums[index];
        } else {
            sumSubset += nums[index];
        }
        max = Math.max(max, sumSubset);
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));