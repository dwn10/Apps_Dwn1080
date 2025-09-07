import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// import { auth } from '../services/firebase';
// import { signOut } from 'firebase/auth';

const ProfileScreen = () => {

  const handleLogout = async () => {
    // try {
    //   await signOut(auth);
    //   console.log('User signed out!');
    // } catch (error) {
    //   console.error('Error signing out: ', error);
    // }
    console.log('Logout button pressed (implementation commented out)');
  };

  return (
    <View style={styles.container}>
      <Text>Welcome, User!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
