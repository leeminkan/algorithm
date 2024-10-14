/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;

  while (x !== 0) {
    const digit = x % 10;

    if (isOutSide(result, digit)) return 0;

    x = Math.trunc(x / 10);
    result = result * 10 + digit;
  }

  return result;
};

const [MAX_INT, MIN_INT] = [2 ** 31 - 1, -(2 ** 31)];
const [MAX_MAIN_PART, MAX_REMAINDER] = [MAX_INT / 10, MAX_INT % 10];
const [MIN_MAIN_PART, MIN_REMAINDER] = [MIN_INT / 10, MIN_INT % 10];

const isOutSide = (result, digit) => {
  const isMaxOut =
    result > MAX_MAIN_PART ||
    (result === MAX_MAIN_PART && digit >= MAX_REMAINDER);
  const isMinOut =
    result < MIN_MAIN_PART ||
    (result === MIN_MAIN_PART && digit <= MIN_REMAINDER);

  return isMaxOut || isMinOut;
};

console.log(
  "result",
  reverse(
    -121312312321312312312312312312312132131241242342342342342312312312312312312312312312312312312312312312312343243123123223
  )
);
