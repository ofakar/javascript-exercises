const sumAll = (a, b) => {
  let sum = 0;

  if (a < 0 || b < 0 || a % 1 || b % 1 || typeof a !== "number" || typeof b !== "number") return "ERROR";
  if (a > b) [a, b] = [b, a];

  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
