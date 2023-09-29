import React from 'react';
import { View } from 'react-native';
import styles from './favorites.styles';
import { Text, TouchableOpacity } from 'react-native';

const FavoritesScreen = ({ handlers }) => {
  const { navigateToScreen } = handlers;

  return (
    <View style={styles.container}>
      {/* <View>
        <TouchableOpacity onPress={() => navigateToScreen('Favorites')}>
          <Text>Favorites</Text>
        </TouchableOpacity>
      </View> */}
      <View>
        <TouchableOpacity onPress={() => navigateToScreen('History')}>
          <Text>History</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigateToScreen('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigateToScreen('Login')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigateToScreen('Sign Up')}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigateToScreen('Word Details')}>
          <Text> Word Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FavoritesScreen;
