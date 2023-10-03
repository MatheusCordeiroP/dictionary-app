import React, { useEffect, useState } from 'react';
import HistoryScreen from './history.screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { requestWord } from '../../services/dictionaryapi';
import { getUserId } from '../../utils/databaseFunctions';

const HistoryController = ({ route, navigation }) => {
  const [loading, setLoading] = useState(true);
  const [historyList, setHistoryList] = useState([]);

  const loadHistoryList = async () => {
    const userId = getUserId();
    const historyJSON = await AsyncStorage.getItem(`history-${userId}`);
    const history = JSON.parse(historyJSON);

    if (history && history.list) {
      const historyArray = history.list;
      historyArray.sort((a: any, b: any) => b.order - a.order);

      setHistoryList(history.list);
      setLoading(false);
      return;
    }
  };

  const onPressWord = async (word: string) => {
    const response = await requestWord(word);

    navigation.navigate('Word Details', {
      word: response,
      saveOnHistory: false,
    });
  };

  useEffect(() => {
    setLoading(true);
    loadHistoryList();
  }, []);

  const handlers = { onPressWord, historyList };
  return <HistoryScreen handlers={handlers} />;
};

export default HistoryController;
