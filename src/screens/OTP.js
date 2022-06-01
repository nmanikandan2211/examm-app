/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/

import React, { useRef, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme';

const VerificationScreen = ({ route: { params: { phoneNumber } } }) => {

  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [test, setTest] = useState('');


  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();
  const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' });

  // Handle the button press
  useEffect(() => {
    signInWithPhoneNumber();
  }, [])

  async function signInWithPhoneNumber() {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      console.log("confirmation", confirmation)
      console.log("phoneNumber", phoneNumber)

      alert(JSON.stringify("confirmation", confirmation));
    } catch (e) {
      alert(JSON.stringify("err", e));
    }
  }

  console.log("confirm", confirm)
  console.log("otp", otp)
  console.log("test", test)


  async function confirmCode() {
    try {
      const response = await confirm.confirm(test);
      alert(JSON.stringify("response", response));
      if (response) {
        navigation.navigate('Home');
      }
    } catch (e) {
      alert(JSON.stringify("verify err", e));
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
        translucent
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>OTP Verification</Text>
      </View>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.content}>
        Enter the OTP number just sent you at{' '}
        <Text style={styles.phoneNumberText}>{phoneNumber}</Text>
      </Text>
      <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText={text => {
              setOtp({ ...otp, 1: text });
              text && secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText={text => {
              setOtp({ ...otp, 2: text });
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={text => {
              setOtp({ ...otp, 3: text });
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText={text => {
              setOtp({ ...otp, 4: text });
              text ? fifthInput.current.focus() : thirdInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fifthInput}
            onChangeText={text => {
              setOtp({ ...otp, 5: text });
              text ? sixthInput.current.focus() : fifthInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={sixthInput}
            onChangeText={text => {
              setOtp({ ...otp, 6: text });
              !text && fifthInput.current.focus();
            }}
          />
        </View>
      </View>
      <View>
        <TextInput
          value={test}
          style={styles.phoneinput}
          placeholder="otp"
          onChangeText={(text) => setTest(text)}
          keyboardType="number-pad"
        />
      </View>
      <TouchableOpacity
        style={styles.signinButton}
        onPress={confirmCode}>
        <Text style={styles.signinButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: SIZES.width,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content: {
    fontSize: 20,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  phoneNumberText: {
    fontSize: 18,
    fontFamily: FONTS.POPPINS_REGULAR,
    lineHeight: 18 * 1.4,
    color: COLORS.primary,
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    borderRadius: 5,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  otpText: {
    fontSize: 25,
    color: COLORS.black,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  signinButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    marginHorizontal: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: COLORS.white,
  },
});

export default VerificationScreen;
