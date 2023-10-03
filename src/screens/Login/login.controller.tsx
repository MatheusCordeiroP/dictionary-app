import React, { useState } from 'react';
import LoginScreen from './login.screen';
import { databaseSignIn } from '../../utils/databaseFunctions';
import { showMessage } from 'react-native-flash-message';

const LoginController = ({ route, navigation }) => {
  const [email, setEmail] = useState('guest@dev.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      await databaseSignIn(email, password);
    } catch (error: any) {
      showMessage({
        message: 'Sign In Failed',
        description: `${error?.message}`,
        type: 'danger',
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    navigation.navigate('Sign Up', {});
  };

  const clearFields = async () => {
    setEmail('');
    setPassword('');
  };

  const handlers = {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    signIn,
    signUp,
    clearFields,
  };
  return <LoginScreen handlers={handlers} />;
};

export default LoginController;
