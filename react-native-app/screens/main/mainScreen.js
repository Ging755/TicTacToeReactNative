import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import { observer } from 'mobx-react'

import GameStore from '../../service/application/gameStore';
import StyleStore from '../../service/application/styleStore';

@observer
class Main extends Component {
    render() {
        return (
            <View style={{ ...StyleStore.styles.primary, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ backgroundColor: '#121212' }}>
                    <TextInput
                        style={{ ...StyleStore.styles.primary }}
                        value={GameStore.gameCode}
                        onChangeText={(value) => GameStore.setGameCode(value)}
                        placeholder="Enter game code..."
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Button
                            color={StyleStore.secondary}
                            title="Create Game"
                            onPress={async () => {
                                await GameStore.createGame();
                                this.props.navigation.navigate('Game');
                            }}
                        />
                    </View>
                    <View>
                        <Button
                            color={StyleStore.secondary}
                            title="Join Game"
                            onPress={async () => {
                                await GameStore.joinGame();
                                this.props.navigation.navigate('Game')
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default Main;