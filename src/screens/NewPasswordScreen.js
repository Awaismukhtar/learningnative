import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleSubmit = () => {
    navigation.navigate('Home');

  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset Your Password</Text>
        <CustomInput
          placeholder="Enter Confirmation code"
          value={code}
          setValue={setCode}
        />
        <CustomInput
          placeholder="Enter New Password"
          value={password}
          setValue={setPassword}
        />

        <CustomButton onPress={handleSubmit} text="Submit" />

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

export default NewPasswordScreen;
