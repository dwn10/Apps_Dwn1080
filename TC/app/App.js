import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { auth } from './src/services/firebase';
// import { onAuthStateChanged } from 'firebase/auth';

import HomeScreen from './src/screens/HomeScreen';
import AddTicketScreen from './src/screens/AddTicketScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { StyleSheet, Text, View } from 'react-native';

// const Stack = createNativeStackNavigator();

// function AuthNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//     </Stack.Navigator>
//   );
// }

import TicketDetailScreen from './src/screens/TicketDetailScreen';
import ScannerScreen from './src/screens/ScannerScreen';

// function MainNavigator() {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My Collection' }} />
//       <Stack.Screen name="AddTicket" component={AddTicketScreen} options={{ title: 'Add Ticket' }} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//       <Stack.Screen name="TicketDetail" component={TicketDetailScreen} />
//       <Stack.Screen name="Scanner" component={ScannerScreen} />
//     </Stack.Navigator>
//   );
// }

export default function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //   });
  //   return unsubscribe;
  // }, []);

  return (
    // <NavigationContainer>
    //   {user ? <MainNavigator /> : <AuthNavigator />}
    // </NavigationContainer>
    <View style={styles.container}>
        <Text>Authentication flow is not set up yet due to environment issues.</Text>
        <Text>When fixed, uncomment the code in App.js.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
