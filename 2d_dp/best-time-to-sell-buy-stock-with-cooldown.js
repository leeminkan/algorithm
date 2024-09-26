/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dic = {};
  const fn = (index, isBuying = true) => {
    // Base case
    if (index >= prices.length) {
      return 0;
    }

    // Cache
    if (dic[`${index}-${Number(isBuying)}`] !== undefined) {
      return dic[`${index}-${Number(isBuying)}`];
    }

    // Main flow
    const skipProfit = fn(index + 1, isBuying);
    if (isBuying) {
      const buyProfit = -prices[index] + fn(index + 1, false);
      dic[`${index}-${Number(isBuying)}`] = Math.max(skipProfit, buyProfit);
    } else {
      const sellProfit = prices[index] + fn(index + 2, true);
      dic[`${index}-${Number(isBuying)}`] = Math.max(skipProfit, sellProfit);
    }

    return dic[`${index}-${Number(isBuying)}`];
  };

  return fn(0);
};

console.log("maxProfit", maxProfit([1, 2, 3, 0, 2]));
