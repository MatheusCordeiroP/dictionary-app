import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLastUpdateAsyncStorage = () => {
  AsyncStorage.setItem('last_changes', Date.now.toString());
};
