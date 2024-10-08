/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n) {
    count += n & 1;
    n = n >> 1;
  }

  return count;
};

console.log("Result", hammingWeight(11));
console.log("Result", hammingWeight(128));
console.log("Result", hammingWeight(2147483645));
