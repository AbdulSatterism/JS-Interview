const longestWord = (sentence) => {
  const words = sentence.split(" ");
  return words.reduce(
    (long, word) => (word.length > long.length ? word : long),
    ""
  );
};

console.log(
  longestWord(
    "this is abdul satter speaking. now I studing in Manarat International University, dhaka, bangladesh"
  )
);
