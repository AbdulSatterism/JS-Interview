const removeSpecificElementArray = (array, element) => {
  return array.filter((ele) => ele !== element);
};

console.log(removeSpecificElementArray([1, 2, 3, 4], 3));
