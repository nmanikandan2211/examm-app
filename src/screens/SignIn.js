/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/

import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { COLORS } from '../constants/theme';
import { AuthContext } from '../navigator/AuthProvider';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);

  const handleOnSubmit = () => {
    if (email != '' && password != '') {
      login(email, password);
      navigation.navigate('Home')
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
      <Text
        style={{
          fontSize: 24,
          color: COLORS.black,
          fontWeight: 'bold',
          marginVertical: 32,
        }}>
        Sign In
      </Text>
      <FormInput
        labelText="Email"
        placeholderText="enter your email"
        onChangeText={value => setEmail(value)}
        value={email}
        keyboardType={'email-address'}
      />
      <FormInput
        labelText="Password"
        placeholderText="enter your password"
        onChangeText={value => setPassword(value)}
        value={password}
        secureTextEntry={true}
      />
      <FormButton
        labelText="Submit"
        handleOnPress={handleOnSubmit}
        style={{ width: '100%' }}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Text>Don't have an account?</Text>
        <Text
          style={{ marginLeft: 4, color: COLORS.primary }}
          onPress={() => navigation.navigate('SignUp')}>
          Create account
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
