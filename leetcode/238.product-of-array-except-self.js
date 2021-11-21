/**
 * @param {number[]} nums
 * @return {number[]}
 */
//  方法1
// var productExceptSelf = function(nums) {
//     let i = 0;
//     let res = [];
//     while(i < nums.length){
//         let j = 0;
//         res.push(sum(i,j));
//         i++;
//     }
//     function sum(i,j){
//         let sum1 = 1;
//         if(i === j){
//             j++;
//         }
//         while(j < nums.length){
//             sum1 = nums[j]*sum1;
//             j++;
//             if(i === j){
//                 j++;
//             };
//         }
//         return sum1;
//     }
//     return res;
// };
// 方法2
var productExceptSelf = function(nums) {
    let i = 0;
    let L = nums.length
    let res = [];
    let res_l = [];
    let res_r = [];
    res_l[0] = 1;
    res_r[L-1] = 1;
    for (let j = 1; j < L; j++) {
        res_l[j] = res_l[j-1] * nums[j - 1];
    }
    for (let j = L-2; j >= 0 ; j--) {
        res_r[j] = res_r[j+1] * nums[j+1];
    }
    for (let j = 0; j < L; j++) {
        res[j] = res_l[j] * res_r[j];
    }
    return res;
};