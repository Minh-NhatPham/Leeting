class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }
    const map1 = new Map();
    const map2 = new Map();

    for (let i = 0; i < s.length; i++) {
      const count1 = map1.get(s[i]) ?? 0;
      map1.set(s[i], count1 + 1);

      const count2 = map2.get(t[i]) ?? 0;
      map2.set(t[i], count2 + 1);
    }
    console.log("dmm", map1, map2);
    let result = true;
    map1.forEach((value, key) => {
      if (!map2.has(key) || map2.get(key) !== value) {
        result = false;
      }
    });
    return result;
  }
}

const solu = new Solution();

console.log(solu.isAnagram("jar", "jam"));
