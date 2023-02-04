/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let subset = [];
    let mapSubset = {};
    const result = [];

    const backTrack = (currentIndex) => {
        subset.push(nums[currentIndex]);
        mapSubset[currentIndex] = true;
        if (subset.length === nums.length) {
            result.push([...subset]);
        } else {
            for (let index = 0; index < nums.length; index++) {
                if (!mapSubset[index]) {
                    backTrack(index);
                }
            }
        }
        subset.pop();
        delete mapSubset[currentIndex];
    }
    for (let index = 0; index < nums.length; index++) {
        backTrack(index);
    }

    return result;
};

console.log(permute([1,2,3]));