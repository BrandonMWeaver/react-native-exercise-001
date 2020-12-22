import React, { Component } from 'react';
import { Alert, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

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
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.centered}>{this.state.count}</Text>
          <TouchableWithoutFeedback onPress={this.onIncrementPress}>
            <Text style={styles.button}>Increment</Text>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#cdcdff"
  },
  contentContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 20
  },
  centered: {
    textAlign: "center"
  },
  button: {
    marginTop: 10,
    padding: 10,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#9b9bcd",
    borderRadius: 20
  }
});
