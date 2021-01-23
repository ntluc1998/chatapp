import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomNavigator } from './BottomNavigator';
import { ContactScreen } from '@screens';
import { CustomHeader } from '@components';
const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Root"
        component={BottomNavigator}
      />
      <Stack.Screen
        options={{
          headerTitle: '',
          headerRight: () => <CustomHeader.Right />,
          headerLeft: () => <CustomHeader.Left />,
        }}
        name="Contact"
        component={ContactScreen}
      />
    </Stack.Navigator>
  );
};
