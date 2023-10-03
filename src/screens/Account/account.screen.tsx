import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './account.styles';

const AccountScreen = ({ handlers }) => {
  const { userEmail, signOut } = handlers;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.simpleText}>You are logged as</Text>
        <Text style={styles.userEmail}>{userEmail}</Text>

        <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountScreen;
