const secondLargestNumber = (array) => {
  // remove duplicate element and sorting max to min
  const uniqueArray = [...new Set(array)].sort((a, b) => b - a);
  //return second element which is second highest number
  return uniqueArray[1];
};

console.log(secondLargestNumber([2, 5, 4, 6, 8, 4, 2, 9, 7]));
