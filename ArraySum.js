const arraySum = (array) => {
  return array.reduce((sum, num) => sum + num, 0);
};

console.log(arraySum([2, 4, 5, 7, 5, 6, 8]));
