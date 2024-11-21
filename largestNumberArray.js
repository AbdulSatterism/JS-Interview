const largestNumber = (array) => {
  return Math.max(...array);
};

console.log(largestNumber([1, 5, 2, 8, 9, 4, 21, 4]));

/*

// find largest number

const findLargeNumber = (arr) => {
  let large = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  return large;
};

console.log(findLargeNumber([1, 2, 4, 5, 8, 2, 4, 66, 400]));


*/
