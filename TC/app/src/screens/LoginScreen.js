import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
// import { auth, GoogleAuthProvider, FacebookAuthProvider } from '../services/firebase';
// import { signInWithPopup } from 'firebase/auth';

const LoginScreen = () => {

  const handleGoogleSignIn = async () => {
    // const provider = new GoogleAuthProvider();
    // try {
    //   await signInWithPopup(auth, provider);
    //   console.log('Signed in with Google!');
    // } catch (error) {
    //   console.error('Error signing in with Google:', error);
    // }
    console.log('Google Sign-In button pressed (implementation commented out)');
  };

  const handleFacebookSignIn = async () => {
    // const provider = new FacebookAuthProvider();
    // try {
    //   await signInWithPopup(auth, provider);
    //   console.log('Signed in with Facebook!');
    // } catch (error) {
    //   console.error('Error signing in with Facebook:', error);
    // }
    console.log('Facebook Sign-In button pressed (implementation commented out)');
  };

  return (
    <View style={styles.container}>
      <Button title="Sign in with Google" onPress={handleGoogleSignIn} />
      <Button title="Sign in with Facebook" onPress={handleFacebookSignIn} />
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

export default LoginScreen;
