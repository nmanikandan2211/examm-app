/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SignUp, PhoneSignUp, OTP, Home, Quiz, RecievedOTP } from '../screens';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="PhoneSignUp" component={PhoneSignUp} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="RecievedOTP" component={RecievedOTP} />
    </Stack.Navigator>
  );
};

export default Navigator;