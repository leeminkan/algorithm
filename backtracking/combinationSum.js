/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function(candidates, target) {
//     // sort array
//     candidates.sort((a,b) => a-b);
//     const map = {'': 0};
//     const check = {};
//     const result = [];
//     let index = 0;
//     while (index < candidates.length) {
//         let flag = false;
//         for (const [key, value] of Object.entries(map)) {
//                 let nextKey = key === '' ? '' + candidates[index] : key + '_' + candidates[index];
//                 if (map[nextKey] || check[nextKey]) continue;
//                 if (value + candidates[index] == target ) {
//                     // Neu tim duoc thi them vao mang result
//                     check[nextKey] = true;
//                     result.push(nextKey.split('_'));
//                     flag = true;
//                 } else if (value + candidates[index] < target ) {
//                     // Neu con kha nang cong tiep thi them vao map
//                     map[nextKey] = value + candidates[index];
//                     flag = true;
//                 }
//                 // neu vuot qua thi bo qua
//         }

//         if (!flag) {
//             index++;
//         }
//     }
//     return result;
// }

/**
 * https://leetcode.com/problems/combination-sum/
 * Time O(N * ((Target/MIN) + 1)) | Space O(N * (Target/Min))
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function (candidates, target, index = 0, combination = [], combinations = []) {
//     const isBaseCase = target < 0;
//     if (isBaseCase) return combinations;

//     const isTarget = target === 0;
//     if (isTarget) return combinations.push(combination.slice());

//     for (let i = index; i < candidates.length; i++) {
//         backTrack(candidates, target, i, combination, combinations);
//     }

//     return combinations;
// }

// const backTrack = (candidates, target, i, combination, combinations) => {
//     combination.push(candidates[i]);
//         combinationSum(candidates, (target - candidates[i]), i, combination, combinations);
//     combination.pop();
// }


var combinationSum = function (candidates, target) {
    let result = [];
    let current = [];

    const backTrack = (cindex = 0, sum = 0) => {
        if (sum > target) {
            return;
        }
        if (sum == target) {
            return result.push(current.slice());
        }
        for (let index = cindex; index < candidates.length; index++) {
            current.push(candidates[index]);
            backTrack(index, sum + candidates[index]);
            current.pop();
        }
    }

    backTrack();
    return result;
}

console.log(combinationSum([2,3,6,7], 7));
// console.log(combinationSum([2,3,5], 8));
// console.log(combinationSum([3,12,9,11,6,7,8,5,4], 15));


