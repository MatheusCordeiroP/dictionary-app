import React, { useState } from 'react';
import HomeScreen from './home.screen';

const HomeController = ({ route, navigation }) => {
  const [selectedTab, setSelectedTab] = useState('A');

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  const navigateToScreen = (screen: string) => {
    navigation.navigate(screen, {});
  };

  const handlers = {
    route,
    navigation,
    selectedTab,
    handleTabPress,
    navigateToScreen,
  };
  return <HomeScreen handlers={handlers} />;
};

export default HomeController;
