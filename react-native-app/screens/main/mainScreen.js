import React, { Component } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import { observer } from 'mobx-react'
import GameStore from '../../service/application/gameStore'

@observer
class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 1)' }}>
                <View style={{ backgroundColor: '#121212' }}>
                    <TextInput
                        style={{ color: 'rgba(255, 255, 255, 0.95)' }}
                        value={GameStore.gameCode}
                        onChangeText={(value) => GameStore.setGameCode(value)}
                        placeholder="Enter game code..."
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Button
                            color='#621FF7'
                            title="Create Game"
                            onPress={async () => {
                                await GameStore.createGame();
                                this.props.navigation.navigate('Game');
                            }}
                        />
                    </View>
                    <View>
                        <Button
                            color='#621FF7'
                            title="Join Game"
                            onPress={async () => {
                                await GameStore.joinGame();
                                this.props.navigation.navigate('Game', { id: 'Test123' })
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default Main;