import React from 'react';
import styles from './home.styles';

import { View, Text, TouchableOpacity } from 'react-native';
import WordListController from '../WordList/wordList.controller';
import HistoryController from '../History/history.controller';
import FavoritesController from '../Favorites/favorites.controller';
import AccountController from '../Account/account.controller';

const HomeScreen = ({ handlers }) => {
  const { route, navigation, selectedTab, handleTabPress } = handlers;

  return (
    <View style={[styles.container]}>
      <View style={styles.screenView}>
        {selectedTab === 'Discover' && (
          <WordListController route={route} navigation={navigation} />
        )}
        {selectedTab === 'History' && (
          <HistoryController route={route} navigation={navigation} />
        )}
        {selectedTab === 'Favorites' && (
          <FavoritesController route={route} navigation={navigation} />
        )}
        {selectedTab === 'Account' && (
          <AccountController route={route} navigation={navigation} />
        )}
      </View>
      <View style={styles.tabSelector}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'Discover' && styles.selectedTab,
            { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
          ]}
          onPress={() => handleTabPress('Discover')}
        >
          <Text>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'History' && styles.selectedTab,
          ]}
          onPress={() => handleTabPress('History')}
        >
          <Text>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'Favorites' && styles.selectedTab,
          ]}
          onPress={() => handleTabPress('Favorites')}
        >
          <Text>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'Account' && styles.selectedTab,
            { borderTopRightRadius: 8, borderBottomRightRadius: 8 },
          ]}
          onPress={() => handleTabPress('Account')}
        >
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
