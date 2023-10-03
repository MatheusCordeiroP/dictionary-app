import React from 'react';
import {
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './login.styles';

const LoginScreen = ({ handlers }) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    signIn,
    signUp,
    clearFields,
  } = handlers;

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.title}>Digital English Dictionary</Text>
        <Text style={styles.subtitle}>Unlocking the World of Words!</Text>
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
        <View style={styles.clearFieldsContainer}>
          <TouchableOpacity onPress={() => clearFields()}>
            <Text style={styles.clearFieldsText}>Clear Fields</Text>
          </TouchableOpacity>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#444" />
        ) : (
          <View style={styles.buttonContainer}>
            <View style={styles.buttonStyle}>
              <TouchableOpacity onPress={signIn}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonStyle}>
              <TouchableOpacity onPress={signUp}>
                <Text style={styles.buttonText}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
