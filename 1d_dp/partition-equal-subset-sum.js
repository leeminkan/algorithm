/**
 * @param {number[]} nums
 * @return {boolean}
 */
var getSum = (nums, sum = 0) => {
  for (const num of nums) sum += num;
  return sum;
};

var canPartition = function (nums) {
  const isEmpty = nums.length === 0;
  if (isEmpty) return false;

  const sum = getSum(nums);
  const isEven = sum % 2 === 0;
  if (!isEven) return false;

  const subSetSum = sum >> 1;

  let dp = new Set([0]);

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const newDp = new Set();
    for (const value of dp) {
      if (element + value === subSetSum) return true;
      newDp.add(element + value);
      newDp.add(value);
    }
    dp = newDp;
  }

  return dp.has(subSetSum);
};

console.log("result", canPartition([1, 5, 11, 5]));
console.log(
  "result",
  canPartition([
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 99, 97,
  ])
);
