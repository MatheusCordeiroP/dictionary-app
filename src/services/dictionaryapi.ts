import axios from 'axios';

export const requestWord = async (word: string) => {
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
      return { status: 50, title: `Error fetching data: ${error}` };
    };
  }
};
