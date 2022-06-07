/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/


import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { SignIn, SignUp, Splash, PhoneSignUp, OTP } from '../screens';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {


  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "650019709263-gkb0lr7fsq6khtc1e2k4da2k05rgub1d.apps.googleusercontent.com",
    });

  }, []);


  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="PhoneSignUp" component={PhoneSignUp} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
