/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let buyIndex = 0, sellIndex = 1;

    while (sellIndex < prices.length) {
        let canSlide = prices[buyIndex] > prices[sellIndex];
        if (canSlide) buyIndex = sellIndex;
        max = Math.max(max, prices[sellIndex] - prices[buyIndex]);
        sellIndex++;
    }
    
    return max;
};

console.log(maxProfit([7,1,5,3,6,4]));