import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button'


export default class Page3 extends React.Component {
    navigate() {
        this.props.navigation.navigate("page2")
    }
  render() {
    return (
      <View style={styles.hello}>
        <Text style={styles.text}> Page3 </Text>
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