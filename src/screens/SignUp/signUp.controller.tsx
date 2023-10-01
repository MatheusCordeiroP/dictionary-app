import React from 'react';
import SignUpScreen from './signUp.screen';

const SignUpController = ({ route, navigation }) => {
  const navigateToScreen = (screen: string) => {
    navigation.navigate(screen, {});
  };

  const handlers = { navigateToScreen };
  return <SignUpScreen handlers={handlers} />;
};

export default SignUpController;
