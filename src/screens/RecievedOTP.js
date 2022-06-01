/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/

import React, { useState, useEffect } from 'react';
import RNOtpVerify from 'react-native-otp-verify';
import { View, Text } from 'react-native';

const RecievedOTP = () => {
  const [OTP, setOTP] = useState("");

  useEffect(() => {

    RNOtpVerify.getHash().then(console.log).catch(console.log);
    RNOtpVerify.getOtp().then(p => RNOtpVerify.addListener(otpHandler)).catch(p => console.log(p));
    return () => RNOtpVerify.removeListener();

  }, [])

  const otpHandler = (message) => {
    console.log("message", message)
    const otp = /(\d{4})/g.exec(message)[1];
    setOTP({ otp });
    RNOtpVerify.removeListener();
  }

  return (
    <View>
      <Text>OTP Recieved</Text>
      <Text>{OTP}</Text>
    </View>
  );
}

export default RecievedOTP;