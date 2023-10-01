import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FavoritesController from '../screens/Favorites/favorites.controller';
import HistoryController from '../screens/History/history.controller';
import HomeController from '../screens/Home/home.controller';
import LoginController from '../screens/Login/login.controller';
import SignUpController from '../screens/SignUp/signUp.controller';
import WordDetailsController from '../screens/WordDetails/wordDetails.controller';

const MainStack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Login">
      {/* <MainStack.Screen
        name="Favorites"
        component={FavoritesController}
        options={{ title: 'Favorites' }}
      /> */}
      <MainStack.Screen
        name="Login"
        component={LoginController}
        options={{ title: 'Login', headerShown: false }}
      />
      {/* <MainStack.Screen
        name="History"
        component={HistoryController}
        options={{ title: 'History' }}
      />
      <MainStack.Screen
        name="Home"
        component={HomeController}
        options={{ title: 'Home' }}
      /> */}
      <MainStack.Screen
        name="Sign Up"
        component={SignUpController}
        options={{ title: 'Sign Up' }}
      />
      {/* <MainStack.Screen
        name="Word Details"
        component={WordDetailsController}
        options={{ title: 'Word Details' }}
      /> */}
    </MainStack.Navigator>
  );
};

export default StackNavigator;
