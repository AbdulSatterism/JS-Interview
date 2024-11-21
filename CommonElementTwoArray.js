const commonElementInTwoArray = (arr1, arr2) => {
  return arr1.filter((element) => arr2.includes(element));
};

console.log(commonElementInTwoArray([1, 2, 3, 4, 5], [1, 2, 3]));
