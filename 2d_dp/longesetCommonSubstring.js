/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dic = initMemo(text1, text2);
  const fn = (index1, index2) => {
    if (index1 > text1.length - 1 || index2 > text2.length - 1) return 0;
    if (dic[index1][index2]) return dic[index1][index2];

    const left = fn(index1 + 1, index2);
    const index = text2.indexOf(text1[index1], index2);
    const right = index > -1 ? 1 + fn(index1 + 1, index + 1) : 0;

    const result = Math.max(left, right);
    dic[index1][index2] = result;
    return result;
  };

  return fn(0, 0);
};

var initMemo = (text1, text2) =>
  new Array(text1.length + 1)
    .fill()
    .map(() => new Array(text2.length + 1).fill(null));

console.log(
  "🚀 ~ longestCommonSubsequence ~ longestCommonSubsequence:",
  longestCommonSubsequence("abcde", "ace")
);
