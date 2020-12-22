import React, { Component } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

class OpenNotifyInfo extends Component {
    state = {
        peopleInSpace: "Loading...",
        people: []
    }

    componentDidMount() {
        this.getPeopleInSpace();
    }
    
    getPeopleInSpace = () => {
        fetch("http://api.open-notify.org/astros.json")
        .then(r => r.json())
        .then(o => {
            this.setState({
                peopleInSpace: o.number,
                people: o.people
            });
        });
    }

    render() {
        return(
            <View>
                <Text style={styles.centered}>{`People in space: ${this.state.peopleInSpace}`}</Text>
                {this.state.people.map((person, index) => <Text key={index} style={[styles.centered, styles.name]}>{person.name}</Text>)}
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
    name: {
        marginTop: 10,
        padding: 10,
        color: "#cdffcd",
        backgroundColor: "#9b9bcd",
        borderRadius: 20
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
