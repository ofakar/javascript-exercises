const palindromes = word => {
  const wordClean = word.toLowerCase().replace(/\W/g, "");
  const wordRev = wordClean.split("").reverse().join("");
  console.log(wordRev, wordClean);
  return wordClean === wordRev;
};
// Do not edit below this line
module.exports = palindromes;
