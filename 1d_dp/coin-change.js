/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const sortedCoin = coins.sort((a, b) => b - a);
  const memo = new Array(amount).fill(0);

  const fn = (currentAmount = amount) => {
    if (currentAmount < 0) return -1;
    if (currentAmount < 1) return 0;
    if (memo[currentAmount - 1] !== 0) return memo[currentAmount - 1];

    let min = Infinity;
    for (let index = 0; index < sortedCoin.length; index++) {
      const cost = fn(currentAmount - sortedCoin[index]);
      if (cost >= 0 && cost < min) {
        min = cost + 1;
      }
    }

    memo[currentAmount - 1] = min !== Infinity ? min : -1;

    return memo[currentAmount - 1];
  };

  return fn();
};

// console.log("coinChange", coinChange([1, 5, 2], 11));
// console.log(
//   "coinChange",
//   coinChange([411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422], 9864)
// );
// console.log("coinChange", coinChange([2], 3));
console.log("coinChange", coinChange([186, 419, 83, 408], 6249));

// var coinChange = function (coins, amount) {
//     const sortedCoin = coins.sort((a, b) => b - a);
//     let result;
//     const fn = (currentIndex = 0, currentAmount = amount, count = 0) => {
//       if (currentAmount < 0) return -1;
//       if (currentAmount === 0) return count;

//       for (let index = currentIndex; index < sortedCoin.length; index++) {
//         const numberOfCoins = fn(
//           index,
//           currentAmount - sortedCoin[index],
//           count + 1
//         );

//         if (numberOfCoins >= 0) {
//           result = result ? Math.min(result, numberOfCoins) : numberOfCoins;
//         }
//       }

//       return result;
//     };

//     return fn() ?? 0;
//   };
