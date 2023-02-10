/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let subString = '';
    for (let index = 0; index < s.length; index++) {
        let findIndex = subString.indexOf(s[index]);
        if (findIndex >= 0) {
            subString = subString.slice(findIndex + 1, subString.length);
        }
        subString += s[index];
        max = Math.max(max, subString.length);
    }

    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3