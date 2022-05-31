/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SignUp, PhoneSignUp, OTP } from '../screens';


const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="PhoneSignUp" component={PhoneSignUp} />
      <Stack.Screen name="OTP" component={OTP} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
