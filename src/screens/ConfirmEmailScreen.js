import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const ConfirmEmailScreen = () => {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleResendCode = () => {
    console.warn('Resend code');
  };

  const handleConfirm = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          name="code"
          placeholder="Enter Your Confirmation Code"
          control={control}
          rules={{ required: 'Please enter code' }}
        />

        <CustomButton onPress={handleSubmit(handleConfirm)} text="Confirm" />
        <CustomButton
          onPress={handleResendCode}
          text="Resend code"
          type="SECONDARY"
        />

        <CustomButton
          onPress={handleSignIn}
          text="Back to Sign In"
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

export default ConfirmEmailScreen;
