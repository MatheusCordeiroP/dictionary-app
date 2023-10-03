import React from 'react';
import FavoritesScreen from './account.screen';
import { FIREBASE_AUTH } from '../../services/firebase/config';

const AccountController = ({ route, navigation }) => {
  const userEmail = FIREBASE_AUTH.currentUser.email;

  const signOut = () => {
    FIREBASE_AUTH.signOut();
  };

  const handlers = { userEmail, signOut };
  return <FavoritesScreen handlers={handlers} />;
};

export default AccountController;
