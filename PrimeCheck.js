const checkPrimeNumber = (n) => {
  let count = 0;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++;
      break;
    }
  }
  if (count === 0) {
    console.log("prime number");
  } else {
    console.log("not prime number");
  }
};

checkPrimeNumber(4);
