import AsyncStorage from '@react-native-async-storage/async-storage';
import { FIREBASE_AUTH } from '../services/firebase/config';
import {
  loadDataFromRealTimeDatabase,
  setDataToRealTimeDatabase,
  pushDataToRealTimeDatabase,
  signInFirebase,
  signUpFirebase,
} from '../services/firebase/functions';
import { setLastUpdateAsyncStorage } from './asyncStorageFunctions';

export const databaseSignIn = async (email: string, password: string) => {
  const user = await signInFirebase(email, password);
  loadAndSetUserData();
  return user;
};

export const databaseSignUp = async (email: string, password: string) => {
  signUpFirebase(email, password);
  return;
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
  setLastUpdate();
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
  setLastUpdate();
};

export const addHistory = (data: any) => {
  if (!FIREBASE_AUTH?.currentUser?.uid) {
    return;
  }
  if (!data?.name) {
    return;
  }

  const userId = FIREBASE_AUTH.currentUser?.uid;

  const path = `users/${userId}/history/`;
  pushDataToRealTimeDatabase(path, data);
  setLastUpdate();
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
  setLastUpdate();
};

export const setLastUpdate = () => {
  if (!FIREBASE_AUTH?.currentUser?.uid) {
    return;
  }
  const userId = FIREBASE_AUTH.currentUser?.uid;

  const path = `users/${userId}/last_changes`;
  setDataToRealTimeDatabase(path, { date: Date.now() });
};

export const loadAndSetUserData = async () => {
  const firebaseSnapshot = await loadUserData();
  const userData: any = firebaseSnapshot.val();

  let firebaseLastChanges = 0;
  let asyncStorageLastChanges = 0;

  if (userData && userData.last_changes && userData.last_changes.date) {
    firebaseLastChanges = userData.last_changes.date;
  }
  const stringLastChanges = await AsyncStorage.getItem('last_changes');
  if (stringLastChanges !== null) {
    asyncStorageLastChanges = Number.parseInt(stringLastChanges);
  }

  if (firebaseLastChanges == 0 && asyncStorageLastChanges == 0) {
    return;
  }

  if (firebaseLastChanges > asyncStorageLastChanges) {
    const { favorites, history } = userData;

    const favoriteBaseArray = Object.values(favorites);
    const historyBaseArray = Object.values(history);
    const favoriteArray = favoriteBaseArray.map((item: any) => ({
      word: item.name,
    }));

    const historyArray = historyBaseArray.map((item: any) => ({
      word: item.name,
      order: item.order,
    }));
    historyArray.sort((a: any, b: any) => a.order - b.order);

    const stringifiedFavorites = JSON.stringify({ list: favoriteArray });
    AsyncStorage.setItem('favorites', stringifiedFavorites);

    const stringifiedHistory = JSON.stringify({ list: historyArray });
    AsyncStorage.setItem('history', stringifiedHistory);
    setLastUpdateAsyncStorage();
  } else {
    //asyncstorage was updated later
    const stringFavorites = await AsyncStorage.getItem('favorites');
    const stringHistory = await AsyncStorage.getItem('history');
    const favorites = JSON.parse(stringFavorites);
    const history = JSON.parse(stringHistory);

    const favoriteArray = favorites.list;
    const historyArray = history.list;

    for (let item of favoriteArray) {
      addFavorite({ name: item.word });
    }

    const userId = FIREBASE_AUTH.currentUser?.uid;
    const path = `users/${userId}/history/`;
    await setDataToRealTimeDatabase(path, {});
    await setLastUpdate();

    for (let item of historyArray) {
      addHistory({
        order: item.order,
        name: item.word,
      });
    }
  }
};
