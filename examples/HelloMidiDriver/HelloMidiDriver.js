/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { AppRegistry, Component, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Key from './Key.js';

let CMajorScale = [
  {
    note: 'C',
    noteNumber: 60
  },
  {
    note: 'D',
    noteNumber: 62
  },
  {
    note: 'E',
    noteNumber: 64
  }, {
    note: 'F',
    noteNumber: 65
  }, {
    note: 'G',
    noteNumber: 67
  }, {
    note: 'A',
    noteNumber: 69
  }, {
    note: 'B',
    noteNumber: 71
  },
  {
    note: 'C',
    noteNumber: 72
  },
];
export default class HelloMidiDriver extends Component {
  render() {
    return (
      <View style={styles.container}>
      {CMajorScale.map((item, index) => {
        return (<Key key={index} {...item}/>);
      })
      }
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    borderWidth: 1,
    backgroundColor: '#fe9a32',
    width: 40,
    height: 300,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30

  }
});

