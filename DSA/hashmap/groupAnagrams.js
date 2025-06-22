class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  countChar(str) {
    const charsSet = new Array(26).fill(0); //26 empty slots (undefined) => fill(0)
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i) - "a".charCodeAt(0);
      charsSet[charCode] = charsSet[charCode] ? charsSet[charCode] + 1 : 1;
    }
    //we need "," because when joining, we want to seperate 1,0 vs 10
    const key = charsSet.join(",");
    return key;
  }
  groupAnagrams(strs) {
    const map = {};
    strs.forEach((str) => {
      const key = this.countChar(str);
      if (map[key]) {
        map[key].push(str);
      } else {
        map[key] = [str];
      }
    });
    console.log("🚀 ~ Solution ~ strs.forEach ~ map:", map);
    return Object.values(map);
  }
}

const solu = new Solution();

console.log(solu.groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
