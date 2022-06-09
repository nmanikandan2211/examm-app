/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/

import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../navigator/AuthProvider';
import { COLORS, FONTS } from '../constants';



const SelectLaunage = () => {

  const { user } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.pageview}>
      <Text style={styles.signOut} > Hi{user.name}</Text>
      <Text style={styles.text}>Please Select Your Launage</Text>
      <Text style={styles.newtext}>Please Select Your Launage</Text>

      <Text>Tamil</Text>
      <Text>English</Text>
    </SafeAreaView>
  )
}

export default SelectLaunage

const styles = StyleSheet.create({

  pageview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary

  },
  text: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 20
  },
  newtext: {
    fontFamily: 'MuktaMalar-SemiBold',
    fontSize: 20
  }

})