const anagramCheck = (str1, str2) => {
  const firstCheck = str1.split("").sort().join("");
  const secondCheck = str2.split("").sort().join("");

  return firstCheck === secondCheck;
};

console.log(anagramCheck("listen", "silent")); // true
console.log(anagramCheck("liste", "silent")); //false
