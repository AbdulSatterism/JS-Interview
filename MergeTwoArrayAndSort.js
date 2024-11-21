const mergeTwoArraySort = (array1, array2) => {
  return [...array1, ...array2].sort((a, b) => a - b);
};

console.log(mergeTwoArraySort([8, 1, 2, 3], [7, 4, 5, 6]));
