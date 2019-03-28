import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './components/helloWord'
import Button from './components/Button'
import Router from './RouterNavigation';
/* export default class App extends React.Component {
  parentFunction() {
    return(
      <Text>hello again</Text>
    )
  }
  render() {
    return (
        <View style={styles.main}>
          <Hello functionProp={() => this.parentFunction()}>Bonjour</Hello>
        </View>
    );
  }
} */

/* export default class App extends React.Component {
  state = {
    text: "Hello",
    array: ["Holla", "Bonjour", "Hallo"]
  }
  changeText(array) {
    let newText = array[Math.floor(Math.random() * (array.length))]
    this.setState({text: newText})
  }
  render() {
    return (
      <View style={styles.main}>
        <Button onPress={() => {this.changeText(this.state.array)}}/>
        <Hello>{this.state.text}</Hello>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
}) */

export default class App extends React.Component {
  render() {
    return (
       <View style={styles.main}>
        <Router />
       </View>
    );
  }
}


const styles = StyleSheet.create({
  main: {
    flex:1,
  }
})