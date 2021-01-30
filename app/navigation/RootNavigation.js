import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomNavigator } from './BottomNavigator';
import { ContactScreen, MessageScreen } from '@screens';
import { CustomHeader } from '@components';
const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Message">
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
      <Stack.Screen
        options={{
          headerTitle: 'Message',
          headerRight: () => <CustomHeader.Right />,
          // headerLeft: () => <CustomHeader.Left />,
        }}
        name="Message"
        component={MessageScreen}
      />
    </Stack.Navigator>
  );
};
