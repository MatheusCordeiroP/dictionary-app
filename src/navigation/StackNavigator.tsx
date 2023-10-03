import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginController from '../screens/Login/login.controller';
import SignUpController from '../screens/SignUp/signUp.controller';

const MainStack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen
        name="Login"
        component={LoginController}
        options={{ title: 'Login', headerShown: false }}
      />
      <MainStack.Screen
        name="Sign Up"
        component={SignUpController}
        options={{ title: 'Sign Up', headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

export default StackNavigator;
