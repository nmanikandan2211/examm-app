/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/

import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { COLORS } from '../constants';


const Splash = ({ navigation }) => {
  return (

    <View style={styles.splash}>
      <Text style={styles.victory}>
        Victory
      </Text>
      <Text style={styles.exams}>
        Exams
      </Text>
      <LottieView source={require('../assets/Lottie/splash.json')}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          navigation.navigate("PhoneSignUp")
        }} />
    </View>

  )
}

export default Splash;

const styles = StyleSheet.create({

  splash: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
  },
  victory: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    marginTop: 50,
    color: COLORS.accent

  },
  exams: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    color: COLORS.accent


  }
})