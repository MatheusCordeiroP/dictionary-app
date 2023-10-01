import React from 'react';
import styles from './word.styles';
import { Text, TouchableOpacity } from 'react-native';

const WordScreen = ({ handlers }) => {
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

export default WordScreen;
