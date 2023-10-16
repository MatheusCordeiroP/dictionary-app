import React from 'react';
import { View } from 'react-native';
import styles from './favorites.styles';
import { Text, ScrollView } from 'react-native';
import HistoryWordComponentController from '../../components/HistoryWordComponent/historyWord.controller';

const FavoritesScreen = ({ handlers }) => {
  const { favoriteList, onPressWord } = handlers;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <ScrollView style={styles.scrollView}>
        {favoriteList.map((item, index) => {
          return (
            <HistoryWordComponentController
              key={index}
              text={item.word}
              onPress={() => onPressWord(item.word)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FavoritesScreen;
