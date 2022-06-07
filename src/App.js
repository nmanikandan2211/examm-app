/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/

// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import Navigator from './navigator/Navigator';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Navigator />
//     </NavigationContainer>
//   );
// };

// export default App;

// import 'react-native-gesture-handler';
// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AuthStackNavigator from './navigator/AuthStackNavigator';
// import auth from '@react-native-firebase/auth';
// import AppStackNavigator from './navigator/AppStackNavigator';

// const App = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const onAuthStateChanged = async user => {
//     await setCurrentUser(user);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber;
//   }, []);

//   if (isLoading) {
//     return null;
//   }

//   return (
//     <NavigationContainer>
//       {currentUser ? <AppStackNavigator /> : <AuthStackNavigator />}
//     </NavigationContainer>
//   );
// };

// export default App;

import React from 'react';
import Providers from './navigator';

const App = () => {
  return <Providers />;
}

export default App;


