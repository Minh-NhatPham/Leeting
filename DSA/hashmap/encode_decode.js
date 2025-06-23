class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  delimiter = "#";
  encode(strs) {
    let encodedStr = "";
    for (const str of strs) {
      const count = str.length;
      const newStr = count + this.delimiter + str;
      encodedStr = encodedStr + newStr;
    }
    return encodedStr;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let seperator = "";
    const result = [];
    for (let i = 0; i < str.length; i++) {
      seperator = seperator + str[i];
      if (seperator[seperator.length - 1] === this.delimiter) {
        const count = Number(seperator.slice(0, seperator.length - 1));
        let word = str.substring(i + 1, i + 1 + count);
        result.push(word);
        seperator = "";
        i = i + word.length;
      }
    }
    return result;
  }
}

const solu = new Solution();
const encode = solu.encode(["neet", "code", "love", "you"]);
const decode = solu.decode(encode);
console.log(decode);
