const translate = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  // if(){}
  // if first letter starts with vowel:
  if (vowels.includes(word[0])) {
    return `${word}way`;
    // else: return (rest of word) + (first consonant) + "ay"
  } else if (vowels.includes(word[1])) {
    return `${word.slice(1)}${word[0]}ay`;
  } else if (vowels.includes(word[2])) {
    return `${word.slice(2)}${word.slice(0, 2)}ay`;
  }
};

module.exports = translate;

// google how to extract a substring from a string or cut
// slice does not modify the original string
