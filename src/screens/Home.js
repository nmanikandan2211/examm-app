/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../navigator/AuthProvider';

const Home = ({ navigation }) => {

  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>

      <Text style={styles.signOut} >{user.uid}</Text>
      <Text onPress={() => { logout() }} style={styles.signOut} >SignOut</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz')}
        style={styles.button}>
        <Text style={styles.buttonText}>தொடங்கு</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'MuktaMalar-Bold'
  },
  signOut: {
    textAlign: 'center',
    color: '#1A759F',
    fontSize: 16,

  }
});