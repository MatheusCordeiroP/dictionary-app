import React, { useState, useEffect } from 'react';
import FavoritesScreen from './favorites.screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { requestWord } from '../../services/dictionaryapi';
import { getUserId } from '../../utils/databaseFunctions';

const FavoritesController = ({ route, navigation }) => {
  const [loading, setLoading] = useState(true);
  const [favoriteList, setFavoriteList] = useState([]);

  const loadHistoryList = async () => {
    const userId = getUserId();
    const favoritesJSON = await AsyncStorage.getItem(`favorites-${userId}`);
    const favorites = JSON.parse(favoritesJSON);

    if (favorites && favorites.list) {
      setFavoriteList(favorites.list);
      setLoading(false);
    }
  };

  const onPressWord = async (word: string) => {
    const response = await requestWord(word);

    navigation.navigate('Word Details', {
      word: response,
      saveOnHistory: true,
    });
  };

  useEffect(() => {
    setLoading(true);
    loadHistoryList();
  }, []);

  const handlers = {
    favoriteList,
    onPressWord,
  };
  return <FavoritesScreen handlers={handlers} />;
};

export default FavoritesController;
