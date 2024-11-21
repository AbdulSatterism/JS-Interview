//here array is array and n is total possibility number of array

const findMissingNumber = (array, n) => {
  // calculate possibility  number sum
  const sumN = (n * (n + 1)) / 2;
  // sum of array
  const sumArray = array.reduce((sum, num) => sum + num, 0);

  //compare and if missing then show it
  return sumN - sumArray;
};

console.log(findMissingNumber([1, 2, 3, 4, 6], 6));
