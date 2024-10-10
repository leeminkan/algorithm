/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const dp = [0];
  for (let i = 1; i <= n; i++) {
    const mid = i >> 1;
    const bit = i & 1;
    const result = dp[mid] + bit;
    dp.push(result);
  }

  return dp;
};

console.log("result", countBits());
