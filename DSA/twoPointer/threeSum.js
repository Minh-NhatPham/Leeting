class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    // Time: O(n^2), Space: O(1):
    if (nums.length === 3) {
      return nums[0] + nums[1] + nums[2] === 0 ? [nums] : [];
    }
    nums.sort((a, b) => a - b);
    console.log(nums);
    const result = new Map();
    for (let i = 0; i < nums.length; ++i) {
      let r = nums.length - 1,
        l = 0;
      while (l < r && l !== i && r !== i) {
        const sum = Number(nums[i]) + Number(nums[l]) + Number(nums[r]);
        if (sum === 0) {
          const key = `${Number(nums[i])}${Number(nums[l])}${Number(nums[r])}`;
          result.set(key, [nums[l], nums[r], nums[i]]);
          --r;
          ++l;
          continue;
        }
        if (sum > 0) {
          --r;
        }
        if (sum < 0) {
          ++l;
        }
      }
    }
    return Array.from(result.values());
  }
}

console.log("asdasdasd", new Solution().threeSum([-2, -1, 0, 1, 2, 3]));
console.log("asdasdasd", new Solution().threeSum([1, 0, 1]));
console.log("asdasdasd", new Solution().threeSum([0, 0, 0, 0]));
