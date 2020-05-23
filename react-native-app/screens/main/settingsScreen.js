import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { observer } from 'mobx-react'

import StyleStore from '../../service/application/styleStore';

@observer
class Settings extends Component {
    render() {
        return (
            <View style={{ ...StyleStore.styles.primary, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ ...StyleStore.styles.primary }} >
                    Current Theme {StyleStore.theme}
                </Text>
                <Switch
                    trackColor={{ false: StyleStore.primary, true: StyleStore.secondary }}
                    thumbColor={StyleStore.primaryText}
                    onValueChange={StyleStore.toggleTheme}
                    value={StyleStore.theme === 'Dark'}
                />
            </View>
        );
    }
}

export default Settings;