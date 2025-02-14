public class Solution
{
  public int RomanToInt(string s)
  {
    Dictionary<char, int> d = new Dictionary<char, int>(){
      {'I', 1}, {'V', 5}, {'X', 10}, {'L', 50}, {'C', 100}, {'D', 500}, {'M', 1000}
    };
    int number = 0;
    for (int i = 0; i < s.Length; i++)
    {
      if (i + 1 < s.Length && d[s[i]] < d[s[i + 1]])
      {
        number -= d[s[i]];
      }
      else
      {
        number += d[s[i]];
      }
    }
    return number;
  }
}