import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button'

export default class Main extends React.Component {
    navigate() {
        this.props.navigation.navigate("page3")
    }
  render() {
    return (
      <View style={styles.hello}>
        <Text style={styles.text}> Main </Text>
        <Button onPress={() => {this.navigate()}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    hello: {
      backgroundColor:"red",
      width: 200,
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: "#fff",
    }
  });