import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomNavigator} from './BottomNavigator';
const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        options={{headerShown: false}}
        name="Root"
        component={BottomNavigator}
      />
    </Stack.Navigator>
  );
};
