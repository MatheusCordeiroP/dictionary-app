import React from 'react';
import WordDetailsScreen from './wordDetails.screen';

const WordDetailsController = ({ route, navigation }) => {
  const navigateToScreen = (screen: string) => {
    navigation.navigate(screen, {});
  };

  const handlers = { navigateToScreen };
  return <WordDetailsScreen handlers={handlers} />;
};

export default WordDetailsController;
