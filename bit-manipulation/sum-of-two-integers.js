/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b !== 0) {
    const xor = a ^ b;
    const next = (a & b) << 1;

    a = xor;
    b = next;
  }

  return a;
};

console.log("result", getSum(1, 2));
