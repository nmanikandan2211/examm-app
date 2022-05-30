/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/

import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigator/AuthNavigator';
import AppNavigator from './navigator/AppNavigator';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const onAuthStateChanged = async user => {
    await setCurrentUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      {currentUser ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;

