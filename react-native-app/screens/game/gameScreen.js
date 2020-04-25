import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Game extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Game screen</Text>
      </View>
    );
  }
}

export default Game;