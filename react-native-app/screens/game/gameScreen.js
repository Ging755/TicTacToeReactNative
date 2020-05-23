import React, { Component } from 'react';
import { View, Text, Clipboard, TouchableOpacity, Button } from 'react-native';
import { observer } from 'mobx-react'
import GameStore from '../../service/application/gameStore'
import Cell from '../../components/cell'

@observer
class Game extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'rgba(0, 0, 0, 1)' }}>
        <View style={{ flex: 0.5, flexDirection: 'column' }}>
          <View style={{ flex: 0.3, backgroundColor: '#121212' }}>
            <TouchableOpacity onPress={() => Clipboard.setString(GameStore.gameCode)}>
              <Text style={{ textAlign: 'center', color:'rgba(255, 255, 255, 0.95)' }}>Game Code: {GameStore.gameCode}</Text>
              <Text style={{ textAlign: 'center', color:'rgba(255, 255, 255, 0.95)' }}>TAP TO COPY</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.5 }}>
            <Text style={{ textAlign: 'center' }}>Game Status: {GameStore.status}</Text>
            <Text style={{ textAlign: 'center' }}>You're: {GameStore.player}</Text>
          </View>
        </View>
        <View style={{ flex: 0.85, flexDirection: 'column', alignItems: 'center' }}>
          <View style={{flexDirection: 'row', backgroundColor: '#121212' }}>
            <Cell cellValue={GameStore.grid[0]} gridNumber={0}></Cell>
            <Cell cellValue={GameStore.grid[1]} gridNumber={1}></Cell>
            <Cell cellValue={GameStore.grid[2]} gridNumber={2}></Cell>
          </View>
          <View style={{flexDirection: 'row', backgroundColor: '#121212' }}>
            <Cell cellValue={GameStore.grid[3]} gridNumber={3}></Cell>
            <Cell cellValue={GameStore.grid[4]} gridNumber={4}></Cell>
            <Cell cellValue={GameStore.grid[5]} gridNumber={5}></Cell>
          </View>
          <View style={{flexDirection: 'row', backgroundColor: '#121212' }}>
            <Cell cellValue={GameStore.grid[6]} gridNumber={6}></Cell>
            <Cell cellValue={GameStore.grid[7]} gridNumber={7}></Cell>
            <Cell cellValue={GameStore.grid[8]} gridNumber={8}></Cell>
          </View>
        </View>
        <View style={{ flex: 0.2 }}>
          <TouchableOpacity
            style={{ backgroundColor: '#121212', height: 500, alignItems: 'center'}}
            onPress={GameStore.clearBoard}
          >
            <Text style={{
              fontSize: 40,
              textAlignVertical: 'center',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: '#621FF7'
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