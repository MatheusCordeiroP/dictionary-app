import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styles from './wordDetails.styles';
import { Ionicons } from '@expo/vector-icons';

const wordDetailsScreen = ({ handlers }) => {
  const { selectedWord, favorite, changeFavorite, speechText } = handlers;
  const { word, phonetic, phonetics, meanings, license, sourceUrls } =
    selectedWord;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.wordText}>{word}</Text>
        <TouchableOpacity
          onPress={() => {
            speechText(word);
          }}
        >
          <Ionicons name="volume-medium-outline" color={'#888'} size={28} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            changeFavorite(!favorite);
          }}
        >
          {favorite ? (
            <Ionicons name="star" color={'#f1c40f'} size={36} />
          ) : (
            <Ionicons name="star-outline" color={'#f1c40f'} size={36} />
          )}
        </TouchableOpacity>
      </View>
      {phonetic && <Text style={styles.mainPhoneticText}>{phonetic}</Text>}

      <ScrollView style={styles.scrollView}>
        {phonetics && phonetics.length > 0 && (
          <>
            <Text style={styles.phoneticsTitle}>Phonetics:</Text>
            {phonetics.map((item, index) => {
              return <Text style={styles.phoneticsText}>{item.text}</Text>;
            })}
          </>
        )}
        {meanings && meanings.length > 0 && (
          <>
            <Text style={styles.meaningsTitle}>Meanings:</Text>
            {meanings.map((item, index) => {
              return (
                <View key={index} style={styles.meaningsComponentView}>
                  <Text style={styles.meaningsComponentTitle}>
                    {item.partOfSpeech}
                  </Text>
                  {item.definitions.map((item, index) => {
                    return (
                      <View
                        key={index.toString()}
                        style={styles.meaningsSubComponentView}
                      >
                        <Text style={styles.meaningsSubComponentText}>
                          {item.definition}
                        </Text>
                        {item.example && (
                          <Text style={styles.meaningsSubComponentExample}>
                            {item.example}
                          </Text>
                        )}
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </>
        )}

        {license && (
          <Text style={styles.licenseText}>
            License: {license.name} ({license.url})
          </Text>
        )}

        {sourceUrls && (
          <>
            <Text style={styles.sourceTitle}>Source:</Text>
            {sourceUrls.map((sourceUrl, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => Linking.openURL(sourceUrl)}
                style={styles.sourceTouchableOpacity}
              >
                <Text style={styles.sourceText}> {sourceUrl}</Text>
              </TouchableOpacity>
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default wordDetailsScreen;
