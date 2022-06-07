/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/

import React, { useState, useContext } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, Alert } from 'react-native';
import { COLORS } from '../constants';
import { AuthContext } from '../navigator/AuthProvider';


const PhoneSignUp = ({ navigation }) => {

  const { googleLogin } = useContext(AuthContext);
  const [number, setNumber] = useState('');
  const phoneNumber = "+91" + number

  const GetOTP = () => {
    if (phoneNumber && number.length > 9) {
      navigation.navigate('OTP', { phoneNumber });
    }
    else
      Alert.alert("", "Please enter 10 Digit Mobile Number", [{ text: "OK" }]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/studying.png')}
        style={styles.studying}
      />
      <View style={{ flexDirection: 'row', marginBottom: 30, marginTop: 40, width: 150 }}>
        <View style={styles.separate} />
        <Text style={styles.separatetext}>Login with phone</Text>
        <View style={styles.separate} />
      </View>
      <View style={styles.phonecountryinput}>
        <TextInput
          style={styles.countryinput}
          placeholder="+91"
          placeholderTextColor="#212529"
          keyboardType="number-pad"
          editable={false}
          selectTextOnFocus={false}
        />
        <TextInput
          value={number}
          style={{
            height: 45,
            width: 200,
            paddingLeft: 20,
            backgroundColor: COLORS.white,
            borderRadius: 2,
            color: COLORS.black,
            fontSize: number ? 18 : 16,
          }}
          placeholder="Enter Phone Number"
          placeholderTextColor='#ADB5BD'
          onChangeText={(text) => setNumber(text)}
          keyboardType="number-pad"
          maxLength={10}
        />
      </View>
      <TouchableOpacity onPress={GetOTP}
        style={styles.getotp}>
        <Text style={styles.btnText}>
          GET OTP
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 100, width: 150 }}>
        <View style={styles.separate} />
        <Text style={styles.separatetext}>Login with Social</Text>
        <View style={styles.separate} />
      </View>
      <View style={styles.social} >
        <TouchableOpacity onPress={() => googleLogin()}>
          <Image
            source={require('../assets/images/googleicon.png')}
            style={styles.google}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => googleLogin()}>
          <Image
            source={require('../assets/images/facebookicon.png')}
            style={styles.google}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.primary
  },
  studying: {
    width: 400,
    height: 260,
    marginTop: 30,
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
    height: 45,
    width: 70,
    backgroundColor: COLORS.white,
    fontSize: 18,
    borderRadius: 2,
    color: COLORS.black,
    marginRight: 5,
    textAlign: 'center'
  },
  getotp: {
    width: 200,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    marginTop: 40,
    alignItems: "center",
    paddingVertical: 10,
  },
  btnText: {
    color: COLORS.white,
    fontSize: 18,
  },
  text: {
    color: COLORS.black,
    fontSize: 20,
  },
  title: {
    color: COLORS.white,
    fontSize: 20,
    marginBottom: 40,
    marginTop: 25,
    marginHorizontal: 20,
    textAlign: 'center'
  },
  login: {
    color: COLORS.white,
    fontSize: 16,
    marginBottom: 40,
    marginTop: 10,
    marginHorizontal: 20,
    textAlign: 'center'
  },
  social: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  google: {
    height: 30,
    width: 30,
    margin: 25,
  },
  facebook: {
    height: 30,
    width: 30,
    margin: 25,
  },
  separate: {
    backgroundColor: COLORS.darkgray,
    height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  separatetext: {
    alignSelf: 'center',
    paddingHorizontal: 5,
    fontSize: 16,
    color: COLORS.darkgray
  }
});

export default PhoneSignUp;