/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/

import auth from '@react-native-firebase/auth';
import { ToastAndroid } from 'react-native';

export const mailSignIn = (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      ToastAndroid.show('Logged in', ToastAndroid.SHORT);
    })
    .catch(err => {
      console.log(err);
    });
};

export const mailSignUp = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      ToastAndroid.show('Signed up', ToastAndroid.SHORT);
    })
    .catch(err => {
      console.log(err);
    });
};

export const signOut = () => {
  auth()
    .signOut()
    .then(() => {
      ToastAndroid.show('Signed Out', ToastAndroid.SHORT);
    });
};