function countWordOccurrences(text) {
  const words = text.split(/\s+/);
  const newMap = new Map();

  words.forEach((word) => {
    const normalizedWord = word.toLowerCase();
    const count = newMap.has(normalizedWord)
      ? newMap.get(normalizedWord) + 1
      : 1;
    newMap.set(normalizedWord, count);
  });
  return newMap;
}

const inputText =
  "Vivekananda who was also referred to as Swami Vivekananda was originally named Narendranath Datta. He was influenced by both Indian and western culture. His exposure to Hindus deity form of worship and Christian religion often conflicted with his beliefs. This was until he accepted Ramakrishna as his guru and became a monk.";
const wordCount = countWordOccurrences(inputText);

wordCount.forEach((count, word) => {
  console.log(`${word}:${count}`);
});
