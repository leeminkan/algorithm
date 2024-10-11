/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let result = 0;
  for (let index = 0; index <= nums.length; index++) {
    result += index - (nums[index] ?? 0);
  }
  return result;
};

console.log("result", missingNumber([3, 0, 1]));
