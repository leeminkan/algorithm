/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0;

  for (let index = 0; index < 32; index++) {
    result = result << 1;
    result = result | (n & 1);
    n = n >> 1;
  }

  return result;
};
console.log("result", reverseBits(43261596));
