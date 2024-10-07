/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = nums[0];
  for (let index = 1; index < nums.length; index++) {
    const element = nums[index];
    result = result ^ element;
  }

  return result;
};

console.log("result", singleNumber([2, 2, 1]));
