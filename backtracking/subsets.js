// https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function (nums) {
//     const result = [];
//     for (let maxItem = 0; maxItem <= nums.length; maxItem++) {
//         console.log({ maxItem })
//         const choose = (subset, current) => {
//             console.log({
//                 subset, current
//             })
//             console.log({ subset })
//             if (current >= maxItem) {
//                 if (subset.length === maxItem) {
//                     console.log("done", [
//                         ...result,
//                         subset
//                     ]);
//                     return result.push(subset)
//                 }
//             };
//             console.log("next");
//             for (let index = current; index < nums.length; index++) {
//                 const element = nums[index];
//                 console.log("loop", {
//                     index,
//                 })
//                 choose([
//                     ...subset,
//                     element
//                 ], index + 1);
//             }
//         }
//         choose([], 0);
//     }
//     return result;
// };


var subsets = (nums) => {
    return bfs(nums)
}

const bfs = (nums, subsets = [[]]) => {
    for (const num of nums) {
        console.log("1=====", {nums,subsets})
        const levels = subsets.length
        console.log({levels})

        for (let level = 0; level < levels; level++) {
            console.log({level})
            const nextLevel = [ ...subsets[level], num ]

            subsets.push(nextLevel)
        }
        console.log("2=====", {nums,subsets})
    }

    return subsets
}


console.log(subsets([1, 2, 3]));