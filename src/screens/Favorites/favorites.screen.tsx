import React from 'react';
import { View } from 'react-native';
import styles from './favorites.styles';
import { Text, TouchableOpacity, Button } from 'react-native';
import { addFavorite, loadUserData } from '../../utils/databaseFunctions';

const FavoritesScreen = ({ handlers }) => {
  const { navigateToScreen, signOut } = handlers;

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={signOut}>
          <Text>SignOut</Text>
        </TouchableOpacity>
      </View>
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
      <Button title="aaaa" onPress={() => addFavorite({})} />
      <Button title="bbbb" onPress={() => loadUserData()} />
    </View>
  );
};

export default FavoritesScreen;
