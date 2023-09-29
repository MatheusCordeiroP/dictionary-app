import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FavoritesController from '../containers/Favorites/favorites.controller';
import HistoryController from '../containers/History/history.controller';
import HomeController from '../containers/Home/home.controller';
import LoginController from '../containers/Login/login.controller';
import SignUpController from '../containers/SignUp/signUp.controller';
import WordDetailsController from '../containers/WordDetails/wordDetails.controller';

const MainStack = createStackNavigator();

const StackNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen
        name="Favorites"
        component={FavoritesController}
        options={{ title: 'Favorites' }}
      />
      <MainStack.Screen
        name="Login"
        component={LoginController}
        options={{ title: 'Login', headerShown: false }}
      />
      <MainStack.Screen
        name="History"
        component={HistoryController}
        options={{ title: 'History' }}
      />
      <MainStack.Screen
        name="Home"
        component={HomeController}
        options={{ title: 'Home' }}
      />
      <MainStack.Screen
        name="Sign Up"
        component={SignUpController}
        options={{ title: 'Sign Up' }}
      />
      <MainStack.Screen
        name="Word Details"
        component={WordDetailsController}
        options={{ title: 'Word Details' }}
      />
    </MainStack.Navigator>
  );
};

export default StackNavigator;
