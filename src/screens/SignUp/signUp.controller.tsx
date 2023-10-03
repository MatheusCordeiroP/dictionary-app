import React, { useState } from 'react';
import SignUpScreen from './signUp.screen';
import { databaseSignUp } from '../../utils/databaseFunctions';
import { showMessage } from 'react-native-flash-message';

const SignUpController = ({ route, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    setLoading(true);

    try {
      if (!email || !isValidEmail(email)) {
        showMessage({
          message: 'Invalid Email',
          description: 'Fill with an valid email account.',
          type: 'warning',
          duration: 3000,
        });
        setLoading(false);
        return;
      }
      if (!password || password.length < 6) {
        showMessage({
          message: 'Invalid Password',
          description: 'Your password must be at least 6 characters long.',
          type: 'warning',
          duration: 3000,
        });
        setLoading(false);
        return;
      }
      if (!confirmPassword || password.length < 6) {
        showMessage({
          message: 'Invalid Password Confirmation',
          description: 'Confirm your password.',
          type: 'warning',
          duration: 3000,
        });
        setLoading(false);
        return;
      }
      if (password !== confirmPassword) {
        showMessage({
          message: `Fields doesn't match.`,
          description: `Password and Confirmation doesn't match.`,
          type: 'warning',
          duration: 3000,
        });
        setLoading(false);
        return;
      }

      await databaseSignUp(email, password);
      showMessage({
        message: 'Register Successful',
        description: 'Check your emails!',
        type: 'success',
        duration: 3000,
      });
      returnScreen();
    } catch (error: any) {
      showMessage({
        message: 'Registration failed',
        description: `${error?.message}`,
        type: 'danger',
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email);
  }

  const returnScreen = async () => {
    navigation.goBack();
  };

  const handlers = {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    signUp,
    returnScreen,
  };
  return <SignUpScreen handlers={handlers} />;
};

export default SignUpController;
