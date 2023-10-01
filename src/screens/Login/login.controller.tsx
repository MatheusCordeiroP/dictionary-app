import React, { useState } from 'react';
import LoginScreen from './login.screen';
import { databaseSignIn, databaseSignUp } from '../../utils/databaseFunctions';

const LoginController = ({ route, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await databaseSignIn(email, password);
    } catch (error: any) {
      console.log(error);
      alert('Sign In failed: ' + error?.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(false);
    try {
      const response = await databaseSignUp(email, password);
      alert('Check your emails!');
    } catch (error: any) {
      console.log(error);
      alert('Registration failed: ' + error?.message);
    } finally {
      setLoading(false);
    }
  };

  const navigateToScreen = (screen: string) => {
    navigation.navigate(screen, {});
  };

  const handlers = {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    setLoading,
    signIn,
    signUp,
    navigateToScreen,
  };
  return <LoginScreen handlers={handlers} />;
};

export default LoginController;
