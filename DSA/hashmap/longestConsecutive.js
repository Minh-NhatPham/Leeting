class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    if (nums.length === 0) {
      return 0;
    }
    const map = new Set(nums);
    let longest = 1;
    for (const num of map) {
      let temp = num + 1;
      let count = 1;
      while (map.has(temp)) {
        temp = temp + 1;
        count = count + 1;
      }
      longest = Math.max(longest, count);
    }
    return longest;
  }
}

const solu = new Solution();
console.info(solu.longestConsecutive([1, 3, 2, 2, 2]));
