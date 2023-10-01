import React from 'react';
import FavoritesScreen from './favorites.screen';
import { FIREBASE_AUTH } from '../../services/firebase/config';

const FavoritesController = ({ route, navigation }) => {
  const signOut = () => {
    FIREBASE_AUTH.signOut();
  };

  const navigateToScreen = (screen: string) => {
    navigation.navigate(screen, {});
  };

  const handlers = { navigateToScreen, signOut };
  return <FavoritesScreen handlers={handlers} />;
};

export default FavoritesController;
