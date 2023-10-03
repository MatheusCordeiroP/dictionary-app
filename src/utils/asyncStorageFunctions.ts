import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserId } from './databaseFunctions';

export const setLastUpdateAsyncStorage = () => {
  const userId = getUserId();
  AsyncStorage.setItem(`last_changes-${userId}`, Date.now.toString());
};
