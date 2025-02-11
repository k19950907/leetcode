const longestCommonPrefix = function (strs) {
  if(strs.length == 0) {
    return ""
  }
  
  let perfix = strs[0]
  
  for(let i = 1; i < strs.length; i++) {
    while(strs[i].indexOf(perfix) !== 0) {
      perfix = perfix.substring(0, perfix.length - 1)
    }
    if(perfix.length == 0) {
      return ""
    }
  }

  return perfix
};