import React from 'react';
import FavoritesScreen from './favorites.screen';

const FavoritesController = ({ route, navigation }) => {
  const navigateToScreen = (screen: string) => {
    navigation.navigate(screen, {});
  };

  const handlers = { navigateToScreen };
  return <FavoritesScreen handlers={handlers} />;
};

export default FavoritesController;
