import React from 'react';
import HistoryScreen from './history.screen';

const HistoryController = ({ route, navigation }) => {
  const navigateToScreen = (screen: string) => {
    navigation.navigate(screen, {});
  };

  const handlers = { navigateToScreen };
  return <HistoryScreen handlers={handlers} />;
};

export default HistoryController;
