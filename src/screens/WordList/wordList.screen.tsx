import React, { useState, useEffect } from 'react';
import styles from './home.styles';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import WordComponentController from '../../components/WordComponent/word.controller';

const HomeScreen = ({ handlers }) => {
  const { wordList, selectedTab, handleTabPress, loadMoreWords } = handlers;

  return (
    <View style={[styles.container]}>
      <View style={styles.findWordTab}>
        <TextInput style={styles.findWordInput} placeholder="aaa" />
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
              console.log('ITEM PRESSED::', item);
            }}
          />
        )}
        onEndReached={loadMoreWords}
        onEndReachedThreshold={0.1}
      />
      <View style={styles.tabSelector}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'A' && styles.selectedTab,
            { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
          ]}
          onPress={() => handleTabPress('A')}
        >
          <Text>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'B' && styles.selectedTab]}
          onPress={() => handleTabPress('B')}
        >
          <Text>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'C' && styles.selectedTab]}
          onPress={() => handleTabPress('C')}
        >
          <Text>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'D' && styles.selectedTab,
            { borderTopRightRadius: 8, borderBottomRightRadius: 8 },
          ]}
          onPress={() => handleTabPress('D')}
        >
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
