import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';

const email_regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const SignUpScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch('password');
  const handleTerms = () => {
    console.warn('Login');
  };

  const handlePolicy = () => {
    console.warn('forgot password');
  };

  const handleSignUp = data => {
    console.log(data);
    navigation.navigate('ConfirmEmail');
  };

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Create an account </Text>
        <CustomInput
          name="username"
          placeholder="User name"
          control={control}
          rules={{ required: 'User name is required' }}
        />
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: { value: email_regex, message: ' Email is invalid' },
          }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          rules={{ required: 'Password is required' }}
          secureTextEntry
        />
        <CustomInput
          name="confirmpassword"
          placeholder="Confirm Password"
          control={control}
          rules={{
            required: 'Confirm Password is required',
            validate: value => value === pwd || 'Password do not match',
          }}
          secureTextEntry
        />
        <CustomButton onPress={handleSubmit(handleSignUp)} text="Register" />
        <Text style={styles.terms}>
          By registering, you confirm that you accept our{' '}
          <Text onPress={handleTerms} style={styles.link}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text onPress={handlePolicy} style={styles.link}>
            Privacy Policy.
          </Text>
        </Text>
        <SocialSignInButtons />
        <CustomButton
          onPress={handleSignIn}
          text="Have have an account? SignIn"
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c68',
    margin: 10,
  },
  terms: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#c46b3b',
  },
});

export default SignUpScreen;
