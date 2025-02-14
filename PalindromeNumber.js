//Given an integer x, return true if x is a palindrome, and false otherwise.
//An integer is a palindrome when it reads the same forward and backward.
//For example, 121 is a palindrome while 123 is not.

//const isPalindrome = function (x) {
//  if(x < 0) {
//    return false
//  }
//  const arr = Array.from(String(x), Number)
//  length = arr.length
//  for(let i = 0; i <= length/2; i++ ) {
//    if (arr[i] != arr[length-1-i]) {
//      return false
//    }
//  }

//  return true
//};

const isPalindrome = function(x) {
  if(x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }
  let reversed = 0
  let original = x
  while(original > reversed) {
    reversed = reversed * 10 + original % 10
    original = Math.floor(original / 10)
  }

  return original === reversed || original === Math.floor(reversed / 10)
}