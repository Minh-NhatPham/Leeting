var threeSum = function (nums) {
  nums.sort((a, b) => Number(a) - Number(b));
  const resArr = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      const total = nums[l] + nums[i] + nums[r];
      if (total === 0) {
        let triplet = [nums[i], nums[l], nums[r]];
        resArr.push(triplet);
        console.log("cccc", resArr, triplet);
        while (l < r && nums[l] === triplet[1]) {
          l++;
        }
        while (l < r && nums[r] === triplet[2]) {
          r--;
        }
      } else if (total < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return resArr;
};
