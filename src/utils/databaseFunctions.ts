import { FIREBASE_AUTH } from '../services/firebase/config';
import {
  loadDataFromRealTimeDatabase,
  setDataToRealTimeDatabase,
  signInFirebase,
  signUpFirebase,
} from '../services/firebase/functions';

export const databaseSignIn = (email: string, password: string) => {
  return signInFirebase(email, password);
};

export const databaseSignUp = (email: string, password: string) => {
  return signUpFirebase(email, password);
};

export const loadUserData = () => {
  if (!FIREBASE_AUTH?.currentUser?.uid) {
    return;
  }
  const userId = FIREBASE_AUTH.currentUser?.uid;
  return loadDataFromRealTimeDatabase(`users/${userId}`);
};

export const addFavorite = (data: any) => {
  if (!FIREBASE_AUTH?.currentUser?.uid) {
    return;
  }
  if (!data?.name) {
    return;
  }

  const userId = FIREBASE_AUTH.currentUser?.uid;
  const objName = data?.name;

  const path = `users/${userId}/favorites/${objName}`;
  setDataToRealTimeDatabase(path, data);
};

export const removeFavorite = (favorite: string) => {
  if (!FIREBASE_AUTH?.currentUser?.uid) {
    return;
  }
  if (!favorite) {
    return;
  }

  const userId = FIREBASE_AUTH.currentUser?.uid;
  const objName = favorite;

  const path = `users/${userId}/favorites/${objName}`;
  setDataToRealTimeDatabase(path, {});
};

export const addHistory = (data: any) => {
  if (!FIREBASE_AUTH?.currentUser?.uid) {
    return;
  }
  if (!data?.name) {
    return;
  }

  const userId = FIREBASE_AUTH.currentUser?.uid;
  const objName = data?.name;

  const path = `users/${userId}/history/${objName}`;
  setDataToRealTimeDatabase(path, data);
};

export const removeHistory = (history: string) => {
  if (!FIREBASE_AUTH?.currentUser?.uid) {
    return;
  }
  if (!history) {
    return;
  }

  const userId = FIREBASE_AUTH.currentUser?.uid;
  const objName = history;

  const path = `users/${userId}/history/${objName}`;
  setDataToRealTimeDatabase(path, {});
};
