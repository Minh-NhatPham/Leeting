const solution = (n) => {
  const res = [];
  const stack = [];
  const backtrack = (closed, open) => {
    if (closed === open && open === n) {
      res.push(stack.join(""));
      return;
    }
    if (open < n) {
      stack.push("(");
      backtrack(closed, open + 1);
      stack.pop();
    }
    if (closed < open) {
      stack.push(")");
      backtrack(closed + 1, open);
      stack.pop();
    }
  };
  backtrack(0, 0);
  return res;
};

console.log("generated parentheses", solution(2));
