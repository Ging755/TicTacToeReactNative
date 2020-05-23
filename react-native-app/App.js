import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Game from './screens/game/gameScreen';
import Main from './screens/main/mainScreen';
import Settings from './screens/main/settingsScreen';

import StyleStore from './service/application/styleStore';

const Stack = createStackNavigator();

import { observer } from 'mobx-react'

@observer
class NavStack extends Component {
    render() {
        return (
          <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: StyleStore.primary,
            },
            headerTintColor: StyleStore.primaryText,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Main"
            component={Main}
            options={({ navigation, route }) => ({
              title: 'Main',
              headerRight: () => (
                <TouchableOpacity
                style={{ ...StyleStore.styles.primaryButton, alignItems: 'center'}}
                onPress={() => navigation.navigate('Settings')}
              >
                <Text style={{
                  fontSize: 10,
                  textAlignVertical: 'center',
                  fontFamily: 'monospace',
                  fontWeight: 'bold',
                  ...StyleStore.styles.primaryButton
                }}>
                  Settings
                </Text>
              </TouchableOpacity>)
            })}
          />
          <Stack.Screen
            name="Game"
            component={Game}
            options={{ title: 'Game' }}
          />
          <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ title: 'Settings' }}>
          </Stack.Screen>
        </Stack.Navigator>
        );
    }
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}
