import React from 'react';
import HomeScreen from './home.screen';

const HomeController = ({ route, navigation }) => {
  const navigateToScreen = (screen: string) => {
    navigation.navigate(screen, {});
  };

  const handlers = { navigateToScreen };
  return <HomeScreen handlers={handlers} />;
};

export default HomeController;
