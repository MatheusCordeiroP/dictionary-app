import React, { useEffect, useState } from 'react';
import WordListScreen from './wordList.screen';
import { loadWords } from '../../utils/wordsFunctions';
import { requestWord } from '../../services/dictionaryapi';
import { showMessage } from 'react-native-flash-message';

const WordListController = ({ route, navigation }) => {
  const [findWordText, setFindWordText] = useState<string>('');
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

    if (!response) {
      showMessage({
        message: `It looks that ${word} does not yet have a definition yet.`,
        description: `How about trying another word?`,
        type: 'warning',
        duration: 5000,
      });
      return;
    }

    navigation.navigate('Word Details', {
      word: response,
      saveOnHistory: true,
    });
  };

  const loadMoreWords = () => {
    const newWords = loadWords(120);
    setWordList((prevData) => [...prevData, ...newWords]);
  };

  const findWord = () => {
    onPressWord(findWordText);
    setFindWordText('');
  };

  useEffect(() => {
    loadMoreWords();
  }, []);

  const handlers = {
    findWordText,
    setFindWordText,
    wordList,
    loadMoreWords,
    onPressWord,
    findWord,
  };
  return <WordListScreen handlers={handlers} />;
};

export default WordListController;
