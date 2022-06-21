import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useForm } from 'react-hook-form';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();
  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleSend = () => {
    navigation.navigate('NewPassword');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset Your Password</Text>
        <CustomInput
          name="username"
          placeholder="User name"
          control={control}
          rules={{ required: 'User name is required' }}
        />

        <CustomButton onPress={handleSubmit(handleSend)} text="Send" />

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

export default ForgotPasswordScreen;
