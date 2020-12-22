import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  state = {
    count: 0
  }

  onIncrementPress = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.count}</Text>
        <Button onPress={this.onIncrementPress} title="increment" />
        <StatusBar style="auto" />
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
