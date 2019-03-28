import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Button extends React.Component {
    render() {
        return (
             <TouchableOpacity onPress={this.props.onPress}>
                 <Text style={styles.container}>Click Me</Text>
             </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: "blue",
        margin: 10,
        padding: 10,
        color: "white",
        borderRadius: 20,

    }
})