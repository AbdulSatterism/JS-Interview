const countVowel = (str) => {
  const vowelFormate = /[aeiou]/gi;
  const vowel = str.match(vowelFormate);

  return vowel?.length
    ? `total vowel in sentence : ${vowel?.length}`
    : `opps!😎 there is no vowel`;
};

console.log(countVowel("Education is backbone of nation"));
