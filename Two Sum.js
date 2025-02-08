//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//num1 + num2 = target -> num1 = target - num2

const twoSum = function (nums, target) {
  let d = {}
  for(let i = 0; i < nums.length; i++){
    let num1 = nums[i]
    let num2 = target - num1
    if(d[num2] >= 0){
      return [d[num2], i]
    }
    d[num1] = i
  }
};