import React from 'react';
import LoginScreen from './login.screen';

const LoginController = ({ route, navigation }) => {
  const navigateToScreen = (screen: string) => {
    navigation.navigate(screen, {});
  };

  const handlers = { navigateToScreen };
  return <LoginScreen handlers={handlers} />;
};

export default LoginController;
