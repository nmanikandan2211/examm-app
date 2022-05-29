/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/

import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, Text } from 'react-native';
import { Quiz } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigator/AuthNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
