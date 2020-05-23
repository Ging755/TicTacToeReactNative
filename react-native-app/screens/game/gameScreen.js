import React, { Component } from 'react';
import { View, Text, Clipboard, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react'
import GameStore from '../../service/application/gameStore'
import Cell from '../../components/cell'

import StyleStore from '../../service/application/styleStore';

@observer
class Game extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', ...StyleStore.styles.primary }}>
        <View style={{ flex: 0.5, flexDirection: 'column' }}>
          <View style={{ flex: 0.3, ...StyleStore.styles.primary }}>
            <TouchableOpacity onPress={() => Clipboard.setString(GameStore.gameCode)}>
              <Text style={{ textAlign: 'center', ...StyleStore.styles.primary }}>Game Code: {GameStore.gameCode}</Text>
              <Text style={{ textAlign: 'center', ...StyleStore.styles.primary }}>TAP TO COPY</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.5 }}>
            <Text style={{ textAlign: 'center', ...StyleStore.styles.primary }}>Game Status: {GameStore.status}</Text>
            <Text style={{ textAlign: 'center', ...StyleStore.styles.primary }}>You're: {GameStore.player}</Text>
          </View>
        </View>
        <View style={{ flex: 0.85, flexDirection: 'column', alignItems: 'center' }}>
          <View style={{flexDirection: 'row' }}>
            <Cell cellValue={GameStore.grid[0]} gridNumber={0}></Cell>
            <Cell cellValue={GameStore.grid[1]} gridNumber={1}></Cell>
            <Cell cellValue={GameStore.grid[2]} gridNumber={2}></Cell>
          </View>
          <View style={{flexDirection: 'row' }}>
            <Cell cellValue={GameStore.grid[3]} gridNumber={3}></Cell>
            <Cell cellValue={GameStore.grid[4]} gridNumber={4}></Cell>
            <Cell cellValue={GameStore.grid[5]} gridNumber={5}></Cell>
          </View>
          <View style={{flexDirection: 'row' }}>
            <Cell cellValue={GameStore.grid[6]} gridNumber={6}></Cell>
            <Cell cellValue={GameStore.grid[7]} gridNumber={7}></Cell>
            <Cell cellValue={GameStore.grid[8]} gridNumber={8}></Cell>
          </View>
        </View>
        <View style={{ flex: 0.2 }}>
          <TouchableOpacity
            style={{ ...StyleStore.styles.primaryButton, height: 500, alignItems: 'center'}}
            onPress={GameStore.clearBoard}
          >
            <Text style={{
              fontSize: 40,
              textAlignVertical: 'center',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              ...StyleStore.styles.primaryButton
            }}>
              CLEAR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Game;