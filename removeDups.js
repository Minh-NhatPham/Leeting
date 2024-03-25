var removeDuplicates = function (nums) {
  // must audit og array according to the assignment
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[maxIndex] !== nums[i]) {
      maxIndex++;
      nums[maxIndex] = nums[i];
    }
  }
  return maxIndex + 1;
};

console.log("cc", removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
