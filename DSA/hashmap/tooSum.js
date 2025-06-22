class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        return [map.get(nums[i]), i];
      }
      const remains = target - nums[i];
      map.set(remains, i);
    }
    return [-1, -1];
  }
}

const solu = new Solution();

console.log(solu.twoSum([3, 4, 5, 9], 7));
