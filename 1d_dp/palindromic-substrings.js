/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = (s, count = 0) => {
  const dp = new Array(s.length).fill().map(() => new Array(s.length).fill(0));

  // base case 1 char
  for (let index = 0; index < s.length; index++) {
    dp[index][index] = 1;
  }
  count += s.length;

  // base case 2 chars
  for (let index = 0; index < s.length - 1; index++) {
    if (s[index] === s[index + 1]) {
      dp[index][index + 1] = 1;
      count++;
    } else {
      dp[index][index + 1] = 0;
    }
  }

  // case > 2 chars
  const fn = (left, right) => {
    if (dp[left][right] > -1) {
      return dp[left][right];
    }

    let result = 0;
    if (s[left] === s[right]) {
      result = fn(left + 1, right - 1);
    }

    dp[left][right] = result;

    return dp[left][right];
  };

  for (let caseLength = 3; caseLength <= s.length; caseLength++) {
    let left = 0;
    while (left <= s.length - caseLength) {
      count += fn(left, left + caseLength - 1);
      left++;
    }
  }

  return count;
};

console.log("countSubstrings", countSubstrings("aaaba"));
