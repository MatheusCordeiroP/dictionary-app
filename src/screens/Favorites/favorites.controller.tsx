import React, { useState, useEffect } from 'react';
import FavoritesScreen from './favorites.screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { requestWord } from '../../services/dictionaryapi';
import { getUserId } from '../../utils/databaseFunctions';
import { useIsFocused } from '@react-navigation/native';

const FavoritesController = ({ route, navigation }) => {
  const isFocused = useIsFocused();
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

  useEffect(() => {
    if (isFocused) {
      loadHistoryList();
    }
  }, [isFocused]);

  const handlers = {
    favoriteList,
    onPressWord,
  };
  return <FavoritesScreen handlers={handlers} />;
};

export default FavoritesController;
