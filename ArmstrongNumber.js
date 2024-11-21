//An Armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits

const checkArmstrongNumber = (num) => {
  const digits = num.toString().split("");

  const sum = digits.reduce(
    (acc, digit) => acc + parseInt(digit) ** digits.length,
    0
  );
  return sum === num
    ? `this is armstrong number ${sum}`
    : `not armstrong number`;
};

// console.log(checkArmstrongNumber(153)); //armstrong number
// console.log(checkArmstrongNumber(370)); //armstrong number
console.log(checkArmstrongNumber(300)); // not armstrong number
