/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let res1 = 0;
    let res = [];
    let i = 0;
    let j = 0;
    let sum = 0
    while (i < nums.length && j<nums.length){
        sum = sum+nums[j];
        if(sum < target){
            j++;
        }else {
            sum = 0;
            res.push(j-i+1);
            i++;
            j=i;
        }
    }
    if(res.length !== 0){
        if(res.length === 1){
            return res[0];
        }else{
            // for(let i = 1;i<res.length;i++){
            //     res1 = res[i] < res[i-1] ? res[i] : res1;
            // }
            res1 = Math.min(...res);
            return res1;
        }
    }else{
        return 0;
    }
};