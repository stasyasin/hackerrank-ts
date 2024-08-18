function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ');

  if (pattern.length !== words.length) {
    return false;
  }

  const charToWordMap: { [key: string]: string } = {};
  const wordToCharMap: { [key: string]: string } = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    // Перевірка на те, чи існує вже мапінг для char або для word
    if (charToWordMap.hasOwnProperty(char) && charToWordMap[char] !== word) {
      return false;
    }
    if (wordToCharMap.hasOwnProperty(word) && wordToCharMap[word] !== char) {
      return false;
    }

    // Додавання мапінгу в обидва напрямки
    charToWordMap[char] = word;
    wordToCharMap[word] = char;
  }

  return true;

}

const pattern = "abba";
const s = "dog constructor constructor dog";
const result = wordPattern(pattern, s);
console.log(result);
