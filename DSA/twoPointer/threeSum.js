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

  betterThreeSome(nums) {
    if (nums.length < 3) return [];
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for i
      let l = i + 1;
      let r = nums.length - 1;
      while (l < r) {
        const sum = nums[i] + nums[l] + nums[r];
        if (sum === 0) {
          result.push([nums[i], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) l++; // Skip duplicates for l
          while (l < r && nums[r] === nums[r - 1]) r--; // Skip duplicates for r
          l++;
          r--;
        } else if (sum < 0) {
          l++;
        } else {
          r--;
        }
      }
    }
    return result;
  }
}

console.log("asdasdasd", new Solution().threeSum([-2, -1, 0, 1, 2, 3]));
console.log("asdasdasd", new Solution().threeSum([1, 0, 1]));
console.log("asdasdasd", new Solution().threeSum([0, 0, 0, 0]));
