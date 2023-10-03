import React, { useState, useEffect } from 'react';
import WordDetailsScreen from './wordDetails.screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';
import {
  addFavorite,
  addHistory,
  removeFavorite,
} from '../../utils/databaseFunctions';
import { setLastUpdateAsyncStorage } from '../../utils/asyncStorageFunctions';

const WordDetailsController = ({ route, navigation }) => {
  const [favorite, setFavorite] = useState(false);
  const { params } = route;
  const selectedWord = params.word[0];
  const { saveOnHistory } = params;

  useEffect(() => {
    if (saveOnHistory) {
      updateHistory();
    }
    updateFavorite();
  }, []);

  const updateHistory = async () => {
    const historyJSON = await AsyncStorage.getItem('history');

    let historyList = [];
    if (historyJSON !== null) {
      const history = JSON.parse(historyJSON);

      if (history && history.list) {
        historyList = history.list;
      }
    }

    historyList.push({ order: historyList.length, word: selectedWord.word });
    const stringifiedHistory = JSON.stringify({ list: historyList });

    addHistory({
      order: historyList.length,
      name: selectedWord.word,
    });
    AsyncStorage.setItem('history', stringifiedHistory);
    setLastUpdateAsyncStorage();
  };

  const updateFavorite = async () => {
    const favoriteJSON = await AsyncStorage.getItem('favorites');
    let favoriteList = [];
    if (favoriteJSON !== null) {
      const favorite = JSON.parse(favoriteJSON);

      if (favorite && favorite.list) {
        favoriteList = favorite.list;
      }
    }

    for (let favoriteWord of favoriteList) {
      console.log(favoriteWord);
      if (favoriteWord == selectedWord.word) {
        setFavorite(true);
      }
    }
  };

  const changeFavorite = async (newState: boolean) => {
    const favoriteJSON = await AsyncStorage.getItem('favorites');
    let favoriteList = [];
    if (favoriteJSON !== null) {
      const favorite = JSON.parse(favoriteJSON);

      if (favorite && favorite.list) {
        favoriteList = favorite.list;
      }
    }

    let isFavorite = false;
    for (let favoriteWord of favoriteList) {
      if (favoriteWord == selectedWord.word) {
        isFavorite = true;
      }
    }

    if (newState) {
      if (!isFavorite) {
        favoriteList.push(selectedWord);
      }

      const stringifiedFavorites = JSON.stringify({ list: favoriteList });
      AsyncStorage.setItem('favorites', stringifiedFavorites);
      setLastUpdateAsyncStorage();
      addFavorite({ name: selectedWord.word });
      setFavorite(true);
      return;
    }

    if (isFavorite) {
      const updatedFavoriteList = favoriteList.filter(
        (word) => word !== selectedWord.word
      );
      favoriteList = updatedFavoriteList;
    }

    const stringifiedFavorites = JSON.stringify({ list: favoriteList });
    AsyncStorage.setItem('favorites', stringifiedFavorites);
    setLastUpdateAsyncStorage();
    removeFavorite(selectedWord.word);
    setFavorite(false);
    return;
  };

  const speechText = (text) => {
    Speech.speak(text, { language: 'en' });
  };

  const handlers = { selectedWord, favorite, changeFavorite, speechText };
  return <WordDetailsScreen handlers={handlers} />;
};

export default WordDetailsController;
