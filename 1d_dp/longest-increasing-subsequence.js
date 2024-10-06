/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(0);
  dp[nums.length] = 1;
  let result = 1;

  const fn = (currIndex = 0) => {
    if (dp[currIndex]) {
      return dp[currIndex];
    }

    let max = 0;
    for (let index = currIndex + 1; index < nums.length; index++) {
      const result = fn(index);
      if (nums[currIndex] < nums[index]) {
        max = Math.max(result, max);
      }
    }

    dp[currIndex] = 1 + max;
    result = Math.max(result, dp[currIndex]);

    return dp[currIndex];
  };

  fn();

  return result;
};

console.log("result", lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
