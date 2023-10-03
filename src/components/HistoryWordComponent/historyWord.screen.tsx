import React from 'react';
import styles from './historyWord.styles';
import { Text, TouchableOpacity } from 'react-native';

const HistoryWordScreen = ({ handlers }) => {
  const { text, onPress } = handlers;

  return (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => onPress(text)}
    >
      <Text style={styles.productName}>{text}</Text>
    </TouchableOpacity>
  );
};

export default HistoryWordScreen;
