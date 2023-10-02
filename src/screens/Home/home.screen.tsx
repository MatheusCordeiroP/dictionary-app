import React from 'react';
import styles from './home.styles';

import { View, Text, TouchableOpacity } from 'react-native';
import WordListController from '../WordList/wordList.controller';

const HomeScreen = ({ handlers }) => {
  const { route, navigation, selectedTab, handleTabPress } = handlers;

  return (
    <View style={[styles.container]}>
      <View style={styles.screenView}>
        <WordListController route={route} navigation={navigation} />
      </View>
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
