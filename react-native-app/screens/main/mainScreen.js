import React, { Component } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import { observer } from 'mobx-react'
import GameStore from '../../service/application/gameStore'

@observer
class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View>
                    <TextInput
                        style={styles.inputContainer}
                        value={GameStore.gameCode}
                        onChangeText={(value) => GameStore.setGameCode(value)}
                        placeholder="Enter game code..."
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Button
                            title="Create Game"
                            onPress={async () => {
                                await GameStore.createGame();
                                this.props.navigation.navigate('Game');
                            }}
                        />
                    </View>
                    <View>
                        <Button
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

let styles = StyleSheet.create({
})

export default Main;