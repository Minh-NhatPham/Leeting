const convert = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const romanToInt = (s) => {
  if (s.length === 1) return convert[s];
  let sum = convert[s[s.length - 1]];

  for (let i = s.length - 1; i > 0; i--) {
    if (convert[s[i]] <= convert[s[i - 1]]) {
      sum += convert[s[i - 1]];
    } else {
      sum -= convert[s[i - 1]];
    }
  }
  return sum;
};

console.log("ddd", romanToInt("IV"));
