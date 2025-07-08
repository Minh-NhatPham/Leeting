class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    let prefixTemp = [];
    let suffixTemp = [];
    const result = [];
    for (let i = 0; i < nums.length; ++i) {
      prefixTemp = i === 0 ? [1] : [].concat(nums.slice(0, i));
      suffixTemp = i === nums.length - 1 ? [1] : [].concat(nums.slice(i + 1, nums.length));
      const arr = prefixTemp.concat(suffixTemp);
      result.push(arr.reduce((prev, curr) => Number(prev) * Number(curr), 1));
    }
    return result;
  }

  betterSolution(nums) {
    const prefixTemp = Array(nums.length);
    const suffixTemp = Array(nums.length);
    const result = Array(nums.length);
    for (let i = 0; i < nums.length; i++) {}
  }
}

const solu = new Solution();
console.info(solu.productExceptSelf([-1, 0, 1, 2, 3]));
console.info(solu.productExceptSelf([1, 2, 4, 6]));
