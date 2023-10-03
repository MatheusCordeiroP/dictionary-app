import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { setLastUpdateAsyncStorage } from '../utils/asyncStorageFunctions';

export const requestWord = async (word: string) => {
  const wordInCache = await AsyncStorage.getItem(`word-${word}`);

  if (wordInCache !== null) {
    const jsonFormat = JSON.parse(wordInCache);
    return jsonFormat;
  }

  const wordFetched = await fetchWord(word);
  if (wordFetched && wordFetched.status == 200) {
    const stringWord = JSON.stringify(wordFetched);
    await AsyncStorage.setItem(`word-${word}`, stringWord);
    setLastUpdateAsyncStorage();
  }

  return wordFetched;
};

export const fetchWord = async (word: string) => {
  try {
    const formattedWord = word.toLowerCase();
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${formattedWord}`,
      {
        timeout: 5000,
      }
    );

    return { ...response.data, status: response.status };
  } catch {
    (error) => {
      console.error('Error fetching data:', error);
      return { status: 500, title: `Error fetching data: ${error}` };
    };
  }
};
