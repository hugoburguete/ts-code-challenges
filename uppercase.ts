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
