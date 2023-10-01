import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FavoritesController from '../screens/Favorites/favorites.controller';
import HistoryController from '../screens/History/history.controller';
import HomeController from '../screens/Home/home.controller';
import LoginController from '../screens/Login/login.controller';
import SignUpController from '../screens/SignUp/signUp.controller';
import WordDetailsController from '../screens/WordDetails/wordDetails.controller';

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
