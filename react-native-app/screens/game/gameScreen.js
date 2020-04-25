import React, { Component } from 'react';
import { View, Text, Clipboard, TouchableOpacity } from 'react-native';
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
            <TouchableOpacity onPress={() => Clipboard.setString(GameStore.gameCode)}>
              <Text>Game Code:{GameStore.gameCode}-TAP TO COPY</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.5 }}>
            <Text>Game Status: {GameStore.status}</Text>
          </View>
        </View>
        <View style={{ flex: 0.95, flexDirection: 'column' }}>
          <View style={{ flex: 0.25, flexDirection: 'row' }}>
            <Cell cellValue={GameStore.grid[0]} gridNumber={0}></Cell>
            <Cell cellValue={GameStore.grid[1]} gridNumber={1}></Cell>
            <Cell cellValue={GameStore.grid[2]} gridNumber={2}></Cell>
          </View>
          <View style={{ flex: 0.25, flexDirection: 'row' }}>
            <Cell cellValue={GameStore.grid[3]} gridNumber={3}></Cell>
            <Cell cellValue={GameStore.grid[4]} gridNumber={4}></Cell>
            <Cell cellValue={GameStore.grid[5]} gridNumber={5}></Cell>
          </View>
          <View style={{ flex: 0.25, flexDirection: 'row' }}>
            <Cell cellValue={GameStore.grid[6]} gridNumber={6}></Cell>
            <Cell cellValue={GameStore.grid[7]} gridNumber={7}></Cell>
            <Cell cellValue={GameStore.grid[8]} gridNumber={8}></Cell>
          </View>
        </View>
      </View>
    );
  }
}

export default Game;