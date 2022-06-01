/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/

import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { COLORS } from '../constants/theme';
import { mailSignIn } from '../utils/auth';


const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = () => {
    if (email != '' && password != '') {
      mailSignIn(email, password);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
      }}>
      {/* Header */}
      <Text
        style={{
          fontSize: 24,
          color: COLORS.black,
          fontWeight: 'bold',
          marginVertical: 32,
        }}>
        Sign In
      </Text>

      {/* Email */}
      <FormInput
        labelText="Email"
        placeholderText="enter your email"
        onChangeText={value => setEmail(value)}
        value={email}
        keyboardType={'email-address'}
      />

      {/* Password */}
      <FormInput
        labelText="Password"
        placeholderText="enter your password"
        onChangeText={value => setPassword(value)}
        value={password}
        secureTextEntry={true}
      />

      {/* Submit button */}
      <FormButton
        labelText="Submit"
        handleOnPress={handleOnSubmit}
        style={{ width: '100%' }}
      />

      {/* Footer */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Text>Don't have an account?</Text>
        <Text
          style={{ marginLeft: 4, color: COLORS.primary }}
          onPress={() => navigation.navigate('PhoneSignUp.js')}>
          Create account
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
