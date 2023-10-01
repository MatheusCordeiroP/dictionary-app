import React, { useEffect, useState } from 'react';
import HomeScreen from './home.screen';
import { loadWords } from '../../utils/wordsFunctions';

const HomeController = ({ route, navigation }) => {
  const [wordList, setWordList] = useState<string[]>([]);

  const loadMoreWords = () => {
    const newWords = loadWords(10);
    setWordList((prevData) => [...prevData, ...newWords]);
  };

  const navigateToScreen = (screen: string) => {
    navigation.navigate(screen, {});
  };

  const handlers = { wordList, setWordList, loadMoreWords, navigateToScreen };
  return <HomeScreen handlers={handlers} />;
};

export default HomeController;
