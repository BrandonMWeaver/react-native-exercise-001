import React, { Component } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

class OpenNotifyInfo extends Component {
    render() {
        return(
            <View>
                <Text style={styles.centered}>Open Notify Component</Text>
                <TouchableWithoutFeedback onPress={this.props.onMainPress}>
                    <Text style={styles.button}>Main</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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

export default OpenNotifyInfo;
