const longestCommonPrefix = (arr) => {
  if (strs.length <= 1) return strs[0];
  let result = "";
  for (let i = 0; i < arr[0].length; i++) {
    let flag = true;
    let plusStr = "";
    for (let j = 0; j < arr.length - 1; j++) {
      plusStr = arr[j][i];
      if (arr[j][i] !== arr[j + 1][i]) {
        flag = false;
        plusStr = "";
        break;
      }
    }
    if (flag) {
      result += plusStr;
    } else {
      break;
    }
  }
  return result;
};

console.log("wtf", longestCommonPrefix(["flow", "flow", "flight"]));
