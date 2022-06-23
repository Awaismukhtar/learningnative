import { StyleSheet } from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
const SocialSignInButtons = () => {
  const handleFacebookSignIn = () => {
    console.warn('facebook');
  };
  const handleGoogleSignIn = () => {
    console.warn('Google');
  };
  const handleAppleSignIn = () => {
    console.warn('Apple');
  };

  return (
    <>
      <CustomButton
        onPress={handleFacebookSignIn}
        text="Sign In with Facebook"
        bgColor="#e7eaf4"
        fgColor="#4765a9"
      />
      <CustomButton
        onPress={handleGoogleSignIn}
        text="Sign In with Google"
        bgColor="#fae9ea"
        fgColor="#dd4d44"
      />

      <CustomButton
        onPress={handleAppleSignIn}
        text="Sign In with Apple"
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;

const styles = StyleSheet.create({});
