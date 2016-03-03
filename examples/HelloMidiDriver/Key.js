/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { AppRegistry, Component, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MidiDriver from 'react-native-mididriver';
export default class Key extends Component {
  onStartShouldSetResponder() {
    return true;
  }
  onMoveShouldSetResponder() {
    return false;
  }
  onResponderGrant() {
    let noteNumber = this.props.noteNumber;
    MidiDriver.queueEvent([0x9A,this.props.noteNumber, 127]);
  }
  onResponderMove(evt) {
    //let noteNumber = this.props.noteNumber;
    //MidiDriver.queueEvent([0x9A,this.props.noteNumber, 127]);
  }
  onResponderRelease() {
    let noteNumber = this.props.noteNumber;
    MidiDriver.queueEvent([0x8A,this.props.noteNumber, 127]);
  }
  render() {
    return (
        <View style={styles.container} onResponderGrant={this.onResponderGrant.bind(this)} onResponderRelease={this.onResponderRelease.bind(this)} onStartShouldSetResponder={this.onStartShouldSetResponder.bind(this)} onMoveShouldSetResponder={this.onMoveShouldSetResponder.bind(this)}>
          <Text style={styles.buttonText}>{this.props.note}</Text>
        </View>);
  }
}

const styles = StyleSheet.create({
  container: {
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

