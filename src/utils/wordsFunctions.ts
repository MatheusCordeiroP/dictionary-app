import { wordArray } from './wordsDictionary';

export const loadWords = (quantity: number) => {
  let selectedWords = [];

  for (let i = 0; i < quantity; i++) {
    const randomWord = getRandomWord();
    selectedWords.push(randomWord);
  }
  return selectedWords;
};

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordArray.length - 200);
  const randomPart = wordArray.substring(randomIndex, randomIndex + 200);
  const elementsArray = randomPart.split('\n');
  elementsArray.shift(); // Remove the first element
  elementsArray.pop(); // Remove the last element

  const randomWord = Math.floor(Math.random() * elementsArray.length);
  const selectedWord = elementsArray[randomWord];
  return selectedWord;
};
