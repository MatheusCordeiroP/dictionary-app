import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeController from '../screens/Home/home.controller';
import WordDetailsController from '../screens/WordDetails/wordDetails.controller';

const InsideStack = createNativeStackNavigator();

const InsideNavigator = () => {
  return (
    <InsideStack.Navigator initialRouteName="Home">
      <InsideStack.Screen
        name="Home"
        component={HomeController}
        options={{ title: 'Home', headerShown: false }}
      />
      <InsideStack.Screen
        name="Word Details"
        component={WordDetailsController}
        options={{ title: '' }}
      />
    </InsideStack.Navigator>
  );
};

export default InsideNavigator;
