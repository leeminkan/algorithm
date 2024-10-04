/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const table = new Array(s.length)
    .fill()
    .map(() => new Array(s.length).fill(undefined));

  const fn = (left = 0, right = 0) => {
    // base case
    if (left > s.length - 1) return left === right ? 1 : 0;
    if (left === s.length - 1 && right > left) return 0;

    if (table[left][right] !== undefined) return table[left][right];

    const code = left === right ? s[left] : s[left] + s[right];
    if (s[left] === "0" || code < 1 || code > 26) {
      table[left][right] = 0;
      return 0;
    }

    table[left][right] = fn(right + 1, right + 1) + fn(right + 1, right + 2);

    return table[left][right];
  };

  return fn(0, 0) + fn(0, 1);
};

console.log("Result", numDecodings("02"));
