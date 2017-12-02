import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Activities from './Activities';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>React Native App by Quentin MONMERT</Text>
        <Activities />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
