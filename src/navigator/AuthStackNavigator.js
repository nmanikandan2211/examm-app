import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { SignIn, SignUp, Splash, PhoneSignUp, OTP } from '../screens';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "636409869998-qk14sdjl86cn6f6k9ih34a4jmo1ksh2t.apps.googleusercontent.com",
    });

  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="PhoneSignUp" component={PhoneSignUp} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
