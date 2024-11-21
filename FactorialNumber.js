const FactorialNumber = (num) => {
  if (num === 0 || num === 1) return 1;

  return num * FactorialNumber(num - 1);
};

console.log(FactorialNumber(5));
