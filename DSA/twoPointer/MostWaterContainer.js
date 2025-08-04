class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let i = 0,
      j = heights.length - 1;
    console.log("🚀 ~ Solution ~ maxArea ~ heights.length:", heights.length);
    let max = Math.min(heights[i], heights[j]) * (j - i);
    while (i < j) {
      if (Math.min(heights[i], heights[j]) * (j - i) <= max) {
        if (heights[i] > heights[j]) {
          j--;
        } else {
          i++;
        }
      } else {
        max = Math.min(heights[i], heights[j]) * (j - i);

        if (heights[i] > heights[j]) {
          j--;
        } else {
          i++;
        }
      }
    }
    return max;
  }
}

const solu = new Solution();
console.log("ddd", solu.maxArea([1, 1000, 1000, 6, 2, 5, 4, 8, 3, 7]));
// console.log("ddd", solu.maxArea([1, 7, 2, 5, 12, 3, 500, 500, 7, 8, 4, 7, 3, 6]));
