const isValid = (str) => {
  //done
  if (str.length % 2 === 1) return false;
  let closingStack = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "[": {
        closingStack.push("]");
        break;
      }
      case "{": {
        closingStack.push("}");
        break;
      }
      case "(": {
        closingStack.push(")");
        break;
      }
      default: {
        if (closingStack.length === 0 || closingStack.pop().toString() !== str[i]) {
          return false;
        }
        break;
      }
    }
  }
  if (closingStack.length > 0) {
    return false;
  }
  return true;
};

console.log("ccc", isValid("(("));
