import React from 'react';
import { View } from 'react-native';
import styles from './login.styles';
import { TextInput, Button } from 'react-native';
import { ActivityIndicator, Text } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

const LoginScreen = ({ handlers }) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    setLoading,
    signIn,
    signUp,
  } = handlers;

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.title}>Digital English Dictionary</Text>
        <Text style={styles.subtitle}>Digital English Dictionary</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          value={password}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={styles.textInput}>
            <Button title="Login" onPress={signIn} />
            <Button title="Create  Account" onPress={signUp} />
          </View>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
