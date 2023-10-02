import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { User, onAuthStateChanged } from 'firebase/auth';

import InsideNavigator from './src/navigation/InsideNavigator';
import StackNavigator from './src/navigation/StackNavigator';
import { FIREBASE_AUTH } from './src/services/firebase/config';

const App = () => {
  const [user, setUser] = useState<User | 'guest' | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          {user ? <InsideNavigator /> : <StackNavigator />}
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
