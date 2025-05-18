const fibonacci = num => {
  let n = Number(num);
  if (n < 0 ?? isNaN(n)) return "OOPS";
  if (n === 0 || n === 1) return n;

  const fib = [1, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
