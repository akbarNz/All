import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class Page2 extends React.Component {
  render() {
    return (
      <View style={styles.hello}>
        <Text style={styles.text}> Page2 </Text>
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