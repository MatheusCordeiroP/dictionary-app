import React, { useEffect, useState } from 'react';
import WordListScreen from './wordList.screen';
import { loadWords } from '../../utils/wordsFunctions';
import { requestWord } from '../../services/dictionaryapi';

const WordListController = ({ route, navigation }) => {
  const [wordList, setWordList] = useState<string[]>([
    'if',
    'you',
    'need',
    'creativity',
    'try',
    'some',
    'of',
    'these',
  ]);

  const onPressWord = async (word: string) => {
    const response = await requestWord(word);
    console.log('R:', response);
  };

  const loadMoreWords = () => {
    const newWords = loadWords(120);
    setWordList((prevData) => [...prevData, ...newWords]);
  };

  const navigateToScreen = (screen: string) => {
    navigation.navigate(screen, {});
  };

  useEffect(() => {
    loadMoreWords();
  }, []);

  const handlers = {
    wordList,
    loadMoreWords,
    onPressWord,
  };
  return <WordListScreen handlers={handlers} />;
};

export default WordListController;
