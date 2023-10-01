import React from 'react';
import { View } from 'react-native';
import styles from './home.styles';
import { FlatList, Text } from 'react-native';

const HomeScreen = ({ handlers }) => {
  const { wordList, loadMoreWords } = handlers;

  return (
    <View style={styles.container}>
      <FlatList
        data={wordList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
        onEndReached={loadMoreWords}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default HomeScreen;
