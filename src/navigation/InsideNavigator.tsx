import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FavoritesController from '../containers/Favorites/favorites.controller';
import HistoryController from '../containers/History/history.controller';
import HomeController from '../containers/Home/home.controller';
import LoginController from '../containers/Login/login.controller';
import SignUpController from '../containers/SignUp/signUp.controller';
import WordDetailsController from '../containers/WordDetails/wordDetails.controller';

const InsideStack = createNativeStackNavigator();

const InsideNavigator = () => {
  return (
    <InsideStack.Navigator initialRouteName="Login">
      <InsideStack.Screen
        name="Favorites"
        component={FavoritesController}
        options={{ title: 'Favorites' }}
      />
      <InsideStack.Screen
        name="History"
        component={HistoryController}
        options={{ title: 'History' }}
      />
      <InsideStack.Screen
        name="Home"
        component={HomeController}
        options={{ title: 'Home' }}
      />
      <InsideStack.Screen
        name="Word Details"
        component={WordDetailsController}
        options={{ title: 'Word Details' }}
      />
    </InsideStack.Navigator>
  );
};

export default InsideNavigator;
