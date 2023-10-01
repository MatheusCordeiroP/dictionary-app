import React from 'react';
import WordScreen from './word.screen';

const WordComponentController = ({
  text,
  onPress,
}: {
  text: string;
  onPress: (text: string) => any;
}) => {
  const handlers = { text, onPress };
  return <WordScreen handlers={handlers} />;
};

export default WordComponentController;
