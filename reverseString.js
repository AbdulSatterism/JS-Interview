const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("satter"));

/*
//normal way to solve reverse string

const reverseString = (str) => {
  let reverseWord = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseWord += str[i];
  }
  return reverseWord;
};

console.log(reverseString("satter"));

*/
