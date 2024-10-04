/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0];

  const dp = new Array(nums.length).fill().map(() => null);
  let result = -Infinity;

  const fn = (index = 0) => {
    if (index === nums.length - 1) {
      dp[index] = {
        min: nums[index],
        max: nums[index],
      };
      result = Math.max(dp[index].max, result);
    }
    if (dp[index]) return dp[index];

    const nextItemMinMax = fn(index + 1);
    let max, min;
    if (nums[index] >= 0) {
      max = Math.max(nums[index], nums[index] * nextItemMinMax.max);
      min = Math.min(nums[index], nums[index] * nextItemMinMax.min);
    } else {
      max = Math.max(nums[index], nums[index] * nextItemMinMax.min);
      min = Math.min(nums[index], nums[index] * nextItemMinMax.max);
    }

    dp[index] = {
      min,
      max,
    };

    result = Math.max(dp[index].max, result);

    return dp[index];
  };

  fn();

  return result;
};

// console.log("maxProduct", maxProduct([2, 3, -2, 4]));
// console.log("maxProduct", maxProduct([0, 2]));
console.log("maxProduct", maxProduct([-2, 0, -1]));
