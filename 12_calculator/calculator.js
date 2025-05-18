const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const sum = nums => nums.reduce((acc, x) => acc + x, 0);
const multiply = nums => nums.reduce((acc, x) => acc * x, 1);
const power = (x, p) => x ** p;
const factorial = x => {
  let f = 1;
  for (let i = 1; i <= x; i++) {
    f *= i;
  }
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
