import React, { useRef, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, TextInput, Button, Alert } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/Theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OTP = ({ route: { params: { phoneNumber } }, navigation }) => {

  const [confirm, setConfirm] = useState(null);

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();
  const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' });
  const code = Object.values(otp).join("");

  useEffect(() => {
    signInWithPhoneNumber();
  }, [])

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (e) {
      alert(JSON.stringify("err", e));
    }
  }

  const confirmCode = async () => {
    try {
      const response = await confirm.confirm(code);
      navigation.navigate('Home');
    } catch {
      Alert.alert("", "Please enter correct verification code", [{ text: "OK" }]);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
        translucent
      />
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
              text ? sixthInput.current.focus() : fourthInput.current.focus();
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
      <TouchableOpacity
        onPress={() => confirmCode()}
        style={styles.button}
      >
        <Text style={styles.confirmtext}>CONFORM</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center"
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
    color: COLORS.white,
    fontSize: 24,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 40,
    marginHorizontal: 20,
  },
  phoneinputtest: {
    fontSize: 20,
    color: COLORS.white,
  },
  content: {
    fontSize: 18,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginTop: 10,
    marginBottom: 30,
    marginHorizontal: 20,
    color: COLORS.white,

  },
  phoneNumberText: {
    fontSize: 18,
    fontFamily: FONTS.POPPINS_REGULAR,
    lineHeight: 18 * 1.4,
    color: COLORS.white,
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    width: 50,
    height: 50,
    borderRadius: 5,
    borderColor: COLORS.orange,
    borderWidth: 1,
    margin: 5,
  },
  otpText: {
    fontSize: 16,
    color: COLORS.white,
    textAlign: 'center',
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
  button: {
    width: 200,
    backgroundColor: COLORS.secondary,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  confirmtext: {
    color: COLORS.white,
    fontSize: 18,
  }
});

export default OTP;
