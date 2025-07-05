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
        temp++;
        count++;
      }
      longest = Math.max(longest, count);
    }
    return longest;
  }

  betterSolution(nums) {
    if (nums.length === 0) {
      return 0;
    }
    const map = new Set(nums);
    let longest = 1;
    for (const num of map) {
      // this is better because we dont have to check for every element to be the beginning of the string
      // old solution worst case will be O(n^2) when [1,2,3,4,5]
      if (map.has(num - 1)) {
        let temp = num + 1;
        let count = 1;
        while (map.has(temp)) {
          temp++;
          count++;
        }
        longest = Math.max(longest, count);
      }
    }
    return longest;
  }
}

const solu = new Solution();
console.info(solu.longestConsecutive([1, 3, 2, 2, 2]));
