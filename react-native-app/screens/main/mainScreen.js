import React, { Component } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import { observe } from 'mobx'

@observe
class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View>
                    <TextInput
                        placeholder="Enter game code..."
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Button
                            title="Create Game"
                            onPress={() => this.props.navigation.navigate('Game')}
                        />
                    </View>
                    <View>
                        <Button
                            title="Join Game"
                            onPress={() => this.props.navigation.navigate('Game', { id: 'Test123' })}
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