import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react'
import GameStore from '../../service/application/gameStore'
import Cell from '../../components/cell'

@observer
class Game extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 0.5, flexDirection: 'column' }}>
          <View style={{ flex: 0.5 }}>
            <Text>Game Code: {GameStore.gameCode}</Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <Text>Game Status: Playing</Text>
          </View>
        </View>
        <View style={{ flex: 0.95, flexDirection: 'column'}}>
          <View style={{ flex: 0.25, flexDirection: 'row' }}>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </View>
          <View style={{ flex: 0.25, flexDirection: 'row' }}>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </View>
          <View style={{ flex: 0.25, flexDirection: 'row' }}>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </View>
        </View>
      </View>
    );
  }
}

export default Game;