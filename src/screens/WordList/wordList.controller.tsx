import React, { useEffect, useState } from 'react';
import HomeScreen from './home.screen';
import { loadWords } from '../../utils/wordsFunctions';

const HomeController = ({ route, navigation }) => {
  const [wordList, setWordList] = useState<string[]>([
    'transubstantiationalist',
    'transubstantiationalist',
    'transubstantiationalist',
    'transubstantiationalist',
  ]);
  const [selectedTab, setSelectedTab] = useState('A');

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
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
    setWordList,
    selectedTab,
    handleTabPress,
    loadMoreWords,
    navigateToScreen,
  };
  return <HomeScreen handlers={handlers} />;
};

export default HomeController;
