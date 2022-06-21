import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './navigation';
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f9fbfc',
    flex: 1,
  },
});
export default App;
