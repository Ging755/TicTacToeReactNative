import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Game from './screens/game/gameScreen'
import Main from './screens/main/mainScreen'

import StyleStore from './service/application/styleStore';

const Stack = createStackNavigator();

function NavStack() {
  return (
     <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: StyleStore.primary,
          },
          headerTintColor: StyleStore.primaryText,
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="Main" 
        component={Main} 
        options={{ title: 'Main' }}
      />
      <Stack.Screen 
        name="Game" 
        component={Game} 
        options={{ title: 'Game' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}
