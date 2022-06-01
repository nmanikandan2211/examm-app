/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/

import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, Image, TextInput, TouchableOpacity } from 'react-native';
// import smurfImg from '../../../assets/smurf.png';

const PhoneSignUp = ({ navigation }) => {

  const [phoneNumber, addPhoneNumber] = useState('+91');
  const GetOTP = () => {
    if (phoneNumber && phoneNumber.length > 9) {
      navigation.navigate('OTP', { phoneNumber });
    }
    else
      alert("Please enter 10 digit phone number");

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Please Enter your  phone number
      </Text>
      <TextInput
        value={phoneNumber}
        style={styles.phoneinput}
        placeholder="+91 1234567890"
        onChangeText={(text) => addPhoneNumber(text)}
        keyboardType="number-pad"
      />
      <TouchableOpacity onPress={GetOTP}
        style={styles.getotp}>
        <Text style={styles.btnText}>
          Get OTP!
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252c4a'
  },
  btnContainer: {
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
  },
  phoneinput: {
    height: 50,
    width: 300,
    paddingLeft: 20,
    backgroundColor: 'azure',
    fontSize: 20,
    borderRadius: 2
  },
  getotp: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    marginTop: 50
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 50,
    marginHorizontal: 20,
  }
});

export default PhoneSignUp;