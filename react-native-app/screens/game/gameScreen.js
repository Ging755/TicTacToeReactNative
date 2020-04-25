import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react'
import GameStore from '../../service/application/gameStore'

@observer
class Game extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{GameStore.gameCode}</Text>
      </View>
    );
  }
}

export default Game;