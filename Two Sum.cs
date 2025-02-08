public class Solution {
  public int[] TwoSum(int[] nums, int target) {
    Dictionary<int, int> d = new Dictionary<int, int>();

    for(int i = 0; i < nums.Length; i++) {
      int num1 = nums[i];
      int num2 = target - num1;
      if(d.ContainsKey(num2)) {
        return new int[] {d[num2], i};
      }
      d[num1] = i;
    }

    return new int[0];

  }
}