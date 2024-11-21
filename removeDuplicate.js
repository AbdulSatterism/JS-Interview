const removeDuplicate = (array) => {
  return [...new Set(array)];
};

console.log(
  removeDuplicate([
    1, 2, 1, 2, 4, 5, 4, 5, 7, 8, 5, 6, 5, 4, 5, 2, 1, 4, 5, 3, 9,
  ])
);
