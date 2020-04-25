import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Cell extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.content}>X</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    fontSize: 20,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  }
});