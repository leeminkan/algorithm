/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };

    const result = [];
    const build = [[]];

    for (let i = 0; i < digits.length; i++) {
        const max = build.length;
        for (let k = 0; k < max; k++) {
            for (let j = 0; j < map[digits[i]].length; j++) {
                const char = map[digits[i]][j];
                let item = [...build[k]];
                item.push(char);
                if (item.length === digits.length) result.push(item.join(''));
                else build.push(item);
            }
        }
    }

    return result;
};

console.log(letterCombinations("23"));