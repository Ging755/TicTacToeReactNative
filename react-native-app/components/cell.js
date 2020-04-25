import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import GameStore from '../service/application/gameStore'
import { observer } from 'mobx-react'

@observer
export default class Cell extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={(value) => {GameStore.upDateGrid(this.props.gridNumber)}}>
        <View style={styles.container}>
          <Text style={styles.content}>{this.props.cellValue}</Text>
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