import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import GameStore from '../service/application/gameStore'
import { observer } from 'mobx-react'

@observer
export default class Cell extends React.Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        width: 100,
        height: 100,
        borderWidth: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      content: {
        fontSize: 70,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: this.props.cellValue == "X" ? 'rgba(250, 0, 0, 1)' : 'rgba(0, 250, 0, 1)'
      }
    });

    return (
      <TouchableOpacity onPress={(value) => {GameStore.upDateGrid(this.props.gridNumber)}}>
        <View style={styles.container}>
          <Text style={styles.content}>{this.props.cellValue}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}