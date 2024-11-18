/**
  BRIEF:

  When a character is even-indexed, it should be uppercased
  When a character is odd-indexed, it should be lowercased
  Indexing is calculated based on the character's position in a word, not in the entire string.

  Test Cases

  With input This is a test, return ThIs Is A TeSt
  With input unique, return UnIqUe
  With input UPPER CASE, return UpPeR CaSe
  With input lower case, return LoWeR CaSe
  With an empty string input, return an empty string
  WIth input bark BARK woof WOOF return BaRk BaRk WoOf WoOf
*/

const uppercase = (sentence: string) => {
  const words = sentence.toLowerCase().split(' ');

  const uppercaseWord = (word: string) => {
    for (let i = 0; i < word.length; i += 2) {
      const character = word.charAt(i).toUpperCase();

      word = `${word.substring(0, i)}${character}${word.substring(
        i + 1,
        word.length
      )}`;
    }

    return word;
  };

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    words[i] = uppercaseWord(word);
  }

  return words.join(' ');
};

export default uppercase;
