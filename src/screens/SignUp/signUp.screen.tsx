import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from './signUp.styles';

const SignUpScreen = ({ handlers }) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    signUp,
    returnScreen,
  } = handlers;

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.title}>Register</Text>
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
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          value={confirmPassword}
          placeholder="Confirm Password"
          autoCapitalize="none"
          onChangeText={(text) => setConfirmPassword(text)}
        ></TextInput>
        {loading ? (
          <ActivityIndicator size="large" color="#444" />
        ) : (
          <View style={styles.buttonContainer}>
            <View style={styles.buttonStyle}>
              <TouchableOpacity onPress={signUp}>
                <Text style={styles.buttonText}>Create Account</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonStyle}>
              <TouchableOpacity onPress={() => returnScreen()}>
                <Text style={styles.buttonText}>Return</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUpScreen;
