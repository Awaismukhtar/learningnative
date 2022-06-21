import {
  StyleSheet,
  Image,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import Logo from '../../assets/images/sht_logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';

const LoginScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();
  const handleLogin = data => {
    console.log(data);
    // validate user
    navigation.navigate('Home');
  };

  const handleForgortPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput
          name="username"
          placeholder="User name"
          control={control}
          rules={{ required: 'User name is required' }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          rules={{ required: 'password is required' }}
          secureTextEntry
        />
        <CustomButton onPress={handleSubmit(handleLogin)} text="Login" />
        <CustomButton
          onPress={handleForgortPassword}
          text="Forgot Password?"
          type="TERTIARY"
        />
        <SocialSignInButtons />
        <CustomButton
          onPress={handleSignUp}
          text="Dont't have an account? Create One"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '100%',
    maxWidth: 500,
    maxHeight: 300,
  },
});

export default LoginScreen;
