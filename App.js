import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './src/screens/Home';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <StackNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
});
