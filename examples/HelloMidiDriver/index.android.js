/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { AppRegistry, Component, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MidiDriver from 'react-native-mididriver';

let CMajorScale = [
  {
    note: 'C',
    midiMessage: [0x9A, 60, 127]
  },
  {
    note: 'D',
    midiMessage: [0x9A, 62, 127]
  },
  {
    note: 'E',
    midiMessage: [0x9A, 64, 127]
  }, {
    note: 'F',
    midiMessage: [0x9A, 65, 127]
  }, {
    note: 'G',
    midiMessage: [0x9A, 67, 127]
  }, {
    note: 'A',
    midiMessage: [0x9A, 69, 127]
  }, {
    note: 'B',
    midiMessage: [0x9A, 71, 127]
  },
  {
    note: 'C',
    midiMessage: [0x9A, 72, 127]
  },
];
class HelloMidiDriver extends Component {
  onPress(item) {
    //let buffer = [0x9A, 60, 127];
    MidiDriver.queueEvent(item.midiMessage);
  }
  render() {
    return (
      <View style={styles.container}>
      {CMajorScale.map((item) => {
        return (<TouchableOpacity style={styles.button} onPress={this.onPress.bind(this, item)}>
          <Text style={styles.buttonText}>
            {item.note}
          </Text>
        </TouchableOpacity>);
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

AppRegistry.registerComponent('HelloMidiDriver', () => HelloMidiDriver);
