/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let i = digits.length - 1;

  while (digits[i] + 1 === 10) {
    digits[i] = 0;
    i -= 1;
  }

  if (i < 0) {
    digits.unshift(1);
  } else {
    digits[i] += 1;
  }

  return digits;
};

console.log("result", plusOne([1, 2, 3]));
