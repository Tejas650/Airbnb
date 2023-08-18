import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Home';
import SearchScreen from './src/screens/SearchScreen';
import ReserveScreen from './src/screens/ReserveScreen';
import ConfirmScreen from './src/screens/ConfirmScreen';
import FinalScreen from './src/screens/FinalScreen';

export default function () {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen
          name="Reserve"
          component={ReserveScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Confirm" component={ConfirmScreen} />

        <Stack.Screen
          name="Final"
          component={FinalScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
