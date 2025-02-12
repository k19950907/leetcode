public class Solution {
  public bool IsValid(string s) {
    Stack<char> stack = new Stack<char>();
    Dictionary<char, char> map = new Dictionary<char, char>{
      {')', '('}, 
      {'}', '{'}, 
      {']', '['}
    };

    if(s.Length == 0) {
      return false;
    }

    for(int i = 0; i < s.Length; i++) {
      char c = s[i];

      if(map.ContainsKey(c)) {
        char top = stack.Count > 0 ? stack.Pop(): '#';

        if(map[c] != top) {
          return false;
        }
      } else {
        stack.Push(c);
      };
    };

    if(stack.Count == 0) {
      return true;
    } else {
      return false;
    };
  }
};