class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rowMap = {};
    const colMap = {};
    const squareMap = {};
    for (let i = 0; i < 9; i++) {
      rowMap[i] = rowMap[i] ? rowMap[i] : new Set();
      for (let j = 0; j < 9; j++) {
        colMap[j] = colMap[j] ? colMap[j] : new Set();
        const squareKey = `${Math.floor(i / 3)}${Math.floor(j / 3)}`;
        squareMap[squareKey] = squareMap[squareKey] ? squareMap[squareKey] : new Set();

        const value = board[i][j];
        if (value === ".") {
          continue;
        }

        if (rowMap[i].has(value) || colMap[j].has(value) || squareMap[squareKey].has(value)) {
          return false;
        }

        rowMap[i].add(value);
        colMap[j].add(value);
        squareMap[squareKey].add(value);
      }
    }
    return true;
  }
}

console.log(
  new Solution().isValidSudoku([
    ["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "1", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
