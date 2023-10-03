import React from 'react';
import HistoryWordScreen from './historyWord.screen';

const HistoryWordComponentController = ({
  text,
  onPress,
}: {
  text: string;
  onPress: (text: string) => any;
}) => {
  const handlers = { text, onPress };
  return <HistoryWordScreen handlers={handlers} />;
};

export default HistoryWordComponentController;
