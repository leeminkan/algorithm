/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    return String(BigInt(num.join('')) + BigInt(k)).split('');
};

console.log(addToArrayForm([1,2,0,0], 34)); // [1,2,3,4]