import React from 'react';
import styles from './wordList.styles';
import { Ionicons } from '@expo/vector-icons';
import { View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import WordComponentController from '../../components/WordComponent/word.controller';

const WordListScreen = ({ handlers }) => {
  const { wordList, loadMoreWords, onPressWord } = handlers;

  return (
    <View style={[styles.container]}>
      <View style={styles.findWordTab}>
        <TextInput
          style={styles.findWordInput}
          placeholder="Search for a word..."
        />
        <TouchableOpacity style={styles.findWordButton}>
          <Ionicons name={'search-outline'} color={'#444444'} size={24} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={wordList}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.itemContainer}
        renderItem={({ item }) => (
          <WordComponentController
            text={item}
            onPress={() => {
              onPressWord(item);
            }}
          />
        )}
        onEndReached={loadMoreWords}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default WordListScreen;
