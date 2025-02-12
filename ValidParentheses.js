const isValid = function (s) {
  const map = { ")": "(", "}": "{", "]": "[" }
  let stack = []

  if(s.length === 0) {
    return false
  }

  for(let i = 0; i < s.length; i++) {
    let char = s[i]

    if(char in map) {
      let top = stack.pop() || "#"

      if (map[char] !== top) {
        return false
      } 
    } else {
      stack.push(char)
    }
  }

  if(stack.length === 0) {
    return true
  } else {
    return false
  }
};