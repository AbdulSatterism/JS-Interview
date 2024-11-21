const palindromeString = (str) => {
  const reverseStr = str.split("").reverse().join("");
  return reverseStr === str
    ? `this is palindrome string ${str} after reverse ${reverseStr}`
    : `this is not palindrome string ${str}  after reverse ${reverseStr}`;
};

console.log(palindromeString("satter"));
console.log(palindromeString("madam"));
