/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/

import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES } from '../constants';


const PhoneSignUp = ({ navigation }) => {

  const [number, setNumber] = useState('');
  const phoneNumber = "+91" + number

  console.log(phoneNumber)
  const GetOTP = () => {
    if (phoneNumber && phoneNumber.length > 9) {
      navigation.navigate('OTP', { phoneNumber });
    }
    else
      alert("Please enter 10 digit phone number");

  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Studing.png')}
        style={styles.studying}
      />
      <Text style={styles.title}>
        Please Enter your  phone number
      </Text>
      <View style={styles.phonecountryinput}>
        <TextInput
          style={styles.countryinput}
          placeholder="+91"
          keyboardType="number-pad"
          editable={false}
          selectTextOnFocus={false}
        />
        <TextInput
          value={number}
          style={styles.phoneinput}
          placeholder="Enter Phone Number"
          onChangeText={(text) => setNumber(text)}
          keyboardType="number-pad"
        />
      </View>

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
    alignItems: 'center',
    backgroundColor: COLORS.primary
  },
  studying: {
    width: SIZES.width,
    height: 250,
    marginTop: 20,
    zIndex: -1,
  },
  btnContainer: {
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
  },
  phonecountryinput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryinput: {
    height: 50,
    width: 70,
    backgroundColor: COLORS.white,
    fontSize: 20,
    borderRadius: 2,
    color: COLORS.black,
    marginRight: 10,
    textAlign: 'center'
  },
  phoneinput: {
    height: 50,
    width: 250,
    paddingLeft: 20,
    backgroundColor: COLORS.white,
    fontSize: 20,
    borderRadius: 2,
    color: COLORS.black,

  },
  getotp: {
    backgroundColor: COLORS.orange,
    padding: 10,
    borderRadius: 8,
    marginTop: 50
  },
  btnText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: COLORS.black,
    fontSize: 20,
  },
  title: {
    color: COLORS.white,
    fontSize: 24,
    marginBottom: 40,
    marginTop: 25,
    marginHorizontal: 20,
  }
});

export default PhoneSignUp;