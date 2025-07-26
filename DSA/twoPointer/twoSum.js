class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    if (numbers.length === 2) {
      return [1, 2];
    }
    let l = 0,
      r = numbers.length - 1;
    while (l < r) {
      const sum = numbers[l] + numbers[r];
      if (sum === target) {
        return [l + 1, r + 1];
      }
      if (sum > target) {
        r = r - 1;
      }
      if (sum < target) {
        l = l + 1;
      }
    }
    return [];
  }
}

console.log("asdasdasd", new Solution().twoSum([-5, -3, 0, 2, 4, 6, 8], 5));
