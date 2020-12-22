import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  state = {
    count: 0
  }

  onIncrementPress = () => {
    const alertButtons = [
      {
        text: "Revert",
        onPress: this.onAlertRevertPress
      },
      {
        text: "Continue"
      }
    ];

    Alert.alert("Incremented!", `Current count is ${this.state.count + 1}`, alertButtons);

    this.setState({
      count: this.state.count + 1
    });
  }

  onAlertRevertPress = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.count}</Text>
        <Button onPress={this.onIncrementPress} title="Increment" />
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
