/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];
    const backTrack = (s, moveIndex = 0, subset = []) => {
        if (moveIndex >= s.length) return s.length === 0 && result.push([...subset]);

        if (isPalindrome(s.slice(0, moveIndex + 1))) {
            subset.push(s.slice(0, moveIndex + 1));
            backTrack(s.slice(moveIndex + 1, s.length), 0, subset);
            subset.pop();
        }
        backTrack(s, moveIndex + 1, subset);
    }

    backTrack(s);
    return result;
};

const isPalindrome = (s) => {
    let left = 0, right = s.length - 1;
    while (left <= right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(partition("cdd"));