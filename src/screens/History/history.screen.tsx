import React from 'react';
import styles from './history.styles';
import { View, Text, ScrollView } from 'react-native';

import HistoryWordComponentController from '../../components/HistoryWordComponent/historyWord.controller';

const HistoryScreen = ({ handlers }) => {
  const { historyList, onPressWord } = handlers;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      <ScrollView style={styles.scrollView}>
        {historyList.map((item, index) => {
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

export default HistoryScreen;
